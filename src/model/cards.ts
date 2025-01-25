import { Card } from "./card";
import { CardColor } from "./card-color";
import { CardPosition } from "./card-position";

export const cards: { [key: string]: Card } = {
    "Baumsproessling": {
        "speci": "SAMPLING",
        "color": CardColor.NONE,
        "position": CardPosition.BASE
    },
    "Linde": {
        "speci": "LINDEN",
        "color": CardColor.LINDEN,
        "position": CardPosition.BASE
    },
    "Eiche": {
        "speci": "OAK",
        "color": CardColor.OAK,
        "position": CardPosition.BASE
    },
    "Tanne": {
        "speci": "SILVER_FIR",
        "color": CardColor.SILVER_FIR,
        "position": CardPosition.BASE
    },
    "Birke": {
        "speci": "BIRCH",
        "color": CardColor.BIRCH,
        "position": CardPosition.BASE,
        // card_FS: cards.beech
    },
    "Buche": {
        "speci": "BEECH",
        "color": CardColor.BEECH,
        "position": CardPosition.BASE
    },
    "Ahorn": {
        "speci": "SYCAMORE",
        "color": CardColor.SYCAMORE,
        "position": CardPosition.BASE
    },
    "Douglasie": {
        "speci": "DOUGLAS_FIR",
        "color": CardColor.DOUGLAS_FIR,
        "position": CardPosition.BASE
    },
    "Kastanie": {
        "speci": "HORSE_CHESTNUT",
        "color": CardColor.HORSE_CHESTNUT,
        "position": CardPosition.BASE
    },
    "Feldhase_Left_Yellow": {
        "speci": "EUROPEAN_HARE",
        "color": CardColor.LINDEN,
        "position": CardPosition.LEFT
    },
    "Dachs_Right_Grey": {
        "speci": "EUROPEAN_BADGER",
        "color": CardColor.DOUGLAS_FIR,
        "position": CardPosition.RIGHT
    },
    "Feldhase_Left_Brown": {
        "speci": "EUROPEAN_HARE",
        "color": CardColor.OAK,
        "position": CardPosition.LEFT
    },
    "Hufeisennase_Right_Yellow": {
        "speci": "GREATER_HORSESHOE_BAT",
        "color": CardColor.LINDEN,
        "position": CardPosition.RIGHT
    },
    "Feldhase_Left_Blue": {
        "speci": "EUROPEAN_HARE",
        "color": CardColor.SILVER_FIR,
        "position": CardPosition.LEFT
    },
    "Fuchs_Right_Brown": {
        "speci": "RED_FOX",
        "color": CardColor.OAK,
        "position": CardPosition.RIGHT
    },
    "Waschbaer_Left_Grey": {
        "speci": "RACCOON",
        "color": CardColor.DOUGLAS_FIR,
        "position": CardPosition.LEFT
    },
    "Feldhase_Right_Red": {
        "speci": "EUROPEAN_HARE",
        "color": CardColor.SYCAMORE,
        "position": CardPosition.RIGHT
    },
    "Wildschwein_Left_Red": {
        "speci": "WILD_BOAR",
        "color": CardColor.SYCAMORE,
        "position": CardPosition.LEFT
    },
    "Feldhase_Right_Blue": {
        "speci": "EUROPEAN_HARE",
        "color": CardColor.SILVER_FIR,
        "position": CardPosition.RIGHT
    },
    "Braunes-Langohr_Left_Red": {
        "speci": "BROWN_LONG_EARED_BAT",
        "color": CardColor.SYCAMORE,
        "position": CardPosition.LEFT
    },
    "Feldhase_Right_Yellow": {
        "speci": "EUROPEAN_HARE",
        "color": CardColor.LINDEN,
        "position": CardPosition.RIGHT
    },
    "Waschbaer_Left_Blue": {
        "speci": "RACCOON",
        "color": CardColor.SILVER_FIR,
        "position": CardPosition.LEFT
    },
    "Reh_Right_Green": {
        "speci": "ROE_DEER",
        "color": CardColor.BEECH,
        "position": CardPosition.RIGHT
    },
    "Mopsfledermaus_Left_Orange": {
        "speci": "BARBASTELLE_BAT",
        "color": CardColor.HORSE_CHESTNUT,
        "position": CardPosition.LEFT
    },
    "Wildschwein_Right_Brown": {
        "speci": "WILD_BOAR",
        "color": CardColor.OAK,
        "position": CardPosition.RIGHT
    },
    "Braunbaer_Left_Yellow": {
        "speci": "BROWN_BEAR",
        "color": CardColor.LINDEN,
        "position": CardPosition.LEFT
    },
    "Waschbaer_Right_Blue": {
        "speci": "RACCOON",
        "color": CardColor.SILVER_FIR,
        "position": CardPosition.RIGHT
    },
    "Steinmarder_Left_Red": {
        "speci": "BEECH_MARTEN",
        "color": CardColor.SYCAMORE,
        "position": CardPosition.LEFT
    },
    "Braunbaer_Right_Orange": {
        "speci": "BROWN_BEAR",
        "color": CardColor.HORSE_CHESTNUT,
        "position": CardPosition.RIGHT
    },
    "Rothirsch_Left_Yellow": {
        "speci": "RED_DEER",
        "color": CardColor.LINDEN,
        "position": CardPosition.LEFT
    },
    "Braunbaer_Right_Green": {
        "speci": "BROWN_BEAR",
        "color": CardColor.BEECH,
        "position": CardPosition.RIGHT
    },
    "Mopsfledermaus_Left_Blue": {
        "speci": "BARBASTELLE_BAT",
        "color": CardColor.SILVER_FIR,
        "position": CardPosition.LEFT
    },
    "Steinmarder_Right_Orange": {
        "speci": "BEECH_MARTEN",
        "color": CardColor.HORSE_CHESTNUT,
        "position": CardPosition.RIGHT
    },
    "Luchs_Left_Grey": {
        "speci": "LYNX",
        "color": CardColor.DOUGLAS_FIR,
        "position": CardPosition.LEFT
    },
    "Feldhase_Right_LightGreen": {
        "speci": "EUROPEAN_HARE",
        "color": CardColor.BIRCH,
        "position": CardPosition.RIGHT
    },
    "Wildschwein_Left_LightGreen": {
        "speci": "WILD_BOAR",
        "color": CardColor.BIRCH,
        "position": CardPosition.LEFT
    },
    "Steinmarder_Right_Brown": {
        "speci": "BEECH_MARTEN",
        "color": CardColor.OAK,
        "position": CardPosition.RIGHT
    },
    "Dachs_Left_Orange": {
        "speci": "EUROPEAN_BADGER",
        "color": CardColor.HORSE_CHESTNUT,
        "position": CardPosition.LEFT
    },
    "Stechmuecke_Right_Brown": {
        "speci": "GNAT",
        "color": CardColor.OAK,
        "position": CardPosition.RIGHT
    },
    "Fuchs_Left_Yellow": {
        "speci": "RED_FOX",
        "color": CardColor.LINDEN,
        "position": CardPosition.LEFT
    },
    "Holzbiene_Right_Grey": {
        "speci": "VIOLET_CARPENTER_BEE",
        "color": CardColor.DOUGLAS_FIR,
        "position": CardPosition.RIGHT
    },
    "Reh_Right_Orange": {
        "speci": "ROE_DEER",
        "color": CardColor.HORSE_CHESTNUT,
        "position": CardPosition.RIGHT
    },
    "Damhirsch_Left_Yellow": {
        "speci": "FALLOW_DEER",
        "color": CardColor.LINDEN,
        "position": CardPosition.LEFT
    },
    "Wildschwein_Right_Grey": {
        "speci": "WILD_BOAR",
        "color": CardColor.DOUGLAS_FIR,
        "position": CardPosition.RIGHT
    },
    "Reh_Right_LightGreen": {
        "speci": "ROE_DEER",
        "color": CardColor.BIRCH,
        "position": CardPosition.RIGHT
    },
    "Rothirsch_Left_Blue": {
        "speci": "RED_DEER",
        "color": CardColor.SILVER_FIR,
        "position": CardPosition.LEFT
    },
    "Damhirsch_Right_Red": {
        "speci": "FALLOW_DEER",
        "color": CardColor.SYCAMORE,
        "position": CardPosition.RIGHT
    },
    "Holzbiene_Left_Grey": {
        "speci": "VIOLET_CARPENTER_BEE",
        "color": CardColor.DOUGLAS_FIR,
        "position": CardPosition.LEFT
    },
    "Luchs_Right_Green": {
        "speci": "LYNX",
        "color": CardColor.BEECH,
        "position": CardPosition.RIGHT
    },
    "Siebenschlaefer_Left_Green": {
        "speci": "EUROPEAN_FAT_DORMOUSE",
        "color": CardColor.BEECH,
        "position": CardPosition.LEFT
    },
    "Mopsfledermaus_Right_Brown": {
        "speci": "BARBASTELLE_BAT",
        "color": CardColor.OAK,
        "position": CardPosition.RIGHT
    },
    "Hufeisennase_Left_Green": {
        "speci": "GREATER_HORSESHOE_BAT",
        "color": CardColor.BEECH,
        "position": CardPosition.LEFT
    },
    "Siebenschlaefer_Right_Grey": {
        "speci": "EUROPEAN_FAT_DORMOUSE",
        "color": CardColor.DOUGLAS_FIR,
        "position": CardPosition.RIGHT
    },
    "Wolf_Right_Blue": {
        "speci": "WOLF",
        "color": CardColor.SILVER_FIR,
        "position": CardPosition.RIGHT
    },
    "Siebenschlaefer_Left_Blue": {
        "speci": "EUROPEAN_FAT_DORMOUSE",
        "color": CardColor.SILVER_FIR,
        "position": CardPosition.LEFT
    },
    "Braunes-Langohr_Right_Green": {
        "speci": "BROWN_LONG_EARED_BAT",
        "color": CardColor.BEECH,
        "position": CardPosition.RIGHT
    },
    "Bechsteinfledermaus_Left_Green": {
        "speci": "BECHSTEIN",
        "color": CardColor.BEECH,
        "position": CardPosition.LEFT
    },
    "Siebenschlaefer_Right_Brown": {
        "speci": "EUROPEAN_FAT_DORMOUSE",
        "color": CardColor.OAK,
        "position": CardPosition.RIGHT
    },
    "Stechmuecke_Left_LightGreen": {
        "speci": "GNAT",
        "color": CardColor.BIRCH,
        "position": CardPosition.LEFT
    },
    "Wolf_Left_Grey": {
        "speci": "WOLF",
        "color": CardColor.DOUGLAS_FIR,
        "position": CardPosition.LEFT
    },
    "Stechmuecke_Right_Orange": {
        "speci": "GNAT",
        "color": CardColor.HORSE_CHESTNUT,
        "position": CardPosition.RIGHT
    },
    "Reh_Left_Yellow": {
        "speci": "ROE_DEER",
        "color": CardColor.LINDEN,
        "position": CardPosition.LEFT
    },
    "Frischling_Right_Red": {
        "speci": "SQUEAKER",
        "color": CardColor.SYCAMORE,
        "position": CardPosition.RIGHT
    },
    "Bechsteinfledermaus_Left_Brown": {
        "speci": "BECHSTEIN",
        "color": CardColor.OAK,
        "position": CardPosition.LEFT
    },
    "Reh_Left_Blue": {
        "speci": "ROE_DEER",
        "color": CardColor.SILVER_FIR,
        "position": CardPosition.LEFT
    },
    "Luchs_Right_Yellow": {
        "speci": "LYNX",
        "color": CardColor.LINDEN,
        "position": CardPosition.RIGHT
    },
    "Steinmarder_Left_Green": {
        "speci": "BEECH_MARTEN",
        "color": CardColor.BEECH,
        "position": CardPosition.LEFT
    },
    "Bechsteinfledermaus_Right_LightGreen": {
        "speci": "BECHSTEIN",
        "color": CardColor.BIRCH,
        "position": CardPosition.RIGHT
    },
    "Feldhase_Left_Green": {
        "speci": "EUROPEAN_HARE",
        "color": CardColor.BEECH,
        "position": CardPosition.LEFT
    },
    "Rothirsch_Right_Orange": {
        "speci": "RED_DEER",
        "color": CardColor.HORSE_CHESTNUT,
        "position": CardPosition.RIGHT
    },
    "Wolf_Left_Red": {
        "speci": "WOLF",
        "color": CardColor.SYCAMORE,
        "position": CardPosition.LEFT
    },
    "Frischling_Left_Orange": {
        "speci": "SQUEAKER",
        "color": CardColor.HORSE_CHESTNUT,
        "position": CardPosition.LEFT
    },
    "Rothirsch_Right_Brown": {
        "speci": "RED_DEER",
        "color": CardColor.OAK,
        "position": CardPosition.RIGHT
    },
    "Fuchs_Left_Green": {
        "speci": "RED_FOX",
        "color": CardColor.BEECH,
        "position": CardPosition.LEFT
    },
    "Frischling_Right_Brown": {
        "speci": "SQUEAKER",
        "color": CardColor.OAK,
        "position": CardPosition.RIGHT
    },
    "Waschbaer_Right_LightGreen": {
        "speci": "RACCOON",
        "color": CardColor.BIRCH,
        "position": CardPosition.RIGHT
    },
    "Frischling_Left_Brown": {
        "speci": "SQUEAKER",
        "color": CardColor.OAK,
        "position": CardPosition.LEFT
    },
    "Luchs_Right_Blue": {
        "speci": "LYNX",
        "color": CardColor.SILVER_FIR,
        "position": CardPosition.RIGHT
    },
    "Feldhase_Left_LightGreen": {
        "speci": "EUROPEAN_HARE",
        "color": CardColor.BIRCH,
        "position": CardPosition.LEFT
    },
    "Luchs_Left_Orange": {
        "speci": "LYNX",
        "color": CardColor.HORSE_CHESTNUT,
        "position": CardPosition.LEFT
    },
    "Fuchs_Right_Grey": {
        "speci": "RED_FOX",
        "color": CardColor.DOUGLAS_FIR,
        "position": CardPosition.RIGHT
    },
    "Holzbiene_Left_Blue": {
        "speci": "VIOLET_CARPENTER_BEE",
        "color": CardColor.SILVER_FIR,
        "position": CardPosition.LEFT
    },
    "Damhirsch_Right_LightGreen": {
        "speci": "FALLOW_DEER",
        "color": CardColor.BIRCH,
        "position": CardPosition.RIGHT
    },
    "Habicht_Grey": {
        "speci": "GOSHAWK",
        "color": CardColor.DOUGLAS_FIR,
        "position": CardPosition.TOP
    },
    "Moos_Yellow": {
        "speci": "MOSS",
        "color": CardColor.LINDEN,
        "position": CardPosition.BOTTOM
    },
    "Buntspecht_Yellow": {
        "speci": "GREAT_SPOTTED_WOODPECKER",
        "color": CardColor.LINDEN,
        "position": CardPosition.TOP
    },
    "Waldameise_LightGreen": {
        "speci": "WOOD_ANT",
        "color": CardColor.BIRCH,
        "position": CardPosition.BOTTOM
    },
    "Buchfink_LightGreen": {
        "speci": "CHAFFINCH",
        "color": CardColor.BIRCH,
        "position": CardPosition.TOP
    },
    "Waldameise_Green": {
        "speci": "WOOD_ANT",
        "color": CardColor.BEECH,
        "position": CardPosition.BOTTOM
    },
    "Waldkauz_Green": {
        "speci": "TAWNY_OWL",
        "color": CardColor.BEECH,
        "position": CardPosition.TOP
    },
    "Hirschkaefer_Red": {
        "speci": "STAG_BEETLE",
        "color": CardColor.SYCAMORE,
        "position": CardPosition.BOTTOM
    },
    "Kaisermantel_Brown": {
        "speci": "SILVER_WASHED_FRITILLARY",
        "color": CardColor.OAK,
        "position": CardPosition.TOP
    },
    "Feuersalamander_Orange": {
        "speci": "FIRE_SALAMANDER",
        "color": CardColor.HORSE_CHESTNUT,
        "position": CardPosition.BOTTOM
    },
    "Schillerfalter_Orange": {
        "speci": "PURPLE_EMPEROR",
        "color": CardColor.HORSE_CHESTNUT,
        "position": CardPosition.TOP
    },
    "Sumpfschildkroete_Red": {
        "speci": "POND_TURTLE",
        "color": CardColor.SYCAMORE,
        "position": CardPosition.BOTTOM
    },
    "Trauermantel_Red": {
        "speci": "CAMBERWELL_BEAUTY",
        "color": CardColor.SYCAMORE,
        "position": CardPosition.TOP
    },
    "Sumpfschildkroete_LightGreen": {
        "speci": "POND_TURTLE",
        "color": CardColor.BIRCH,
        "position": CardPosition.BOTTOM
    },
    "Groser-Fuchs_Blue": {
        "speci": "LARGE_TORTOISESHELL",
        "color": CardColor.SILVER_FIR,
        "position": CardPosition.TOP
    },
    "Feuersalamander_Grey": {
        "speci": "FIRE_SALAMANDER",
        "color": CardColor.DOUGLAS_FIR,
        "position": CardPosition.BOTTOM
    },
    "Gimpel_Grey": {
        "speci": "BULLFINCH",
        "color": CardColor.DOUGLAS_FIR,
        "position": CardPosition.TOP
    },
    "Laubfrosch_Yellow": {
        "speci": "TREE_FROG",
        "color": CardColor.LINDEN,
        "position": CardPosition.BOTTOM
    },
    "Buchfink_Red": {
        "speci": "CHAFFINCH",
        "color": CardColor.SYCAMORE,
        "position": CardPosition.TOP
    },
    "Hirschkaefer_LightGreen": {
        "speci": "STAG_BEETLE",
        "color": CardColor.BIRCH,
        "position": CardPosition.BOTTOM
    },
    "Habicht_Blue": {
        "speci": "GOSHAWK",
        "color": CardColor.SILVER_FIR,
        "position": CardPosition.TOP
    },
    "Erdkroete_Brown": {
        "speci": "COMMON_TOAD",
        "color": CardColor.OAK,
        "position": CardPosition.BOTTOM
    },
    "Eichelhaeher_LightGreen": {
        "speci": "EURASIAN_JAY",
        "color": CardColor.BIRCH,
        "position": CardPosition.TOP
    },
    "Baumfarn_Orange": {
        "speci": "TREE_FERNS",
        "color": CardColor.HORSE_CHESTNUT,
        "position": CardPosition.BOTTOM
    },
    "Walderdbeeren_Red": {
        "speci": "WILD_STRAWBERRIES",
        "color": CardColor.SYCAMORE,
        "position": CardPosition.BOTTOM
    },
    "Brombeeren_Blue": {
        "speci": "BLACKBERRIES",
        "color": CardColor.SILVER_FIR,
        "position": CardPosition.BOTTOM
    },
    "Moos_Grey": {
        "speci": "MOSS",
        "color": CardColor.DOUGLAS_FIR,
        "position": CardPosition.BOTTOM
    },
    "Gluehwuermchen_Yellow": {
        "speci": "FIREFLIES",
        "color": CardColor.LINDEN,
        "position": CardPosition.BOTTOM
    },
    "Brombeeren_LightGreen": {
        "speci": "BLACKBERRIES",
        "color": CardColor.BIRCH,
        "position": CardPosition.BOTTOM
    },
    "Igel_Green": {
        "speci": "HEDGEHOG",
        "color": CardColor.BEECH,
        "position": CardPosition.BOTTOM
    },
    "Tagpfauenauge_Blue": {
        "speci": "PEACOCK_BUTTERFLY",
        "color": CardColor.SILVER_FIR,
        "position": CardPosition.TOP
    },
    "Igel_Brown": {
        "speci": "HEDGEHOG",
        "color": CardColor.OAK,
        "position": CardPosition.BOTTOM
    },
    "Eichhoernchen_Grey": {
        "speci": "RED_SQUIRREL",
        "color": CardColor.DOUGLAS_FIR,
        "position": CardPosition.TOP
    },
    "Erdkroete_Orange": {
        "speci": "COMMON_TOAD",
        "color": CardColor.HORSE_CHESTNUT,
        "position": CardPosition.BOTTOM
    },
    "Eichhoernchen_Orange": {
        "speci": "RED_SQUIRREL",
        "color": CardColor.HORSE_CHESTNUT,
        "position": CardPosition.TOP
    },
    "Gluehwuermchen_Red": {
        "speci": "FIREFLIES",
        "color": CardColor.SYCAMORE,
        "position": CardPosition.BOTTOM
    },
    "Buchfink_Green": {
        "speci": "CHAFFINCH",
        "color": CardColor.BEECH,
        "position": CardPosition.TOP
    },
    "Erdkroete_Blue": {
        "speci": "COMMON_TOAD",
        "color": CardColor.SILVER_FIR,
        "position": CardPosition.BOTTOM
    },
    "Gluehwuermchen_Grey": {
        "speci": "FIREFLIES",
        "color": CardColor.DOUGLAS_FIR,
        "position": CardPosition.BOTTOM
    },
    "Kaisermantel_Green": {
        "speci": "SILVER_WASHED_FRITILLARY",
        "color": CardColor.BEECH,
        "position": CardPosition.TOP
    },
    "Tagpfauenauge_Brown": {
        "speci": "PEACOCK_BUTTERFLY",
        "color": CardColor.OAK,
        "position": CardPosition.TOP
    },
    "Pfifferling_Blue": {
        "speci": "CHANTERELLE",
        "color": CardColor.SILVER_FIR,
        "position": CardPosition.BOTTOM
    },
    "Tagpfauenauge_Orange": {
        "speci": "PEACOCK_BUTTERFLY",
        "color": CardColor.HORSE_CHESTNUT,
        "position": CardPosition.TOP
    },
    "Gluehwuermchen_Green": {
        "speci": "FIREFLIES",
        "color": CardColor.BEECH,
        "position": CardPosition.BOTTOM
    },
    "Groser-Fuchs_Red": {
        "speci": "LARGE_TORTOISESHELL",
        "color": CardColor.SYCAMORE,
        "position": CardPosition.TOP
    },
    "Maulwurf_Brown": {
        "speci": "MOLE",
        "color": CardColor.OAK,
        "position": CardPosition.BOTTOM
    },
    "Igel_Orange": {
        "speci": "HEDGEHOG",
        "color": CardColor.HORSE_CHESTNUT,
        "position": CardPosition.BOTTOM
    },
    "Buntspecht_Grey": {
        "speci": "GREAT_SPOTTED_WOODPECKER",
        "color": CardColor.DOUGLAS_FIR,
        "position": CardPosition.TOP
    },
    "Eichelhaeher_Red": {
        "speci": "EURASIAN_JAY",
        "color": CardColor.SYCAMORE,
        "position": CardPosition.TOP
    },
    "Fliegenpilz_Blue": {
        "speci": "FLY_AGARIC",
        "color": CardColor.SILVER_FIR,
        "position": CardPosition.BOTTOM
    },
    "Waldkauz_LightGreen": {
        "speci": "TAWNY_OWL",
        "color": CardColor.BIRCH,
        "position": CardPosition.TOP
    },
    "Steinpilz_Grey": {
        "speci": "PENNY_BUN",
        "color": CardColor.DOUGLAS_FIR,
        "position": CardPosition.BOTTOM
    },
    "Eichhoernchen_Green": {
        "speci": "RED_SQUIRREL",
        "color": CardColor.BEECH,
        "position": CardPosition.TOP
    },
    "Feuersalamander_Yellow": {
        "speci": "FIRE_SALAMANDER",
        "color": CardColor.LINDEN,
        "position": CardPosition.BOTTOM
    },
    "Schillerfalter_LightGreen": {
        "speci": "PURPLE_EMPEROR",
        "color": CardColor.BIRCH,
        "position": CardPosition.TOP
    },
    "Laubfrosch_Brown": {
        "speci": "TREE_FROG",
        "color": CardColor.OAK,
        "position": CardPosition.BOTTOM
    },
    "Tagpfauenauge_Yellow": {
        "speci": "PEACOCK_BUTTERFLY",
        "color": CardColor.LINDEN,
        "position": CardPosition.TOP
    },
    "Erdkroete_Green": {
        "speci": "COMMON_TOAD",
        "color": CardColor.BEECH,
        "position": CardPosition.BOTTOM
    },
    "Trauermantel_LightGreen": {
        "speci": "CAMBERWELL_BEAUTY",
        "color": CardColor.BIRCH,
        "position": CardPosition.TOP
    },
    "Parasol_Orange": {
        "speci": "PARASOL_MUSHROOM",
        "color": CardColor.HORSE_CHESTNUT,
        "position": CardPosition.BOTTOM
    },
    "Habicht_Brown": {
        "speci": "GOSHAWK",
        "color": CardColor.OAK,
        "position": CardPosition.TOP
    },
    "Erdkroete_Red": {
        "speci": "COMMON_TOAD",
        "color": CardColor.SYCAMORE,
        "position": CardPosition.BOTTOM
    },
    "Eichelhaeher_Orange": {
        "speci": "EURASIAN_JAY",
        "color": CardColor.HORSE_CHESTNUT,
        "position": CardPosition.TOP
    },
    "Baumfarn_Blue": {
        "speci": "TREE_FERNS",
        "color": CardColor.SILVER_FIR,
        "position": CardPosition.BOTTOM
    },
    "Waldkauz_Red": {
        "speci": "TAWNY_OWL",
        "color": CardColor.SYCAMORE,
        "position": CardPosition.TOP
    },
    "Erdkroete_Grey": {
        "speci": "COMMON_TOAD",
        "color": CardColor.DOUGLAS_FIR,
        "position": CardPosition.BOTTOM
    },
    "Gimpel_Blue": {
        "speci": "BULLFINCH",
        "color": CardColor.SILVER_FIR,
        "position": CardPosition.TOP
    },
    "Baumfarn_Yellow": {
        "speci": "TREE_FERNS",
        "color": CardColor.LINDEN,
        "position": CardPosition.BOTTOM
    },
    "Eichhoernchen_Brown": {
        "speci": "RED_SQUIRREL",
        "color": CardColor.OAK,
        "position": CardPosition.TOP
    },
    "Walderdbeeren_LightGreen": {
        "speci": "WILD_STRAWBERRIES",
        "color": CardColor.BIRCH,
        "position": CardPosition.BOTTOM
    },
    "Brombeeren_Green": {
        "speci": "BLACKBERRIES",
        "color": CardColor.BEECH,
        "position": CardPosition.BOTTOM
    },
    "Schillerfalter_Yellow": {
        "speci": "PURPLE_EMPEROR",
        "color": CardColor.LINDEN,
        "position": CardPosition.TOP
    },
    "Fliegenpilz_Brown": {
        "speci": "FLY_AGARIC",
        "color": CardColor.OAK,
        "position": CardPosition.BOTTOM
    },
    "Trauermantel_Orange": {
        "speci": "CAMBERWELL_BEAUTY",
        "color": CardColor.HORSE_CHESTNUT,
        "position": CardPosition.TOP
    },
    "Pfifferling_LightGreen": {
        "speci": "CHANTERELLE",
        "color": CardColor.BIRCH,
        "position": CardPosition.BOTTOM
    },
    "Groser-Fuchs_Green": {
        "speci": "LARGE_TORTOISESHELL",
        "color": CardColor.BEECH,
        "position": CardPosition.TOP
    },
    "Maulwurf_Red": {
        "speci": "MOLE",
        "color": CardColor.SYCAMORE,
        "position": CardPosition.BOTTOM
    },
    "Parasol_Blue": {
        "speci": "PARASOL_MUSHROOM",
        "color": CardColor.SILVER_FIR,
        "position": CardPosition.BOTTOM
    },
    "Europaeische-Laerche": {
        "speci": "LARIX",
        "color": CardColor.LARIX,
        "position": CardPosition.BASE
    },
    "Zirbelkiefer": {
        "speci": "PINUS",
        "color": CardColor.PINUS,
        "position": CardPosition.BASE
    },
    "Alpenmurmeltier_Left_Green": {
        "speci": "MARMOTA_MARMOTA",
        "color": CardColor.BEECH,
        "position": CardPosition.LEFT
    },
    "Gaemse_Right_Pink": {
        "speci": "RUPICAPRA_RUPICAPRA",
        "color": CardColor.PINUS,
        "position": CardPosition.RIGHT
    },
    "Alpenmurmeltier_Left_Lila": {
        "speci": "MARMOTA_MARMOTA",
        "color": CardColor.LARIX,
        "position": CardPosition.LEFT
    },
    "Auerhuhn_Right_Grey": {
        "speci": "TETRAO_UROGALLUS",
        "color": CardColor.DOUGLAS_FIR,
        "position": CardPosition.RIGHT
    },
    "Schneehase_Left_Blue": {
        "speci": "LEPUS_TIMIDUS",
        "color": CardColor.SILVER_FIR,
        "position": CardPosition.LEFT
    },
    "Alpenmurmeltier_Right_Pink": {
        "speci": "MARMOTA_MARMOTA",
        "color": CardColor.PINUS,
        "position": CardPosition.RIGHT
    },
    "Steinbock_Left_Lila": {
        "speci": "CAPRA_IBEX",
        "color": CardColor.LARIX,
        "position": CardPosition.LEFT
    },
    "Alpenmurmeltier_Right_LightGreen": {
        "speci": "MARMOTA_MARMOTA",
        "color": CardColor.BIRCH,
        "position": CardPosition.RIGHT
    },
    "Gaemse_Left_Lila": {
        "speci": "RUPICAPRA_RUPICAPRA",
        "color": CardColor.LARIX,
        "position": CardPosition.LEFT
    },
    "Auerhuhn_Right_Green": {
        "speci": "TETRAO_UROGALLUS",
        "color": CardColor.BEECH,
        "position": CardPosition.RIGHT
    },
    "Schneehase_Left_Lila": {
        "speci": "LEPUS_TIMIDUS",
        "color": CardColor.LARIX,
        "position": CardPosition.LEFT
    },
    "Gaemse_Right_Grey": {
        "speci": "RUPICAPRA_RUPICAPRA",
        "color": CardColor.DOUGLAS_FIR,
        "position": CardPosition.RIGHT
    },
    "Alpenfledermaus_Left_Blue": {
        "speci": "HYPSUGO_SAVII",
        "color": CardColor.SILVER_FIR,
        "position": CardPosition.LEFT
    },
    "Steinbock_Right_Pink": {
        "speci": "CAPRA_IBEX",
        "color": CardColor.PINUS,
        "position": CardPosition.RIGHT
    },
    "Auerhuhn_Left_Lila": {
        "speci": "TETRAO_UROGALLUS",
        "color": CardColor.LARIX,
        "position": CardPosition.LEFT
    },
    "Alpenfledermaus_Right_Pink": {
        "speci": "HYPSUGO_SAVII",
        "color": CardColor.PINUS,
        "position": CardPosition.RIGHT
    },
    "Auerhuhn_Left_Pink": {
        "speci": "TETRAO_UROGALLUS",
        "color": CardColor.PINUS,
        "position": CardPosition.LEFT
    },
    "Steinbock_Right_Grey": {
        "speci": "CAPRA_IBEX",
        "color": CardColor.DOUGLAS_FIR,
        "position": CardPosition.RIGHT
    },
    "Alpen-Apollofalter_Pink": {
        "speci": "PARNASSIUS_PHOEBUS",
        "color": CardColor.PINUS,
        "position": CardPosition.TOP
    },
    "Herbsttrompete_Lila": {
        "speci": "CRATERELLUS_CORNUCOPIODES",
        "color": CardColor.LARIX,
        "position": CardPosition.BOTTOM
    },
    "Alpen-Apollofalter_Grey": {
        "speci": "PARNASSIUS_PHOEBUS",
        "color": CardColor.DOUGLAS_FIR,
        "position": CardPosition.TOP
    },
    "Edelweis_Pink": {
        "speci": "LEONTOPODIUM_NIVALE",
        "color": CardColor.PINUS,
        "position": CardPosition.BOTTOM
    },
    "Alpen-Apollofalter_Lila": {
        "speci": "PARNASSIUS_PHOEBUS",
        "color": CardColor.LARIX,
        "position": CardPosition.TOP
    },
    "Heidelbeere_LightGreen": {
        "speci": "VACCINIUM_MYRTILLUS",
        "color": CardColor.BIRCH,
        "position": CardPosition.BOTTOM
    },
    "Alpen-Apollofalter_Blue": {
        "speci": "PARNASSIUS_PHOEBUS",
        "color": CardColor.SILVER_FIR,
        "position": CardPosition.TOP
    },
    "Bergmolch_Pink": {
        "speci": "ICHTHYOSAURA_ALPESTRIS",
        "color": CardColor.PINUS,
        "position": CardPosition.BOTTOM
    },
    "Steinadler_Green": {
        "speci": "AQUILA_CHRYSAETOS",
        "color": CardColor.BEECH,
        "position": CardPosition.TOP
    },
    "Herbsttrompete_Pink": {
        "speci": "CRATERELLUS_CORNUCOPIODES",
        "color": CardColor.PINUS,
        "position": CardPosition.BOTTOM
    },
    "Bartgeier_Blue": {
        "speci": "GYPAETUS_BARBATUS",
        "color": CardColor.SILVER_FIR,
        "position": CardPosition.TOP
    },
    "Enzian_Lila": {
        "speci": "GENTIANA",
        "color": CardColor.LARIX,
        "position": CardPosition.BOTTOM
    },
    "Steinadler_Lila": {
        "speci": "AQUILA_CHRYSAETOS",
        "color": CardColor.LARIX,
        "position": CardPosition.TOP
    },
    "Bergmolch_Grey": {
        "speci": "ICHTHYOSAURA_ALPESTRIS",
        "color": CardColor.DOUGLAS_FIR,
        "position": CardPosition.BOTTOM
    },
    "Kolkrabe_Lila": {
        "speci": "CORVUS_CORAX",
        "color": CardColor.LARIX,
        "position": CardPosition.TOP
    },
    "Enzian_Green": {
        "speci": "GENTIANA",
        "color": CardColor.BEECH,
        "position": CardPosition.BOTTOM
    },
    "Kolkrabe_Grey": {
        "speci": "CORVUS_CORAX",
        "color": CardColor.DOUGLAS_FIR,
        "position": CardPosition.TOP
    },
    "Heidelbeere_Pink": {
        "speci": "VACCINIUM_MYRTILLUS",
        "color": CardColor.PINUS,
        "position": CardPosition.BOTTOM
    },
    "Bartgeier_Lila": {
        "speci": "GYPAETUS_BARBATUS",
        "color": CardColor.LARIX,
        "position": CardPosition.TOP
    },
    "Bergmolch_Blue": {
        "speci": "ICHTHYOSAURA_ALPESTRIS",
        "color": CardColor.SILVER_FIR,
        "position": CardPosition.BOTTOM
    },
    "Bartgeier_Pink": {
        "speci": "GYPAETUS_BARBATUS",
        "color": CardColor.PINUS,
        "position": CardPosition.TOP
    },
    "Edelweis_Lila": {
        "speci": "LEONTOPODIUM_NIVALE",
        "color": CardColor.LARIX,
        "position": CardPosition.BOTTOM
    },
    "Steinadler_Blue": {
        "speci": "AQUILA_CHRYSAETOS",
        "color": CardColor.SILVER_FIR,
        "position": CardPosition.TOP
    },
    "Enzian_Pink": {
        "speci": "GENTIANA",
        "color": CardColor.PINUS,
        "position": CardPosition.BOTTOM
    },
    "Alpenfledermaus_Left_Lila": {
        "speci": "HYPSUGO_SAVII",
        "color": CardColor.LARIX,
        "position": CardPosition.LEFT
    },
    "Schneehase_Right_Pink": {
        "speci": "LEPUS_TIMIDUS",
        "color": CardColor.PINUS,
        "position": CardPosition.RIGHT
    },
    "Holunder_Yellow": {
        "speci": "SAMBUCUS",
        "color": CardColor.LINDEN,
        "position": CardPosition.BASE
    },
    "Holunder_Red": {
        "speci": "SAMBUCUS",
        "color": CardColor.SYCAMORE,
        "position": CardPosition.BASE
    },
    "Holunder_LightGreen": {
        "speci": "SAMBUCUS",
        "color": CardColor.BIRCH,
        "position": CardPosition.BASE
    },
    "Holunder_Brown": {
        "speci": "SAMBUCUS",
        "color": CardColor.OAK,
        "position": CardPosition.BASE
    },
    "Haselnuss_Orange": {
        "speci": "COMMON_HAZEL",
        "color": CardColor.HORSE_CHESTNUT,
        "position": CardPosition.BASE
    },
    "Haselnuss_Brown": {
        "speci": "COMMON_HAZEL",
        "color": CardColor.OAK,
        "position": CardPosition.BASE
    },
    "Haselnuss_Green": {
        "speci": "COMMON_HAZEL",
        "color": CardColor.BEECH,
        "position": CardPosition.BASE
    },
    "Haselnuss_LightGreen": {
        "speci": "COMMON_HAZEL",
        "color": CardColor.BIRCH,
        "position": CardPosition.BASE
    },
    "Schlehdorn_Grey": {
        "speci": "BLACKTHORN",
        "color": CardColor.DOUGLAS_FIR,
        "position": CardPosition.BASE
    },
    "Schlehdorn_LightGreen": {
        "speci": "BLACKTHORN",
        "color": CardColor.BIRCH,
        "position": CardPosition.BASE
    },
    "Schlehdorn_Blue": {
        "speci": "BLACKTHORN",
        "color": CardColor.SILVER_FIR,
        "position": CardPosition.BASE
    },
    "Schlehdorn_Red": {
        "speci": "BLACKTHORN",
        "color": CardColor.SYCAMORE,
        "position": CardPosition.BASE
    },
    "Landkaertchen_Yellow": {
        "speci": "MAP_BUTTERFLY",
        "color": CardColor.LINDEN,
        "position": CardPosition.TOP
    },
    "Fingerhut_Grey": {
        "speci": "DIGITALIS",
        "color": CardColor.DOUGLAS_FIR,
        "position": CardPosition.BOTTOM
    },
    "Landkaertchen_Red": {
        "speci": "MAP_BUTTERFLY",
        "color": CardColor.SYCAMORE,
        "position": CardPosition.TOP
    },
    "Brennnessel_LightGreen": {
        "speci": "URTICA",
        "color": CardColor.BIRCH,
        "position": CardPosition.BOTTOM
    },
    "Landkaertchen_Brown": {
        "speci": "MAP_BUTTERFLY",
        "color": CardColor.OAK,
        "position": CardPosition.TOP
    },
    "Gruenes-Heupferd_Blue": {
        "speci": "GREAT_GREEN_BUSH_CRICKET",
        "color": CardColor.SILVER_FIR,
        "position": CardPosition.BOTTOM
    },
    "Landkaertchen_Blue": {
        "speci": "MAP_BUTTERFLY",
        "color": CardColor.SILVER_FIR,
        "position": CardPosition.TOP
    },
    "Schermaus_Red": {
        "speci": "EUROPEAN_WATER_VOLE",
        "color": CardColor.SYCAMORE,
        "position": CardPosition.BOTTOM
    },
    "Elster_Green": {
        "speci": "EURASIAN_MAGPIE",
        "color": CardColor.BEECH,
        "position": CardPosition.TOP
    },
    "Fingerhut_LightGreen": {
        "speci": "DIGITALIS",
        "color": CardColor.BIRCH,
        "position": CardPosition.BOTTOM
    },
    "Elster_Blue": {
        "speci": "EURASIAN_MAGPIE",
        "color": CardColor.SILVER_FIR,
        "position": CardPosition.TOP
    },
    "Brennnessel_Orange": {
        "speci": "URTICA",
        "color": CardColor.HORSE_CHESTNUT,
        "position": CardPosition.BOTTOM
    },
    "Elster_LightGreen": {
        "speci": "EURASIAN_MAGPIE",
        "color": CardColor.BIRCH,
        "position": CardPosition.TOP
    },
    "Gruenes-Heupferd_Green": {
        "speci": "GREAT_GREEN_BUSH_CRICKET",
        "color": CardColor.BEECH,
        "position": CardPosition.BOTTOM
    },
    "Nachtigall_Green": {
        "speci": "COMMON_NIGHTINGALE",
        "color": CardColor.BEECH,
        "position": CardPosition.TOP
    },
    "Fingerhut_Red": {
        "speci": "DIGITALIS",
        "color": CardColor.SYCAMORE,
        "position": CardPosition.BOTTOM
    },
    "Nachtigall_Brown": {
        "speci": "COMMON_NIGHTINGALE",
        "color": CardColor.OAK,
        "position": CardPosition.TOP
    },
    "Brennnessel_Red": {
        "speci": "URTICA",
        "color": CardColor.SYCAMORE,
        "position": CardPosition.BOTTOM
    },
    "Nachtigall_Orange": {
        "speci": "COMMON_NIGHTINGALE",
        "color": CardColor.HORSE_CHESTNUT,
        "position": CardPosition.TOP
    },
    "Schermaus_Green": {
        "speci": "EUROPEAN_WATER_VOLE",
        "color": CardColor.BEECH,
        "position": CardPosition.BOTTOM
    },
    "Schleiereule_LightGreen": {
        "speci": "BARN_OWL",
        "color": CardColor.BIRCH,
        "position": CardPosition.TOP
    },
    "Fingerhut_Brown": {
        "speci": "DIGITALIS",
        "color": CardColor.OAK,
        "position": CardPosition.BOTTOM
    },
    "Schleiereule_Red": {
        "speci": "BARN_OWL",
        "color": CardColor.SYCAMORE,
        "position": CardPosition.TOP
    },
    "Gruenes-Heupferd_Brown": {
        "speci": "GREAT_GREEN_BUSH_CRICKET",
        "color": CardColor.OAK,
        "position": CardPosition.BOTTOM
    },
    "Bache_Left_LightGreen": {
        "speci": "WILD_BOAR_FEMALE",
        "color": CardColor.BIRCH,
        "position": CardPosition.LEFT
    },
    "Bienenschwarm_Right_Red": {
        "speci": "BEEHIVE",
        "color": CardColor.SYCAMORE,
        "position": CardPosition.RIGHT
    },
    "Wisent_Left_Brown": {
        "speci": "EUROPEAN_BISON",
        "color": CardColor.OAK,
        "position": CardPosition.LEFT
    },
    "Bache_Right_Red": {
        "speci": "WILD_BOAR_FEMALE",
        "color": CardColor.SYCAMORE,
        "position": CardPosition.RIGHT
    },
    "Bache_Left_Blue": {
        "speci": "WILD_BOAR_FEMALE",
        "color": CardColor.SILVER_FIR,
        "position": CardPosition.LEFT
    },
    "Wildkatze_Right_Orange": {
        "speci": "EUROPEAN_WILDCAT",
        "color": CardColor.HORSE_CHESTNUT,
        "position": CardPosition.RIGHT
    },
    "Zwergfledermaus_Left_Yellow": {
        "speci": "COMMON_PIPISTRELLE",
        "color": CardColor.LINDEN,
        "position": CardPosition.LEFT
    },
    "Frischling-Waldrand_Right_Blue": {
        "speci": "SQUEAKER_EDGE",
        "color": CardColor.SILVER_FIR,
        "position": CardPosition.RIGHT
    },
    "Frischling-Waldrand_Left_Orange": {
        "speci": "SQUEAKER_EDGE",
        "color": CardColor.HORSE_CHESTNUT,
        "position": CardPosition.LEFT
    },
    "Schnake_Right_Green": {
        "speci": "MOSQUITO",
        "color": CardColor.BEECH,
        "position": CardPosition.RIGHT
    },
    "Waldiltis_Left_Blue": {
        "speci": "EUROPEAN_POLECAT",
        "color": CardColor.SILVER_FIR,
        "position": CardPosition.LEFT
    },
    "Frischling-Waldrand_Right_Grey": {
        "speci": "SQUEAKER_EDGE",
        "color": CardColor.DOUGLAS_FIR,
        "position": CardPosition.RIGHT
    },
    "Bienenschwarm_Left_Green": {
        "speci": "BEEHIVE",
        "color": CardColor.BEECH,
        "position": CardPosition.LEFT
    },
    "Zwergfledermaus_Right_Red": {
        "speci": "COMMON_PIPISTRELLE",
        "color": CardColor.SYCAMORE,
        "position": CardPosition.RIGHT
    },
    "Wildkatze_Left_Brown": {
        "speci": "EUROPEAN_WILDCAT",
        "color": CardColor.OAK,
        "position": CardPosition.LEFT
    },
    "Bienenschwarm_Right_LightGreen": {
        "speci": "BEEHIVE",
        "color": CardColor.BIRCH,
        "position": CardPosition.RIGHT
    },
    "Zwergfledermaus_Left_LightGreen": {
        "speci": "COMMON_PIPISTRELLE",
        "color": CardColor.BIRCH,
        "position": CardPosition.LEFT
    },
    "Wisent_Right_Green": {
        "speci": "EUROPEAN_BISON",
        "color": CardColor.BEECH,
        "position": CardPosition.RIGHT
    },
    "Wisent_Left_Green": {
        "speci": "EUROPEAN_BISON",
        "color": CardColor.BEECH,
        "position": CardPosition.LEFT
    },
    "Waldiltis_Right_Red": {
        "speci": "EUROPEAN_POLECAT",
        "color": CardColor.SYCAMORE,
        "position": CardPosition.RIGHT
    },
    "Schnake_Left_LightGreen": {
        "speci": "MOSQUITO",
        "color": CardColor.BIRCH,
        "position": CardPosition.LEFT
    },
    "Waldiltis_Right_Brown": {
        "speci": "EUROPEAN_POLECAT",
        "color": CardColor.OAK,
        "position": CardPosition.RIGHT
    },
    "Wildkatze_Left_Red": {
        "speci": "EUROPEAN_WILDCAT",
        "color": CardColor.SYCAMORE,
        "position": CardPosition.LEFT
    },
    "Schnake_Right_Brown": {
        "speci": "MOSQUITO",
        "color": CardColor.OAK,
        "position": CardPosition.RIGHT
    }
}
