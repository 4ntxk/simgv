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
  Azureclass: {
    specializations: {
      Arcane: "Arcane",
      Fire: "Fire",
      Frost: "Frost",
    },
    items: {
      Arcane: [
        {
          requirement: "Complete 1 Heroic, Mythic or Timewalking",
          itemName: "Burrower's Cinch",
          itemLevel: 623,
          completed: true,
          imageUrl:
            "https://www.raidbots.com/static/images/icons/36/inv_belt_cloth_earthendungeon_c_01.png",
          bonus: "4786:1658:10260",
          spec: 267,
          itemID: 221158,
        },
        {
          requirement: "Complete 4 Heroic, Mythic or Timewalking",
          itemName: "Intertwiner's Shadowcowl",
          itemLevel: 623,
          completed: true,
          imageUrl:
            "https://www.raidbots.com/static/images/icons/36/inv_helm_cloth_earthendungeon_c_01.png",
          bonus: "4786:1658:10260:8780",
          spec: 267,
          itemID: 221187,
        },
        {
          requirement: "Complete 8 Heroic, Mythic or Timewalking",
          itemName: "Jeweled Gauntlets of Violet Rebirth",
          itemLevel: 623,
          completed: true,
          imageUrl:
            "https://www.raidbots.com/static/images/icons/36/inv_glove_cloth_raidmagenerubian_d_01.png",
          bonus: "4786:1524:10260",
          spec: 267,
          itemID: 212093,
        },
      ],
      Fire: [
        {
          requirement: "Complete 1 Heroic, Mythic or Timewalking",
          itemName: "Ring of Dun Algaz",
          itemLevel: 623,
          completed: true,
          imageUrl:
            "https://www.raidbots.com/static/images/icons/36/inv_misc_kingsring2.png",
          bonus: "4786:10053:10260:41",
          spec: 267,
          itemID: 133287,
        },
        {
          requirement: "Complete 4 Heroic, Mythic or Timewalking",
          itemName: "Lakali's Spire of Knowledge",
          itemLevel: 623,
          completed: true,
          imageUrl:
            "https://www.raidbots.com/static/images/icons/36/inv_staff_2h_oribosdungeon_c_01.png",
          bonus: "4786:9932:10260",
          spec: 267,
          itemID: 178714,
        },
        {
          requirement: "Complete 8 Heroic, Mythic or Timewalking",
          itemName: "Reanimator's Mantle",
          itemLevel: 623,
          completed: true,
          imageUrl:
            "https://www.raidbots.com/static/images/icons/36/inv_shoulder_cloth_oribosdungeon_c_01.png",
          bonus: "4786:9932:10260",
          spec: 267,
          itemID: 178740,
        },
      ],
      Frost: [
        {
          requirement: "Complete 1 Heroic, Mythic or Timewalking",
          itemName: "Membranous Slippers",
          itemLevel: 623,
          completed: true,
          imageUrl:
            "https://www.raidbots.com/static/images/icons/36/inv_boot_cloth_earthendungeon_c_01.png",
          bonus: "4786:1658:10260",
          spec: 267,
          itemID: 221154,
        },
        {
          requirement: "Complete 4 Heroic, Mythic or Timewalking",
          itemName: "High Speaker's Accretion",
          itemLevel: 623,
          completed: true,
          imageUrl:
            "https://www.raidbots.com/static/images/icons/36/inv_magic_swirl_color3.png",
          bonus: "4786:1658:10260",
          spec: 267,
          itemID: 219303,
        },
        {
          requirement: "Complete 8 Heroic, Mythic or Timewalking",
          itemName: "Runecoat of Violet Rebirth",
          itemLevel: 623,
          completed: true,
          imageUrl:
            "https://www.raidbots.com/static/images/icons/36/inv_chest_cloth_raidmagenerubian_d_01.png",
          bonus: "4786:1524:10260",
          spec: 267,
          itemID: 212095,
        },
      ],
    },
  },
  Laedos: {
    specializations: {
      Destruction: "Destruction",
      Demonology: "Demonology",
      Affliction: "Affliction",
    },
    items: {
      Destruction: [
        {
          requirement: "Complete 1 Heroic, Mythic or Timewalking",
          itemName: "Hexflame Coven's All-Seeing Eye",
          itemLevel: 623,
          completed: true,
          imageUrl:
            "https://www.raidbots.com/static/images/icons/36/inv_cloth_raidwarlocknerubian_d_01_helm.png",
          bonus: "4786:1524:10260",
          spec: 267,
          itemID: 212074,
        },
        {
          requirement: "Complete 4 Heroic, Mythic or Timewalking",
          itemName: "Cirral Concoctory",
          itemLevel: 623,
          completed: true,
          imageUrl:
            "https://www.raidbots.com/static/images/icons/36/inv_11_0_dungeon_tentaclevial_red.png",
          bonus: "4786:1658:10260",
          spec: 267,
          itemID: 219321,
        },
        {
          requirement: "Complete 8 Heroic, Mythic or Timewalking",
          itemName: "Experiment 08752's Band",
          itemLevel: 623,
          completed: true,
          imageUrl:
            "https://www.raidbots.com/static/images/icons/36/inv_11_0_nerubian_ring_01_color5.png",
          bonus: "4786:1658:10260",
          spec: 267,
          itemID: 221189,
        },
      ],
      Demonology: [
        {
          requirement: "Complete 1 Heroic, Mythic or Timewalking",
          itemName: "E.D.N.A. Stabilizers",
          itemLevel: 623,
          completed: true,
          imageUrl:
            "https://www.raidbots.com/static/images/icons/36/inv_pant_cloth_earthendungeon_c_01.png",
          bonus: "4786:1658:10260",
          spec: 267,
          itemID: 221076,
        },
        {
          requirement: "Complete 4 Heroic, Mythic or Timewalking",
          itemName: "Necropolis Lord's Shackles",
          itemLevel: 623,
          completed: true,
          imageUrl:
            "https://www.raidbots.com/static/images/icons/36/inv_bracer_cloth_oribosdungeon_c_01.png",
          bonus: "4786:9932:10260",
          spec: 267,
          itemID: 178782,
        },
        {
          requirement: "Complete 8 Heroic, Mythic or Timewalking",
          itemName: "Grasping Crown of the Deep",
          itemLevel: 623,
          completed: true,
          imageUrl:
            "https://www.raidbots.com/static/images/icons/36/inv_helm_cloth_kultirasdungeon_c_01.png",
          bonus: "4786:1658:10260:8780",
          spec: 267,
          itemID: 231818,
        },
      ],
      Affliction: [
        {
          requirement: "Complete 1 Heroic, Mythic or Timewalking",
          itemName: "Trailspinner Pendant",
          itemLevel: 623,
          completed: true,
          imageUrl:
            "https://www.raidbots.com/static/images/icons/36/inv_neck_ardenweald_01_silver.png",
          bonus: "4786:9932:10260",
          spec: 267,
          itemID: 178707,
        },
        {
          requirement: "Complete 4 Heroic, Mythic or Timewalking",
          itemName: "Satchel of Misbegotten Minions",
          itemLevel: 623,
          completed: true,
          imageUrl:
            "https://www.raidbots.com/static/images/icons/36/inv_misc_coinbag07.png",
          bonus: "4786:9932:10260:41",
          spec: 267,
          itemID: 178772,
        },
        {
          requirement: "Complete 8 Heroic, Mythic or Timewalking",
          itemName: "Staff of Siphoned Essences",
          itemLevel: 623,
          completed: true,
          imageUrl:
            "https://www.raidbots.com/static/images/icons/36/inv_stave_2h_cataclysm_c_02.png",
          bonus: "4786:10053:10260",
          spec: 267,
          itemID: 133303,
        },
      ],
    },
  },
  Gardarug: {
    specializations: {
      Arms: "Arms",
      Fury: "Fury",
      Protection: "Protection",
    },
    items: {
      Arms: [
        {
          requirement: "Complete 1 Heroic, Mythic or Timewalking",
          itemName: "Rimebinder's Runeblade",
          itemLevel: 623,
          completed: true,
          imageUrl:
            "https://www.raidbots.com/static/images/icons/36/inv_1h_oribosdungeon_c_01.png",
          bonus: "4786:9932:10260",
          spec: 267,
          itemID: 178780,
        },
        {
          requirement: "Complete 4 Heroic, Mythic or Timewalking",
          itemName: "Warsculptor's Cuisses",
          itemLevel: 623,
          completed: true,
          imageUrl:
            "https://www.raidbots.com/static/images/icons/36/inv_pant_plate_raidwarriornerubian_d_01.png",
          bonus: "4786:1658:10260",
          spec: 267,
          itemID: 211983,
        },
        {
          requirement: "Complete 8 Heroic, Mythic or Timewalking",
          itemName: "Crystal-Fissure Girdle",
          itemLevel: 623,
          completed: true,
          imageUrl:
            "https://www.raidbots.com/static/images/icons/36/inv_belt_plate_earthendungeon_c_01.png",
          bonus: "4786:1658:10260:8780",
          spec: 267,
          itemID: 221079,
        },
      ],
      Fury: [
        {
          requirement: "Complete 1 Heroic, Mythic or Timewalking",
          itemName: "Oppressive Orator's Larynx",
          itemLevel: 623,
          completed: true,
          imageUrl:
            "https://www.raidbots.com/static/images/icons/36/spell_shadow_shadowmend.png",
          bonus: "4786:1658:10260",
          spec: 267,
          itemID: 219318,
        },
        {
          requirement: "Complete 4 Heroic, Mythic or Timewalking",
          itemName: "Band of the Ancient Dredger",
          itemLevel: 623,
          completed: true,
          imageUrl:
            "https://www.raidbots.com/static/images/icons/36/inv_ring_80_05b.png",
          bonus: "4786:9932:10260",
          spec: 267,
          itemID: 159461,
        },
        {
          requirement: "Complete 8 Heroic, Mythic or Timewalking",
          itemName: "Flesh Connector's Epaulets",
          itemLevel: 623,
          completed: true,
          imageUrl:
            "https://www.raidbots.com/static/images/icons/36/inv_shoulder_plate_earthendungeon_c_01.png",
          bonus: "4786:1658:10260",
          spec: 267,
          itemID: 221185,
        },
      ],
      Protection: [
        {
          requirement: "Complete 1 Heroic, Mythic or Timewalking",
          itemName: "Ceaseless Swarmgland",
          itemLevel: 623,
          completed: true,
          imageUrl:
            "https://www.raidbots.com/static/images/icons/36/inv_misc_organmass_color2.png",
          bonus: "4786:9932:10260",
          spec: 267,
          itemID: 219316,
        },
        {
          requirement: "Complete 4 Heroic, Mythic or Timewalking",
          itemName: "Darkfrost Helmet",
          itemLevel: 623,
          completed: true,
          imageUrl:
            "https://www.raidbots.com/static/images/icons/36/inv_plate_oribosdungeon_c_01_helm.png",
          bonus: "4786:9932:10260:40",
          spec: 267,
          itemID: 178777,
        },
        {
          requirement: "Complete 8 Heroic, Mythic or Timewalking",
          itemName: "Wrathbark Greathelm",
          itemLevel: 623,
          completed: true,
          imageUrl:
            "https://www.raidbots.com/static/images/icons/36/inv_helm_drustmask_d_01.png",
          bonus: "4786:10053:10260",
          spec: 267,
          itemID: 178694,
        },
      ],
    },
  },
  Chleban: {
    specializations: {
      Arms: "Arms",
      Fury: "Fury",
      Protection: "Protection",
    },
    items: {
      Arms: [
        {
          requirement: "Complete 1 Heroic, Mythic or Timewalking",
          itemName: "Experimental Goresilk Chestguard",
          itemLevel: 623,
          completed: true,
          imageUrl:
            "https://www.raidbots.com/static/images/icons/36/inv_chest_plate_earthendungeon_c_01.png",
          bonus: "4786:1658:10260",
          spec: 267,
          itemID: 221161,
        },
        {
          requirement: "Complete 4 Heroic, Mythic or Timewalking",
          itemName: "Mark of Khardros",
          itemLevel: 623,
          completed: true,
          imageUrl:
            "https://www.raidbots.com/static/images/icons/36/inv_hammer_04.png",
          bonus: "4786:1658:10260",
          spec: 267,
          itemID: 133300,
        },
        {
          requirement: "Complete 8 Heroic, Mythic or Timewalking",
          itemName: "Surgical Heartstopper",
          itemLevel: 623,
          completed: true,
          imageUrl:
            "https://www.raidbots.com/static/images/icons/36/inv_polearm_2h_earthendungeon_c_03.png",
          bonus: "4786:1658:10260",
          spec: 267,
          itemID: 221184,
        },
      ],
      Fury: [
        {
          requirement: "Complete 1 Heroic, Mythic or Timewalking",
          itemName: "Elder's Hemolymphal Periapt",
          itemLevel: 623,
          completed: true,
          imageUrl:
            "https://www.raidbots.com/static/images/icons/36/inv_11_0_nerubian_necklace_01_color5.png",
          bonus: "4786:1658:10260:8780",
          spec: 267,
          itemID: 221181,
        },
        {
          requirement: "Complete 4 Heroic, Mythic or Timewalking",
          itemName: "Shipwrecker's Bludgeon",
          itemLevel: 623,
          completed: true,
          imageUrl:
            "https://www.raidbots.com/static/images/icons/36/inv_mace_1h_earthendungeon_c_01.png",
          bonus: "4786:1658:10260",
          spec: 267,
          itemID: 221145,
        },
        {
          requirement: "Complete 8 Heroic, Mythic or Timewalking",
          itemName: "Earthshape Pauldrons",
          itemLevel: 623,
          completed: true,
          imageUrl:
            "https://www.raidbots.com/static/images/icons/36/inv_shoulder_plate_dungeonplate_c_03.png",
          bonus: "4786:1658:10260:40",
          spec: 267,
          itemID: 133294,
        },
      ],
      Protection: [
        {
          requirement: "Complete 1 Heroic, Mythic or Timewalking",
          itemName: "Warsculptor's Barbute",
          itemLevel: 623,
          completed: true,
          imageUrl:
            "https://www.raidbots.com/static/images/icons/36/inv_helm_plate_raidwarriornerubian_d_01.png",
          bonus: "4786:9932:10260",
          spec: 267,
          itemID: 211984,
        },
        {
          requirement: "Complete 4 Heroic, Mythic or Timewalking",
          itemName: "Gormshell Greaves",
          itemLevel: 623,
          completed: true,
          imageUrl:
            "https://www.raidbots.com/static/images/icons/36/inv_plate_oribosdungeon_c_01_pants.png",
          bonus: "4786:9932:10260:42",
          spec: 267,
          itemID: 178701,
        },
        {
          requirement: "Complete 8 Heroic, Mythic or Timewalking",
          itemName: "Acidslough Bulwark",
          itemLevel: 623,
          completed: true,
          imageUrl:
            "https://www.raidbots.com/static/images/icons/36/inv_shield_1h_oribosdungeon_c_01.png",
          bonus: "4786:10053:10260",
          spec: 267,
          itemID: 178712,
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
