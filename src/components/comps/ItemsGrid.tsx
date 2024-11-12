import { Card } from "@/components/ui/card";
import { Check } from "lucide-react";

interface ItemsGridProps {
  matchedNickname: string;
}

interface RewardItem {
  requirement: string;
  itemName: string;
  itemLevel: number;
  completed: boolean;
  imageUrl: string;
  bonus: number;
  spec: number;
  itemID: number;
}

interface SpecializationItems {
  [key: string]: RewardItem[];
}

const rewardSets: {
  [key: string]: {
    specializations: { [key: string]: string };
    items: SpecializationItems;
  };
} = {
  Garadal: {
    specializations: {
      Balance: "Balance",
      Guardian: "Guardian",
      Restoration: "Restoration",
      Feral: "Feral",
    },
    items: {
      Balance: [
        {
          requirement: "Complete 1 Heroic, Mythic or Timewalking",
          itemName: "Elemental Fury Boots",
          itemLevel: 616,
          completed: true,
          imageUrl:
            "https://www.raidbots.com/static/images/icons/36/inv_shoulder_leather_raiddruidnerubian_d_01.png",
          bonus: 1524,
          spec: 267,
          itemID: 212054,
        },
        {
          requirement: "Complete 1 Heroic, Mythic or Timewalking",
          itemName: "Elemental Fury Boots",
          itemLevel: 616,
          completed: true,
          imageUrl:
            "https://www.raidbots.com/static/images/icons/36/inv_shoulder_leather_raiddruidnerubian_d_01.png",
          bonus: 1524,
          spec: 267,
          itemID: 212054,
        },
        {
          requirement: "Complete 1 Heroic, Mythic or Timewalking",
          itemName: "Elemental Fury Boots",
          itemLevel: 616,
          completed: true,
          imageUrl:
            "https://www.raidbots.com/static/images/icons/36/inv_shoulder_leather_raiddruidnerubian_d_01.png",
          bonus: 1524,
          spec: 267,
          itemID: 212054,
        },
      ],
      Guardian: [
        {
          requirement: "Complete 1 Heroic, Mythic or Timewalking",
          itemName: "Elemental Fury Boots",
          itemLevel: 616,
          completed: true,
          imageUrl:
            "https://www.raidbots.com/static/images/icons/36/inv_shoulder_leather_raiddruidnerubian_d_01.png",
          bonus: 1524,
          spec: 267,
          itemID: 212054,
        },
        {
          requirement: "Complete 1 Heroic, Mythic or Timewalking",
          itemName: "Elemental Fury Boots",
          itemLevel: 616,
          completed: true,
          imageUrl:
            "https://www.raidbots.com/static/images/icons/36/inv_shoulder_leather_raiddruidnerubian_d_01.png",
          bonus: 1524,
          spec: 267,
          itemID: 212054,
        },
        {
          requirement: "Complete 1 Heroic, Mythic or Timewalking",
          itemName: "Elemental Fury Boots",
          itemLevel: 616,
          completed: true,
          imageUrl:
            "https://www.raidbots.com/static/images/icons/36/inv_shoulder_leather_raiddruidnerubian_d_01.png",
          bonus: 1524,
          spec: 267,
          itemID: 212054,
        },
      ],
      Restoration: [
        {
          requirement: "Complete 1 Heroic, Mythic or Timewalking",
          itemName: "Elemental Fury Boots",
          itemLevel: 616,
          completed: true,
          imageUrl:
            "https://www.raidbots.com/static/images/icons/36/inv_shoulder_leather_raiddruidnerubian_d_01.png",
          bonus: 1524,
          spec: 267,
          itemID: 212054,
        },
        {
          requirement: "Complete 1 Heroic, Mythic or Timewalking",
          itemName: "Elemental Fury Boots",
          itemLevel: 616,
          completed: true,
          imageUrl:
            "https://www.raidbots.com/static/images/icons/36/inv_shoulder_leather_raiddruidnerubian_d_01.png",
          bonus: 1524,
          spec: 267,
          itemID: 212054,
        },
        {
          requirement: "Complete 1 Heroic, Mythic or Timewalking",
          itemName: "Elemental Fury Boots",
          itemLevel: 616,
          completed: true,
          imageUrl:
            "https://www.raidbots.com/static/images/icons/36/inv_shoulder_leather_raiddruidnerubian_d_01.png",
          bonus: 1524,
          spec: 267,
          itemID: 212054,
        },
      ],
      Feral: [
        {
          requirement: "Complete 1 Heroic, Mythic or Timewalking",
          itemName: "Elemental Fury Boots",
          itemLevel: 616,
          completed: true,
          imageUrl:
            "https://www.raidbots.com/static/images/icons/36/inv_shoulder_leather_raiddruidnerubian_d_01.png",
          bonus: 1524,
          spec: 267,
          itemID: 212054,
        },
        {
          requirement: "Complete 1 Heroic, Mythic or Timewalking",
          itemName: "Elemental Fury Boots",
          itemLevel: 616,
          completed: true,
          imageUrl:
            "https://www.raidbots.com/static/images/icons/36/inv_shoulder_leather_raiddruidnerubian_d_01.png",
          bonus: 1524,
          spec: 267,
          itemID: 212054,
        },
        {
          requirement: "Complete 1 Heroic, Mythic or Timewalking",
          itemName: "Elemental Fury Boots",
          itemLevel: 616,
          completed: true,
          imageUrl:
            "https://www.raidbots.com/static/images/icons/36/inv_shoulder_leather_raiddruidnerubian_d_01.png",
          bonus: 1524,
          spec: 267,
          itemID: 212054,
        },
      ],
    },
  },
};

export default function ItemsGrid({ matchedNickname }: ItemsGridProps) {
  const { specializations, items } = rewardSets[matchedNickname] || {
    specializations: {},
    items: {},
  };

  return (
    <div className="p-4">
      {Object.entries(specializations).map(
        ([specializationKey, specializationName]) => (
          <div className="mb-6" key={specializationKey}>
            <h2 className="text-2xl font-bold text-white">
              {specializationName}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {items[specializationKey]?.map((reward, index) => (
                <Card
                  key={index}
                  className="relative bg-zinc-900/90 border-2 border-amber-900/50 rounded-lg overflow-hidden"
                >
                  <div className="absolute top-2 left-2 flex items-center gap-1.5">
                    <div className="bg-green-500/20 rounded-full p-1">
                      <Check className="w-4 h-4 text-green-500" />
                    </div>
                    <span className="text-green-500 text-xs">
                      {reward.requirement}
                    </span>
                  </div>

                  <div className="pt-12 p-4 flex items-center gap-3">
                    <a
                      href={`https://www.wowhead.com/item=${reward.itemID}?bonus=${reward.bonus}&ilvl=${reward.itemLevel}&spec=${reward.spec}`}
                      target="_blank"
                      rel="noopener"
                      data-wowhead={`bonus=${reward.bonus}&ilvl=${reward.itemLevel}&spec=${reward.spec}`}
                      style={{
                        display: "block",
                        width: "36px",
                        height: "36px",
                      }}
                    >
                      <img
                        src={reward.imageUrl}
                        alt={reward.itemName}
                        className="w-full h-full object-cover"
                        style={{
                          width: "36px",
                          height: "36px",
                          border: "2px dotted rgb(163, 53, 238)",
                        }}
                      />
                    </a>

                    <div className="flex flex-col">
                      <span className="text-zinc-100 font-medium">
                        {reward.itemName}
                      </span>
                      <span className="text-emerald-500 text-sm">
                        Item Level {reward.itemLevel}
                      </span>
                    </div>
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-900/0 via-amber-600/50 to-amber-900/0" />
                </Card>
              ))}
            </div>
          </div>
        )
      )}
    </div>
  );
}
