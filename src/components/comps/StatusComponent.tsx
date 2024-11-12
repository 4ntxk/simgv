import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Sword, Clock } from "lucide-react";
import QueueCountdownBadge from "./QueueCountdownBadge";

interface StatusComponentProps {
  matchedNickname: string | null;
}

const speckizjebow: { [key: string]: string[] } = {
  Garadal: ["Druid", "Balance"],
  Emosnotdead: ["Shaman", "Restoration"],
  Elenthar: ["Hunter", "Beast Mastery"],
  Goly: ["Shaman", "Restoration"],
  Synthian: ["Priest", "Holy"],
  Kicorwan: ["Hunter", "Marksmanship"],
  Azureclass: ["Mage", "Arcane"],
  Kekxoxo: ["Priest", "Holy"],
  Laedos: ["Warlock", "Destruction"],
  Gardarug: ["Warrior", "Arms"],
  Smoczymonke: ["Evoker", "Augmentation"],
  Khubi: ["Rogue", "Assassination"],
  Chleban: ["Warrior", "Fury"],
  Talax: ["Demon Hunter", "Havoc"],
};

export default function StatusComponent({
  matchedNickname,
}: StatusComponentProps) {
  const [characterClass, specialization] = speckizjebow[
    matchedNickname || ""
  ] || ["Unknown", "Unknown"];

  return (
    <Card className="bg-zinc-900 border-zinc-800 text-zinc-100">
      <CardHeader className="pb-3">
        <CardTitle className="text-lg font-medium flex items-center gap-2">
          <Sword className="h-5 w-5 text-orange-400" />
          SIMGV
        </CardTitle>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className="flex justify-between items-start">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="font-medium">
                {matchedNickname} - {characterClass} - {specialization}
              </span>
            </div>
            <p className="text-sm text-zinc-400">
              Scroll of Flight is your Flight Master for this flight! Your Orb
              of Energy will be ready shortly...
            </p>
            <div className="flex items-center gap-2 mt-2">
              <span className="text-sm text-whitetext font-bold">
                Job Status:
              </span>
              <span className="text-orangetext font-bold">In Queue</span>
              <QueueCountdownBadge matchedNickname={matchedNickname} />
            </div>
          </div>
          <div className="text-right space-y-1">
            <div className="flex items-center justify-end gap-1 text-sm text-zinc-400">
              <Clock className="h-4 w-4" />
              <span>Estimated wait time:</span>
            </div>
            <p className="text-sm text-emerald-400">
              Premium: Not yet available
            </p>
            <p className="text-sm text-zinc-400">
              Public: 2 minutes, 30 seconds
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
