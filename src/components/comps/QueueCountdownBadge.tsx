"use client";

import { useEffect, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";

interface QueueCountdownBadgeProps {
  matchedNickname: string | null;
}

export default function QueueCountdownBadge({
  matchedNickname,
}: QueueCountdownBadgeProps) {
  const [queuePosition, setQueuePosition] = useState(99);
  const totalInQueue = 101;
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setQueuePosition((prevPosition) => {
        if (prevPosition > 1) {
          const decrease = Math.floor(Math.random() * 10) + 1;
          return Math.max(prevPosition - decrease, 1);
        } else if (prevPosition === 1) {
          navigate("/report/a7F9j2K0zPq5L1uR3T8wX", {
            state: { matchedNickname },
          });
        }
        return prevPosition;
      });
    }, 2000);

    return () => clearInterval(interval);
  }, [navigate]);

  return (
    <Badge
      variant="secondary"
      className="bg-orangetext text-blacktext rounded-xl"
    >
      {queuePosition} <span className="mr-0.5"></span> /{" "}
      <span className="ml-0.5"></span> {totalInQueue}
    </Badge>
  );
}
