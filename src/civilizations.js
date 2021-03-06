import australia_icon from "./imgs/australia_icon.png";
import canada_icon from "./imgs/canada_icon.png";
import cree_icon from "./imgs/cree_icon.png";
import ethiopia_icon from "./imgs/ethiopia_icon.png";
import georgia_icon from "./imgs/georgia_icon.png";
import gran_colombia_icon from "./imgs/gran_colombia_icon.png";
import hungary_icon from "./imgs/hungary_icon.png";
import inca_icon from "./imgs/inca_icon.png";
import indonesia_icon from "./imgs/indonesia_icon.png";
import khmer_icon from "./imgs/khmer_icon.png";
import korea_icon from "./imgs/korea_icon.png";
import macedon_icon from "./imgs/macedon_icon.png";
import mali_icon from "./imgs/mali_icon.png";
import maori_icon from "./imgs/maori_icon.png";
import mapuche_icon from "./imgs/mapuche_icon.png";
import maya_icon from "./imgs/maya_icon.png";
import mongolia_icon from "./imgs/mongolia_icon.png";
import netherlands_icon from "./imgs/netherlands_icon.png";
import nubia_icon from "./imgs/nubia_icon.png";
import ottoman_icon from "./imgs/ottoman_icon.png";
import persia_icon from "./imgs/persia_icon.png";
import phoenicia_icon from "./imgs/phoenicia_icon.png";
import poland_icon from "./imgs/poland_icon.png";
import scotland_icon from "./imgs/scotland_icon.png";
import sweden_icon from "./imgs/sweden_icon.png";
import zulu_icon from "./imgs/zulu_icon.png";

export const civsList = {
  default: {
    name: "Unknown",
    nation: "Unknown",
    portrait:
      "https://gamepedia.cursecdn.com/civ6_gamepedia_en/0/01/Icon_leader_default.png?version=60586eb18418dd15b884826d2ca54529",
    flag:
      "https://gamepedia.cursecdn.com/civ6_gamepedia_en/0/08/Icon_civilization_unknown.png?version=6da503d1390c5bf8d50ccc63bff72102",
    wiki: "https://civilization.fandom.com/wiki/Leaders_(Civ6)",
    "leader-description": {},
    "civ-description": {},
    "dlc-modifiers": {},
    "dlc-status": "Vanilla",
  },

  america1: {
    name: "Teddy Roosevelt",
    nation: "America",
    portrait:
      "https://gamepedia.cursecdn.com/civ6_gamepedia_en/c/cf/Icon_leader_t_roosevelt.png?version=ca9fda69a2a90aa08e862eae3d81d97e",
    flag:
      "https://gamepedia.cursecdn.com/civ6_gamepedia_en/7/74/Icon_civilization_america.png?version=b912e6a6817a21c6d1e96263272b2b2e",
    wiki: "https://civilization.fandom.com/wiki/Teddy_Roosevelt_(Civ6)",
    "leader-description": {
      "Bonus - Roosevelt Corollary":
        "+5 Combat Strength for all units inside America's home continent. +1 Appeal to all tiles in a city with a National Park. Gain the Rough Rider unique unit with Rifling.",
      "Unique Unit 1": {
        description: "Rough Rider (Heavy Cavalry - Industrial Era)",
        image:
          "https://vignette.wikia.nocookie.net/civilization/images/0/05/Rough_Rider_%28Civ6%29.png/revision/latest/scale-to-width-down/44?cb=20161127185223",
      },
      "AI Agenda - Big Stick Policy":
        "Likes peaceful civilizations that have a city on his home continent. Dislikes civilizations starting wars on his continent.",
      "AI Religion": {
        description: "Protestanism",
        image:
          "https://vignette.wikia.nocookie.net/civilization/images/d/db/Protestantism_Icon_%28Civ6%29.png/revision/latest/scale-to-width-down/44?cb=20200322155028",
      },
    },
    "civ-description": {
      "Civ Ability - Founding Fathers":
        "Government legacy bonuses accumulate in half the usual number of turns.",
      "Unique Unit 2": {
        description:
          "P-51 Mustang (Air Fighter - Atomic Era) - Replaces Fighter",
        image:
          "https://vignette.wikia.nocookie.net/civilization/images/c/cd/P-51_Mustang_%28Civ6%29.png/revision/latest/scale-to-width-down/44?cb=20161127200803",
      },
      "Unique Building": {
        description: "Film Studio (Theater Square) - Replaces Broadcast Center",
        image:
          "https://vignette.wikia.nocookie.net/civilization/images/4/4c/Film_Studio_%28Civ6%29.png/revision/latest/scale-to-width-down/44?cb=20161027044828",
      },
    },
    "dlc-modifiers": {
      "R&F Civ Ability":
        "All Diplomatic policy slots in the current government are converted to Wildcard slots.",
      "GS Civ Ability":
        "All Diplomatic policy slots in the current government are converted to Wildcard slots. +1 Diplomatic Favor per turn for each Wildcard slot in the current government.",
    },
    "dlc-status": "Vanilla",
  },
  arabia1: {
    name: "Saladin",
    nation: "Arabia",
    portrait:
      "https://gamepedia.cursecdn.com/civ6_gamepedia_en/8/85/Icon_leader_saladin.png?version=377c538984c3a2a412329b0a78572d92",
    flag:
      "https://gamepedia.cursecdn.com/civ6_gamepedia_en/a/a0/Icon_civilization_arabia.png?version=738f73f3d1efeb13d1f73825a5dc45bb",
    wiki: "https://civilization.fandom.com/wiki/Saladin_(Civ6)",
    "leader-description": {
      "Bonus - Righteousness of the Faith":
        "The Worship building for Arabia's Religion is 90% cheaper to purchase with Faith. Arabian cities with that building gain +10% Science, Faith, and Culture.",
      "AI Agenda - Ayyubid Dynasty":
        "Wants his Worship building in as many cities as possible, and likes civilizations with it. Dislikes civilizations following other Religions or waging war on followers of his Religion.",
      "AI Religion": {
        description: "Islam",
        image:
          "https://vignette.wikia.nocookie.net/civilization/images/4/42/Islam_Icon_%28Civ6%29.png/revision/latest/scale-to-width-down/44?cb=20200322155027",
      },
    },
    "civ-description": {
      "Civ Ability - The Last Prophet":
        "Automatically receives the final Great Prophet when the next-to-last one is claimed (unless one has already been earned through other means). +1 Science per foreign city following Arabia's Religion.",
      "Unique Unit": {
        description: "Mamluk (Heavy Cavalry - Medieval Era) - Replaces Knight",
        image:
          "https://vignette.wikia.nocookie.net/civilization/images/f/fa/Mamluk_%28Civ6%29.png/revision/latest/scale-to-width-down/44?cb=20161107002813",
      },
      "Unique Building": {
        description: "Madrasa (Campus) - Replaces University",
        image:
          "https://vignette.wikia.nocookie.net/civilization/images/c/c7/Madrasa_%28Civ6%29.png/revision/latest/scale-to-width-down/44?cb=20161027044322",
      },
    },
    "dlc-modifiers": {},
    "dlc-status": "Vanilla",
  },
  aztec1: {
    name: "Montezuma",
    nation: "Aztec",
    portrait:
      "https://gamepedia.cursecdn.com/civ6_gamepedia_en/1/14/Icon_leader_montezuma.png?version=fc8149d0cff35ad10c72429171446c9d",
    flag:
      "https://gamepedia.cursecdn.com/civ6_gamepedia_en/8/8a/Icon_civilization_aztec.png?version=084289260ed86570adeb43a063b3036e",
    wiki: "https://civilization.fandom.com/wiki/Montezuma_(Civ6)",
    "leader-description": {
      "Bonus - Gifts for the Tlatoani":
        "Improved Luxury resources provide an Amenity to 2 extra cities. +1 Combat Strength for all units for each different improved Luxury resource in Aztec territory.",
      "AI Agenda - Tlatoani":
        "Likes civilizations who have the same Luxury resources as he does, and will try to collect every Luxury resource available. Dislikes those with Luxury resources he doesn't have.",
    },
    "civ-description": {
      "Civ Ability - Legend of the Five Suns":
        "Can spend Builder charges to complete 20% of a district's Production cost.",
      "Unique Unit": {
        description: "Eagle Warrior (Melee - Ancient Era) - Replaces Warrior",
        image:
          "https://vignette.wikia.nocookie.net/civilization/images/b/b1/Eagle_Warrior_%28Civ6%29.png/revision/latest/scale-to-width-down/44?cb=20161106185107",
      },
      "Unique Building": {
        description: "Tlachtli (Entertainment Complex) - Replaces Arena",
        image:
          "https://vignette.wikia.nocookie.net/civilization/images/6/61/Tlachtli_%28Civ6%29.png/revision/latest/scale-to-width-down/44?cb=20161027051819",
      },
    },
    "dlc-modifiers": {},
    "dlc-status": "Vanilla",
  },
  brazil1: {
    name: "Pedro II",
    nation: "Brazil",
    portrait:
      "https://gamepedia.cursecdn.com/civ6_gamepedia_en/4/44/Icon_leader_pedro.png?version=519bc2d4861aa47699e2194fe0d0e67a",
    flag:
      "https://gamepedia.cursecdn.com/civ6_gamepedia_en/e/eb/Icon_civilization_brazil.png?version=c4b9328c0c877e3831c37ad2d82d6131",
    wiki: "https://civilization.fandom.com/wiki/Pedro_II_(Civ6)",
    "leader-description": {
      "Bonus - Magnanimous":
        "Recruiting or patronizing a Great Person refunds 20% of their point cost.",
      "AI Agenda - Patron of the Arts":
        "Will recruit as many Great People as possible, and likes civilizations that do not compete for Great People. Dislikes civilizations who take Great People from him.",
      "AI Religion": {
        description: "Catholicism",
        image:
          "https://vignette.wikia.nocookie.net/civilization/images/b/b1/Catholicism_Icon_%28Civ6%29.png/revision/latest/scale-to-width-down/44?cb=20200322155025",
      },
    },
    "civ-description": {
      "Civ Ability - Amazon":
        "Rainforest tiles provide a +1 adjacency bonus for Campus, Commercial Hub, Holy Site, and Theater Square districts, and grant +1 Appeal to adjacent tiles, instead of the usual -1.",
      "Unique Unit": {
        description:
          "Minas Geraes (Naval Ranged - Industrial Era) - Replaces Battleship",
        image:
          "https://vignette.wikia.nocookie.net/civilization/images/a/a7/Minas_Geraes_%28Civ6%29.png/revision/latest/scale-to-width-down/44?cb=20161127195550",
      },
      "Unique District 1": {
        description: "Street Carnival - Replaces Entertainment Complex",
        image:
          "https://vignette.wikia.nocookie.net/civilization/images/5/5c/Street_Carnival_%28Civ6%29.png/revision/latest/scale-to-width-down/44?cb=20170701180027",
      },
    },
    "dlc-modifiers": {
      "R&F Unique District 2": {
        description: "Copacabana - Replaces Water Park",
        image:
          "https://vignette.wikia.nocookie.net/civilization/images/e/ed/Copacabana_%28Civ6%29.png/revision/latest/scale-to-width-down/44?cb=20180415213148",
      },
    },
    "dlc-status": "Vanilla",
  },
  china1: {
    name: "Qin Shi Huang",
    nation: "China",
    portrait:
      "https://gamepedia.cursecdn.com/civ6_gamepedia_en/b/b9/Icon_leader_qin.png?version=90fc44b19913b26da2328614a35ee104",
    flag:
      "https://gamepedia.cursecdn.com/civ6_gamepedia_en/d/db/Icon_civilization_china.png?version=bba31a343de70f28279f3a00e642cb20",
    wiki: "https://civilization.fandom.com/wiki/Qin_Shi_Huang_(Civ6)",
    "leader-description": {
      "Bonus - The First Emperor":
        "Builders receive an additional build charge. Can spend Builder charges to complete 15% of the Production cost for Ancient and Classical wonders.",
      "AI Agenda - Wall of 10,000 Li":
        "Builds wonders whenever possible, and likes civilizations that leave the wonders to him. Dislikes those with more wonders than him.",
      "AI Religion": {
        description: "Taoism",
        image:
          "https://vignette.wikia.nocookie.net/civilization/images/9/92/Taoism_Icon_%28Civ6%29.png/revision/latest/scale-to-width-down/44?cb=20200322155029",
      },
    },
    "civ-description": {
      "Civ Ability - Dynastic Cycle":
        "Eurekas and Inspirations provide an extra 10% of the Science and Culture cost for researching technologies and civics.",
      "Unique Unit": {
        description: "Crouching Tiger (Ranged - Medieval Era)",
        image:
          "https://vignette.wikia.nocookie.net/civilization/images/6/6a/Crouching_Tiger_%28Civ6%29.png/revision/latest/scale-to-width-down/44?cb=20161106201239",
      },
      "Unique Tile Improvement": {
        description: "Great Wall",
        image:
          "https://vignette.wikia.nocookie.net/civilization/images/6/65/Great_Wall_%28Civ6%29.png/revision/latest/scale-to-width-down/44?cb=20190815053618",
      },
    },
    "dlc-modifiers": {
      "GS Leader Bonus":
        "Builders receive an additional build charge. Can spend Builder charges to complete 15% of the Production cost for Ancient and Classical wonders. Unlocks Canals with Masonry instead of Steam Power.",
    },
    "dlc-status": "Vanilla",
  },
  egypt1: {
    name: "Cleopatra",
    nation: "Egypt",
    portrait:
      "https://gamepedia.cursecdn.com/civ6_gamepedia_en/8/87/Icon_leader_cleopatra.png?version=0b25664f5c318b6617524c100939e45a",
    flag:
      "https://gamepedia.cursecdn.com/civ6_gamepedia_en/8/82/Icon_civilization_egypt.png?version=69c0a7433cd6d1b1e81f3d17aa748e75",
    wiki: "https://civilization.fandom.com/wiki/Cleopatra_(Civ6)",
    "leader-description": {
      "Bonus - Mediterranean's Bride":
        "International Trade Routes grant +4 Gold. Trade Routes sent to Egypt from other civilizations provide +2 Food for them and +2 Gold for Egypt.",
      "AI Agenda - Queen of the Nile":
        "Likes civilizations with powerful militaries, and will try to ally with them to avoid conflict. Dislikes civilizations with weak militaries.",
    },
    "civ-description": {
      "Civ Ability - Iteru":
        "+15% Production towards districts and wonders built next to a river. Floodplains don't prevent placement of districts and wonders.",
      "Unique Unit": {
        description:
          "Maryannu Chariot Archer (Ranged - Ancient Era) - Replaces Heavy Chariot",
        image:
          "https://vignette.wikia.nocookie.net/civilization/images/e/e3/Maryannu_Chariot_Archer_%28Civ6%29.png/revision/latest/scale-to-width-down/44?cb=20161127211710",
      },
      "Unique Tile Improvement": {
        description: "Sphinx",
        image:
          "https://vignette.wikia.nocookie.net/civilization/images/f/f6/Sphinx_%28Civ6%29.png/revision/latest/scale-to-width-down/44?cb=20190815054133",
      },
    },
    "dlc-modifiers": {
      "R&F Leader Bonus":
        "International Trade Routes grant +4 Gold. Trade Routes sent to Egypt from other civilizations provide +2 Food for them and +2 Gold for Egypt. +100% Alliance Points from trading with allies.",
      "R&F Unique Unit": {
        description:
          "Maryannu Chariot Archer (Ranged Cavalry - Ancient Era) - Replaces Heavy Chariot",
        image:
          "https://vignette.wikia.nocookie.net/civilization/images/e/e3/Maryannu_Chariot_Archer_%28Civ6%29.png/revision/latest/scale-to-width-down/44?cb=20161127211710",
      },
      "GS Civ Ability":
        "+15% Production towards districts and wonders built next to a river. Districts, improvements and units are immune to damage from floods.",
      "GS Unique Unit": {
        description: "Maryannu Chariot Archer (Ranged Cavalry - Ancient Era)",
        image:
          "https://vignette.wikia.nocookie.net/civilization/images/e/e3/Maryannu_Chariot_Archer_%28Civ6%29.png/revision/latest/scale-to-width-down/44?cb=20161127211710",
      },
    },
    "dlc-status": "Vanilla",
  },
  england1: {
    name: "Victoria",
    nation: "England",
    portrait:
      "https://gamepedia.cursecdn.com/civ6_gamepedia_en/f/f0/Icon_leader_victoria.png?version=0bb1040e6b024dc0aa3a6d6e02b82049",
    wiki: "https://civilization.fandom.com/wiki/Victoria_(Civ6)",
    flag:
      "https://gamepedia.cursecdn.com/civ6_gamepedia_en/6/6e/Icon_civilization_england.png?version=0dc226ce4502d42bd7ee2827842ef6cc",
    "leader-description": {
      "Bonus - Pax Britannica":
        "Founding a city or building a Royal Navy Dockyard outside of England's home continent grants a free melee unit in that city. Gain the Redcoat unique unit with Military Science.",
      "Unique Unit 1": {
        description: "Redcoat (Melee - Industrial Era)",
        image:
          "https://vignette.wikia.nocookie.net/civilization/images/a/a2/Redcoat_%28Civ6%29.png/revision/latest/scale-to-width-down/44?cb=20161128033351",
      },
      "AI Agenda - Sun Never Sets":
        "Likes civilizations who have a city on her home continent, and will try to expand to all continents. Dislikes civilizations on continents where she has no cities.",
      "AI Religion": {
        description: "Protestantism",
        image:
          "https://vignette.wikia.nocookie.net/civilization/images/d/db/Protestantism_Icon_%28Civ6%29.png/revision/latest/scale-to-width-down/44?cb=20200322155028",
      },
    },
    "civ-description": {
      "Civ Ability - British Museum":
        "Each Archaeological Museum can hold six Artifacts instead of three and build two Archaeologists instead of one. Archaeological Museums are automatically themed when they have six Artifacts.",
      "Unique Unit 2": {
        description:
          "Sea Dog (Naval Raider - Renaissance Era) - Replaces Privateer",
        image:
          "https://vignette.wikia.nocookie.net/civilization/images/3/33/Sea_Dog_%28Civ6%29.png/revision/latest/scale-to-width-down/44?cb=20161127202842",
      },
      "Unique District": {
        description: "Royal Navy Dockyard - Replaces Harbor",
        image:
          "https://vignette.wikia.nocookie.net/civilization/images/5/5a/Royal_Navy_Dockyard_%28Civ6%29.png/revision/latest/scale-to-width-down/44?cb=20180220014247",
      },
    },
    "dlc-modifiers": {
      "GS Leader Bonus":
        "The first city founded on each continent other than England's home continent grants a free melee unit in that city and +1 Trade Route capacity. Building a Royal Navy Dockyard grants a free naval unit in that city. Gain the Redcoat unique unit with Military Science.",
      "GS Civ Ability - Workshop of the World (Replaces British Museum)":
        "Iron and Coal Mines accumulate +2 resources per turn. +100% Production towards Military Engineers. Military Engineers receive +2 charges. Buildings that provide additional yields when powered receive +4 of their respective yields. +20% Production towards Industrial Zone buildings. Harbor buildings grant +10 Strategic Resource stockpiles.",
    },
    "dlc-status": "Vanilla",
  },
  france1: {
    name: "Catherine de'Medici",
    nation: "France",
    portrait:
      "https://gamepedia.cursecdn.com/civ6_gamepedia_en/a/a5/Icon_leader_catherine_de_medici.png?version=ed623dbc4122b78cc0e5f4f38ce76d00",
    flag:
      "https://gamepedia.cursecdn.com/civ6_gamepedia_en/d/d8/Icon_civilization_france.png?version=b115e90d972f99f73883f4a60f0a494c",
    wiki: "https://civilization.fandom.com/wiki/Catherine_de_Medici_(Civ6)",
    "leader-description": {
      "Bonus - Catherine's Flying Squadron":
        "Has an extra level of Diplomatic Visibility with every civilization she's met. Receives a free Spy (and extra Spy capacity) with Castles. All Spies start with a free promotion.",
      "AI Agenda - Black Queen":
        "Gains as many Spies and as much Diplomatic Visibility as possible, and likes those who do the same. Dislikes civilizations that ignore these espionage activities.",
      "AI Religion": {
        description: "Catholicism",
        image:
          "https://vignette.wikia.nocookie.net/civilization/images/b/b1/Catholicism_Icon_%28Civ6%29.png/revision/latest/scale-to-width-down/44?cb=20200322155025",
      },
    },
    "civ-description": {
      "Civ Ability - Grand Tour":
        "+20% Production towards Medieval, Renaissance, and Industrial Wonders. Double Tourism from all Wonders.",
      "Unique Unit": {
        description: "Garde Impériale (Melee - Industrial Era)",
        image:
          "https://vignette.wikia.nocookie.net/civilization/images/7/74/Garde_Imp%C3%A9riale_%28Civ6%29.png/revision/latest/scale-to-width-down/44?cb=20161106211928",
      },
      "Unique Tile Improvement": {
        description: "Château",
        image:
          "https://vignette.wikia.nocookie.net/civilization/images/1/1f/Ch%C3%A2teau_%28Civ6%29.png/revision/latest/scale-to-width-down/44?cb=20161109234422",
      },
    },
    "dlc-modifiers": {},
    "dlc-status": "Vanilla",
  },
  germany1: {
    name: "Frederick Barbosa",
    nation: "Germany",
    portrait:
      "https://gamepedia.cursecdn.com/civ6_gamepedia_en/d/dd/Icon_leader_barbarossa.png?version=bbbc4b3bbcff0176310a7505c88bd392",
    flag:
      "https://gamepedia.cursecdn.com/civ6_gamepedia_en/6/68/Icon_civilization_germany.png?version=5bdbc7038665214a9847f601e3fe71aa",
    wiki: "https://civilization.fandom.com/wiki/Frederick_Barbarossa_(Civ6)",
    "leader-description": {
      "Bonus - Holy Roman Emperor":
        "Gain an additional Military policy slot in all Governments. +7 Combat Strength for all units when fighting city-states and their units.",
      "AI Agenda - Iron Crown":
        "Will try to conquer as many city-states as possible, and likes those who do not associate with them. Dislikes Suzerains of city-states, or civilizations that have conquered city-states.",
      "AI Religion": {
        description: "Catholicism",
        image:
          "https://vignette.wikia.nocookie.net/civilization/images/b/b1/Catholicism_Icon_%28Civ6%29.png/revision/latest/scale-to-width-down/44?cb=20200322155025",
      },
    },
    "civ-description": {
      "Civ Ability - Free Imperial Cities":
        "Each city can build one more district than the population limit would normally allow.",
      "Unique Unit": {
        description: "U-Boat (Naval Raider - Modern Era) - Replaces Submarine",
        image:
          "https://vignette.wikia.nocookie.net/civilization/images/6/6a/U-Boat_%28Civ6%29.png/revision/latest/scale-to-width-down/44?cb=20161121083536",
      },
      "Unique District": {
        description: "Hansa - Replaces Industrial Zone",
        image:
          "https://vignette.wikia.nocookie.net/civilization/images/b/b5/Hansa_%28Civ6%29.png/revision/latest/scale-to-width-down/44?cb=20180220014434",
      },
    },
    "dlc-modifiers": {},
    "dlc-status": "Vanilla",
  },
  greece1: {
    name: "Gorgo",
    nation: "Greece",
    portrait:
      "https://gamepedia.cursecdn.com/civ6_gamepedia_en/5/5a/Icon_leader_gorgo.png?version=4b61e0299440892aed188fc0c6cfab37",
    flag:
      "https://gamepedia.cursecdn.com/civ6_gamepedia_en/a/a3/Icon_civilization_greece_gorgo.png?version=509c3ebe52b7f0c5fee2334c9bd82ddd",
    wiki: "https://civilization.fandom.com/wiki/Gorgo_(Civ6)",
    "leader-description": {
      "Bonus - Thermopylae":
        "Killing a unit provides Culture equal to 50% of its Combat Strength.",
      "AI Agenda - With Your Shield Or On It":
        "Never gives up anything in a peace deal, and likes warmongers that match this approach. Dislikes those who have capitulated in a peace treaty or that have never gone to war.",
    },
    "civ-description": {
      "Civ Ability - Plato's Republic":
        "Gain an additional Wildcard policy slot in all Governments.",
      "Unique Unit": {
        description: "Hoplite (Anti-Cavalry - Ancient Era) - Replaces Spearman",
        image:
          "https://vignette.wikia.nocookie.net/civilization/images/2/2f/Hoplite_%28Civ6%29.png/revision/latest/scale-to-width-down/44?cb=20161106215315",
      },
      "Unique District": {
        description: "Acropolis - Replaces Theater Square",
        image:
          "https://vignette.wikia.nocookie.net/civilization/images/e/e3/Acropolis_%28Civ6%29.png/revision/latest/scale-to-width-down/44?cb=20161022014318",
      },
    },
    "dlc-modifiers": {
      "GS AI Agenda":
        "Grievances against this leader decay at twice the usual rate.",
    },
    "dlc-status": "Vanilla",
  },
  greece2: {
    name: "Pericles",
    nation: "Greece",
    portrait:
      "https://gamepedia.cursecdn.com/civ6_gamepedia_en/9/90/Icon_leader_pericles.png?version=3aea5d970cc08858311cb88c4806d030",
    flag:
      "https://gamepedia.cursecdn.com/civ6_gamepedia_en/9/97/Icon_civilization_greece.png?version=c24fdf458ec7090220d78b0b58508fd1",
    wiki: "https://civilization.fandom.com/wiki/Pericles_(Civ6)",
    "leader-description": {
      "Bonus - Surrounded by Glory":
        "+5% Culture per city-state Greece has Suzerainty over.",
      "AI Agenda - Delian League":
        "Likes civilizations that don't compete for city-state allegiance. Dislikes civilizations that are directly competing for city-state allegiance.",
    },
    "civ-description": {
      "Civ Ability - Plato's Republic":
        "Gain an additional Wildcard policy slot in all Governments.",
      "Unique Unit": {
        description: "Hoplite (Anti-Cavalry - Ancient Era) - Replaces Spearman",
        image:
          "https://vignette.wikia.nocookie.net/civilization/images/2/2f/Hoplite_%28Civ6%29.png/revision/latest/scale-to-width-down/44?cb=20161106215315",
      },
      "Unique District": {
        description: "Acropolis - Replaces Theater Square",
        image:
          "https://vignette.wikia.nocookie.net/civilization/images/e/e3/Acropolis_%28Civ6%29.png/revision/latest/scale-to-width-down/44?cb=20161022014318",
      },
    },
    "dlc-modifiers": {},
    "dlc-status": "Vanilla",
  },
  india1: {
    name: "Gandhi",
    nation: "India",
    portrait:
      "https://gamepedia.cursecdn.com/civ6_gamepedia_en/1/18/Icon_leader_gandhi.png?version=6d718852e5ae633f4804b847075396c1",
    flag:
      "https://gamepedia.cursecdn.com/civ6_gamepedia_en/2/20/Icon_civilization_india.png?version=1d92aa329dd122aa775eb22f73f5ab8d",
    wiki: "https://civilization.fandom.com/wiki/Gandhi_(Civ6)",
    "leader-description": {
      "Bonus - Satyagraha":
        "+5 Faith for each met civilization (including India) that has founded a Religion and is not at war. Enemies receive double war weariness from fighting against Gandhi.",
      "AI Agenda - Peacekeeper":
        "Never declares wars for which he can be branded a warmonger, and likes peaceful civilizations. Heavily dislikes warmongers.",
      "AI Religion": {
        description: "Hinduism",
        image:
          "https://vignette.wikia.nocookie.net/civilization/images/4/4f/Hinduism_Icon_%28Civ6%29.png/revision/latest/scale-to-width-down/44?cb=20200322155026",
      },
    },
    "civ-description": {
      "Civ Ability - Dharma":
        "Indian cities receive the Follower Beliefs of all religions with at least one follower in them, not just the majority religion.",
      "Unique Unit": {
        description: "Varu (Heavy Cavalry - Classical Era) - Replaces Horseman",
        image:
          "https://vignette.wikia.nocookie.net/civilization/images/3/39/Varu_%28Civ6%29.png/revision/latest/scale-to-width-down/44?cb=20161127203659",
      },
      "Unique Tile Improvement": {
        description: "Stepwell",
        image:
          "https://vignette.wikia.nocookie.net/civilization/images/9/9e/Stepwell_%28Civ6%29.png/revision/latest/scale-to-width-down/44?cb=20190812200601",
      },
    },
    "dlc-modifiers": {
      "GS Civ Ability":
        "Indian cities receive the Follower Beliefs of all religions with at least one follower in them, not just the majority religion, and gain +1 Amenity for each religion with at least one follower in them. +2 Spread Religion charges for Missionaries. +100% Religious pressure from Indian Trade Routes.",
    },
    "dlc-status": "Vanilla",
  },
  japan1: {
    name: "Hojo Tokimune",
    nation: "Japan",
    portrait:
      "https://gamepedia.cursecdn.com/civ6_gamepedia_en/d/d4/Icon_leader_hojo.png?version=fa308b54957e9ee6a8ac8187943bd41c",
    flag:
      "https://gamepedia.cursecdn.com/civ6_gamepedia_en/f/fe/Icon_civilization_japan.png?version=795e1937632cb021c8ddfc07571c7822",
    wiki: "https://civilization.fandom.com/wiki/Hojo_Tokimune_(Civ6)",
    "leader-description": {
      "Bonus - Divine Wind":
        "+5 Combat Strength for land units in Coastal tiles and naval units in Coast tiles. +100% Production towards Encampment, Holy Site and Theater Square districts.",
      "AI Agenda - Bushido":
        "Likes civilizations that have both a strong military and strong Faith or Culture outputs. Dislikes civilizations that are strong in military but weak in Faith or Culture.",
      "AI Religion": {
        description: "Buddhism",
        image:
          "https://vignette.wikia.nocookie.net/civilization/images/0/01/Buddhism_Icon_%28Civ6%29.png/revision/latest/scale-to-width-down/44?cb=20200322155024",
      },
    },
    "civ-description": {
      "Civ Ability - Meiji Restoration":
        "Districts receive a +1 adjacency bonus for each adjacent district, instead of +0.5.",
      "Unique Unit": {
        description: "Samurai (Melee - Medieval Era)",
        image:
          "https://vignette.wikia.nocookie.net/civilization/images/3/3e/Samurai_%28Civ6%29.png/revision/latest/scale-to-width-down/44?cb=20161128012304",
      },
      "Unique Building": {
        description: "Electronics Factory (Industrial Zone) - Replaces Factory",
        image:
          "https://vignette.wikia.nocookie.net/civilization/images/9/93/Electronics_Factory_%28Civ6%29.png/revision/latest/scale-to-width-down/44?cb=20161027045754",
      },
    },
    "dlc-modifiers": {
      "GS Leader Bonus":
        "+5 Combat Strength for land units in Coastal tiles and naval units in Coast tiles. +100% Production towards Encampment, Holy Site and Theater Square districts. Districts, improvements and units are immune to damage from Hurricanes. +100% damage from Hurricanes in Japanese territory to civilizations at war with Japan.",
    },
    "dlc-status": "Vanilla",
  },
  kongo1: {
    name: "Mvemba a Nzinga",
    nation: "Kongo",
    portrait:
      "https://gamepedia.cursecdn.com/civ6_gamepedia_en/1/19/Icon_leader_mvemba.png?version=3dc6fc94142bf4a99a32dd71d6126d3d",
    flag:
      "https://gamepedia.cursecdn.com/civ6_gamepedia_en/f/f2/Icon_civilization_kongo.png?version=30c06a7c00f0987749d20f1e636bd868",
    wiki: "https://civilization.fandom.com/wiki/Mvemba_a_Nzinga_(Civ6)",
    "leader-description": {
      "Bonus - Religious Convert":
        "Can't build Holy Sites or found a religion, but receives all the beliefs of any religion that has established itself as Kongo's majority religion, not just the Follower beliefs. Building a Mbanza or Theater Square grants a free Apostle of the city's majority religion.",
      "AI Agenda - Enthusiastic Disciple":
        "Likes civilizations that bring religion to the Kongo. Dislikes those who have founded a religion but not spread it to a Kongolese city.",
      "AI Religion": {
        description: "Catholicism",
        image:
          "https://vignette.wikia.nocookie.net/civilization/images/b/b1/Catholicism_Icon_%28Civ6%29.png/revision/latest/scale-to-width-down/44?cb=20200322155025",
      },
    },
    "civ-description": {
      "Civ Ability - Nkisi":
        "Relics, Artifacts and Sculptures grant +2 Food, +2 Production and +4 Gold. The Palace has four extra slots for Great Works. +50% Great Writer, Great Artist, Great Musician, and Great Merchant points from all sources.",
      "Unique Unit": {
        description: "Ngao Mbeba (Melee - Classical Era) - Replaces Swordsman",
        image:
          "https://vignette.wikia.nocookie.net/civilization/images/e/e3/Ngao_Mbeba_%28Civ6%29.png/revision/latest/scale-to-width-down/44?cb=20161128011332",
      },
      "Unique District": {
        description: "Mbanza - Replaces Neighborhood",
        image:
          "https://vignette.wikia.nocookie.net/civilization/images/c/c3/Mbanza_%28Civ6%29.png/revision/latest/scale-to-width-down/44?cb=20180220014520",
      },
    },
    "dlc-modifiers": {},
    "dlc-status": "Vanilla",
  },
  norway1: {
    name: "Harald Hardrada",
    nation: "Norway",
    portrait:
      "https://gamepedia.cursecdn.com/civ6_gamepedia_en/9/97/Icon_leader_hardrada.png?version=f6d8497ed38aeb1b005c3ad5a15da241",
    flag:
      "https://gamepedia.cursecdn.com/civ6_gamepedia_en/0/0d/Icon_civilization_norway.png?version=aedad9a828c9dcf16a27df834a01e2be",
    wiki: "https://civilization.fandom.com/wiki/Harald_Hardrada_(Civ6)",
    "leader-description": {
      "Bonus - Thunderbolt of the North":
        "+50% Production toward naval melee units. Naval melee units gain the ability to perform coastal raids. Gain the Viking Longship unique unit with Sailing.",
      "Unique Unit 1": {
        description:
          "Viking Longship (Naval Melee - Ancient Era) - Replaces Galley",
        image:
          "https://vignette.wikia.nocookie.net/civilization/images/3/36/Viking_Longship_%28Civ6%29.png/revision/latest/scale-to-width-down/44?cb=20161127225720",
      },
      "AI Agenda - Last Viking King":
        "Builds a strong navy, and likes civilizations that do the same. Dislikes civilizations that neglect their navies.",
      "AI Religion": {
        description: "Protestantism",
        image:
          "https://vignette.wikia.nocookie.net/civilization/images/d/db/Protestantism_Icon_%28Civ6%29.png/revision/latest/scale-to-width-down/44?cb=20200322155028",
      },
      "dlc-status": "Vanilla",
    },
    "civ-description": {
      "Civ Ability - Knarr":
        "Can enter Ocean tiles with Shipbuilding, instead of Cartography. All units pay no movement cost to embark or disembark. Naval melee units can heal in neutral territory.",
      "Unique Unit 2": {
        description: "Berserker (Melee - Medieval Era)",
        image:
          "https://vignette.wikia.nocookie.net/civilization/images/7/7e/Berserker_%28Civ6%29.png/revision/latest/scale-to-width-down/44?cb=20161106193003",
      },
      "Unique Infrastructure": {
        description: "Stave Church (Holy Site) - Replaces Temple",
        image:
          "https://vignette.wikia.nocookie.net/civilization/images/6/62/Stave_Church_%28Civ6%29.png/revision/latest/scale-to-width-down/44?cb=20161027050241",
      },
    },
    "dlc-modifiers": {
      "GS Leader Bonus":
        "+50% Production toward naval melee units. Naval melee units gain the ability to perform coastal raids. Pillaging and coastal raiding grant Science, in addition to Gold, for Mines, and Culture, in addition to Faith, for Quarries, Pastures, Plantations, and Camps. Gain the Viking Longship unique unit with Sailing.",
    },
    "dlc-status": "Vanilla",
  },
  rome1: {
    name: "Trajan",
    nation: "Rome",
    portrait:
      "https://gamepedia.cursecdn.com/civ6_gamepedia_en/6/6c/Icon_leader_trajan.png?version=297a43aba545b5c1bbeecf3cc4dd19c1",
    flag:
      "https://gamepedia.cursecdn.com/civ6_gamepedia_en/e/e8/Icon_civilization_rome.png?version=4fe114c062a7a2f25ea62673fd02f0f3",
    wiki: "https://civilization.fandom.com/wiki/Trajan_(Civ6)",
    "leader-description": {
      "Bonus - Trajan's Column":
        "All founded cities start with a free building in the City Center. (A Monument if the game is started in the Ancient Era)",
      "AI Agenda - Optimus Princeps":
        "Tries to include as much territory as possible in his empire, and likes those who do the same. Dislikes civilizations with little territory.",
    },
    "civ-description": {
      "Civ Ability - All Roads Lead to Rome":
        "Founded or conquered cities start with a Trading Post and, if within Trade Route range of the Capital, a road to it. Trade Routes generate +1 additional Gold from Roman Trading Posts they pass through.",
      "Unique Unit": {
        description: "Legion (Melee - Classical Era) - Replaces Swordsman",
        image:
          "https://vignette.wikia.nocookie.net/civilization/images/5/51/Legion_%28Civ6%29.png/revision/latest/scale-to-width-down/44?cb=20161107002520",
      },
      "Unique District": {
        description: "Bath - Replaces Aqueduct",
        image:
          "https://vignette.wikia.nocookie.net/civilization/images/e/ed/Bath_%28Civ6%29.png/revision/latest/scale-to-width-down/44?cb=20170701180313",
      },
    },
    "dlc-modifiers": {},
    "dlc-status": "Vanilla",
  },
  russia1: {
    name: "Peter",
    nation: "Russia",
    portrait:
      "https://gamepedia.cursecdn.com/civ6_gamepedia_en/a/ae/Icon_leader_peter_great.png?version=b90418763e5952ebaf078dd7fbb7fe34",
    flag:
      "https://gamepedia.cursecdn.com/civ6_gamepedia_en/4/4b/Icon_civilization_russia.png?version=9f4e09405ed8c5db0a9854a52086bb16",
    wiki: "https://civilization.fandom.com/wiki/Peter_(Civ6)",
    "leader-description": {
      "Bonus - The Grand Embassy":
        "Trade Routes to more advanced civilizations grant Russia +1 Science for every three technologies that civilization is ahead of them, and +1 Culture for every three civics.",
      "AI Agenda - Westernizer":
        "Likes those that are ahead in civics and technologies. Dislikes backwards civilizations that are behind in civics and technologies.",
      "AI Religion": {
        description: "Eastern Orthodoxy",
        image:
          "https://vignette.wikia.nocookie.net/civilization/images/5/51/Eastern_Orthodoxy_Icon_%28Civ6%29.png/revision/latest/scale-to-width-down/44?cb=20200322155026",
      },
    },
    "civ-description": {
      "Civ Ability - Mother Russia":
        "Founded cities start with eight additional tiles. Tundra tiles provide +1 Faith and +1 Production, in addition to their usual yields.",
      "Unique Unit": {
        description:
          "Cossack (Light Cavalry - Industrial Era) - Replaces Cavalry",
        image:
          "https://vignette.wikia.nocookie.net/civilization/images/7/74/Cossack_%28Civ6%29.png/revision/latest/scale-to-width-down/44?cb=20161127185635",
      },
      "Unique District": {
        description: "Lavra - Replaces Holy Site",
        image:
          "https://vignette.wikia.nocookie.net/civilization/images/f/fd/Lavra_%28Civ6%29.png/revision/latest/scale-to-width-down/44?cb=20180219222149",
      },
    },
    "dlc-modifiers": {
      "GS Civ Ability":
        "Founded cities start with eight additional tiles. Tundra tiles provide +1 Faith and +1 Production, in addition to their usual yields. Districts, improvements and units are immune to damage from Blizzards. +100% damage from Blizzards inside Russian territory to civilizations at war with Russia.",
    },
    "dlc-status": "Vanilla",
  },
  scythia1: {
    name: "Tomyris",
    nation: "Scythia",
    portrait:
      "https://gamepedia.cursecdn.com/civ6_gamepedia_en/f/ff/Icon_leader_tomyris.png?version=8475f92100f232aed3f5a7be6388d53a",
    flag:
      "https://gamepedia.cursecdn.com/civ6_gamepedia_en/a/a2/Icon_civilization_scythia.png?version=4d778fe1190ec50273653d19e236ea69",
    wiki: "https://civilization.fandom.com/wiki/Tomyris_(Civ6)",
    "leader-description": {
      "Bonus - Killer of Cyrus":
        "+5 Combat Strength for all units when attacking wounded units. Units heal up to 30 hit points after killing an enemy unit.",
      "AI Agenda - Backstab Averse":
        "Likes civilizations who are her Declared Friends. Dislikes civilizations who backstab their former allies and declare Surprise Wars.",
    },
    "civ-description": {
      "Civ Ability - People of the Steppe":
        "Building a light cavalry unit or Saka Horse Archer grants a free second copy of that unit.",
      "Unique Unit": {
        description: "Saka Horse Archer (Ranged - Classical Era)",
        image:
          "https://vignette.wikia.nocookie.net/civilization/images/b/b4/Saka_Horse_Archer_%28Civ6%29.png/revision/latest/scale-to-width-down/44?cb=20161127210622",
      },
      "Unique Tile Improvement": {
        description: "Kurgan",
        image:
          "https://vignette.wikia.nocookie.net/civilization/images/b/b6/Kurgan_%28Civ6%29.png/revision/latest/scale-to-width-down/44?cb=20190815053434",
      },
    },
    "dlc-modifiers": {
      "R&F Unique Unit": {
        description: "Saka Horse Archer (Ranged Cavalry - Classical Era)",
        image:
          "https://vignette.wikia.nocookie.net/civilization/images/b/b4/Saka_Horse_Archer_%28Civ6%29.png/revision/latest/scale-to-width-down/44?cb=20161127210622",
      },
    },
    "dlc-status": "Vanilla",
  },
  spain1: {
    name: "Philip II",
    nation: "Spain",
    portrait:
      "https://gamepedia.cursecdn.com/civ6_gamepedia_en/8/80/Icon_leader_philip_ii.png?version=7631acb7d0125eb63d97ea2d417d1794",
    flag:
      "https://gamepedia.cursecdn.com/civ6_gamepedia_en/a/ab/Icon_civilization_spain.png?version=665c8508fd3d4e08aba6c2e1e87b6e32",
    wiki: "https://civilization.fandom.com/wiki/Philip_II_(Civ6)",
    "leader-description": {
      "Bonus - El Escorial":
        "+4 Combat Strength for all units when fighting civilizations following a different Religion. Inquisitors have one extra use of their Remove Heresy ability.",
      "AI Agenda - Counter Reformer":
        "Likes civilizations who follow the same Religion as him, and wants his cities to all follow the same Religion. Dislikes those who spread their Religion into his empire.",
      "AI Religion": {
        description: "Catholicism",
        image:
          "https://vignette.wikia.nocookie.net/civilization/images/b/b1/Catholicism_Icon_%28Civ6%29.png/revision/latest/scale-to-width-down/44?cb=20200322155025",
      },
    },
    "civ-description": {
      "Civ Ability - Treasure Fleet":
        "May form Fleets and Armadas with Mercantilism, instead of Nationalism and Mobilization. Trade Routes between cities on different continents gain +1 Food and +1 Production for domestic Trade Routes, and +6 Gold for international Trade Routes.",
      "Unique Unit": {
        description:
          "Conquistador (Melee - Renaissance Era) - Replaces Musketman",
        image:
          "https://vignette.wikia.nocookie.net/civilization/images/b/ba/Conquistador_%28Civ6%29.png/revision/latest/scale-to-width-down/44?cb=20161106200818",
      },
      "Unique Tile Improvement": {
        description: "Mission",
        image:
          "https://vignette.wikia.nocookie.net/civilization/images/6/6d/Mission_%28Civ6%29.png/revision/latest/scale-to-width-down/44?cb=20161110011546",
      },
    },
    "dlc-modifiers": {
      "R&F Civ Ability":
        "May form Fleets and Armadas with Mercantilism, instead of Nationalism and Mobilization. Trade Routes between cities on different continents gain +1 Food and +1 Production for domestic Trade Routes, and +6 Gold for international Trade Routes. +2 Loyalty per turn for cities outside of Spain's home continent if they have a Mission adjacent to the City Center.",
      "GS Leader Bonus":
        "+4 Combat Strength for all units when fighting civilizations following a different Religion. Inquisitors have one extra use of their Remove Heresy ability. Inquisitors eliminate 100% of the presence of other Religions.",
    },
    "dlc-status": "Vanilla",
  },
  sumeria1: {
    name: "Gilgamesh",
    nation: "Sumeria",
    portrait:
      "https://gamepedia.cursecdn.com/civ6_gamepedia_en/e/e3/Icon_leader_gilgamesh.png?version=a1eb41e0bdacc2a099fd430991b5f8a9",
    flag:
      "https://gamepedia.cursecdn.com/civ6_gamepedia_en/0/07/Icon_civilization_sumeria.png?version=c444f6d98e3edc305726567c52afae46",
    wiki: "https://civilization.fandom.com/wiki/Gilgamesh_(Civ6)",
    "leader-description": {
      "Bonus - Adventures of Enkidu":
        "May declare war on any civilization at war with an ally without warmonger penalties. When at war with a common enemy, Sumerian and allied units share pillage rewards and combat experience if within 5 tiles of each other.",
      "AI Agenda - Ally of Enkidu":
        "Is easy to befriend, and likes civilizations who are his Declared Friends. Dislikes anyone denouncing or attacking his friends.",
    },
    "civ-description": {
      "Civ Ability - Epic Quest":
        "Capturing a Barbarian Outpost also grants a Tribal Village reward. Levying city-state units costs 50% less Gold.",
      "Unique Unit": {
        description: "War-Cart (Heavy Cavalry - Ancient Era)",
        image:
          "https://vignette.wikia.nocookie.net/civilization/images/f/f9/War-Cart_%28Civ6%29.png/revision/latest/scale-to-width-down/44?cb=20161106190956",
      },
      "Unique Tile Improvement": {
        description: "Ziggurat",
        image:
          "https://vignette.wikia.nocookie.net/civilization/images/4/42/Ziggurat_%28Civ6%29.png/revision/latest/scale-to-width-down/44?cb=20190815053102",
      },
    },
    "dlc-modifiers": {
      "R&F Leader Bonus":
        "May declare war on any civilization at war with an ally without warmonger penalties. When at war with a common enemy, Sumerian and allied units share pillage rewards and combat experience if within 5 tiles of each other. Earn Alliance Points per-turn if both civilizations are at war with the same foe.",
    },
    "dlc-status": "Vanilla",
  },
  poland1: {
    name: "Jadwiga",
    nation: "Poland",
    portrait:
      "https://vignette.wikia.nocookie.net/civilization/images/f/f6/Jadwiga_%28Civ6%29.png/revision/latest?cb=20180225192412",
    flag: poland_icon,
    wiki: "https://civilization.fandom.com/wiki/Jadwiga_(Civ6)",
    "leader-description": {
      "Bonus - Lithuanian Union":
        "Taking territory from a foreign city with a Culture Bomb converts it to Poland's religion. Relics provide +4 Gold, +2 Culture and +2 Faith. Holy Sites receive a +1 adjacency bonus from districts, instead of +0.5.",
      "AI Agenda - Saint":
        "Tries to build up Faith, and likes those that also focus on Faith. Dislikes civilizations with a weak Faith output.",
      "AI Religion": {
        description: "Catholicism",
        image:
          "https://vignette.wikia.nocookie.net/civilization/images/b/b1/Catholicism_Icon_%28Civ6%29.png/revision/latest/scale-to-width-down/44?cb=20200322155025",
      },
    },
    "civ-description": {
      "Civ Ability - Golden Liberty":
        "Building an Encampment or Fort triggers a Culture Bomb, claiming surrounding tiles. One Military policy slot in all governments is converted into a Wildcard policy slot.",
      "Unique Unit": {
        description: "Winged Hussar (Heavy Cavalry - Medieval Era)",
        image:
          "https://vignette.wikia.nocookie.net/civilization/images/b/ba/Winged_Hussar_%28Civ6%29.png/revision/latest/scale-to-width-down/44?cb=20200422045833",
      },
      "Unique Building": {
        description: "Sukiennice (Commercial Hub) - Replaces Market",
        image:
          "https://vignette.wikia.nocookie.net/civilization/images/6/62/Sukiennice_%28Civ6%29.png/revision/latest/scale-to-width-down/44?cb=20171027195218",
      },
    },
    "dlc-modifiers": {},
    "dlc-status": "Scenario Pack Poland",
  },
  australia1: {
    name: "John Curtin",
    nation: "Australia",
    portrait:
      "https://vignette.wikia.nocookie.net/civilization/images/b/b9/John_Curtin_%28Civ6%29.png/revision/latest?cb=20180227141017",
    flag: australia_icon,
    wiki: "https://civilization.fandom.com/wiki/John_Curtin_(Civ6)",
    "leader-description": {
      "Bonus - Citadel of Civilization":
        "+100% Production in all cities for the next 10 turns after being declared war upon, and for the next 20 turns after liberating a city.",
      "AI Agenda - Perpetually on Guard":
        "Forms Defensive Pacts with friends and likes civilizations that liberate cities. Dislikes civilizations that are occupying enemy cities.",
    },
    "civ-description": {
      "Civ Ability - Land Down Under":
        "+3 Housing in coastal cities. Building a Pasture triggers a Culture Bomb, claiming surrounding tiles. Campus, Commercial Hub, Holy Site, and Theater Square districts gain +1 to their yields in tiles with Charming Appeal, and +3 with Breathtaking Appeal.",
      "Unique Unit": {
        description: "Digger (Melee - Modern Era) - Replaces Infantry",
        image:
          "https://vignette.wikia.nocookie.net/civilization/images/f/ff/Digger_%28Civ6%29.png/revision/latest/scale-to-width-down/44?cb=20200422045732",
      },
      "Unique Tile Improvement": {
        description: "Outback Station",
        image:
          "https://vignette.wikia.nocookie.net/civilization/images/8/8f/Outback_Station_%28Civ6%29.png/revision/latest/scale-to-width-down/44?cb=20190815052610",
      },
    },
    "dlc-modifiers": {
      "GS Leader Bonus":
        "+100% Production in all cities for the next 10 turns after being declared war upon or liberating a city.",
    },
    "dlc-status": "Scenario Pack Australia",
  },
  persia1: {
    name: "Cyrus",
    nation: "Persia",
    portrait:
      "https://vignette.wikia.nocookie.net/civilization/images/1/14/Cyrus_%28Civ6%29.png/revision/latest?cb=20180227022814",
    flag: persia_icon,
    wiki: "https://civilization.fandom.com/wiki/Cyrus_(Civ6)",
    "leader-description": {
      "Bonus - Fall of Babylon":
        "+2 Movement for all units for the next 10 turns after declaring a Surprise War. Surprise Wars count as Formal Wars for the purposes of warmongering penalties and war weariness. Occupied cities have no penalties to their yields.",
      "AI Agenda - Opportunist":
        "Will often declare Surprise Wars, and likes civilizations that do the same. Dislikes civilizations that don't declare Surprise Wars.",
      "AI Religion": {
        description: "Zoroastrianism",
        image:
          "https://vignette.wikia.nocookie.net/civilization/images/1/14/Zoroastrianism_Icon_%28Civ6%29.png/revision/latest/scale-to-width-down/44?cb=20200322155029",
      },
    },
    "civ-description": {
      "Civ Ability - Satrapies":
        "Gains +1 Trade Route capacity with Political Philosophy. Domestic Trade Routes provide +2 Gold and +1 Culture. Roads built inside Persian territory are one level more advanced than usual.",
      "Unique Unit": {
        description: "Immortal (Melee - Classical Era) - Replaces Swordsman",
        image:
          "https://vignette.wikia.nocookie.net/civilization/images/3/39/Immortal_%28Civ6%29.png/revision/latest/scale-to-width-down/44?cb=20200422045802",
      },
      "Unique Tile Improvement": {
        description: "Pairidaeza",
        image:
          "https://vignette.wikia.nocookie.net/civilization/images/c/ce/Pairidaeza_%28Civ6%29.png/revision/latest/scale-to-width-down/44?cb=20171027194844",
      },
    },
    "dlc-modifiers": {
      "R&F Leader Bonus":
        "+2 Movement for all units for the next 10 turns after declaring a Surprise War. Surprise Wars count as Formal Wars for the purposes of warmongering penalties and war weariness. Occupied cities have no penalties to their yields. +5 Loyalty per turn in occupied cities with a garrisoned unit.",
      "GS Leader Bonus":
        "+2 Movement for all units for the next 10 turns after declaring a Surprise War. Declaring a Surprise War only counts as a Formal War for the purpose of Grievances and war weariness. Occupied cities have no penalties to their yields. +5 Loyalty per turn in occupied cities with a garrisoned unit.",
    },
    "dlc-status": "Scenario Pack Persia and Macedon",
  },
  macedon1: {
    name: "Alexander",
    nation: "Macedon",
    portrait:
      "https://vignette.wikia.nocookie.net/civilization/images/3/33/Alexander_%28Civ6%29.png/revision/latest?cb=20180216210702",
    flag: macedon_icon,
    wiki: "https://civilization.fandom.com/wiki/Alexander_(Civ6)",
    "leader-description": {
      "Bonus - To the World's End":
        "Macedonian cities never incur war weariness. All military units heal completely when a city with a Wonder is captured. Gain the Hetairoi unique unit with Horseback Riding.",
      "Unique Unit 1": {
        description:
          "Hetairoi (Heavy Cavalry - Classical Era) - Replaces Horseman",
        image:
          "https://vignette.wikia.nocookie.net/civilization/images/2/22/Hetairoi_%28Civ6%29.png/revision/latest/scale-to-width-down/44?cb=20200422080941",
      },
      "AI Agenda - Short Life of Glory":
        "Likes civilizations at war with powers other than Macedon. Dislikes civilizations at peace.",
    },
    "civ-description": {
      "Civ Ability - Hellenistic Fusion":
        "Conquering a city grants a free Eureka for each Encampment and Campus district in the conquered city and a free Inspiration for each Holy Site and Theater Square district.",
      "Unique Unit 2": {
        description: "Hypaspist (Melee - Classical Era) - Replaces Swordsman",
        image:
          "https://vignette.wikia.nocookie.net/civilization/images/d/d4/Hypaspist_%28Civ6%29.png/revision/latest/scale-to-width-down/44?cb=20200422045752",
      },
      "Unique Building": {
        description: "Basilikoi Paides (Encampment) - Replaces Barracks",
        image:
          "https://vignette.wikia.nocookie.net/civilization/images/1/14/Basilikoi_Paides_%28Civ6%29.png/revision/latest/scale-to-width-down/44?cb=20171027195002",
      },
    },
    "dlc-modifiers": {
      "GS AI Agenda":
        "Grievances against this leader decay at twice the usual rate.",
    },
    "dlc-status": "Scenario Pack Persia and Macedon",
  },
  nubia1: {
    name: "Amanitore",
    nation: "Nubia",
    portrait:
      "https://vignette.wikia.nocookie.net/civilization/images/b/b8/Amanitore_%28Civ6%29.png/revision/latest?cb=20171027193933",
    flag: nubia_icon,
    wiki: "https://civilization.fandom.com/wiki/Amanitore_(Civ6)",
    "leader-description": {
      "Bonus - Kandake of Meroë":
        "+20% Production towards districts, increasing to +40% Production if there's a Nubian Pyramid adjacent to the City Center.",
      "AI Agenda - City Planner":
        "Tries to keep the maximum number of districts in each city, and likes those that do the same. Dislikes civilizations that don't build as many districts as possible in their cities.",
    },
    "civ-description": {
      "Civ ability - Ta-Seti":
        "+50% Production toward Ranged units. Ranged units gain +50% combat experience. +1 Production for Mines over strategic resources, and +2 Gold for Mines over bonus and luxury resources.",
      "Unique Unit": {
        description: "Pítati Archer (Ranged - Ancient Era) - Replaces Archer",
        image:
          "https://vignette.wikia.nocookie.net/civilization/images/6/60/P%C3%ADtati_Archer_%28Civ6%29.png/revision/latest/scale-to-width-down/44?cb=20200422045824",
      },
      "Unique Tile Improvement": {
        description: "Nubian Pyramid",
        image:
          "https://vignette.wikia.nocookie.net/civilization/images/7/73/Nubian_Pyramid_%28Civ6%29.png/revision/latest/scale-to-width-down/44?cb=20171027200639",
      },
    },
    "dlc-modifiers": {},
    "dlc-status": "Scenario Pack Nubia",
  },
  khmer1: {
    name: "Jayavarman VII",
    nation: "Khmer",
    portrait:
      "https://vignette.wikia.nocookie.net/civilization/images/7/77/Jayavarman_VII_%28Civ6%29.png/revision/latest?cb=20171104052227",
    flag: khmer_icon,
    wiki: "https://civilization.fandom.com/wiki/Jayavarman_VII_(Civ6)",
    "leader-description": {
      "Bonus - Monasteries of the King":
        "+2 Food and +1 Housing from Holy Sites adjacent to a river. Building a Holy Site triggers a Culture Bomb, claiming surrounding tiles.",
      "AI Agenda - An End to Suffering":
        "Likes civilizations with many Holy Sites and a high average city Population. Dislikes civilizations lacking in either of these areas.",
      "AI Religion": {
        description: "Buddhism",
        image:
          "https://vignette.wikia.nocookie.net/civilization/images/0/01/Buddhism_Icon_%28Civ6%29.png/revision/latest/scale-to-width-down/44?cb=20200322155024",
      },
    },
    "civ-description": {
      "Civ Ability - Grand Barays":
        "+3 Faith and +1 Amenity from Aqueducts. +2 Food for Farms adjacent to an Aqueduct.",
      "Unique Unit": {
        description: "Domrey (Siege - Medieval Era)",
        image:
          "https://vignette.wikia.nocookie.net/civilization/images/a/a4/Domrey_%28Civ6%29.png/revision/latest/scale-to-width-down/44?cb=20200422045743",
      },
      "Unique Building": {
        description: "Prasat (Holy Site) - Replaces Temple",
        image:
          "https://vignette.wikia.nocookie.net/civilization/images/2/2f/Prasat_%28Civ6%29.png/revision/latest/scale-to-width-down/44?cb=20200702090725",
      },
    },
    "dlc-modifiers": {},
    "dlc-status": "Scenario Pack Khmer and Indonesia",
  },
  indonesia1: {
    name: "Gitarja",
    nation: "Indonesia",
    portrait:
      "https://vignette.wikia.nocookie.net/civilization/images/e/e8/Gitarja_%28Civ6%29.png/revision/latest?cb=20171110022129",
    flag: indonesia_icon,
    wiki: "https://civilization.fandom.com/wiki/Gitarja_(Civ6)",
    "leader-description": {
      "Bonus - Exalted Goddess of the Three Worlds":
        "May purchase naval units with Faith. Religious units pay no movement cost to embark or disembark. City Centers adjacent to Coast or Lake tiles gain +2 Faith.",
      "AI Agenda - Archipelagic State":
        "Likes civilizations that avoid having cities on small landmasses. Dislikes those who have numerous cities on such islands.",
      "AI Religion": {
        description: "Hinduism",
        image:
          "https://vignette.wikia.nocookie.net/civilization/images/4/4f/Hinduism_Icon_%28Civ6%29.png/revision/latest/scale-to-width-down/44?cb=20200322155026",
      },
    },
    "civ-description": {
      "Civ ability - Great Nusantara":
        "Coast and Lake tiles provide a +0.5 adjacency bonus for Holy Site, Campus, Industrial Zone, and Theater Square districts. Entertainment Complexes built adjacent to a Coast or Lake tile provide +1 Amenity.",
      "Unique Unit": {
        description: "Jong (Naval Ranged - Medieval Era) - Replaces Frigate",
        image:
          "https://vignette.wikia.nocookie.net/civilization/images/4/40/Jong_%28Civ6%29.png/revision/latest/scale-to-width-down/44?cb=20200422045813",
      },
      "Unique Tile Improvement": {
        description: "Kampung",
        image:
          "https://vignette.wikia.nocookie.net/civilization/images/8/86/Kampung_%28Civ6%29.png/revision/latest/scale-to-width-down/44?cb=20190815052831",
      },
    },
    "dlc-modifiers": {},
    "dlc-status": "Scenario Pack Khmer and Indonesia",
  },
  cree1: {
    name: "Poundmaker",
    nation: "Cree",
    portrait:
      "https://vignette.wikia.nocookie.net/civilization/images/3/3b/Poundmaker_%28Civ6%29.png/revision/latest?cb=20180218220056",
    flag: cree_icon,
    wiki: "https://civilization.fandom.com/wiki/Poundmaker_(Civ6)",
    "leader-description": {
      "Bonus - Favorable Terms":
        "All Alliance types provide Shared Visibility. Trade Routes grant +1 Food in the sending city and +1 Gold in the destination city per Camp or Pasture at the destination city.",
      "AI Agenda - Iron Confederacy":
        "Establishes as many Alliances as possible, and likes those who do the same. Dislikes civilizations that don't establish Alliances.",
    },
    "civ-description": {
      "Civ ability - Nîhithaw":
        "Gains +1 Trade Route capacity and a free Trader with Pottery. Unclaimed tiles within three tiles of a Cree city come under Cree control when a Trader first moves into them.",
      "Unique Unit": {
        description: "Okihtcitaw (Recon - Ancient Era) - Replaces Scout",
        image:
          "https://vignette.wikia.nocookie.net/civilization/images/d/d2/Okihtcitaw_%28Civ6%29.png/revision/latest/scale-to-width-down/44?cb=20200422044438",
      },
      "Unique Tile Improvement": {
        description: "Mekewap",
        image:
          "https://vignette.wikia.nocookie.net/civilization/images/0/08/Mekewap_%28Civ6%29.png/revision/latest/scale-to-width-down/44?cb=20180501223905",
      },
    },
    "dlc-modifiers": {},
    "dlc-status": "Rise and Fall Expansion",
  },
  dutch1: {
    name: "Wilhelmina",
    nation: "Netherlands",
    portrait:
      "https://vignette.wikia.nocookie.net/civilization/images/4/44/Wilhelmina_%28Civ6%29.png/revision/latest?cb=20180522204054",
    flag: netherlands_icon,
    wiki: "https://civilization.fandom.com/wiki/Wilhelmina_(Civ6)",
    "leader-description": {
      "Bonus - Radio Oranje":
        "Domestic Trade Routes provide +1 Loyalty per turn for the starting city. Trade Routes sent to or received from a foreign civilization grant +1 Culture to the Netherlands.",
      "AI Agenda - Billionaire":
        "Tries to have as many Trade Routes as possible, and likes civilizations that trade with her cities. Dislikes those who refrain from sending Trade Routes to her cities.",
      "AI Religion": {
        description: "Protestantism",
        image:
          "https://vignette.wikia.nocookie.net/civilization/images/d/db/Protestantism_Icon_%28Civ6%29.png/revision/latest/scale-to-width-down/44?cb=20200322155028",
      },
    },
    "civ-description": {
      "Civ Ability - Grote Rivieren":
        "Rivers provide a +2 adjacency bonus for Campus, Theater Square, and Industrial Zone districts. Building a Harbor triggers a Culture Bomb, claiming surrounding tiles.",
      "Unique Unit": {
        description:
          "De Zeven Provinciën (Naval Ranged - Renaissance Era) - Replaces Frigate",
        image:
          "https://vignette.wikia.nocookie.net/civilization/images/0/0b/De_Zeven_Provinci%C3%ABn_%28Civ6%29.png/revision/latest/scale-to-width-down/44?cb=20200422044007",
      },
      "Unique Tile Improvement": {
        description: "Polder",
        image:
          "https://vignette.wikia.nocookie.net/civilization/images/f/fd/Polder_%28Civ6%29.png/revision/latest/scale-to-width-down/44?cb=20180501223657",
      },
    },
    "dlc-modifiers": {
      "GS Civ Ability":
        "Rivers provide a +2 adjacency bonus for Campus, Theater Square, and Industrial Zone districts. Building a Harbor triggers a Culture Bomb, claiming surrounding tiles. +50% Production towards the Dam district and Flood Barrier building.",
    },
    "dlc-status": "Rise and Fall Expansion",
  },
  georgia1: {
    name: "Tamar",
    nation: "Georgia",
    portrait:
      "https://vignette.wikia.nocookie.net/civilization/images/b/b0/Tamar_%28Civ6%29.png/revision/latest?cb=20180707181802",
    flag: georgia_icon,
    wiki: "https://civilization.fandom.com/wiki/Tamar_(Civ6)",
    "leader-description": {
      "Bonus - Glory of the World, Kingdom and Faith":
        "+100% Faith for the next 10 turns after declaring a Protectorate War. Each Envoy sent to a city-state of Georgia's majority Religion counts as two Envoys.",
      "AI Agenda - Narikala Fortress":
        "Builds high-level walls around her cities and likes those who do the same. Dislikes civilizations that don't fortify their cities.",
      "AI Religion": {
        description: "Eastern Orthodoxy",
        image:
          "https://vignette.wikia.nocookie.net/civilization/images/5/51/Eastern_Orthodoxy_Icon_%28Civ6%29.png/revision/latest/scale-to-width-down/44?cb=20200322155026",
      },
    },
    "civ-description": {
      "Civ ability - Strength in Unity":
        "Dedications chosen at the beginning of a Golden Age or Heroic Age also grant their Normal Age bonuses towards improving Era Score, in addition to their regular bonuses. +50% Production towards walls.",
      "Unique Unit": {
        description: "Khevsur (Melee - Medieval Era)",
        image:
          "https://vignette.wikia.nocookie.net/civilization/images/6/6a/Khevsur_%28Civ6%29.png/revision/latest/scale-to-width-down/44?cb=20200422044103",
      },
      "Unique Building": {
        description: "Tsikhe (City Center) - Replaces Renaissance Walls",
        image:
          "https://vignette.wikia.nocookie.net/civilization/images/5/5e/Tsikhe_%28Civ6%29.png/revision/latest/scale-to-width-down/44?cb=20180411171131",
      },
    },
    "dlc-modifiers": {},
    "dlc-status": "Rise and Fall Expansion",
  },
  india2: {
    name: "Chandragupta",
    nation: "India",
    portrait:
      "https://vignette.wikia.nocookie.net/civilization/images/e/e2/Chandragupta_%28Civ6%29.png/revision/latest?cb=20190710113442",
    flag:
      "https://gamepedia.cursecdn.com/civ6_gamepedia_en/2/20/Icon_civilization_india.png?version=1d92aa329dd122aa775eb22f73f5ab8d",
    wiki: "https://civilization.fandom.com/wiki/Chandragupta_(Civ6)",
    "leader-description": {
      "Bonus - Arthashastra":
        "Can declare a War of Territorial Expansion with Military Training, instead of Mobilization. +2 Movement and +5 Combat Strength for all units for the next 10 turns after declaring a War of Territorial Expansion.",
      "AI Agenda - Maurya Empire":
        "Dislikes civilizations that have cities close to his borders, and will try to conquer them. Likes civilizations that are not his neighbors.",
      "AI Religion": {
        description: "Hinduism",
        image:
          "https://vignette.wikia.nocookie.net/civilization/images/4/4f/Hinduism_Icon_%28Civ6%29.png/revision/latest/scale-to-width-down/44?cb=20200322155026",
      },
    },
    "civ-description": {
      "Civ ability - Dharma":
        "Indian cities receive the Follower Beliefs of all religions with at least one follower in them, not just the majority religion.",
      "Unique Unit": {
        description: "Varu (Heavy Cavalry - Classical Era) - Replaces Horseman",
        image:
          "https://vignette.wikia.nocookie.net/civilization/images/3/39/Varu_%28Civ6%29.png/revision/latest/scale-to-width-down/44?cb=20161127203659",
      },
      "Unique Tile Improvement": {
        description: "Stepwell",
        image:
          "https://vignette.wikia.nocookie.net/civilization/images/9/9e/Stepwell_%28Civ6%29.png/revision/latest/scale-to-width-down/44?cb=20190812200601",
      },
    },
    "dlc-modifiers": {
      "GS Civ Ability":
        "Indian cities receive the Follower Beliefs of all religions with at least one follower in them, not just the majority religion, and gain +1 Amenity for each religion with at least one follower in them. +2 Spread Religion charges for Missionaries. +100% Religious pressure from Indian Trade Routes.",
    },
    "dlc-status": "Rise and Fall Expansion",
  },
  korea1: {
    name: "Seondeok",
    nation: "Korea",
    portrait:
      "https://vignette.wikia.nocookie.net/civilization/images/9/9c/Seondeok_%28Civ6%29.png/revision/latest?cb=20180215141306",
    flag: korea_icon,
    wiki: "https://civilization.fandom.com/wiki/Seondeok_(Civ6)",
    "leader-description": {
      "Bonus - Hwarang":
        "Cities with an established Governor receive +3% Culture and +3% Science for each promotion that Governor has.",
      "Ai Agenda - Cheomseongdae":
        "Tries to build up Science, and likes those that also focus on Science. Dislikes civilizations with a weak Science output.",
      "AI Religion": {
        description: "Buddhism",
        image:
          "https://vignette.wikia.nocookie.net/civilization/images/0/01/Buddhism_Icon_%28Civ6%29.png/revision/latest/scale-to-width-down/44?cb=20200322155024",
      },
    },
    "civ-description": {
      "Civ ability - Three Kingdoms":
        "If adjacent to a Seowon, Farms receive +1 Civ6Food Food and Mines receive +1 Civ6Science Science.",
      "Unique Unit": {
        description:
          "Hwacha (Ranged - Renaissance Era) - Replaces Field Cannon",
        image:
          "https://vignette.wikia.nocookie.net/civilization/images/e/e7/Hwacha_%28Civ6%29.png/revision/latest/scale-to-width-down/44?cb=20200422044038",
      },
      "Unique District": {
        description: "Seowon - Replaces Campus",
        image:
          "https://vignette.wikia.nocookie.net/civilization/images/1/19/Seowon_%28Civ6%29.png/revision/latest/scale-to-width-down/44?cb=20190309225958",
      },
    },
    "dlc-modifiers": {},
    "dlc-status": "Rise and Fall Expansion",
  },
  mapuche1: {
    name: "Lautaro",
    nation: "Mapuche",
    portrait:
      "https://vignette.wikia.nocookie.net/civilization/images/e/e0/Lautaro_%28Civ6%29.png/revision/latest?cb=20180312165146",
    flag: mapuche_icon,
    wiki: "https://civilization.fandom.com/wiki/Lautaro_(Civ6)",
    "leader-description": {
      "Bonus - Swift Hawk":
        "Defeating an enemy unit within the borders of an enemy city causes that city to lose 20 Loyalty. Pillaging a tile within the borders of an enemy city causes that city to lose 5 Loyalty.",
      "AI Agenda - Spirit of Tucapel":
        "Tries to keep his cities loyal, and dislikes civilizations who fail to do this. Likes civilizations who gain cities due to their Loyalty pressure.",
    },
    "civ-description": {
      "Civ ability - Toqui":
        "All units trained in cities with an established Governor gain +25% combat experience. +10 Combat Strength when fighting civilizations that are in a Golden or Heroic Age.",
      "Unique Unit": {
        description: "Malón Raider (Light Cavalry - Renaissance Era)",
        image:
          "https://vignette.wikia.nocookie.net/civilization/images/6/65/Mal%C3%B3n_Raider_%28Civ6%29.png/revision/latest/scale-to-width-down/44?cb=20200422044430",
      },
      "Unique Tile Improvement": {
        description: "Chemamull",
        image:
          "https://vignette.wikia.nocookie.net/civilization/images/d/de/Chemamull_%28Civ6%29.png/revision/latest/scale-to-width-down/44?cb=20180501224243",
      },
    },
    "dlc-modifiers": {},
    "dlc-status": "Rise and Fall Expansion",
  },
  mongolia1: {
    name: "Genghis Khan",
    nation: "Mongolia",
    portrait:
      "https://vignette.wikia.nocookie.net/civilization/images/5/53/Genghis_Khan_%28Civ6%29.png/revision/latest?cb=20180702224451",
    flag: mongolia_icon,
    wiki: "https://civilization.fandom.com/wiki/Genghis_Khan_(Civ6)",
    "leader-description": {
      "Bonus - Mongol Horde":
        "Cavalry class units gain +3 Combat Strength and have a chance to capture defeated cavalry class enemy units.",
      "AI Agenda - Horse Lord":
        "Builds a strong cavalry force, and likes civilizations that don't compete in cavalry. Dislikes those who rival him in cavalry strength.",
    },
    "civ-description": {
      "Civ Ability - Örtöö":
        "Sending a Trade Route immediately creates a Trading Post in the destination city, instead of when the Trade Route is completed. Gains an extra level of Diplomatic Visibility with civilizations that have a Mongolian Trading Post. +6 Combat Strength for all units for each level of Diplomatic Visibility Mongolia has over the other civilization, instead of the usual +3.",
      "Unique Unit": {
        description: "Keshig (Ranged Cavalry - Medieval Era)",
        image:
          "https://vignette.wikia.nocookie.net/civilization/images/8/88/Keshig_%28Civ6%29.png/revision/latest/scale-to-width-down/44?cb=20200422044054",
      },
      "Unique Building": {
        description: "Ordu (Encampment) - Replaces Stable",
        image:
          "https://vignette.wikia.nocookie.net/civilization/images/2/2c/Ordu_%28Civ6%29.png/revision/latest/scale-to-width-down/44?cb=20180411170533",
      },
    },
    "dlc-modifiers": {},
    "dlc-status": "Rise and Fall Expansion",
  },
  scotland1: {
    name: "Robert the Bruce",
    nation: "Scotland",
    portrait:
      "https://vignette.wikia.nocookie.net/civilization/images/c/c4/Robert_the_Bruce_%28Civ6%29.png/revision/latest?cb=20180305152044",
    flag: scotland_icon,
    wiki: "https://civilization.fandom.com/wiki/Robert_the_Bruce_(Civ6)",
    "leader-description": {
      "Bonus - Bannockburn":
        "Can declare a War of Liberation with Defensive Tactics, instead of Diplomatic Service. +100% Production in all cities and +2 Movement for all units for the next 10 turns after declaring a War of Liberation.",
      "AI Agenda - Flower of Scotland":
        "Will never attack his neighboring civilizations unless they break a promise to him, and dislikes anyone waging war on them. Likes civilizations not at war with their neighbors.",
      "AI Religion": {
        description: "Catholicism",
        image:
          "https://vignette.wikia.nocookie.net/civilization/images/b/b1/Catholicism_Icon_%28Civ6%29.png/revision/latest/scale-to-width-down/44?cb=20200322155025",
      },
    },
    "civ-description": {
      "Civ ability - Scottish Enlightenment":
        "Happy cities gain +5% Science and +5% Production, and generate +1 Great Scientist points in their Campuses and +1 Great Engineer points in their Industrial Zones. Ecstatic cities double these bonuses.",
      "Unique Unit": {
        description: "Highlander (Recon - Industrial Era) - Replaces Ranger",
        image:
          "https://vignette.wikia.nocookie.net/civilization/images/5/5d/Highlander_%28Civ6%29.png/revision/latest/scale-to-width-down/44?cb=20200422044026",
      },
      "Unique Tile Improvement": {
        description: "Golf Course",
        image:
          "https://vignette.wikia.nocookie.net/civilization/images/e/ed/Golf_Course_%28Civ6%29.png/revision/latest/scale-to-width-down/44?cb=20180501224042",
      },
    },
    "dlc-modifiers": {},
    "dlc-status": "Rise and Fall Expansion",
  },
  zulu1: {
    name: "Shaka",
    nation: "Zulu",
    portrait:
      "https://vignette.wikia.nocookie.net/civilization/images/e/eb/Shaka_%28Civ6%29.png/revision/latest?cb=20180513132001",
    flag: zulu_icon,
    wiki: "https://civilization.fandom.com/wiki/Shaka_(Civ6)",
    "leader-description": {
      "Bonus - Amabutho":
        "May form Corps with Mercenaries, instead of Nationalism, and Armies with Nationalism, instead of Mobilization. Corps and Armies gain an additional +5 Combat Strength.",
      "AI Agenda - Horn, Chest, Loins":
        "Forms as many Corps and Armies as possible, and likes those who do the same. Dislikes civilizations with few Corps and Armies.",
    },
    "civ-description": {
      "Civ ability - Isibongo":
        "Capturing a city will upgrade the conquering unit into a Corps or Army, if the necessary civics are unlocked. +3 Loyalty per turn to cities with a garrisoned unit, increasing to +5 if the garrisoned unit is a Corps or Army.",
      "Unique Unit": {
        description: "Impi (Anti-Cavalry - Medieval Era) - Replaces Pikeman",
        image:
          "https://vignette.wikia.nocookie.net/civilization/images/6/6d/Impi_%28Civ6%29.png/revision/latest/scale-to-width-down/44?cb=20200422044044",
      },
      "Unique Building": {
        description: "Ikanda - Replaces Encampment",
        image:
          "https://vignette.wikia.nocookie.net/civilization/images/8/8e/Ikanda_%28Civ6%29.png/revision/latest/scale-to-width-down/44?cb=20180219222636",
      },
    },
    "dlc-modifiers": {},
    "dlc-status": "Rise and Fall Expansion",
  },
  hungary1: {
    name: "Matthias Corvinus",
    nation: "Hungary",
    portrait:
      "https://vignette.wikia.nocookie.net/civilization/images/2/25/Matthias_Corvinus_%28Civ6%29.png/revision/latest?cb=20190218164623",
    flag: hungary_icon,
    wiki: "https://civilization.fandom.com/wiki/Matthias_Corvinus_(Civ6)",
    "leader-description": {
      "Bonus - Raven King":
        "Levied city-state units gain +2 Movement and +5 Combat Strength, and can be upgraded at a 75% discount in Gold and resources. Levying troops from a city-state grants 2 Envoys with that city-state. Gain the Black Army unique unit with Castles.",
      "Unique Unit 1": {
        description:
          "Black Army (Light Cavalry - Medieval Era) - Replaces Courser",
        image:
          "https://vignette.wikia.nocookie.net/civilization/images/d/d2/Black_Army_%28Civ6%29.png/revision/latest/scale-to-width-down/44?cb=20200421200513",
      },
      "AI Agenda - Raven Banner":
        "Will often levy troops from city-states, and likes those who do the same. Dislikes civilizations that shun use of these mercenaries.",
      "AI Religion": {
        description: "Catholicism",
        image:
          "https://vignette.wikia.nocookie.net/civilization/images/b/b1/Catholicism_Icon_%28Civ6%29.png/revision/latest/scale-to-width-down/44?cb=20200322155025",
      },
    },
    "civ-description": {
      "Civ ability - Pearl of the Danube":
        "+50% Production for districts and buildings built across a river from a City Center.",
      "Unique Unit 2": {
        description:
          "Huszár (Light Cavalry - Industrial Era) - Replaces Cavalry",
        image:
          "https://vignette.wikia.nocookie.net/civilization/images/3/35/Husz%C3%A1r_%28Civ6%29.png/revision/latest/scale-to-width-down/44?cb=20200421200557",
      },
      "Unique Building": {
        description: "Thermal Bath (Entertainment Complex) - Replaces Zoo",
        image:
          "https://vignette.wikia.nocookie.net/civilization/images/b/bd/Thermal_Bath_%28Civ6%29.png/revision/latest/scale-to-width-down/44?cb=20190215171940",
      },
    },
    "dlc-modifiers": {},
    "dlc-status": "Gathering Storm Expansion",
  },
  maori: {
    name: "Kupe",
    nation: "Māori",
    portrait:
      "https://vignette.wikia.nocookie.net/civilization/images/4/42/Kupe_%28Civ6%29.png/revision/latest?cb=20190219133902",
    flag: maori_icon,
    wiki: "https://civilization.fandom.com/wiki/Kupe_(Civ6)",
    "leader-description": {
      "Bonus - Kupe's Voyage":
        "Starts the game in the Ocean. +2 Science and +2 Culture per turn before the first city is settled. The first settled city receives a free Builder and +1 Population. The Palace grants +3 Housing and +1 Amenity.",
      "AI Agenda - Kaitiakitanga":
        "Tries to avoid contributing to climate change by not removing features, planting Woods, and founding National Parks, and likes those who do the same. Dislikes civilizations that show little concern for the environment.",
    },
    "civ-description": {
      "Civ Ability - Mana":
        "Starts with Sailing and Shipbuilding unlocked and the ability to enter Ocean tiles. +5 Combat Strength and +2 Movement for embarked units. Unimproved Woods and Rainforests grant +1 Production, increasing to +2 Production with Mercantilism and +3 Production with Conservation. +1 Food from Fishing Boats. Building a Fishing Boat triggers a Culture Bomb, claiming surrounding tiles. Resources cannot be harvested. Great Writers cannot be earned.",
      "Unique Unit": {
        description: "Toa (Melee - Classical Era) - Replaces Swordsman",
        image:
          "https://vignette.wikia.nocookie.net/civilization/images/d/df/Toa_%28Civ6%29.png/revision/latest/scale-to-width-down/44?cb=20200421200737",
      },
      "Unique Building": {
        description: "Marae (Theater Square) - Replaces Amphitheater",
        image:
          "https://vignette.wikia.nocookie.net/civilization/images/a/a9/Marae_%28Civ6%29.png/revision/latest/scale-to-width-down/44?cb=20190215172017",
      },
    },
    "dlc-modifiers": {},
    "dlc-status": "Gathering Storm Expansion",
  },
  canada1: {
    name: "Wilfrid Laurier",
    nation: "Canada",
    portrait:
      "https://vignette.wikia.nocookie.net/civilization/images/b/b0/Wilfrid_Laurier_%28Civ6%29.png/revision/latest?cb=20190219135026",
    flag: canada_icon,
    wiki: "https://civilization.fandom.com/wiki/Wilfrid_Laurier_(Civ6)",
    "leader-description": {
      "Bonus - The Last Best West":
        "Can build Farms on Tundra tiles, and on Tundra Hills tiles with Civil Engineering. Snow, Snow Hills, Tundra Hills, and Tundra tiles cost 50% less Gold to purchase. On those tiles, resources accumulate twice as fast, Mines and Lumber Mills receive +1 Production and Camps receive +1 Food.",
      "AI Agenda - Canadian Expeditionary Force":
        "Participates in Emergencies and Competitions whenever possible, and likes civilizations who do the same. Dislikes those that ignore Emergencies and Competitions.",
      "AI Religion": {
        description: "Catholicism",
        image:
          "https://vignette.wikia.nocookie.net/civilization/images/b/b1/Catholicism_Icon_%28Civ6%29.png/revision/latest/scale-to-width-down/44?cb=20200322155025",
      },
    },
    "civ-description": {
      "Civ ability - Four Faces of Peace":
        "Cannot declare Surprise Wars or war on City-States. Surprise Wars cannot be declared on Canada. For every 100 Tourism earned, gain 1 Diplomatic Favor. +100% Diplomatic Favor gained from succesfully completing Emergencies and Competitions.",
      "Unique Unit": {
        description: "Mountie (Light Cavalry - Modern Era)",
        image:
          "https://vignette.wikia.nocookie.net/civilization/images/b/b2/Mountie_%28Civ6%29.png/revision/latest/scale-to-width-down/44?cb=20200421200620",
      },
      "Unique Tile Improvement": {
        description: "Ice Hockey Rink",
        image:
          "https://vignette.wikia.nocookie.net/civilization/images/1/13/Ice_Hockey_Rink_%28Civ6%29.png/revision/latest/scale-to-width-down/44?cb=20190214193654",
      },
    },
    "dlc-modifiers": {},
    "dlc-status": "Gathering Storm Expansion",
  },
  inca1: {
    name: "Pachacuti",
    nation: "Inca",
    portrait:
      "https://vignette.wikia.nocookie.net/civilization/images/f/f2/Pachacuti_%28Civ6%29.png/revision/latest?cb=20190219134237",
    flag: inca_icon,
    wiki: "https://civilization.fandom.com/wiki/Pachacuti_(Civ6)",
    "leader-description": {
      "Bonus - Qhapaq Ñan":
        "Domestic Trade Routes gain +1 Food for every Mountain tile in the origin city. Gain the Qhapaq Ñan unique improvement with Foreign Trade.",
      "AI Agenda - Sapa Inca":
        "Tries to settle near Mountains, and likes those who leave those areas to him. Dislikes civilizations that also settle near Mountains.",
    },
    "civ-description": {
      "Civ ability - Mit'a":
        "Citizens may work Mountain tiles. Mountain tiles provide +2 Production, and +1 Food for each adjacent Terrace Farm.",
      "Unique Unit": {
        description: "Warak'aq (Recon - Medieval Era) - Replaces Skirmisher",
        image:
          "https://vignette.wikia.nocookie.net/civilization/images/2/23/Warak%27aq_%28Civ6%29.png/revision/latest/scale-to-width-down/44?cb=20200421200749",
      },
      "Unique Tile Improvement": {
        description: "Terrace Farm",
        image:
          "https://vignette.wikia.nocookie.net/civilization/images/b/b0/Terrace_Farm_%28Civ6%29.png/revision/latest/scale-to-width-down/44?cb=20190214191659",
      },
    },
    "dlc-modifiers": {},
    "dlc-status": "Gathering Storm Expansion",
  },
  mali1: {
    name: "Mansa Musa",
    nation: "Mali",
    portrait:
      "https://vignette.wikia.nocookie.net/civilization/images/7/70/Mansa_Musa_%28Civ6%29.png/revision/latest?cb=20190219134056",
    flag: mali_icon,
    wiki: "https://civilization.fandom.com/wiki/Mansa_Musa_(Civ6)",
    "leader-description": {
      "Bonus - Sahel Merchants":
        "International Trade Routes gain +1 Gold for every flat Desert tile in the sending city. Entering a Golden Age permanently grants +1 Trade Route capacity.",
      "AI Agenda - Lord of the Mines":
        "Tries to build up Gold, and likes those that also focus on Gold. Dislikes civilizations with a weak Gold output.",
      "AI Religion": {
        description: "Islam",
        image:
          "https://vignette.wikia.nocookie.net/civilization/images/4/42/Islam_Icon_%28Civ6%29.png/revision/latest/scale-to-width-down/44?cb=20200322155027",
      },
    },
    "civ-description": {
      "Civ ability - Songs of the Jeli":
        "City Centers gain +1 Faith and +1 Food for every adjacent Desert and Desert Hills tile. Mines receive -1 Production and +4 Gold. May purchase Commercial Hub buildings with Faith. -30% Production towards buildings and units.",
      "Unique Unit": {
        description:
          "Mandekalu Cavalry (Heavy Cavalry - Medieval Era) - Replaces Knight",
        image:
          "https://vignette.wikia.nocookie.net/civilization/images/e/eb/Mandekalu_Cavalry_%28Civ6%29.png/revision/latest/scale-to-width-down/44?cb=20200421191059",
      },
      "Unique District": {
        description: "Suguba - Replaces Commercial Hub",
        image:
          "https://vignette.wikia.nocookie.net/civilization/images/f/f1/Suguba_%28Civ6%29.png/revision/latest/scale-to-width-down/44?cb=20190109015215",
      },
    },
    "dlc-modifiers": {},
    "dlc-status": "Gathering Storm Expansion",
  },
  sweden1: {
    name: "Kristina",
    nation: "Sweden",
    portrait:
      "https://vignette.wikia.nocookie.net/civilization/images/3/32/Kristina_%28Civ6%29.png/revision/latest?cb=20190219134312",
    flag: sweden_icon,
    wiki: "https://civilization.fandom.com/wiki/Kristina_(Civ6)",
    "leader-description": {
      "Bonus - Minerva of the North":
        "Buildings with at least three Great Work slots and wonders with at least two Great Work slots are automatically themed when all slots are filled. Gains the Queen's Bibliotheque unique building in the Government Plaza.",
      "AI Agenda - Bibliophile":
        "Tries to collect as many Great Works as possible, and likes those who leave them to her. Dislikes civilizations with many Great Works.",
      "AI Religion": {
        description: "Protestantism",
        image:
          "https://vignette.wikia.nocookie.net/civilization/images/d/db/Protestantism_Icon_%28Civ6%29.png/revision/latest/scale-to-width-down/44?cb=20200322155028",
      },
    },
    "civ-description": {
      "Civ ability - Nobel Prize":
        "+50 Diplomatic Favor upon recruiting a Great Person. +1 Great Engineer points from Factories and +1 Great Scientist points from Universities. Sweden's presence in the game adds three unique World Congress competitions in the Industrial Era.",
      "Unique Unit": {
        description:
          "Carolean (Anti-Cavalry - Renaissance Era) - Replaces Pike and Shot (R&F)",
        image:
          "https://vignette.wikia.nocookie.net/civilization/images/d/d6/Carolean_%28Civ6%29.png/revision/latest/scale-to-width-down/44?cb=20200421200524",
      },
      "Unique Tile Improvement": {
        description: "Open-Air Museum",
        image:
          "https://vignette.wikia.nocookie.net/civilization/images/6/63/Open-Air_Museum_%28Civ6%29.png/revision/latest/scale-to-width-down/44?cb=20190821202035",
      },
    },
    "dlc-modifiers": {},
    "dlc-status": "Gathering Storm Expansion",
  },
  ottoman1: {
    name: "Suleiman",
    nation: "Ottoman",
    portrait:
      "https://vignette.wikia.nocookie.net/civilization/images/8/85/Suleiman_%28Civ6%29.png/revision/latest?cb=20190218163009",
    flag: ottoman_icon,
    wiki: "https://civilization.fandom.com/wiki/Suleiman_(Civ6)",
    "leader-description": {
      "Bonus - Grand Vizier":
        "Has access to a unique Governor, Ibrahim, the Grand Vizier. Gain the Janissary unique unit with Gunpowder.",
      "Unique Unit 1": {
        description: "Janissary (Melee - Renaissance Era) - Replaces Musketman",
        image:
          "https://vignette.wikia.nocookie.net/civilization/images/7/73/Janissary_%28Civ6%29.png/revision/latest/scale-to-width-down/44?cb=20200421200608",
      },
      "AI Agenda - Lawgiver":
        "Tries to keep his cities happy and loyal, and likes those who do the same, especially if they have taken cities from other civilizations. Dislikes those who struggle with happiness and loyalty, or that own few conquered cities.",
      "AI Religion": {
        description: "Islam",
        image:
          "https://vignette.wikia.nocookie.net/civilization/images/4/42/Islam_Icon_%28Civ6%29.png/revision/latest/scale-to-width-down/44?cb=20200322155027",
      },
    },
    "civ-description": {
      "Civ ability - Great Turkish Bombard":
        "+50% Production toward Siege units. Siege units gain +5 Combat Strength against defensible districts. Conquering a city doesn't cause that city to lose Population. +1 Amenity and +4 Loyalty per turn for cities not founded by the Ottomans.",
      "Unique Unit 2": {
        description:
          "Barbary Corsair (Naval Raider - Medieval Era) - Replaces Privateer",
        image:
          "https://vignette.wikia.nocookie.net/civilization/images/4/49/Barbary_Corsair_%28Civ6%29.png/revision/latest/scale-to-width-down/44?cb=20200421200448",
      },
      "Unique Building": {
        description: "Grand Bazaar (Commercial Hub) - Replaces Bank",
        image:
          "https://vignette.wikia.nocookie.net/civilization/images/6/6e/Grand_Bazaar_%28Civ6%29.png/revision/latest/scale-to-width-down/44?cb=20190215172113",
      },
    },
    "dlc-modifiers": {},
    "dlc-status": "Gathering Storm Expansion",
  },
  phoenicia1: {
    name: "Dido",
    nation: "Phoenicia",
    portrait:
      "https://vignette.wikia.nocookie.net/civilization/images/c/cb/Dido_%28Civ6%29.png/revision/latest?cb=20190219134030",
    flag: phoenicia_icon,
    wiki: "https://civilization.fandom.com/wiki/Dido_(Civ6)",
    "leader-description": {
      "Bonus - Founder of Carthage":
        "Cities with a Cothon gain the unique Move Capital project, which moves the Phoenician Capital capital to that city. Gains +1 Trade Route capacity after building the Government Plaza or any Government Plaza building. +50% Production towards districts in the city with the Government Plaza.",
      "AI Agenda - Sicilian Wars":
        "Wants to settle coastal cities, and likes civilizations that settle inland. Dislikes civilizations with many coastal cities.",
      "AI Religion": {
        description: "Judaism",
        image:
          "https://vignette.wikia.nocookie.net/civilization/images/7/70/Judaism_Icon_%28Civ6%29.png/revision/latest/scale-to-width-down/44?cb=20200322155027",
      },
    },
    "civ-description": {
      "Civ ability - Mediterranean Colonies":
        "Starts with the Eureka for Writing. Coastal cities founded by Phoenicia and in the same continent as their Capital always have full Loyalty. Settlers receive +2 Movement and sight radius while embarked, and pay no Movement costs to embark or disembark.",
      "Unique Unit": {
        description: "Bireme (Naval Melee - Ancient Era) - Replaces Galley",
        image:
          "https://vignette.wikia.nocookie.net/civilization/images/5/50/Bireme_%28Civ6%29.png/revision/latest/scale-to-width-down/44?cb=20200421200500",
      },
      "Unique District": {
        description: "Cothon - Replaces Harbor",
        image:
          "https://vignette.wikia.nocookie.net/civilization/images/7/72/Cothon_%28Civ6%29.png/revision/latest/scale-to-width-down/44?cb=20190130170717",
      },
    },
    "dlc-modifiers": {},
    "dlc-status": "Gathering Storm Expansion",
  },
  england2: {
    name: "Eleanor of Aquitaine",
    nation: "England",
    portrait:
      "https://vignette.wikia.nocookie.net/civilization/images/9/9d/Eleanor_of_Aquitaine_%28Civ6%29.png/revision/latest?cb=20190622074203",
    flag:
      "https://gamepedia.cursecdn.com/civ6_gamepedia_en/6/6e/Icon_civilization_england.png?version=0dc226ce4502d42bd7ee2827842ef6cc",
    wiki: "https://civilization.fandom.com/wiki/Eleanor_of_Aquitaine_(Civ6)",
    "leader-description": {
      "Bonus - Court of Love":
        "Each Great Work in her cities causes foreign cities within 9 tiles to lose 1 Loyalty per turn. Any foreign city that leaves its civilization due to loss of Loyalty and is receiving the most Loyalty pressure from Eleanor instantly joins her empire, instead of becoming a Free City.",
      "AI Agenda - Angevin Empire":
        "Builds up the Population of her cities, and likes those whose nearby cities also have a high Population. Dislikes civilizations whose nearby cities have low Population.",
      "AI Religion": {
        description: "Catholicism",
        image:
          "https://vignette.wikia.nocookie.net/civilization/images/b/b1/Catholicism_Icon_%28Civ6%29.png/revision/latest/scale-to-width-down/44?cb=20200322155025",
      },
    },
    "civ-description": {
      "Civ ability - Workshop of the World":
        "Iron and Coal Mines accumulate +2 resources per turn. +100% Production towards Military Engineers. Military Engineers receive +2 charges. Buildings that provide additional yields when powered receive +4 of their respective yields. +20% Production towards Industrial Zone buildings. Harbor buildings grant +10 Strategic Resource stockpiles.",
      "Unique Unit": {
        description:
          "Sea Dog (Naval Raider - Renaissance Era) - Replaces Privateer",
        image:
          "https://vignette.wikia.nocookie.net/civilization/images/3/33/Sea_Dog_%28Civ6%29.png/revision/latest/scale-to-width-down/44?cb=20161127202842",
      },
      "Unique District": {
        description: "Royal Navy Dockyard - Replaces Harbor",
        image:
          "https://vignette.wikia.nocookie.net/civilization/images/5/5a/Royal_Navy_Dockyard_%28Civ6%29.png/revision/latest/scale-to-width-down/44?cb=20180220014247",
      },
    },
    "dlc-modifiers": {},
    "dlc-status": "Gathering Storm Expansion",
  },
  france2: {
    name: "Eleanor of Aquitaine",
    nation: "France",
    portrait:
      "https://vignette.wikia.nocookie.net/civilization/images/7/7a/Eleanor_of_Aquitaine_%28French%29_%28Civ6%29.png/revision/latest?cb=20190219134818",
    flag:
      "https://gamepedia.cursecdn.com/civ6_gamepedia_en/d/d8/Icon_civilization_france.png?version=b115e90d972f99f73883f4a60f0a494c",
    wiki: "https://civilization.fandom.com/wiki/Eleanor_of_Aquitaine_(Civ6)",
    "leader-description": {
      "Bonus - Court of Love":
        "Each Great Work in her cities causes foreign cities within 9 tiles to lose 1 Loyalty per turn. Any foreign city that leaves its civilization due to loss of Loyalty and is receiving the most Loyalty pressure from Eleanor instantly joins her empire, instead of becoming a Free City.",
      "AI Agenda - Angevin Empire":
        "Builds up the Population of her cities, and likes those whose nearby cities also have a high Population. Dislikes civilizations whose nearby cities have low Population.",
      "AI Religion": {
        description: "Catholicism",
        image:
          "https://vignette.wikia.nocookie.net/civilization/images/b/b1/Catholicism_Icon_%28Civ6%29.png/revision/latest/scale-to-width-down/44?cb=20200322155025",
      },
    },
    "civ-description": {
      "Civ Ability - Grand Tour":
        "+20% Production towards Medieval, Renaissance, and Industrial Wonders. Double Tourism from all Wonders.",
      "Unique Unit": {
        description: "Garde Impériale (Melee - Industrial Era)",
        image:
          "https://vignette.wikia.nocookie.net/civilization/images/7/74/Garde_Imp%C3%A9riale_%28Civ6%29.png/revision/latest/scale-to-width-down/44?cb=20161106211928",
      },
      "Unique Tile Improvement": {
        description: "Château",
        image:
          "https://vignette.wikia.nocookie.net/civilization/images/1/1f/Ch%C3%A2teau_%28Civ6%29.png/revision/latest/scale-to-width-down/44?cb=20161109234422",
      },
    },
    "dlc-modifiers": {},
    "dlc-status": "Gathering Storm Expansion",
  },
  colombia1: {
    name: "Simón Bolívar",
    nation: "Gran Colombia",
    portrait:
      "https://vignette.wikia.nocookie.net/civilization/images/9/9d/Sim%C3%B3n_Bol%C3%ADvar_%28Civ6%29.png/revision/latest?cb=20200523004935",
    flag: gran_colombia_icon,
    wiki: "https://civilization.fandom.com/wiki/Sim%C3%B3n_Bol%C3%ADvar_(Civ6)",
    "leader-description": {
      "Bonus - Campaña Admirable":
        "Entering a new era grants a Comandante General, a unique type of Great Person.",
      "AI Agenda - Carabobo":
        "Focuses on promoting his units by building many Encampments, and likes civilizations with many promoted units. Dislikes civilizations without an elite, highly-promoted army.",
      "AI Religion": {
        description: "Catholicism",
        image:
          "https://vignette.wikia.nocookie.net/civilization/images/b/b1/Catholicism_Icon_%28Civ6%29.png/revision/latest/scale-to-width-down/44?cb=20200322155025",
      },
    },
    "civ-description": {
      "Civ ability - Ejército Patriota":
        "+1 Movement for all units. Promoting a unit does not end that unit's turn.",
      "Unique Unit": {
        description: "Llanero (Light Cavalry - Industrial Era)",
        image:
          "https://vignette.wikia.nocookie.net/civilization/images/a/a0/Llanero_%28Civ6%29.png/revision/latest/scale-to-width-down/44?cb=20200528105459",
      },
      "Unique Tile Improvement": {
        description: "Hacienda",
        image:
          "https://vignette.wikia.nocookie.net/civilization/images/e/ea/Hacienda_%28Civ6%29.png/revision/latest/scale-to-width-down/44?cb=20200522050000",
      },
    },
    "dlc-modifiers": {},
    "dlc-status": "Frontier Pass",
  },
  maya1: {
    name: "Lady Six Sky",
    nation: "Maya",
    portrait:
      "https://vignette.wikia.nocookie.net/civilization/images/7/77/Lady_Six_Sky_%28Civ6%29.png/revision/latest?cb=20200523012819",
    flag: maya_icon,
    wiki: "https://civilization.fandom.com/wiki/Lady_Six_Sky_(Civ6)",
    "leader-description": {
      "Bonus - Ix Mutal Ajaw":
        "Non-capital cities gain +10% to all yields if within six tiles of the Mayan Capital, and -15% to all yields if more than six tiles away. +5 Combat Strength for all units within six tiles of the Mayan Capital.",
      "AI Agenda - Solitary":
        "Keeps her cities clustered around her Capital, and likes civilizations who settle far from her. Dislikes those who encroach upon her borders with cities or troops.",
    },
    "civ-description": {
      "Civ ability - Mayab":
        "Cities don't receive additional Housing from being adjacent to fresh water or coast. Cities gain +1 Amenity for each Luxury Resource adjacent to the City Center. Farms grant +1 Housing and +1 Gold.",
      "Unique Unit": {
        description: "Hul'che (Ranged - Ancient Era) - Replaces Archer",
        image:
          "https://vignette.wikia.nocookie.net/civilization/images/f/f4/Hul%27che_%28Civ6%29.png/revision/latest/scale-to-width-down/44?cb=20200528105458",
      },
      "Unique District": {
        description: "Observatory - Replaces Campus",
        image:
          "https://vignette.wikia.nocookie.net/civilization/images/8/86/Observatory_%28Civ6%29.png/revision/latest/scale-to-width-down/44?cb=20200514171315",
      },
    },
    "dlc-modifiers": {},
    "dlc-status": "Frontier Pass",
  },
  ethiopia1: {
    name: "Menelik II",
    nation: "Ethiopia",
    portrait:
      "https://vignette.wikia.nocookie.net/civilization/images/9/97/Menelik_II_%28Civ6%29.png/revision/latest?cb=20200723182638",
    flag: ethiopia_icon,
    wiki: "https://civilization.fandom.com/wiki/Menelik_II_(Civ6)",
    "leader-description": {
      "Bonus - Council of Ministers":
        "Ethiopian cities founded on Hills receive Science and Culture equal to 15% of their Faith output. +4 Combat Strength for all units when fighting on Hills.",
      "AI Agenda - Ethiopian Highlands":
        "Tries to settle cities on Hills, and likes civilizations who avoid settling near Hills. Dislikes civilizations that settle around Hills.",
      "AI Religion": {
        description: "Eastern Orthodoxy",
        image:
          "https://vignette.wikia.nocookie.net/civilization/images/5/51/Eastern_Orthodoxy_Icon_%28Civ6%29.png/revision/latest/scale-to-width-down/44?cb=20200322155026",
      },
    },
    "civ-description": {
      "Civ ability - Aksumite Legacy":
        "+1 Faith from improved resources. International Trade Routes grant +0.5 Faith for each resource in the origin city. Can purchase Archaeologists and Archaeological Museums with Faith.",
      "Unique Unit": {
        description:
          "Oromo Cavalry (Light Cavalry - Medieval Era) - Replaces Courser",
        image:
          "https://vignette.wikia.nocookie.net/civilization/images/d/d3/Oromo_Cavalry_%28Civ6%29.png/revision/latest/scale-to-width-down/44?cb=20200723184545",
      },
      "Unique Tile Improvement": {
        description: "Rock-Hewn Church",
        image:
          "https://vignette.wikia.nocookie.net/civilization/images/a/a7/Rock-Hewn_Church_%28Civ6%29.png/revision/latest/scale-to-width-down/44?cb=20200723190751",
      },
    },
    "dlc-modifiers": {},
    "dlc-status": "Frontier Pass",
  },
};
