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
  bonus: string;
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
          itemName: "Harvester's Edict",
          itemLevel: 623,
          completed: true,
          imageUrl:
            "https://www.raidbots.com/static/images/icons/36/inv_11_0_dungeon_oldgodstatuepiece_purple.png",
          bonus: "7981:11143:5878:10260",
          spec: 267,
          itemID: 219317,
        },
        {
          requirement: "Complete 4 Heroic, Mythic or Timewalking",
          itemName: "Wardbreaker of the Fractured",
          itemLevel: 623,
          completed: true,
          imageUrl:
            "https://www.raidbots.com/static/images/icons/36/inv_mace_2h_earthendungeon_c_02.png",
          bonus: "4786:1658:10260",
          spec: 267,
          itemID: 221083,
        },
        {
          requirement: "Complete 8 Heroic, Mythic or Timewalking",
          itemName: "Shadow Congregant's Belt",
          itemLevel: 623,
          completed: true,
          imageUrl:
            "https://www.raidbots.com/static/images/icons/36/inv_leather_earthendungeon_c_01_belt.png",
          bonus: "4786:1658:10260",
          spec: 267,
          itemID: 221134,
        },
      ],
      Guardian: [
        {
          requirement: "Complete 1 Heroic, Mythic or Timewalking",
          itemName: "Umbriss Band",
          itemLevel: 623,
          completed: true,
          imageUrl:
            "https://cdn.raiderio.net/images/wow/icons/large/inv_misc_stonering2.jpg",
          bonus: "10390:40:10260",
          spec: 267,
          itemID: 133286,
        },
        {
          requirement: "Complete 4 Heroic, Mythic or Timewalking",
          itemName: "Viscera-Lathered Coat",
          itemLevel: 623,
          completed: true,
          imageUrl:
            "https://www.raidbots.com/static/images/icons/36/inv_leather_earthendungeon_c_01_chest.png",
          bonus: "4786:1658:10260",
          spec: 267,
          itemID: 221188,
        },
        {
          requirement: "Complete 8 Heroic, Mythic or Timewalking",
          itemName: "Leggings of Great Lynx",
          itemLevel: 623,
          completed: true,
          imageUrl:
            "https://cdn.raiderio.net/images/wow/icons/large/inv_pant_leather_raiddruidnerubian_d_01.jpg",
          bonus: "10370:10390:6652:10260:1540:10255:41",
          spec: 267,
          itemID: 212055,
        },
      ],
      Restoration: [
        {
          requirement: "Complete 1 Heroic, Mythic or Timewalking",
          itemName: "Shadowchill Amice",
          itemLevel: 623,
          completed: true,
          imageUrl:
            "https://www.raidbots.com/static/images/icons/36/inv_leather_earthendungeon_c_01_shoulder.png",
          bonus: "4786:1658:10260",
          spec: 267,
          itemID: 221175,
        },
        {
          requirement: "Complete 4 Heroic, Mythic or Timewalking",
          itemName: "Corrupted Eggshell",
          itemLevel: 623,
          completed: true,
          imageUrl:
            "https://www.raidbots.com/static/images/icons/36/inv_misc_cat_trinket09.png",
          bonus: "657:11143:5878:7981:10260",
          spec: 267,
          itemID: 133305,
        },
        {
          requirement: "Complete 8 Heroic, Mythic or Timewalking",
          itemName: '"Emergency Stop" Keychain',
          itemLevel: 623,
          completed: true,
          imageUrl:
            "https://cdn.raiderio.net/images/wow/icons/large/inv_11_0_earthen_earthennecklace01_color1.jpg",
          bonus: "4786:1658:10260:8780",
          spec: 267,
          itemID: 221077,
        },
      ],
      Feral: [
        {
          requirement: "Complete 1 Heroic, Mythic or Timewalking",
          itemName: "Hide of Great Lynx",
          itemLevel: 623,
          completed: true,
          imageUrl:
            "https://cdn.raiderio.net/images/wow/icons/large/inv_chest_leather_raiddruidnerubian_d_01.jpg",
          bonus: "10373:6652:10260:40",
          spec: 267,
          itemID: 212059,
        },
        {
          requirement: "Complete 4 Heroic, Mythic or Timewalking",
          itemName: "Mistcaller Ocarina",
          itemLevel: 623,
          completed: true,
          imageUrl:
            "https://www.raidbots.com/static/images/icons/36/inv_misc_primitive_toy03.png",
          bonus: "9932:10260:10376",
          spec: 267,
          itemID: 178715,
        },
        {
          requirement: "Complete 8 Heroic, Mythic or Timewalking",
          itemName: "Bands of the Undergrowth",
          itemLevel: 623,
          completed: true,
          imageUrl:
            "https://www.raidbots.com/static/images/icons/36/inv_bracer_leather_oribosdungeon_c_01.png",
          bonus: "4786:9932:10260",
          spec: 267,
          itemID: 178702,
        },
      ],
    },
  },
  Elenthar: {
    specializations: {
      BeastMastery: "Beast Mastery",
      Marksmanship: "Marksmanship",
      Survival: "Survival",
    },
    items: {
      BeastMastery: [
        {
          requirement: "Complete 1 Heroic, Mythic or Timewalking",
          itemName: "Augmented Refractor Cannon",
          itemLevel: 623,
          completed: true,
          imageUrl:
            "https://www.raidbots.com/static/images/icons/36/inv_firearm_2h_earthendungeon_c_01.png",
          bonus: "4786:1658:10260",
          spec: 267,
          itemID: 221074,
        },
        {
          requirement: "Complete 4 Heroic, Mythic or Timewalking",
          itemName: "Lightless Scavenger's Stalkings",
          itemLevel: 623,
          completed: true,
          imageUrl:
            "https://cdn.raiderio.net/images/wow/icons/large/inv_mail_raidhunternerubian_d_01_pant.jpg",
          bonus: "6652:10355:8094:10370:10256:1527:10260",
          spec: 267,
          itemID: 212019,
        },
        {
          requirement: "Complete 8 Heroic, Mythic or Timewalking",
          itemName: "Twin Fang Instruments",
          itemLevel: 623,
          completed: true,
          imageUrl:
            "https://www.raidbots.com/static/images/icons/36/inv_11_0_dungeon_fancybox_purple.png",
          bonus: "1658:10260:10376:41",
          spec: 267,
          itemID: 219319,
        },
      ],
      Marksmanship: [
        {
          requirement: "Complete 1 Heroic, Mythic or Timewalking",
          itemName: "Silksteel Striders",
          itemLevel: 623,
          completed: true,
          imageUrl:
            "https://www.raidbots.com/static/images/icons/36/inv_boot_mail_earthendungeon_c_01.png",
          bonus: "4786:1658:10260",
          spec: 267,
          itemID: 221152,
        },
        {
          requirement: "Complete 4 Heroic, Mythic or Timewalking",
          itemName: "Entwined Chimeric Legguards",
          itemLevel: 623,
          completed: true,
          imageUrl:
            "https://www.raidbots.com/static/images/icons/36/inv_pant_mail_earthendungeon_c_01.png",
          bonus: "4786:1658:10260:40",
          spec: 267,
          itemID: 221186,
        },
        {
          requirement: "Complete 8 Heroic, Mythic or Timewalking",
          itemName: "Ritual Commander's Ring",
          itemLevel: 623,
          completed: true,
          imageUrl:
            "https://www.raidbots.com/static/images/icons/36/inv_ring_revendreth_01_brown.png",
          bonus: "4786:9932:10260:8780",
          spec: 267,
          itemID: 178781,
        },
      ],
      Survival: [
        {
          requirement: "Complete 1 Heroic, Mythic or Timewalking",
          itemName: "Skardyn's Grace",
          itemLevel: 623,
          completed: true,
          imageUrl:
            "https://cdn.raiderio.net/images/wow/icons/large/inv_misc_coin_08.jpg",
          bonus: "10390:42:10383:10299:11342:10260",
          spec: 267,
          itemID: 133282,
        },
        {
          requirement: "Complete 4 Heroic, Mythic or Timewalking",
          itemName: "Harvester's Interdiction",
          itemLevel: 623,
          completed: true,
          imageUrl:
            "https://www.raidbots.com/static/images/icons/36/inv_staff_2h_earthendungeon_c_02.png",
          bonus: "1658:10260:10376",
          spec: 267,
          itemID: 221159,
        },
        {
          requirement: "Complete 8 Heroic, Mythic or Timewalking",
          itemName: "Band of the Roving Scalawag",
          itemLevel: 623,
          completed: true,
          imageUrl:
            "https://cdn.raiderio.net/images/wow/icons/large/inv_ring_80_02a.jpg",
          bonus: "10390:6652:10383:10260",
          spec: 267,
          itemID: 162541,
        },
      ],
    },
  },
  Emosnotdead: {
    specializations: {
      Restoration: "Restoration",
      Elemental: "Elemental",
      Enhancement: "Enhancement",
    },
    items: {
      Restoration: [
        {
          requirement: "Complete 1 Heroic, Mythic or Timewalking",
          itemName: "Gale of Shadows",
          itemLevel: 623,
          completed: true,
          imageUrl:
            "https://www.raidbots.com/static/images/icons/36/spell_shadow_gathershadows.png",
          bonus: "10053:10260:10376",
          spec: 267,
          itemID: 133304,
        },
        {
          requirement: "Complete 4 Heroic, Mythic or Timewalking",
          itemName: "Noetic of the Forgotten Reservoir",
          itemLevel: 623,
          completed: true,
          imageUrl:
            "https://www.raidbots.com/static/images/icons/36/inv_helm_mail_raidshamannerubian_d_01.png",
          bonus: "1524:10260",
          spec: 267,
          itemID: 212011,
        },
        {
          requirement: "Complete 8 Heroic, Mythic or Timewalking",
          itemName: "Krix'vizk's Speech Rod Grips",
          itemLevel: 623,
          completed: true,
          imageUrl:
            "https://www.raidbots.com/static/images/icons/36/inv_staff_2h_earthendungeon_c_01.png",
          bonus: "4786:1658:10260",
          spec: 267,
          itemID: 221166,
        },
      ],
      Elemental: [
        {
          requirement: "Complete 1 Heroic, Mythic or Timewalking",
          itemName: "Corpseleecher Grips",
          itemLevel: 623,
          completed: true,
          imageUrl:
            "https://www.raidbots.com/static/images/icons/36/inv_glove_mail_earthendungeon_c_01.png",
          bonus: "4786:1658:10260",
          spec: 267,
          itemID: 221080,
        },
        {
          requirement: "Complete 4 Heroic, Mythic or Timewalking",
          itemName: "Overflowing Umbral Pail",
          itemLevel: 623,
          completed: true,
          imageUrl:
            "https://www.raidbots.com/static/images/icons/36/inv_offhand_1h_earthendungeon_c_01.png",
          bonus: "4786:1658:10260",
          spec: 267,
          itemID: 221132,
        },
        {
          requirement: "Complete 8 Heroic, Mythic or Timewalking",
          itemName: "Stitchflesh's Misplaced Signet",
          itemLevel: 623,
          completed: true,
          imageUrl:
            "https://www.raidbots.com/static/images/icons/36/inv_argus_ring02.png",
          bonus: "4786:9932:10260:41",
          spec: 267,
          itemID: 178736,
        },
      ],
      Enhancement: [
        {
          requirement: "Complete 1 Heroic, Mythic or Timewalking",
          itemName: "Swarmcaller's Shroud",
          itemLevel: 623,
          completed: true,
          imageUrl:
            "https://www.raidbots.com/static/images/icons/36/inv_cape_mail_earthendungeon_c_01.png",
          bonus: "1658:10260:10376:40",
          spec: 267,
          itemID: 221154,
        },
        {
          requirement: "Complete 4 Heroic, Mythic or Timewalking",
          itemName: "Bainbridge's Blackjack",
          itemLevel: 623,
          completed: true,
          imageUrl:
            "https://www.raidbots.com/static/images/icons/36/inv_mace_1h_battledungeon_c_02.png",
          bonus: "10031:10260:10376",
          spec: 267,
          itemID: 159648,
        },
        {
          requirement: "Complete 8 Heroic, Mythic or Timewalking",
          itemName: "Hook-Barbed Spaulders",
          itemLevel: 623,
          completed: true,
          imageUrl:
            "https://www.raidbots.com/static/images/icons/36/inv_shoulders_mail_kultirasdungeon_c_01.png",
          bonus: "4786:1658:10260:41",
          spec: 267,
          itemID: 231826,
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
