const baseImageUrl = "images/";

const units = [
  {
    id: 1,
    name: "Byakuya",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "001.png"
  },
  {
    id: 2,
    name: "Mayuri",
    attribute: "Instinct",
    rarity: "6★",
    image: baseImageUrl + "002.png"
  },
  {
    id: 3,
    name: "Ichigo",
    attribute: "Connaissance",
    rarity: "6★",
    image: baseImageUrl + "003.png"
  },
  {
    id: 4,
    name: "Orihime",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "004.png"
  },
  {
    id: 5,
    name: "Toshiro",
    attribute: "Technique",
    rarity: "6★",
    image: baseImageUrl + "005.png"
  },
  {
    id: 6,
    name: "Ulquiorra",
    attribute: "Instinct",
    rarity: "6★",
    image: baseImageUrl + "006.png"
  },
  {
    id: 7,
    name: "Aizen",
    attribute: "Vitesse",
    rarity: "6★",
    image: baseImageUrl + "007.png"
  },
  {
    id: 8,
    name: "Renji",
    attribute: "Technique",
    rarity: "6★",
    image: baseImageUrl + "008.png"
  },
  {
    id: 9,
    name: "Grimmjow",
    attribute: "Connaissance",
    rarity: "6★",
    image: baseImageUrl + "009.png"
  },
  {
    id: 10,
    name: "Rukia",
    attribute: "Vitesse",
    rarity: "6★",
    image: baseImageUrl + "010.png"
  },
  {
    id: 11,
    name: "Yoruichi",
    attribute: "Instinct",
    rarity: "6★",
    image: baseImageUrl + "011.png"
  },
  {
    id: 12,
    name: "Szayel Aporro",
    attribute: "Connaissance",
    rarity: "6★",
    image: baseImageUrl + "012.png"
  },
  {
    id: 13,
    name: "Gin",
    attribute: "Technique",
    rarity: "6★",
    image: baseImageUrl + "013.png"
  },
  {
    id: 14,
    name: "Uryu",
    attribute: "Instinct",
    rarity: "6★",
    image: baseImageUrl + "014.png"
  },
  {
    id: 15,
    name: "Kisuke",
    attribute: "Vitesse",
    rarity: "6★",
    image: baseImageUrl + "015.png"
  },
  {
    id: 16,
    name: "Soi Fon",
    attribute: "Connaissance",
    rarity: "6★",
    image: baseImageUrl + "016.png"
  },
  {
    id: 17,
    name: "Chad",
    attribute: "Technique",
    rarity: "6★",
    image: baseImageUrl + "017.png"
  },
  {
    id: 18,
    name: "Aizen",
    attribute: "Connaissance",
    rarity: "6★",
    image: baseImageUrl + "018.png"
  },
  {
    id: 19,
    name: "Unohana",
    attribute: "Technique",
    rarity: "6★",
    image: baseImageUrl + "019.png"
  },
  {
    id: 20,
    name: "Byakuya",
    attribute: "Instinct",
    rarity: "6★",
    image: baseImageUrl + "020.png"
  },
  {
    id: 21,
    name: "Kenpachi",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "021.png"
  },
  {
    id: 22,
    name: "Ichigo",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "022.png"
  },
  {
    id: 23,
    name: "Komamura",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "023.png"
  },
  {
    id: 24,
    name: "Soi Fon",
    attribute: "Vitesse",
    rarity: "6★",
    image: baseImageUrl + "024.png"
  },
  {
    id: 25,
    name: "Yamamoto",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "025.png"
  },
  {
    id: 26,
    name: "Yoruichi",
    attribute: "Vitesse",
    rarity: "6★",
    image: baseImageUrl + "026.png"
  },
  {
    id: 27,
    name: "Kaname",
    attribute: "Vitesse",
    rarity: "6★",
    image: baseImageUrl + "027.png"
  },
  {
    id: 28,
    name: "Mayuri",
    attribute: "Technique",
    rarity: "6★",
    image: baseImageUrl + "028.png"
  },
  {
    id: 29,
    name: "Ulquiorra",
    attribute: "Instinct",
    rarity: "6★",
    image: baseImageUrl + "029.png"
  },
  {
    id: 30,
    name: "Toshiro",
    attribute: "Vitesse",
    rarity: "6★",
    image: baseImageUrl + "030.png"
  },
  {
    id: 31,
    name: "Toshiro",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "031.png"
  },
  {
    id: 32,
    name: "Uryu",
    attribute: "Connaissance",
    rarity: "6★",
    image: baseImageUrl + "032.png"
  },
  {
    id: 33,
    name: "Yoruichi",
    attribute: "Connaissance",
    rarity: "6★",
    image: baseImageUrl + "033.png"
  },
  {
    id: 34,
    name: "Byakuya",
    attribute: "Vitesse",
    rarity: "6★",
    image: baseImageUrl + "034.png"
  },
  {
    id: 35,
    name: "Renji",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "035.png"
  },
  {
    id: 36,
    name: "Unohana",
    attribute: "Technique",
    rarity: "6★",
    image: baseImageUrl + "036.png"
  },
  {
    id: 37,
    name: "Soi Fon",
    attribute: "Instinct",
    rarity: "6★",
    image: baseImageUrl + "037.png"
  },
  {
    id: 38,
    name: "Rangiku",
    attribute: "Technique",
    rarity: "6★",
    image: baseImageUrl + "038.png"
  },
  {
    id: 39,
    name: "Toshiro",
    attribute: "Technique",
    rarity: "6★",
    image: baseImageUrl + "039.png"
  },
  {
    id: 40,
    name: "Shinji",
    attribute: "Instinct",
    rarity: "6★",
    image: baseImageUrl + "040.png"
  },
  {
    id: 41,
    name: "Hachi",
    attribute: "Connaissance",
    rarity: "6★",
    image: baseImageUrl + "041.png"
  },
  {
    id: 42,
    name: "Hiyori",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "042.png"
  },
  {
    id: 43,
    name: "Renji",
    attribute: "Instinct",
    rarity: "6★",
    image: baseImageUrl + "043.png"
  },
  {
    id: 44,
    name: "Ichigo",
    attribute: "Technique",
    rarity: "6★",
    image: baseImageUrl + "044.png"
  },
  {
    id: 45,
    name: "Ichigo",
    attribute: "Connaissance",
    rarity: "6★",
    image: baseImageUrl + "045.png"
  },
  {
    id: 46,
    name: "White Ichigo",
    attribute: "Technique",
    rarity: "6★",
    image: baseImageUrl + "046.png"
  },
  {
    id: 47,
    name: "Ikkaku",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "047.png"
  },
  {
    id: 48,
    name: "Zangetsu",
    attribute: "Vitesse",
    rarity: "6★",
    image: baseImageUrl + "048.png"
  },
  {
    id: 49,
    name: "Rangiku",
    attribute: "Connaissance",
    rarity: "6★",
    image: baseImageUrl + "049.png"
  },
  {
    id: 50,
    name: "Ichigo",
    attribute: "Instinct",
    rarity: "6★",
    image: baseImageUrl + "050.png"
  },
  {
    id: 51,
    name: "Toshiro",
    attribute: "Instinct",
    rarity: "6★",
    image: baseImageUrl + "051.png"
  },
  {
    id: 52,
    name: "Rukia",
    attribute: "Technique",
    rarity: "6★",
    image: baseImageUrl + "052.png"
  },
  {
    id: 53,
    name: "Orihime",
    attribute: "Instinct",
    rarity: "6★",
    image: baseImageUrl + "053.png"
  },
  {
    id: 54,
    name: "Grimmjow",
    attribute: "Vitesse",
    rarity: "6★",
    image: baseImageUrl + "054.png"
  },
  {
    id: 55,
    name: "Orihime",
    attribute: "Connaissance",
    rarity: "6★",
    image: baseImageUrl + "055.png"
  },
  {
    id: 56,
    name: "Ichigo",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "056.png"
  },
  {
    id: 57,
    name: "Uryu",
    attribute: "Technique",
    rarity: "6★",
    image: baseImageUrl + "057.png"
  },
  {
    id: 58,
    name: "Chad",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "058.png"
  },
  {
    id: 59,
    name: "Ururu",
    attribute: "Instinct",
    rarity: "6★",
    image: baseImageUrl + "059.png"
  },
  {
    id: 60,
    name: "Tessai",
    attribute: "Technique",
    rarity: "6★",
    image: baseImageUrl + "060.png"
  },
  {
    id: 61,
    name: "Kisuke",
    attribute: "Technique",
    rarity: "6★",
    image: baseImageUrl + "061.png"
  },
  {
    id: 62,
    name: "Lisa",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "062.png"
  },
  {
    id: 63,
    name: "Ukitake",
    attribute: "Connaissance",
    rarity: "6★",
    image: baseImageUrl + "063.png"
  },
  {
    id: 64,
    name: "Hiyori",
    attribute: "Vitesse",
    rarity: "6★",
    image: baseImageUrl + "064.png"
  },
  {
    id: 65,
    name: "Komamura",
    attribute: "Instinct",
    rarity: "6★",
    image: baseImageUrl + "065.png"
  },
  {
    id: 66,
    name: "Orihime",
    attribute: "Instinct",
    rarity: "6★",
    image: baseImageUrl + "066.png"
  },
  {
    id: 67,
    name: "Kaien",
    attribute: "Connaissance",
    rarity: "6★",
    image: baseImageUrl + "067.png"
  },
  {
    id: 68,
    name: "Byakuya",
    attribute: "Technique",
    rarity: "6★",
    image: baseImageUrl + "068.png"
  },
  {
    id: 69,
    name: "Kon",
    attribute: "Instinct",
    rarity: "6★",
    image: baseImageUrl + "069.png"
  },
  {
    id: 70,
    name: "Kon",
    attribute: "Connaissance",
    rarity: "6★",
    image: baseImageUrl + "070.png"
  },
  {
    id: 71,
    name: "Kon",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "071.png"
  },
  {
    id: 72,
    name: "Kon",
    attribute: "Vitesse",
    rarity: "6★",
    image: baseImageUrl + "072.png"
  },
  {
    id: 73,
    name: "Kon",
    attribute: "Technique",
    rarity: "6★",
    image: baseImageUrl + "073.png"
  },
  {
    id: 74,
    name: "Pesche",
    attribute: "Technique",
    rarity: "6★",
    image: baseImageUrl + "074.png"
  },
  {
    id: 75,
    name: "Nnoitra",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "075.png"
  },
  {
    id: 76,
    name: "Nelliel",
    attribute: "Vitesse",
    rarity: "6★",
    image: baseImageUrl + "076.png"
  },
  {
    id: 77,
    name: "Szayel Aporro",
    attribute: "Instinct",
    rarity: "6★",
    image: baseImageUrl + "077.png"
  },
  {
    id: 78,
    name: "Kenpachi",
    attribute: "Technique",
    rarity: "6★",
    image: baseImageUrl + "078.png"
  },
  {
    id: 79,
    name: "Komamura",
    attribute: "Connaissance",
    rarity: "6★",
    image: baseImageUrl + "079.png"
  },
  {
    id: 80,
    name: "Hinamori",
    attribute: "Technique",
    rarity: "6★",
    image: baseImageUrl + "080.png"
  },
  {
    id: 81,
    name: "Rukia",
    attribute: "Vitesse",
    rarity: "6★",
    image: baseImageUrl + "081.png"
  },
  {
    id: 82,
    name: "Nelliel",
    attribute: "Connaissance",
    rarity: "6★",
    image: baseImageUrl + "082.png"
  },
  {
    id: 83,
    name: "Yachiru",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "083.png"
  },
  {
    id: 84,
    name: "Tessai",
    attribute: "Connaissance",
    rarity: "6★",
    image: baseImageUrl + "084.png"
  },
  {
    id: 85,
    name: "Ukitake",
    attribute: "Instinct",
    rarity: "6★",
    image: baseImageUrl + "085.png"
  },
  {
    id: 86,
    name: "Yoruichi",
    attribute: "Technique",
    rarity: "6★",
    image: baseImageUrl + "086.png"
  },
  {
    id: 87,
    name: "Don Kan'onji",
    attribute: "Instinct",
    rarity: "6★",
    image: baseImageUrl + "087.png"
  },
  {
    id: 88,
    name: "Shuei",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "088.png"
  },
  {
    id: 89,
    name: "Toshiro",
    attribute: "Technique",
    rarity: "6★",
    image: baseImageUrl + "089.png"
  },
  {
    id: 90,
    name: "Gin",
    attribute: "Vitesse",
    rarity: "6★",
    image: baseImageUrl + "090.png"
  },
  {
    id: 91,
    name: "Kenpachi",
    attribute: "Instinct",
    rarity: "6★",
    image: baseImageUrl + "091.png"
  },
  {
    id: 92,
    name: "Grimmjow",
    attribute: "Connaissance",
    rarity: "6★",
    image: baseImageUrl + "092.png"
  },
  {
    id: 93,
    name: "Aizen",
    attribute: "Instinct",
    rarity: "6★",
    image: baseImageUrl + "093.png"
  },
  {
    id: 94,
    name: "Isshin",
    attribute: "Instinct",
    rarity: "6★",
    image: baseImageUrl + "094.png"
  },
  {
    id: 95,
    name: "Yamamoto",
    attribute: "Technique",
    rarity: "6★",
    image: baseImageUrl + "095.png"
  },
  {
    id: 96,
    name: "Byakuya",
    attribute: "Vitesse",
    rarity: "6★",
    image: baseImageUrl + "096.png"
  },
  {
    id: 97,
    name: "Hinamori",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "097.png"
  },
  {
    id: 98,
    name: "Renji",
    attribute: "Vitesse",
    rarity: "6★",
    image: baseImageUrl + "098.png"
  },
  {
    id: 99,
    name: "Izuru",
    attribute: "Connaissance",
    rarity: "6★",
    image: baseImageUrl + "099.png"
  },
  {
    id: 100,
    name: "Ulquiorra",
    attribute: "Instinct",
    rarity: "6★",
    image: baseImageUrl + "100.png"
  },
  {
    id: 101,
    name: "Ichigo",
    attribute: "Connaissance",
    rarity: "6★",
    image: baseImageUrl + "101.png"
  },
  {
    id: 102,
    name: "Shuei",
    attribute: "Technique",
    rarity: "6★",
    image: baseImageUrl + "102.png"
  },
  {
    id: 103,
    name: "Karin",
    attribute: "Vitesse",
    rarity: "6★",
    image: baseImageUrl + "103.png"
  },
  {
    id: 104,
    name: "Nozomi",
    attribute: "Instinct",
    rarity: "6★",
    image: baseImageUrl + "104.png"
  },
  {
    id: 105,
    name: "Oko",
    attribute: "Connaissance",
    rarity: "6★",
    image: baseImageUrl + "105.png"
  },
  {
    id: 106,
    name: "Ashido",
    attribute: "Vitesse",
    rarity: "6★",
    image: baseImageUrl + "106.png"
  },
  {
    id: 107,
    name: "Amagai",
    attribute: "Technique",
    rarity: "6★",
    image: baseImageUrl + "107.png"
  },
  {
    id: 108,
    name: "Stark",
    attribute: "Technique",
    rarity: "6★",
    image: baseImageUrl + "108.png"
  },
  {
    id: 109,
    name: "Halibel",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "109.png"
  },
  {
    id: 110,
    name: "Yamamoto",
    attribute: "Instinct",
    rarity: "6★",
    image: baseImageUrl + "110.png"
  },
  {
    id: 111,
    name: "Kyoraku",
    attribute: "Connaissance",
    rarity: "6★",
    image: baseImageUrl + "111.png"
  },
  {
    id: 112,
    name: "Nanao",
    attribute: "Vitesse",
    rarity: "6★",
    image: baseImageUrl + "112.png"
  },
  {
    id: 113,
    name: "Ukitake",
    attribute: "Instinct",
    rarity: "6★",
    image: baseImageUrl + "113.png"
  },
  {
    id: 114,
    name: "Grimmjow",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "114.png"
  },
  {
    id: 115,
    name: "Soi Fon",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "115.png"
  },
  {
    id: 116,
    name: "Shinji",
    attribute: "Technique",
    rarity: "6★",
    image: baseImageUrl + "116.png"
  },
  {
    id: 117,
    name: "Gin",
    attribute: "Connaissance",
    rarity: "6★",
    image: baseImageUrl + "117.png"
  },
  {
    id: 118,
    name: "Dondochakka",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "118.png"
  },
  {
    id: 119,
    name: "Sode no Shirayuki",
    attribute: "Instinct",
    rarity: "6★",
    image: baseImageUrl + "119.png"
  },
  {
    id: 120,
    name: "Senbonsakura",
    attribute: "Technique",
    rarity: "6★",
    image: baseImageUrl + "120.png"
  },
  {
    id: 121,
    name: "Tobiume",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "121.png"
  },
  {
    id: 122,
    name: "Nelliel",
    attribute: "Vitesse",
    rarity: "6★",
    image: baseImageUrl + "122.png"
  },
  {
    id: 123,
    name: "Toshiro",
    attribute: "Connaissance",
    rarity: "6★",
    image: baseImageUrl + "123.png"
  },
  {
    id: 124,
    name: "Kyoraku",
    attribute: "Instinct",
    rarity: "6★",
    image: baseImageUrl + "124.png"
  },
  {
    id: 125,
    name: "Ukitake",
    attribute: "Vitesse",
    rarity: "6★",
    image: baseImageUrl + "125.png"
  },
  {
    id: 126,
    name: "Zabimaru",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "126.png"
  },
  {
    id: 127,
    name: "Hyorinmaru",
    attribute: "Connaissance",
    rarity: "6★",
    image: baseImageUrl + "127.png"
  },
  {
    id: 128,
    name: "Haineko",
    attribute: "Vitesse",
    rarity: "6★",
    image: baseImageUrl + "128.png"
  },
  {
    id: 129,
    name: "Ichigo",
    attribute: "Vitesse",
    rarity: "6★",
    image: baseImageUrl + "129.png"
  },
  {
    id: 130,
    name: "Aizen",
    attribute: "Instinct",
    rarity: "6★",
    image: baseImageUrl + "130.png"
  },
  {
    id: 131,
    name: "Barragan",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "131.png"
  },
  {
    id: 132,
    name: "Jinta",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "132.png"
  },
  {
    id: 133,
    name: "Kisuke",
    attribute: "Connaissance",
    rarity: "6★",
    image: baseImageUrl + "133.png"
  },
  {
    id: 134,
    name: "Kensei",
    attribute: "Technique",
    rarity: "6★",
    image: baseImageUrl + "134.png"
  },
  {
    id: 135,
    name: "Shinji",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "135.png"
  },
  {
    id: 136,
    name: "Hisagomaru",
    attribute: "Connaissance",
    rarity: "6★",
    image: baseImageUrl + "136.png"
  },
  {
    id: 137,
    name: "Rukia",
    attribute: "Technique",
    rarity: "6★",
    image: baseImageUrl + "137.png"
  },
  {
    id: 138,
    name: "Mayuri",
    attribute: "Vitesse",
    rarity: "6★",
    image: baseImageUrl + "138.png"
  },
  {
    id: 139,
    name: "Yumichika",
    attribute: "Connaissance",
    rarity: "6★",
    image: baseImageUrl + "139.png"
  },
  {
    id: 140,
    name: "Suzumebachi",
    attribute: "Vitesse",
    rarity: "6★",
    image: baseImageUrl + "140.png"
  },
  {
    id: 141,
    name: "Katenkyokotsu",
    attribute: "Connaissance",
    rarity: "6★",
    image: baseImageUrl + "141.png"
  },
  {
    id: 142,
    name: "Sogyonokotowari",
    attribute: "Technique",
    rarity: "6★",
    image: baseImageUrl + "142.png"
  },
  {
    id: 143,
    name: "Byakuya",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "143.png"
  },
  {
    id: 144,
    name: "Kyoraku",
    attribute: "Technique",
    rarity: "6★",
    image: baseImageUrl + "144.png"
  },
  {
    id: 145,
    name: "Hinamori",
    attribute: "Connaissance",
    rarity: "6★",
    image: baseImageUrl + "145.png"
  },
  {
    id: 146,
    name: "Kazeshini",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "146.png"
  },
  {
    id: 147,
    name: "Muramasa",
    attribute: "Instinct",
    rarity: "6★",
    image: baseImageUrl + "147.png"
  },
  {
    id: 148,
    name: "Koga",
    attribute: "Vitesse",
    rarity: "6★",
    image: baseImageUrl + "148.png"
  },
  {
    id: 149,
    name: "Rangiku",
    attribute: "Vitesse",
    rarity: "6★",
    image: baseImageUrl + "149.png"
  },
  {
    id: 150,
    name: "Komamura",
    attribute: "Instinct",
    rarity: "6★",
    image: baseImageUrl + "150.png"
  },
  {
    id: 151,
    name: "Soi Fon",
    attribute: "Connaissance",
    rarity: "6★",
    image: baseImageUrl + "151.png"
  },
  {
    id: 152,
    name: "Giriko",
    attribute: "Technique",
    rarity: "6★",
    image: baseImageUrl + "152.png"
  },
  {
    id: 153,
    name: "Szayel Aporro",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "153.png"
  },
  {
    id: 154,
    name: "Halibel",
    attribute: "Vitesse",
    rarity: "6★",
    image: baseImageUrl + "154.png"
  },
  {
    id: 155,
    name: "Rukia",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "155.png"
  },
  {
    id: 156,
    name: "Riruka",
    attribute: "Technique",
    rarity: "6★",
    image: baseImageUrl + "156.png"
  },
  {
    id: 157,
    name: "Renji",
    attribute: "Connaissance",
    rarity: "6★",
    image: baseImageUrl + "157.png"
  },
  {
    id: 158,
    name: "Shishigawara",
    attribute: "Technique",
    rarity: "6★",
    image: baseImageUrl + "158.png"
  },
  {
    id: 159,
    name: "Mashiro",
    attribute: "Vitesse",
    rarity: "6★",
    image: baseImageUrl + "159.png"
  },
  {
    id: 160,
    name: "Love",
    attribute: "Technique",
    rarity: "6★",
    image: baseImageUrl + "160.png"
  },
  {
    id: 161,
    name: "Rose",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "161.png"
  },
  {
    id: 162,
    name: "Toshiro",
    attribute: "Instinct",
    rarity: "6★",
    image: baseImageUrl + "162.png"
  },
  {
    id: 163,
    name: "Kenpachi",
    attribute: "Vitesse",
    rarity: "6★",
    image: baseImageUrl + "163.png"
  },
  {
    id: 164,
    name: "Ikkaku",
    attribute: "Technique",
    rarity: "6★",
    image: baseImageUrl + "164.png"
  },
  {
    id: 165,
    name: "Rukia",
    attribute: "Technique",
    rarity: "6★",
    image: baseImageUrl + "165.png"
  },
  {
    id: 166,
    name: "Nanao",
    attribute: "Instinct",
    rarity: "6★",
    image: baseImageUrl + "166.png"
  },
  {
    id: 167,
    name: "Nemu",
    attribute: "Connaissance",
    rarity: "6★",
    image: baseImageUrl + "167.png"
  },
  {
    id: 168,
    name: "Yachiru",
    attribute: "Vitesse",
    rarity: "6★",
    image: baseImageUrl + "168.png"
  },
  {
    id: 169,
    name: "Yukio",
    attribute: "Vitesse",
    rarity: "6★",
    image: baseImageUrl + "169.png"
  },
  {
    id: 170,
    name: "Byakuya",
    attribute: "Connaissance",
    rarity: "6★",
    image: baseImageUrl + "170.png"
  },
  {
    id: 171,
    name: "Tsukishima",
    attribute: "Instinct",
    rarity: "6★",
    image: baseImageUrl + "171.png"
  },
  {
    id: 172,
    name: "Byakuya",
    attribute: "Instinct",
    rarity: "6★",
    image: baseImageUrl + "172.png"
  },
  {
    id: 173,
    name: "Ulquiorra",
    attribute: "Technique",
    rarity: "6★",
    image: baseImageUrl + "173.png"
  },
  {
    id: 174,
    name: "Isane",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "174.png"
  },
  {
    id: 175,
    name: "Tetsuzaemon",
    attribute: "Instinct",
    rarity: "6★",
    image: baseImageUrl + "175.png"
  },
  {
    id: 176,
    name: "Izuru",
    attribute: "Technique",
    rarity: "6★",
    image: baseImageUrl + "176.png"
  },
  {
    id: 177,
    name: "Ichigo",
    attribute: "Technique",
    rarity: "6★",
    image: baseImageUrl + "177.png"
  },
  {
    id: 178,
    name: "Uryu",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "178.png"
  },
  {
    id: 179,
    name: "Ginjo",
    attribute: "Connaissance",
    rarity: "6★",
    image: baseImageUrl + "179.png"
  },
  {
    id: 180,
    name: "Ambassadeur Wakame",
    attribute: "Vitesse",
    rarity: "6★",
    image: baseImageUrl + "180.png"
  },
  {
    id: 181,
    name: "Kaien",
    attribute: "Instinct",
    rarity: "6★",
    image: baseImageUrl + "181.png"
  },
  {
    id: 182,
    name: "Love",
    attribute: "Vitesse",
    rarity: "6★",
    image: baseImageUrl + "182.png"
  },
  {
    id: 183,
    name: "Rose",
    attribute: "Connaissance",
    rarity: "6★",
    image: baseImageUrl + "183.png"
  },
  {
    id: 184,
    name: "Grimmjow",
    attribute: "Connaissance",
    rarity: "6★",
    image: baseImageUrl + "184.png"
  },
  {
    id: 185,
    name: "Yammy",
    attribute: "Vitesse",
    rarity: "6★",
    image: baseImageUrl + "185.png"
  },
  {
    id: 186,
    name: "Nnoitra",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "186.png"
  },
  {
    id: 187,
    name: "Kukkapuro",
    attribute: "Instinct",
    rarity: "6★",
    image: baseImageUrl + "187.png"
  },
  {
    id: 188,
    name: "Kaname",
    attribute: "Vitesse",
    rarity: "6★",
    image: baseImageUrl + "188.png"
  },
  {
    id: 189,
    name: "Aaroniero",
    attribute: "Connaissance",
    rarity: "6★",
    image: baseImageUrl + "189.png"
  },
  {
    id: 190,
    name: "Zommari",
    attribute: "Instinct",
    rarity: "6★",
    image: baseImageUrl + "190.png"
  },
  {
    id: 191,
    name: "Tensa Zangetsu",
    attribute: "Technique",
    rarity: "6★",
    image: baseImageUrl + "191.png"
  },
  {
    id: 192,
    name: "Yoruichi",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "192.png"
  },
  {
    id: 193,
    name: "White Ichigo",
    attribute: "Instinct",
    rarity: "6★",
    image: baseImageUrl + "193.png"
  },
  {
    id: 194,
    name: "Gin",
    attribute: "Instinct",
    rarity: "6★",
    image: baseImageUrl + "194.png"
  },
  {
    id: 195,
    name: "Unohana",
    attribute: "Connaissance",
    rarity: "6★",
    image: baseImageUrl + "195.png"
  },
  {
    id: 196,
    name: "Ukitake",
    attribute: "Connaissance",
    rarity: "6★",
    image: baseImageUrl + "196.png"
  },
  {
    id: 197,
    name: "Nemu",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "197.png"
  },
  {
    id: 198,
    name: "Nelliel",
    attribute: "Instinct",
    rarity: "6★",
    image: baseImageUrl + "198.png"
  },
  {
    id: 199,
    name: "Riruka",
    attribute: "Connaissance",
    rarity: "6★",
    image: baseImageUrl + "199.png"
  },
  {
    id: 200,
    name: "Loly",
    attribute: "Connaissance",
    rarity: "6★",
    image: baseImageUrl + "200.png"
  },
  {
    id: 201,
    name: "Apache",
    attribute: "Technique",
    rarity: "6★",
    image: baseImageUrl + "201.png"
  },
  {
    id: 202,
    name: "Sunsun",
    attribute: "Vitesse",
    rarity: "6★",
    image: baseImageUrl + "202.png"
  },
  {
    id: 203,
    name: "Mila Rose",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "203.png"
  },
  {
    id: 204,
    name: "Ichigo",
    attribute: "Vitesse",
    rarity: "6★",
    image: baseImageUrl + "204.png"
  },
  {
    id: 205,
    name: "Stark",
    attribute: "Instinct",
    rarity: "6★",
    image: baseImageUrl + "205.png"
  },
  {
    id: 206,
    name: "Halibel",
    attribute: "Vitesse",
    rarity: "6★",
    image: baseImageUrl + "206.png"
  },
  {
    id: 207,
    name: "Ulquiorra",
    attribute: "Connaissance",
    rarity: "6★",
    image: baseImageUrl + "207.png"
  },
  {
    id: 208,
    name: "Zennosuke",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "208.png"
  },
  {
    id: 209,
    name: "Unohana",
    attribute: "Vitesse",
    rarity: "6★",
    image: baseImageUrl + "209.png"
  },
  {
    id: 210,
    name: "Ukitake",
    attribute: "Instinct",
    rarity: "6★",
    image: baseImageUrl + "210.png"
  },
  {
    id: 211,
    name: "Chojiro",
    attribute: "Connaissance",
    rarity: "6★",
    image: baseImageUrl + "211.png"
  },
  {
    id: 212,
    name: "Ichigo",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "212.png"
  },
  {
    id: 213,
    name: "Koga",
    attribute: "Technique",
    rarity: "6★",
    image: baseImageUrl + "213.png"
  },
  {
    id: 214,
    name: "Renji",
    attribute: "Instinct",
    rarity: "6★",
    image: baseImageUrl + "214.png"
  },
  {
    id: 215,
    name: "Barragan",
    attribute: "Connaissance",
    rarity: "6★",
    image: baseImageUrl + "215.png"
  },
  {
    id: 216,
    name: "Szayel Aporro",
    attribute: "Vitesse",
    rarity: "6★",
    image: baseImageUrl + "216.png"
  },
  {
    id: 217,
    name: "Wonderwice",
    attribute: "Technique",
    rarity: "6★",
    image: baseImageUrl + "217.png"
  },
  {
    id: 218,
    name: "Kyoraku",
    attribute: "Vitesse",
    rarity: "6★",
    image: baseImageUrl + "218.png"
  },
  {
    id: 219,
    name: "Toshiro",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "219.png"
  },
  {
    id: 220,
    name: "Byakuya",
    attribute: "Technique",
    rarity: "6★",
    image: baseImageUrl + "220.png"
  },
  {
    id: 221,
    name: "Komamura",
    attribute: "Connaissance",
    rarity: "6★",
    image: baseImageUrl + "221.png"
  },
  {
    id: 222,
    name: "Soi Fon",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "222.png"
  },
  {
    id: 223,
    name: "Yoruichi",
    attribute: "Instinct",
    rarity: "6★",
    image: baseImageUrl + "223.png"
  },
  {
    id: 224,
    name: "Orihime",
    attribute: "Vitesse",
    rarity: "6★",
    image: baseImageUrl + "224.png"
  },
  {
    id: 225,
    name: "Ryuken",
    attribute: "Instinct",
    rarity: "6★",
    image: baseImageUrl + "225.png"
  },
  {
    id: 226,
    name: "Shinji",
    attribute: "Connaissance",
    rarity: "6★",
    image: baseImageUrl + "226.png"
  },
  {
    id: 227,
    name: "Shinji",
    attribute: "Technique",
    rarity: "6★",
    image: baseImageUrl + "227.png"
  },
  {
    id: 228,
    name: "Akon",
    attribute: "Connaissance",
    rarity: "6★",
    image: baseImageUrl + "228.png"
  },
  {
    id: 229,
    name: "Senna",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "229.png"
  },
  {
    id: 230,
    name: "Ganryu",
    attribute: "Vitesse",
    rarity: "6★",
    image: baseImageUrl + "230.png"
  },
  {
    id: 231,
    name: "Ichigo",
    attribute: "Instinct",
    rarity: "6★",
    image: baseImageUrl + "231.png"
  },
  {
    id: 232,
    name: "White Zangetsu",
    attribute: "Connaissance",
    rarity: "6★",
    image: baseImageUrl + "232.png"
  },
  {
    id: 233,
    name: "Aizen",
    attribute: "Technique",
    rarity: "6★",
    image: baseImageUrl + "233.png"
  },
  {
    id: 234,
    name: "Isshin",
    attribute: "Vitesse",
    rarity: "6★",
    image: baseImageUrl + "234.png"
  },
  {
    id: 235,
    name: "Kukaku",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "235.png"
  },
  {
    id: 236,
    name: "Rukia",
    attribute: "Connaissance",
    rarity: "6★",
    image: baseImageUrl + "236.png"
  },
  {
    id: 237,
    name: "Riruka",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "237.png"
  },
  {
    id: 238,
    name: "Ururu",
    attribute: "Technique",
    rarity: "6★",
    image: baseImageUrl + "238.png"
  },
  {
    id: 239,
    name: "Unohana",
    attribute: "Instinct",
    rarity: "6★",
    image: baseImageUrl + "239.png"
  },
  {
    id: 240,
    name: "Kenpachi",
    attribute: "Connaissance",
    rarity: "6★",
    image: baseImageUrl + "240.png"
  },
  {
    id: 241,
    name: "Yachiru",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "241.png"
  },
  {
    id: 242,
    name: "Yoruichi",
    attribute: "Vitesse",
    rarity: "6★",
    image: baseImageUrl + "242.png"
  },
  {
    id: 243,
    name: "Lisa",
    attribute: "Vitesse",
    rarity: "6★",
    image: baseImageUrl + "243.png"
  },
  {
    id: 244,
    name: "Mashiro",
    attribute: "Instinct",
    rarity: "6★",
    image: baseImageUrl + "244.png"
  },
  {
    id: 245,
    name: "Hiyori",
    attribute: "Technique",
    rarity: "6★",
    image: baseImageUrl + "245.png"
  },
  {
    id: 246,
    name: "Halibel",
    attribute: "Technique",
    rarity: "6★",
    image: baseImageUrl + "246.png"
  },
  {
    id: 247,
    name: "Yoruichi",
    attribute: "Vitesse",
    rarity: "6★",
    image: baseImageUrl + "247.png"
  },
  {
    id: 248,
    name: "Nanao",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "248.png"
  },
  {
    id: 249,
    name: "Kusaka",
    attribute: "Connaissance",
    rarity: "6★",
    image: baseImageUrl + "249.png"
  },
  {
    id: 250,
    name: "Toshiro",
    attribute: "Vitesse",
    rarity: "6★",
    image: baseImageUrl + "250.png"
  },
  {
    id: 251,
    name: "Ying & Yang",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "251.png"
  },
  {
    id: 252,
    name: "Yamamoto",
    attribute: "Technique",
    rarity: "6★",
    image: baseImageUrl + "252.png"
  },
  {
    id: 253,
    name: "Mayuri",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "253.png"
  },
  {
    id: 254,
    name: "Kaname",
    attribute: "Instinct",
    rarity: "6★",
    image: baseImageUrl + "254.png"
  },
  {
    id: 255,
    name: "Stark",
    attribute: "Instinct",
    rarity: "6★",
    image: baseImageUrl + "255.png"
  },
  {
    id: 256,
    name: "Tsukishima",
    attribute: "Vitesse",
    rarity: "6★",
    image: baseImageUrl + "256.png"
  },
  {
    id: 257,
    name: "Kisuke",
    attribute: "Connaissance",
    rarity: "6★",
    image: baseImageUrl + "257.png"
  },
  {
    id: 258,
    name: "Ichigo",
    attribute: "Technique",
    rarity: "6★",
    image: baseImageUrl + "258.png"
  },
  {
    id: 259,
    name: "Renji",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "259.png"
  },
  {
    id: 260,
    name: "Rukia",
    attribute: "Vitesse",
    rarity: "6★",
    image: baseImageUrl + "260.png"
  },
  {
    id: 261,
    name: "Rangiku",
    attribute: "Technique",
    rarity: "6★",
    image: baseImageUrl + "261.png"
  },
  {
    id: 262,
    name: "Hinamori",
    attribute: "Connaissance",
    rarity: "6★",
    image: baseImageUrl + "262.png"
  },
  {
    id: 263,
    name: "Marechiyo",
    attribute: "Vitesse",
    rarity: "6★",
    image: baseImageUrl + "263.png"
  },
  {
    id: 264,
    name: "Izuru",
    attribute: "Instinct",
    rarity: "6★",
    image: baseImageUrl + "264.png"
  },
  {
    id: 265,
    name: "Shuei",
    attribute: "Connaissance",
    rarity: "6★",
    image: baseImageUrl + "265.png"
  },
  {
    id: 266,
    name: "Yamamoto",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "266.png"
  },
  {
    id: 267,
    name: "Ruruchiyo",
    attribute: "Connaissance",
    rarity: "6★",
    image: baseImageUrl + "267.png"
  },
  {
    id: 268,
    name: "Ichigo",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "268.png"
  },
  {
    id: 269,
    name: "Kokuto",
    attribute: "Vitesse",
    rarity: "6★",
    image: baseImageUrl + "269.png"
  },
  {
    id: 270,
    name: "Shuren",
    attribute: "Technique",
    rarity: "6★",
    image: baseImageUrl + "270.png"
  },
  {
    id: 271,
    name: "Nnoitra",
    attribute: "Instinct",
    rarity: "6★",
    image: baseImageUrl + "271.png"
  },
  {
    id: 272,
    name: "Szayel Aporro",
    attribute: "Connaissance",
    rarity: "6★",
    image: baseImageUrl + "272.png"
  },
  {
    id: 273,
    name: "Nelliel",
    attribute: "Technique",
    rarity: "6★",
    image: baseImageUrl + "273.png"
  },
  {
    id: 274,
    name: "Ganju",
    attribute: "Instinct",
    rarity: "6★",
    image: baseImageUrl + "274.png"
  },
  {
    id: 275,
    name: "Rukia",
    attribute: "Technique",
    rarity: "6★",
    image: baseImageUrl + "275.png"
  },
  {
    id: 276,
    name: "Homura & Shizuku",
    attribute: "Instinct",
    rarity: "6★",
    image: baseImageUrl + "276.png"
  },
  {
    id: 277,
    name: "Kisuke",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "277.png"
  },
  {
    id: 278,
    name: "Orihime",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "278.png"
  },
  {
    id: 279,
    name: "Halibel",
    attribute: "Connaissance",
    rarity: "6★",
    image: baseImageUrl + "279.png"
  },
  {
    id: 280,
    name: "Soi Fon",
    attribute: "Vitesse",
    rarity: "6★",
    image: baseImageUrl + "280.png"
  },
  {
    id: 281,
    name: "Aizen",
    attribute: "Technique",
    rarity: "6★",
    image: baseImageUrl + "281.png"
  },
  {
    id: 282,
    name: "Aizen",
    attribute: "Instinct",
    rarity: "6★",
    image: baseImageUrl + "282.png"
  },
  {
    id: 283,
    name: "Aizen",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "283.png"
  },
  {
    id: 284,
    name: "Aizen",
    attribute: "Vitesse",
    rarity: "6★",
    image: baseImageUrl + "284.png"
  },
  {
    id: 285,
    name: "Aizen",
    attribute: "Connaissance",
    rarity: "6★",
    image: baseImageUrl + "285.png"
  },
  {
    id: 286,
    name: "Ulquiorra",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "286.png"
  },
  {
    id: 287,
    name: "Ichigo",
    attribute: "Instinct",
    rarity: "6★",
    image: baseImageUrl + "287.png"
  },
  {
    id: 288,
    name: "Yhwach",
    attribute: "Connaissance",
    rarity: "6★",
    image: baseImageUrl + "288.png"
  },
  {
    id: 289,
    name: "Yoruichi",
    attribute: "Vitesse",
    rarity: "6★",
    image: baseImageUrl + "289.png"
  },
  {
    id: 290,
    name: "Kisuke",
    attribute: "Technique",
    rarity: "6★",
    image: baseImageUrl + "290.png"
  },
  {
    id: 291,
    name: "Tatsuki",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "291.png"
  },
  {
    id: 292,
    name: "Toshiro",
    attribute: "Technique",
    rarity: "6★",
    image: baseImageUrl + "292.png"
  },
  {
    id: 293,
    name: "Marechiyo",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "293.png"
  },
  {
    id: 294,
    name: "Ikkaku",
    attribute: "Vitesse",
    rarity: "6★",
    image: baseImageUrl + "294.png"
  },
  {
    id: 295,
    name: "Ginjo",
    attribute: "Technique",
    rarity: "6★",
    image: baseImageUrl + "295.png"
  },
  {
    id: 296,
    name: "Tsukishima",
    attribute: "Connaissance",
    rarity: "6★",
    image: baseImageUrl + "296.png"
  },
  {
    id: 297,
    name: "Riruka",
    attribute: "Vitesse",
    rarity: "6★",
    image: baseImageUrl + "297.png"
  },
  {
    id: 298,
    name: "Ikumi",
    attribute: "Technique",
    rarity: "6★",
    image: baseImageUrl + "298.png"
  },
  {
    id: 299,
    name: "Jackie",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "299.png"
  },
  {
    id: 300,
    name: "Yukio",
    attribute: "Connaissance",
    rarity: "6★",
    image: baseImageUrl + "300.png"
  },
  {
    id: 301,
    name: "Orihime",
    attribute: "Instinct",
    rarity: "6★",
    image: baseImageUrl + "301.png"
  },
  {
    id: 302,
    name: "Ichigo",
    attribute: "Connaissance",
    rarity: "6★",
    image: baseImageUrl + "302.png"
  },
  {
    id: 303,
    name: "Uryu",
    attribute: "Instinct",
    rarity: "6★",
    image: baseImageUrl + "303.png"
  },
  {
    id: 304,
    name: "Chad",
    attribute: "Vitesse",
    rarity: "6★",
    image: baseImageUrl + "304.png"
  },
  {
    id: 305,
    name: "Halibel",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "305.png"
  },
  {
    id: 306,
    name: "Riruka",
    attribute: "Instinct",
    rarity: "6★",
    image: baseImageUrl + "306.png"
  },
  {
    id: 307,
    name: "Yachiru",
    attribute: "Technique",
    rarity: "6★",
    image: baseImageUrl + "307.png"
  },
  {
    id: 308,
    name: "Gin",
    attribute: "Vitesse",
    rarity: "6★",
    image: baseImageUrl + "308.png"
  },
  {
    id: 309,
    name: "Grimmjow",
    attribute: "Technique",
    rarity: "6★",
    image: baseImageUrl + "309.png"
  },
  {
    id: 310,
    name: "Rukia",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "310.png"
  },
  {
    id: 311,
    name: "Lilinette",
    attribute: "Vitesse",
    rarity: "6★",
    image: baseImageUrl + "311.png"
  },
  {
    id: 312,
    name: "Ukitake",
    attribute: "Connaissance",
    rarity: "6★",
    image: baseImageUrl + "312.png"
  },
  {
    id: 313,
    name: "Komamura",
    attribute: "Vitesse",
    rarity: "6★",
    image: baseImageUrl + "313.png"
  },
  {
    id: 314,
    name: "Kensei",
    attribute: "Technique",
    rarity: "6★",
    image: baseImageUrl + "314.png"
  },
  {
    id: 315,
    name: "Aizen",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "315.png"
  },
  {
    id: 316,
    name: "Kyoraku",
    attribute: "Connaissance",
    rarity: "6★",
    image: baseImageUrl + "316.png"
  },
  {
    id: 317,
    name: "Shinji",
    attribute: "Vitesse",
    rarity: "6★",
    image: baseImageUrl + "317.png"
  },
  {
    id: 318,
    name: "Yoruichi",
    attribute: "Connaissance",
    rarity: "6★",
    image: baseImageUrl + "318.png"
  },
  {
    id: 319,
    name: "Nemu",
    attribute: "Instinct",
    rarity: "6★",
    image: baseImageUrl + "319.png"
  },
  {
    id: 320,
    name: "Unohana",
    attribute: "Technique",
    rarity: "6★",
    image: baseImageUrl + "320.png"
  },
  {
    id: 321,
    name: "Ichigo",
    attribute: "Vitesse",
    rarity: "6★",
    image: baseImageUrl + "321.png"
  },
  {
    id: 322,
    name: "Mayuri",
    attribute: "Technique",
    rarity: "6★",
    image: baseImageUrl + "322.png"
  },
  {
    id: 323,
    name: "Rukia",
    attribute: "Instinct",
    rarity: "6★",
    image: baseImageUrl + "323.png"
  },
  {
    id: 324,
    name: "Hanataro",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "324.png"
  },
  {
    id: 325,
    name: "Nelliel",
    attribute: "Connaissance",
    rarity: "6★",
    image: baseImageUrl + "325.png"
  },
  {
    id: 326,
    name: "Luppi",
    attribute: "Instinct",
    rarity: "6★",
    image: baseImageUrl + "326.png"
  },
  {
    id: 327,
    name: "Tesla",
    attribute: "Technique",
    rarity: "6★",
    image: baseImageUrl + "327.png"
  },
  {
    id: 328,
    name: "Riruka",
    attribute: "Instinct",
    rarity: "6★",
    image: baseImageUrl + "328.png"
  },
  {
    id: 329,
    name: "Soi Fon",
    attribute: "Connaissance",
    rarity: "6★",
    image: baseImageUrl + "329.png"
  },
  {
    id: 330,
    name: "Hinamori",
    attribute: "Vitesse",
    rarity: "6★",
    image: baseImageUrl + "330.png"
  },
  {
    id: 331,
    name: "Kon",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "331.png"
  },
  {
    id: 332,
    name: "Kaien",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "332.png"
  },
  {
    id: 333,
    name: "Renji",
    attribute: "Vitesse",
    rarity: "6★",
    image: baseImageUrl + "333.png"
  },
  {
    id: 334,
    name: "Yumichika",
    attribute: "Technique",
    rarity: "6★",
    image: baseImageUrl + "334.png"
  },
  {
    id: 335,
    name: "Kenpachi",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "335.png"
  },
  {
    id: 336,
    name: "Toshiro",
    attribute: "Instinct",
    rarity: "6★",
    image: baseImageUrl + "336.png"
  },
  {
    id: 337,
    name: "Ikkaku",
    attribute: "Connaissance",
    rarity: "6★",
    image: baseImageUrl + "337.png"
  },
  {
    id: 338,
    name: "White Ichigo",
    attribute: "Connaissance",
    rarity: "6★",
    image: baseImageUrl + "338.png"
  },
  {
    id: 339,
    name: "Gin",
    attribute: "Technique",
    rarity: "6★",
    image: baseImageUrl + "339.png"
  },
  {
    id: 340,
    name: "Byakuya",
    attribute: "Vitesse",
    rarity: "6★",
    image: baseImageUrl + "340.png"
  },
  {
    id: 341,
    name: "Kyoraku",
    attribute: "Technique",
    rarity: "6★",
    image: baseImageUrl + "341.png"
  },
  {
    id: 342,
    name: "Yoruichi",
    attribute: "Instinct",
    rarity: "6★",
    image: baseImageUrl + "342.png"
  },
  {
    id: 343,
    name: "Ukitake",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "343.png"
  },
  {
    id: 344,
    name: "Hikone",
    attribute: "Connaissance",
    rarity: "6★",
    image: baseImageUrl + "344.png"
  },
  {
    id: 345,
    name: "Grimmjow",
    attribute: "Instinct",
    rarity: "6★",
    image: baseImageUrl + "345.png"
  },
  {
    id: 346,
    name: "Nelliel",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "346.png"
  },
  {
    id: 347,
    name: "Halibel",
    attribute: "Instinct",
    rarity: "6★",
    image: baseImageUrl + "347.png"
  },
  {
    id: 348,
    name: "Aizen",
    attribute: "Vitesse",
    rarity: "6★",
    image: baseImageUrl + "348.png"
  },
  {
    id: 349,
    name: "Sunsun",
    attribute: "Technique",
    rarity: "6★",
    image: baseImageUrl + "349.png"
  },
  {
    id: 350,
    name: "Unohana",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "350.png"
  },
  {
    id: 351,
    name: "Shinji",
    attribute: "Technique",
    rarity: "6★",
    image: baseImageUrl + "351.png"
  },
  {
    id: 352,
    name: "Shinji",
    attribute: "Vitesse",
    rarity: "6★",
    image: baseImageUrl + "352.png"
  },
  {
    id: 353,
    name: "Nnoitra",
    attribute: "Connaissance",
    rarity: "6★",
    image: baseImageUrl + "353.png"
  },
  {
    id: 354,
    name: "Yammy",
    attribute: "Instinct",
    rarity: "6★",
    image: baseImageUrl + "354.png"
  },
  {
    id: 355,
    name: "Zommari",
    attribute: "Technique",
    rarity: "6★",
    image: baseImageUrl + "355.png"
  },
  {
    id: 356,
    name: "Tensa Zangetsu",
    attribute: "Connaissance",
    rarity: "6★",
    image: baseImageUrl + "356.png"
  },
  {
    id: 357,
    name: "White Ichigo",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "357.png"
  },
  {
    id: 358,
    name: "Isshin",
    attribute: "Instinct",
    rarity: "6★",
    image: baseImageUrl + "358.png"
  },
  {
    id: 359,
    name: "Yoruichi",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "359.png"
  },
  {
    id: 360,
    name: "Orihime",
    attribute: "Technique",
    rarity: "6★",
    image: baseImageUrl + "360.png"
  },
  {
    id: 361,
    name: "Kukaku",
    attribute: "Connaissance",
    rarity: "6★",
    image: baseImageUrl + "361.png"
  },
  {
    id: 362,
    name: "Ichigo",
    attribute: "Instinct",
    rarity: "6★",
    image: baseImageUrl + "362.png"
  },
  {
    id: 363,
    name: "Ichigo",
    attribute: "Connaissance",
    rarity: "6★",
    image: baseImageUrl + "363.png"
  },
  {
    id: 364,
    name: "Aizen",
    attribute: "Connaissance",
    rarity: "6★",
    image: baseImageUrl + "364.png"
  },
  {
    id: 365,
    name: "Yamamoto",
    attribute: "Vitesse",
    rarity: "6★",
    image: baseImageUrl + "365.png"
  },
  {
    id: 366,
    name: "Soi Fon",
    attribute: "Instinct",
    rarity: "6★",
    image: baseImageUrl + "366.png"
  },
  {
    id: 367,
    name: "Zangetsu",
    attribute: "Technique",
    rarity: "6★",
    image: baseImageUrl + "367.png"
  },
  {
    id: 368,
    name: "Zangetsu",
    attribute: "Instinct",
    rarity: "6★",
    image: baseImageUrl + "368.png"
  },
  {
    id: 369,
    name: "Zangetsu",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "369.png"
  },
  {
    id: 370,
    name: "Zangetsu",
    attribute: "Vitesse",
    rarity: "6★",
    image: baseImageUrl + "370.png"
  },
  {
    id: 371,
    name: "Zangetsu",
    attribute: "Connaissance",
    rarity: "6★",
    image: baseImageUrl + "371.png"
  },
  {
    id: 372,
    name: "Lisa",
    attribute: "Technique",
    rarity: "6★",
    image: baseImageUrl + "372.png"
  },
  {
    id: 373,
    name: "Hachi",
    attribute: "Vitesse",
    rarity: "6★",
    image: baseImageUrl + "373.png"
  },
  {
    id: 374,
    name: "Hiyori",
    attribute: "Technique",
    rarity: "6★",
    image: baseImageUrl + "374.png"
  },
  {
    id: 375,
    name: "Stark",
    attribute: "Technique",
    rarity: "6★",
    image: baseImageUrl + "375.png"
  },
  {
    id: 376,
    name: "Szayel Aporro",
    attribute: "Connaissance",
    rarity: "6★",
    image: baseImageUrl + "376.png"
  },
  {
    id: 377,
    name: "Aaroniero",
    attribute: "Vitesse",
    rarity: "6★",
    image: baseImageUrl + "377.png"
  },
  {
    id: 378,
    name: "Ginrei",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "378.png"
  },
  {
    id: 379,
    name: "Byakuya",
    attribute: "Technique",
    rarity: "6★",
    image: baseImageUrl + "379.png"
  },
  {
    id: 380,
    name: "Koga",
    attribute: "Connaissance",
    rarity: "6★",
    image: baseImageUrl + "380.png"
  },
  {
    id: 381,
    name: "Mayuri",
    attribute: "Instinct",
    rarity: "6★",
    image: baseImageUrl + "381.png"
  },
  {
    id: 382,
    name: "Nemu",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "382.png"
  },
  {
    id: 383,
    name: "Toshiro",
    attribute: "Connaissance",
    rarity: "6★",
    image: baseImageUrl + "383.png"
  },
  {
    id: 384,
    name: "Gin",
    attribute: "Instinct",
    rarity: "6★",
    image: baseImageUrl + "384.png"
  },
  {
    id: 385,
    name: "Grimmjow",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "385.png"
  },
  {
    id: 386,
    name: "Lilinette",
    attribute: "Vitesse",
    rarity: "6★",
    image: baseImageUrl + "386.png"
  },
  {
    id: 387,
    name: "Byakuya",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "387.png"
  },
  {
    id: 388,
    name: "Kaien",
    attribute: "Technique",
    rarity: "6★",
    image: baseImageUrl + "388.png"
  },
  {
    id: 389,
    name: "Rangiku",
    attribute: "Connaissance",
    rarity: "6★",
    image: baseImageUrl + "389.png"
  },
  {
    id: 390,
    name: "Rukia",
    attribute: "Technique",
    rarity: "6★",
    image: baseImageUrl + "390.png"
  },
  {
    id: 391,
    name: "Kiyone & Sentaro",
    attribute: "Vitesse",
    rarity: "6★",
    image: baseImageUrl + "391.png"
  },
  {
    id: 392,
    name: "Isane",
    attribute: "Connaissance",
    rarity: "6★",
    image: baseImageUrl + "392.png"
  },
  {
    id: 393,
    name: "Tokinada",
    attribute: "Instinct",
    rarity: "6★",
    image: baseImageUrl + "393.png"
  },
  {
    id: 394,
    name: "Halibel",
    attribute: "Technique",
    rarity: "6★",
    image: baseImageUrl + "394.png"
  },
  {
    id: 395,
    name: "Barragan",
    attribute: "Vitesse",
    rarity: "6★",
    image: baseImageUrl + "395.png"
  },
  {
    id: 396,
    name: "Nelliel",
    attribute: "Vitesse",
    rarity: "6★",
    image: baseImageUrl + "396.png"
  },
  {
    id: 397,
    name: "Nanao",
    attribute: "Connaissance",
    rarity: "6★",
    image: baseImageUrl + "397.png"
  },
  {
    id: 398,
    name: "Yoruichi",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "398.png"
  },
  {
    id: 399,
    name: "Ichibei",
    attribute: "Vitesse",
    rarity: "6★",
    image: baseImageUrl + "399.png"
  },
  {
    id: 400,
    name: "Oetsu",
    attribute: "Technique",
    rarity: "6★",
    image: baseImageUrl + "400.png"
  },
  {
    id: 401,
    name: "Orihiùe",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "401.png"
  },
  {
    id: 402,
    name: "Ichigo",
    attribute: "Connaissance",
    rarity: "6★",
    image: baseImageUrl + "402.png"
  },
  {
    id: 403,
    name: "Ichigo",
    attribute: "Instinct",
    rarity: "6★",
    image: baseImageUrl + "403.png"
  },
  {
    id: 404,
    name: "Aizen",
    attribute: "Technique",
    rarity: "6★",
    image: baseImageUrl + "404.png"
  },
  {
    id: 405,
    name: "Kenpachi",
    attribute: "Instinct",
    rarity: "6★",
    image: baseImageUrl + "405.png"
  },
  {
    id: 406,
    name: "Riruka",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "406.png"
  },
  {
    id: 407,
    name: "Unohana",
    attribute: "Connaissance",
    rarity: "6★",
    image: baseImageUrl + "407.png"
  },
  {
    id: 408,
    name: "Loly",
    attribute: "Instinct",
    rarity: "6★",
    image: baseImageUrl + "408.png"
  },
  {
    id: 409,
    name: "Kisuke",
    attribute: "Vitesse",
    rarity: "6★",
    image: baseImageUrl + "409.png"
  },
  {
    id: 410,
    name: "Nelliel",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "410.png"
  },
  {
    id: 411,
    name: "Halibel",
    attribute: "Connaissance",
    rarity: "6★",
    image: baseImageUrl + "411.png"
  },
  {
    id: 412,
    name: "Tenjiro",
    attribute: "Vitesse",
    rarity: "6★",
    image: baseImageUrl + "412.png"
  },
  {
    id: 413,
    name: "Kirio",
    attribute: "Connaissance",
    rarity: "6★",
    image: baseImageUrl + "413.png"
  },
  {
    id: 414,
    name: "Senjumaru",
    attribute: "Instinct",
    rarity: "6★",
    image: baseImageUrl + "414.png"
  },
  {
    id: 415,
    name: "Ulquiorra",
    attribute: "Vitesse",
    rarity: "6★",
    image: baseImageUrl + "415.png"
  },
  {
    id: 416,
    name: "Toshiro",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "416.png"
  },
  {
    id: 417,
    name: "Izuru",
    attribute: "Instinct",
    rarity: "6★",
    image: baseImageUrl + "417.png"
  },
  {
    id: 418,
    name: "Shinji",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "418.png"
  },
  {
    id: 419,
    name: "Grimmjow",
    attribute: "Instinct",
    rarity: "6★",
    image: baseImageUrl + "419.png"
  },
  {
    id: 420,
    name: "Luppi",
    attribute: "Connaissance",
    rarity: "6★",
    image: baseImageUrl + "420.png"
  },
  {
    id: 421,
    name: "Yoruichi",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "421.png"
  },
  {
    id: 422,
    name: "Rukia",
    attribute: "Instinct",
    rarity: "6★",
    image: baseImageUrl + "422.png"
  },
  {
    id: 423,
    name: "Ichigo",
    attribute: "Technique",
    rarity: "6★",
    image: baseImageUrl + "423.png"
  },
  {
    id: 424,
    name: "Askin",
    attribute: "Technique",
    rarity: "6★",
    image: baseImageUrl + "424.png"
  },
  {
    id: 425,
    name: "Bambietta",
    attribute: "Vitesse",
    rarity: "6★",
    image: baseImageUrl + "425.png"
  },
  {
    id: 426,
    name: "Candice",
    attribute: "Connaissance",
    rarity: "6★",
    image: baseImageUrl + "426.png"
  },
  {
    id: 427,
    name: "Gin & Izuru",
    attribute: "Technique",
    rarity: "6★",
    image: baseImageUrl + "427.png"
  },
  {
    id: 428,
    name: "Toshiro",
    attribute: "Vitesse",
    rarity: "6★",
    image: baseImageUrl + "428.png"
  },
  {
    id: 429,
    name: "Kenpachi",
    attribute: "Technique",
    rarity: "6★",
    image: baseImageUrl + "429.png"
  },
  {
    id: 430,
    name: "Seinosuke",
    attribute: "Vitesse",
    rarity: "6★",
    image: baseImageUrl + "430.png"
  },
  {
    id: 431,
    name: "Kyoraku",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "431.png"
  },
  {
    id: 432,
    name: "Unohana",
    attribute: "Instinct",
    rarity: "6★",
    image: baseImageUrl + "432.png"
  },
  {
    id: 433,
    name: "Amagai",
    attribute: "Connaissance",
    rarity: "6★",
    image: baseImageUrl + "433.png"
  },
  {
    id: 434,
    name: "Makoto",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "434.png"
  },
  {
    id: 435,
    name: "Halibel",
    attribute: "Vitesse",
    rarity: "6★",
    image: baseImageUrl + "435.png"
  },
  {
    id: 436,
    name: "Nemu",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "436.png"
  },
  {
    id: 437,
    name: "Apache",
    attribute: "Instinct",
    rarity: "6★",
    image: baseImageUrl + "437.png"
  },
  {
    id: 438,
    name: "Ichigo",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "438.png"
  },
  {
    id: 439,
    name: "Uryu",
    attribute: "Vitesse",
    rarity: "6★",
    image: baseImageUrl + "439.png"
  },
  {
    id: 440,
    name: "Uryu",
    attribute: "Technique",
    rarity: "6★",
    image: baseImageUrl + "440.png"
  },
  {
    id: 441,
    name: "Jugram",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "441.png"
  },
  {
    id: 442,
    name: "Bazz-B",
    attribute: "Vitesse",
    rarity: "6★",
    image: baseImageUrl + "442.png"
  },
  {
    id: 443,
    name: "Ichigo",
    attribute: "Technique",
    rarity: "6★",
    image: baseImageUrl + "443.png"
  },
  {
    id: 444,
    name: "Ichigo",
    attribute: "Instinct",
    rarity: "6★",
    image: baseImageUrl + "444.png"
  },
  {
    id: 445,
    name: "Ichigo",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "445.png"
  },
  {
    id: 446,
    name: "Ichigo",
    attribute: "Vitesse",
    rarity: "6★",
    image: baseImageUrl + "446.png"
  },
  {
    id: 447,
    name: "Ichigo",
    attribute: "Connaissance",
    rarity: "6★",
    image: baseImageUrl + "447.png"
  },
  {
    id: 448,
    name: "Ulquiorra",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "448.png"
  },
  {
    id: 449,
    name: "Kisuke",
    attribute: "Connaissance",
    rarity: "6★",
    image: baseImageUrl + "449.png"
  },
  {
    id: 450,
    name: "Yoruichi",
    attribute: "Vitesse",
    rarity: "6★",
    image: baseImageUrl + "450.png"
  },
  {
    id: 451,
    name: "Shuei",
    attribute: "Instinct",
    rarity: "6★",
    image: baseImageUrl + "451.png"
  },
  {
    id: 452,
    name: "Hikone",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "452.png"
  },
  {
    id: 453,
    name: "Aura",
    attribute: "Connaissance",
    rarity: "6★",
    image: baseImageUrl + "453.png"
  },
  {
    id: 454,
    name: "Nelliel",
    attribute: "Connaissance",
    rarity: "6★",
    image: baseImageUrl + "454.png"
  },
  {
    id: 455,
    name: "Orihime",
    attribute: "Vitesse",
    rarity: "6★",
    image: baseImageUrl + "455.png"
  },
  {
    id: 456,
    name: "Kukaku",
    attribute: "Technique",
    rarity: "6★",
    image: baseImageUrl + "456.png"
  },
  {
    id: 457,
    name: "Nanao",
    attribute: "Instinct",
    rarity: "6★",
    image: baseImageUrl + "457.png"
  },
  {
    id: 458,
    name: "Gremmy",
    attribute: "Connaissance",
    rarity: "6★",
    image: baseImageUrl + "458.png"
  },
  {
    id: 459,
    name: "Lille",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "459.png"
  },
  {
    id: 460,
    name: "Ninny",
    attribute: "Technique",
    rarity: "6★",
    image: baseImageUrl + "460.png"
  },
  {
    id: 461,
    name: "Noel",
    attribute: "Connaissance",
    rarity: "6★",
    image: baseImageUrl + "461.png"
  },
  {
    id: 462,
    name: "Yamamoto",
    attribute: "Technique",
    rarity: "6★",
    image: baseImageUrl + "462.png"
  },
  {
    id: 463,
    name: "Chojiro",
    attribute: "Instinct",
    rarity: "6★",
    image: baseImageUrl + "463.png"
  },
  {
    id: 464,
    name: "Izuru",
    attribute: "Connaissance",
    rarity: "6★",
    image: baseImageUrl + "464.png"
  },
  {
    id: 465,
    name: "Grimmjow",
    attribute: "Technique",
    rarity: "6★",
    image: baseImageUrl + "465.png"
  },
  {
    id: 466,
    name: "Ikkaku",
    attribute: "Vitesse",
    rarity: "6★",
    image: baseImageUrl + "466.png"
  },
  {
    id: 467,
    name: "Edrad",
    attribute: "Connaissance",
    rarity: "6★",
    image: baseImageUrl + "467.png"
  },
  {
    id: 468,
    name: "Isshin",
    attribute: "Vitesse",
    rarity: "6★",
    image: baseImageUrl + "468.png"
  },
  {
    id: 469,
    name: "Masaki",
    attribute: "Instinct",
    rarity: "6★",
    image: baseImageUrl + "469.png"
  },
  {
    id: 470,
    name: "Ryuken",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "470.png"
  },
  {
    id: 471,
    name: "Riruka",
    attribute: "Connaissance",
    rarity: "6★",
    image: baseImageUrl + "471.png"
  },
  {
    id: 472,
    name: "Rangiku",
    attribute: "Technique",
    rarity: "6★",
    image: baseImageUrl + "472.png"
  },
  {
    id: 473,
    name: "Hinamori",
    attribute: "Vitesse",
    rarity: "6★",
    image: baseImageUrl + "473.png"
  },
  {
    id: 474,
    name: "Ichigo",
    attribute: "Connaissance",
    rarity: "6★",
    image: baseImageUrl + "474.png"
  },
  {
    id: 475,
    name: "Rukia",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "475.png"
  },
  {
    id: 476,
    name: "Uryu",
    attribute: "Vitesse",
    rarity: "6★",
    image: baseImageUrl + "476.png"
  },
  {
    id: 477,
    name: "Renji",
    attribute: "Instinct",
    rarity: "6★",
    image: baseImageUrl + "477.png"
  },
  {
    id: 478,
    name: "Szayel Aporro",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "478.png"
  },
  {
    id: 479,
    name: "Yoruichi",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "479.png"
  },
  {
    id: 480,
    name: "Nemu",
    attribute: "Technique",
    rarity: "6★",
    image: baseImageUrl + "480.png"
  },
  {
    id: 481,
    name: "Mashiro",
    attribute: "Instinct",
    rarity: "6★",
    image: baseImageUrl + "481.png"
  },
  {
    id: 482,
    name: "Dordoni",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "482.png"
  },
  {
    id: 483,
    name: "Chirutti",
    attribute: "Connaissance",
    rarity: "6★",
    image: baseImageUrl + "483.png"
  },
  {
    id: 484,
    name: "Chuhlhoune",
    attribute: "Vitesse",
    rarity: "6★",
    image: baseImageUrl + "484.png"
  },
  {
    id: 485,
    name: "Tsukishima",
    attribute: "Vitesse",
    rarity: "6★",
    image: baseImageUrl + "485.png"
  },
  {
    id: 486,
    name: "Ginjo",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "486.png"
  },
  {
    id: 487,
    name: "Mayuri",
    attribute: "Technique",
    rarity: "6★",
    image: baseImageUrl + "487.png"
  },
  {
    id: 488,
    name: "Nnoitra",
    attribute: "Instinct",
    rarity: "6★",
    image: baseImageUrl + "488.png"
  },
  {
    id: 489,
    name: "Nelliel",
    attribute: "Technique",
    rarity: "6★",
    image: baseImageUrl + "489.png"
  },
  {
    id: 490,
    name: "Chad",
    attribute: "Connaissance",
    rarity: "6★",
    image: baseImageUrl + "490.png"
  },
  {
    id: 491,
    name: "Shinji",
    attribute: "Technique",
    rarity: "6★",
    image: baseImageUrl + "491.png"
  },
  {
    id: 492,
    name: "White Ichigo",
    attribute: "Vitesse",
    rarity: "6★",
    image: baseImageUrl + "492.png"
  },
  {
    id: 493,
    name: "Lisa",
    attribute: "FInstinctorce",
    rarity: "6★",
    image: baseImageUrl + "493.png"
  },
  {
    id: 494,
    name: "Zangetsu",
    attribute: "Instinct",
    rarity: "6★",
    image: baseImageUrl + "494.png"
  },
  {
    id: 495,
    name: "Senbonzakura",
    attribute: "Technique",
    rarity: "6★",
    image: baseImageUrl + "495.png"
  },
  {
    id: 496,
    name: "Sode no Shirayuki",
    attribute: "Connaissance",
    rarity: "6★",
    image: baseImageUrl + "496.png"
  },
  {
    id: 497,
    name: "Rukia",
    attribute: "Vitesse",
    rarity: "6★",
    image: baseImageUrl + "497.png"
  },
  {
    id: 498,
    name: "Kokuto",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "498.png"
  },
  {
    id: 499,
    name: "Kusaka",
    attribute: "Technique",
    rarity: "6★",
    image: baseImageUrl + "499.png"
  },
  {
    id: 500,
    name: "Tatsuki",
    attribute: "Technique",
    rarity: "6★",
    image: baseImageUrl + "500.png"
  },
  {
    id: 501,
    name: "Tatsuki",
    attribute: "Instinct",
    rarity: "6★",
    image: baseImageUrl + "501.png"
  },
  {
    id: 502,
    name: "Tatsuki",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "502.png"
  },
  {
    id: 503,
    name: "Tatsuki",
    attribute: "Vitesse",
    rarity: "6★",
    image: baseImageUrl + "503.png"
  },
  {
    id: 504,
    name: "Tatsuki",
    attribute: "Connaissance",
    rarity: "6★",
    image: baseImageUrl + "504.png"
  },
  {
    id: 505,
    name: "Yoruichi & Soi Fon",
    attribute: "Connaissance",
    rarity: "6★",
    image: baseImageUrl + "505.png"
  },
  {
    id: 506,
    name: "Nanao",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "506.png"
  },
  {
    id: 507,
    name: "Don Kan'onji",
    attribute: "Connaissance",
    rarity: "6★",
    image: baseImageUrl + "507.png"
  },
  {
    id: 508,
    name: "Uryu",
    attribute: "Technique",
    rarity: "6★",
    image: baseImageUrl + "508.png"
  },
  {
    id: 509,
    name: "Shuren",
    attribute: "Vitesse",
    rarity: "6★",
    image: baseImageUrl + "509.png"
  },
  {
    id: 510,
    name: "Senna",
    attribute: "Technique",
    rarity: "6★",
    image: baseImageUrl + "510.png"
  },
  {
    id: 511,
    name: "Grimmjow",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "511.png"
  },
  {
    id: 512,
    name: "Unohana",
    attribute: "Vitesse",
    rarity: "6★",
    image: baseImageUrl + "512.png"
  },
  {
    id: 513,
    name: "Rukia",
    attribute: "Instinct",
    rarity: "6★",
    image: baseImageUrl + "513.png"
  },
  {
    id: 514,
    name: "Byakuya",
    attribute: "Instinct",
    rarity: "6★",
    image: baseImageUrl + "514.png"
  },
  {
    id: 515,
    name: "Ichigo",
    attribute: "Technique",
    rarity: "6★",
    image: baseImageUrl + "515.png"
  },
  {
    id: 516,
    name: "Aizen",
    attribute: "Instinct",
    rarity: "6★",
    image: baseImageUrl + "516.png"
  },
  {
    id: 517,
    name: "Yamamoto",
    attribute: "Instinct",
    rarity: "6★",
    image: baseImageUrl + "517.png"
  },
  {
    id: 518,
    name: "Kyoraku",
    attribute: "Connaissance",
    rarity: "6★",
    image: baseImageUrl + "518.png"
  },
  {
    id: 519,
    name: "Ukitake",
    attribute: "Vitesse",
    rarity: "6★",
    image: baseImageUrl + "519.png"
  },
  {
    id: 520,
    name: "Kenpachi",
    attribute: "Vitesse",
    rarity: "6★",
    image: baseImageUrl + "520.png"
  },
  {
    id: 521,
    name: "Stark",
    attribute: "Instinct",
    rarity: "6★",
    image: baseImageUrl + "521.png"
  },
  {
    id: 522,
    name: "Barragan",
    attribute: "Technique",
    rarity: "6★",
    image: baseImageUrl + "522.png"
  },
  {
    id: 523,
    name: "Gin",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "523.png"
  },
  {
    id: 524,
    name: "Grimmjow",
    attribute: "Vitesse",
    rarity: "6★",
    image: baseImageUrl + "524.png"
  },
  {
    id: 525,
    name: "Shuei",
    attribute: "Technique",
    rarity: "6★",
    image: baseImageUrl + "525.png"
  },
  {
    id: 526,
    name: "Ulquiorra",
    attribute: "Technique",
    rarity: "6★",
    image: baseImageUrl + "526.png"
  },
  {
    id: 527,
    name: "Ginjo",
    attribute: "Vitesse",
    rarity: "6★",
    image: baseImageUrl + "527.png"
  },
  {
    id: 528,
    name: "Giriko",
    attribute: "Connaissance",
    rarity: "6★",
    image: baseImageUrl + "528.png"
  },
  {
    id: 529,
    name: "Ichigo",
    attribute: "Vitesse",
    rarity: "6★",
    image: baseImageUrl + "529.png"
  },
  {
    id: 530,
    name: "Chad",
    attribute: "Instinct",
    rarity: "6★",
    image: baseImageUrl + "530.png"
  },
  {
    id: 531,
    name: "Bruno",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "531.png"
  },
  {
    id: 532,
    name: "Riruka",
    attribute: "Technique",
    rarity: "6★",
    image: baseImageUrl + "532.png"
  },
  {
    id: 533,
    name: "Yukio",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "533.png"
  },
  {
    id: 534,
    name: "Jackie",
    attribute: "Connaissance",
    rarity: "6★",
    image: baseImageUrl + "534.png"
  },
  {
    id: 535,
    name: "Kisuke",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "535.png"
  },
  {
    id: 536,
    name: "Shinji",
    attribute: "Connaissance",
    rarity: "6★",
    image: baseImageUrl + "536.png"
  },
  {
    id: 537,
    name: "Yammy",
    attribute: "Connaissance",
    rarity: "6★",
    image: baseImageUrl + "537.png"
  },
  {
    id: 538,
    name: "Komamura",
    attribute: "Technique",
    rarity: "6★",
    image: baseImageUrl + "538.png"
  },
  {
    id: 539,
    name: "Kaname",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "539.png"
  },
  {
    id: 540,
    name: "Tetsuzaemon",
    attribute: "Instinct",
    rarity: "6★",
    image: baseImageUrl + "540.png"
  },
  {
    id: 541,
    name: "Orihime",
    attribute: "Technique",
    rarity: "6★",
    image: baseImageUrl + "541.png"
  },
  {
    id: 542,
    name: "Toshiro",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "542.png"
  },
  {
    id: 543,
    name: "Tsukishima",
    attribute: "Technique",
    rarity: "6★",
    image: baseImageUrl + "543.png"
  },
  {
    id: 544,
    name: "Shishigawara",
    attribute: "Vitesse",
    rarity: "6★",
    image: baseImageUrl + "544.png"
  },
  {
    id: 545,
    name: "Ninny",
    attribute: "Instinct",
    rarity: "6★",
    image: baseImageUrl + "545.png"
  },
  {
    id: 546,
    name: "Noel",
    attribute: "Vitesse",
    rarity: "6★",
    image: baseImageUrl + "546.png"
  },
  {
    id: 547,
    name: "Kenpachi",
    attribute: "Connaissance",
    rarity: "6★",
    image: baseImageUrl + "547.png"
  },
  {
    id: 548,
    name: "Unohana",
    attribute: "Technique",
    rarity: "6★",
    image: baseImageUrl + "548.png"
  },
  {
    id: 549,
    name: "Nelliel",
    attribute: "Instinct",
    rarity: "6★",
    image: baseImageUrl + "549.png"
  },
  {
    id: 550,
    name: "Byakuya",
    attribute: "Connaissance",
    rarity: "6★",
    image: baseImageUrl + "550.png"
  },
  {
    id: 551,
    name: "Renji",
    attribute: "Technique",
    rarity: "6★",
    image: baseImageUrl + "551.png"
  },
  {
    id: 552,
    name: "Rukia",
    attribute: "Connaissance",
    rarity: "6★",
    image: baseImageUrl + "552.png"
  },
  {
    id: 553,
    name: "Rangiku",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "553.png"
  },
  {
    id: 554,
    name: "Hinamori",
    attribute: "Instinct",
    rarity: "6★",
    image: baseImageUrl + "554.png"
  },
  {
    id: 555,
    name: "Abirama",
    attribute: "Technique",
    rarity: "6★",
    image: baseImageUrl + "555.png"
  },
  {
    id: 556,
    name: "Findorr",
    attribute: "Instinct",
    rarity: "6★",
    image: baseImageUrl + "556.png"
  },
  {
    id: 557,
    name: "Nirgge",
    attribute: "Vitesse",
    rarity: "6★",
    image: baseImageUrl + "557.png"
  },
  {
    id: 558,
    name: "Yoruichi",
    attribute: "Instinct",
    rarity: "6★",
    image: baseImageUrl + "558.png"
  },
  {
    id: 559,
    name: "Soi Fon",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "559.png"
  },
  {
    id: 560,
    name: "Halibel",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "560.png"
  },
  {
    id: 561,
    name: "Toshiro",
    attribute: "Connaissance",
    rarity: "6★",
    image: baseImageUrl + "561.png"
  },
  {
    id: 562,
    name: "Aizen",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "562.png"
  },
  {
    id: 563,
    name: "Grimmjow",
    attribute: "Technique",
    rarity: "6★",
    image: baseImageUrl + "563.png"
  },
  {
    id: 564,
    name: "Ulquiorra",
    attribute: "Connaissance",
    rarity: "6★",
    image: baseImageUrl + "564.png"
  },
  {
    id: 565,
    name: "Rose",
    attribute: "Vitesse",
    rarity: "6★",
    image: baseImageUrl + "565.png"
  },
  {
    id: 566,
    name: "Gin",
    attribute: "Instinct",
    rarity: "6★",
    image: baseImageUrl + "566.png"
  },
  {
    id: 567,
    name: "Shuei",
    attribute: "Vitesse",
    rarity: "6★",
    image: baseImageUrl + "567.png"
  },
  {
    id: 568,
    name: "Kenpachi",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "568.png"
  },
  {
    id: 569,
    name: "Azashiro",
    attribute: "Vitesse",
    rarity: "6★",
    image: baseImageUrl + "569.png"
  },
  {
    id: 570,
    name: "Kuruyashiki",
    attribute: "Technique",
    rarity: "6★",
    image: baseImageUrl + "570.png"
  },
  {
    id: 571,
    name: "Chad",
    attribute: "Technique",
    rarity: "6★",
    image: baseImageUrl + "571.png"
  },
  {
    id: 572,
    name: "Chad",
    attribute: "Instinct",
    rarity: "6★",
    image: baseImageUrl + "572.png"
  },
  {
    id: 573,
    name: "Chad",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "573.png"
  },
  {
    id: 574,
    name: "Chad",
    attribute: "Vitesse",
    rarity: "6★",
    image: baseImageUrl + "574.png"
  },
  {
    id: 575,
    name: "Chad",
    attribute: "Connaissance",
    rarity: "6★",
    image: baseImageUrl + "575.png"
  },
  {
    id: 576,
    name: "Kisuke",
    attribute: "Technique",
    rarity: "6★",
    image: baseImageUrl + "576.png"
  },
  {
    id: 577,
    name: "Barragan",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "577.png"
  },
  {
    id: 578,
    name: "Ggio",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "578.png"
  },
  {
    id: 579,
    name: "Shinji",
    attribute: "Instinct",
    rarity: "6★",
    image: baseImageUrl + "579.png"
  },
  {
    id: 580,
    name: "Lisa",
    attribute: "Connaissance",
    rarity: "6★",
    image: baseImageUrl + "580.png"
  },
  {
    id: 581,
    name: "Love",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "581.png"
  },
  {
    id: 582,
    name: "Nozomi",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "582.png"
  },
  {
    id: 583,
    name: "Oko",
    attribute: "Technique",
    rarity: "6★",
    image: baseImageUrl + "583.png"
  },
  {
    id: 584,
    name: "Kageroza",
    attribute: "Vitesse",
    rarity: "6★",
    image: baseImageUrl + "584.png"
  },
  {
    id: 585,
    name: "Nelliel",
    attribute: "Connaissance",
    rarity: "6★",
    image: baseImageUrl + "585.png"
  },
  {
    id: 586,
    name: "Hinamori",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "586.png"
  },
  {
    id: 587,
    name: "Isane",
    attribute: "Instinct",
    rarity: "6★",
    image: baseImageUrl + "587.png"
  },
  {
    id: 588,
    name: "Ichigo",
    attribute: "Connaissance",
    rarity: "6★",
    image: baseImageUrl + "588.png"
  },
  {
    id: 589,
    name: "Uryu",
    attribute: "Vitesse",
    rarity: "6★",
    image: baseImageUrl + "589.png"
  },
  {
    id: 590,
    name: "Yhwach",
    attribute: "Instinct",
    rarity: "6★",
    image: baseImageUrl + "590.png"
  },
  {
    id: 591,
    name: "Yamamoto",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "591.png"
  },
  {
    id: 592,
    name: "Aizen",
    attribute: "Technique",
    rarity: "6★",
    image: baseImageUrl + "592.png"
  },
  {
    id: 593,
    name: "Toshiro",
    attribute: "Instinct",
    rarity: "6★",
    image: baseImageUrl + "593.png"
  },
  {
    id: 594,
    name: "Ukitake",
    attribute: "Technique",
    rarity: "6★",
    image: baseImageUrl + "594.png"
  },
  {
    id: 595,
    name: "Soi Fon",
    attribute: "Vitesse",
    rarity: "6★",
    image: baseImageUrl + "595.png"
  },
  {
    id: 596,
    name: "Cien",
    attribute: "Instinct",
    rarity: "6★",
    image: baseImageUrl + "596.png"
  },
  {
    id: 597,
    name: "Roca",
    attribute: "Technique",
    rarity: "6★",
    image: baseImageUrl + "597.png"
  },
  {
    id: 598,
    name: "Unohana",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "598.png"
  },
  {
    id: 599,
    name: "Orihime",
    attribute: "Connaissance",
    rarity: "6★",
    image: baseImageUrl + "599.png"
  },
  {
    id: 600,
    name: "Hanataro",
    attribute: "Vitesse",
    rarity: "6★",
    image: baseImageUrl + "600.png"
  },
  {
    id: 601,
    name: "Ichigo",
    attribute: "Instinct",
    rarity: "6★",
    image: baseImageUrl + "601.png"
  },
  {
    id: 602,
    name: "Uryu",
    attribute: "Technique",
    rarity: "6★",
    image: baseImageUrl + "602.png"
  },
  {
    id: 603,
    name: "Chad",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "603.png"
  },
  {
    id: 604,
    name: "Kensei",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "604.png"
  },
  {
    id: 605,
    name: "Shinji",
    attribute: "Vitesse",
    rarity: "6★",
    image: baseImageUrl + "605.png"
  },
  {
    id: 606,
    name: "Rose",
    attribute: "Technique",
    rarity: "6★",
    image: baseImageUrl + "606.png"
  },
  {
    id: 607,
    name: "Mayuri",
    attribute: "Connaissance",
    rarity: "6★",
    image: baseImageUrl + "607.png"
  },
  {
    id: 608,
    name: "Kisuke",
    attribute: "Instinct",
    rarity: "6★",
    image: baseImageUrl + "608.png"
  },
  {
    id: 609,
    name: "Akon",
    attribute: "Vitesse",
    rarity: "6★",
    image: baseImageUrl + "609.png"
  },
  {
    id: 610,
    name: "Aizen",
    attribute: "Vitesse",
    rarity: "6★",
    image: baseImageUrl + "610.png"
  },
  {
    id: 611,
    name: "Gin",
    attribute: "Connaissance",
    rarity: "6★",
    image: baseImageUrl + "611.png"
  },
  {
    id: 612,
    name: "Kaname",
    attribute: "Technique",
    rarity: "6★",
    image: baseImageUrl + "612.png"
  },
  {
    id: 613,
    name: "Ulquiorra",
    attribute: "Vitesse",
    rarity: "6★",
    image: baseImageUrl + "613.png"
  },
  {
    id: 614,
    name: "Ulquiorra",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "614.png"
  },
  {
    id: 615,
    name: "Ulquiorra",
    attribute: "Connaissance",
    rarity: "6★",
    image: baseImageUrl + "615.png"
  },
  {
    id: 616,
    name: "Halibel",
    attribute: "Instinct",
    rarity: "6★",
    image: baseImageUrl + "616.png"
  },
  {
    id: 617,
    name: "Yoruichi",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "617.png"
  },
  {
    id: 618,
    name: "Toshiro",
    attribute: "Technique",
    rarity: "6★",
    image: baseImageUrl + "618.png"
  },
  {
    id: 619,
    name: "Kaname",
    attribute: "Instinct",
    rarity: "6★",
    image: baseImageUrl + "619.png"
  },
  {
    id: 620,
    name: "Komamura",
    attribute: "Vitesse",
    rarity: "6★",
    image: baseImageUrl + "620.png"
  },
  {
    id: 621,
    name: "Ichigo",
    attribute: "Vitesse",
    rarity: "6★",
    image: baseImageUrl + "621.png"
  },
  {
    id: 622,
    name: "Rukia",
    attribute: "Technique",
    rarity: "6★",
    image: baseImageUrl + "622.png"
  },
  {
    id: 623,
    name: "Renji",
    attribute: "Connaissance",
    rarity: "6★",
    image: baseImageUrl + "623.png"
  },
  {
    id: 624,
    name: "Orihime",
    attribute: "Vitesse",
    rarity: "6★",
    image: baseImageUrl + "624.png"
  },
  {
    id: 625,
    name: "Sunsun",
    attribute: "Instinct",
    rarity: "6★",
    image: baseImageUrl + "625.png"
  },
  {
    id: 626,
    name: "Yumichika",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "626.png"
  },
  {
    id: 627,
    name: "Stark",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "627.png"
  },
  {
    id: 628,
    name: "Yamamoto",
    attribute: "Connaissance",
    rarity: "6★",
    image: baseImageUrl + "628.png"
  },
  {
    id: 629,
    name: "Lilinette",
    attribute: "Technique",
    rarity: "6★",
    image: baseImageUrl + "629.png"
  },
  {
    id: 630,
    name: "Ichigo",
    attribute: "Technique",
    rarity: "6★",
    image: baseImageUrl + "630.png"
  },
  {
    id: 631,
    name: "Isshin",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "631.png"
  },
  {
    id: 632,
    name: "Tensa Zangetsu",
    attribute: "Vitesse",
    rarity: "6★",
    image: baseImageUrl + "632.png"
  },
  {
    id: 633,
    name: "Illfort",
    attribute: "Technique",
    rarity: "6★",
    image: baseImageUrl + "633.png"
  },
  {
    id: 634,
    name: "Abirama",
    attribute: "Connaissance",
    rarity: "6★",
    image: baseImageUrl + "634.png"
  },
  {
    id: 635,
    name: "Tesla",
    attribute: "Instinct",
    rarity: "6★",
    image: baseImageUrl + "635.png"
  },
  {
    id: 636,
    name: "Gin",
    attribute: "Technique",
    rarity: "6★",
    image: baseImageUrl + "636.png"
  },
  {
    id: 637,
    name: "Mayuri",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "637.png"
  },
  {
    id: 638,
    name: "Shuei",
    attribute: "Connaissance",
    rarity: "6★",
    image: baseImageUrl + "638.png"
  },
  {
    id: 639,
    name: "Hinamori",
    attribute: "Technique",
    rarity: "6★",
    image: baseImageUrl + "639.png"
  },
  {
    id: 640,
    name: "Izuru",
    attribute: "Vitesse",
    rarity: "6★",
    image: baseImageUrl + "640.png"
  },
  {
    id: 641,
    name: "Bruno",
    attribute: "Instinct",
    rarity: "6★",
    image: baseImageUrl + "641.png"
  },
  {
    id: 642,
    name: "Macy",
    attribute: "Vitesse",
    rarity: "6★",
    image: baseImageUrl + "642.png"
  },
  {
    id: 643,
    name: "Balgo & Sushi",
    attribute: "Connaissance",
    rarity: "6★",
    image: baseImageUrl + "643.png"
  },
  {
    id: 644,
    name: "Chirutti",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "644.png"
  },
  {
    id: 645,
    name: "Dordoni",
    attribute: "Connaissance",
    rarity: "6★",
    image: baseImageUrl + "645.png"
  },
  {
    id: 646,
    name: "Gantenbaine",
    attribute: "Vitesse",
    rarity: "6★",
    image: baseImageUrl + "646.png"
  },
  {
    id: 647,
    name: "Nelliel",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "647.png"
  },
  {
    id: 648,
    name: "Szayel Aporro",
    attribute: "Instinct",
    rarity: "6★",
    image: baseImageUrl + "648.png"
  },
  {
    id: 649,
    name: "Nnoitra",
    attribute: "Technique",
    rarity: "6★",
    image: baseImageUrl + "649.png"
  },
  {
    id: 650,
    name: "Tsukishima",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "650.png"
  },
  {
    id: 651,
    name: "Ginjo",
    attribute: "Instinct",
    rarity: "6★",
    image: baseImageUrl + "651.png"
  },
  {
    id: 652,
    name: "Yukio",
    attribute: "Technique",
    rarity: "6★",
    image: baseImageUrl + "652.png"
  },
  {
    id: 653,
    name: "Rangiku",
    attribute: "Instinct",
    rarity: "6★",
    image: baseImageUrl + "653.png"
  },
  {
    id: 654,
    name: "Riruka",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "654.png"
  },
  {
    id: 655,
    name: "Mila Rose",
    attribute: "Vitesse",
    rarity: "6★",
    image: baseImageUrl + "655.png"
  },
  {
    id: 656,
    name: "Ichigo",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "656.png"
  },
  {
    id: 657,
    name: "White",
    attribute: "Connaissance",
    rarity: "6★",
    image: baseImageUrl + "657.png"
  },
  {
    id: 658,
    name: "Yamamoto",
    attribute: "Connaissance",
    rarity: "6★",
    image: baseImageUrl + "658.png"
  },
  {
    id: 659,
    name: "Unohana",
    attribute: "Vitesse",
    rarity: "6★",
    image: baseImageUrl + "659.png"
  },
  {
    id: 660,
    name: "Chojiro",
    attribute: "Technique",
    rarity: "6★",
    image: baseImageUrl + "660.png"
  },
  {
    id: 661,
    name: "Byakuya",
    attribute: "Connaissance",
    rarity: "6★",
    image: baseImageUrl + "661.png"
  },
  {
    id: 662,
    name: "Ukitake",
    attribute: "Technique",
    rarity: "6★",
    image: baseImageUrl + "662.png"
  },
  {
    id: 663,
    name: "Bambietta",
    attribute: "Technique",
    rarity: "6★",
    image: baseImageUrl + "663.png"
  },
  {
    id: 664,
    name: "Quilge",
    attribute: "Instinct",
    rarity: "6★",
    image: baseImageUrl + "664.png"
  },
  {
    id: 665,
    name: "Ebern",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "665.png"
  },
  {
    id: 666,
    name: "Ulquiorra",
    attribute: "Instinct",
    rarity: "6★",
    image: baseImageUrl + "666.png"
  },
  {
    id: 667,
    name: "Yammy",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "667.png"
  },
  {
    id: 668,
    name: "Zommari",
    attribute: "Vitesse",
    rarity: "6★",
    image: baseImageUrl + "668.png"
  },
  {
    id: 669,
    name: "Ninny",
    attribute: "Connaissance",
    rarity: "6★",
    image: baseImageUrl + "669.png"
  },
  {
    id: 670,
    name: "Noel",
    attribute: "Instinct",
    rarity: "6★",
    image: baseImageUrl + "670.png"
  },
  {
    id: 671,
    name: "Hinamori",
    attribute: "Instinct",
    rarity: "6★",
    image: baseImageUrl + "671.png"
  },
  {
    id: 672,
    name: "Toshiro",
    attribute: "Vitesse",
    rarity: "6★",
    image: baseImageUrl + "672.png"
  },
  {
    id: 673,
    name: "Gin",
    attribute: "Vitesse",
    rarity: "6★",
    image: baseImageUrl + "673.png"
  },
  {
    id: 674,
    name: "Rukia",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "674.png"
  },
  {
    id: 675,
    name: "Ikkaku",
    attribute: "Connaissance",
    rarity: "6★",
    image: baseImageUrl + "675.png"
  },
  {
    id: 676,
    name: "As Nodt",
    attribute: "Connaissance",
    rarity: "6★",
    image: baseImageUrl + "676.png"
  },
  {
    id: 677,
    name: "Byakuya",
    attribute: "Technique",
    rarity: "6★",
    image: baseImageUrl + "677.png"
  },
  {
    id: 678,
    name: "Ichibei",
    attribute: "Technique",
    rarity: "6★",
    image: baseImageUrl + "678.png"
  },
  {
    id: 679,
    name: "Senjumaru",
    attribute: "Vitesse",
    rarity: "6★",
    image: baseImageUrl + "679.png"
  },
  {
    id: 680,
    name: "Kirio",
    attribute: "Instinct",
    rarity: "6★",
    image: baseImageUrl + "680.png"
  },
  {
    id: 681,
    name: "Nelliel",
    attribute: "ForVitessece",
    rarity: "6★",
    image: baseImageUrl + "681.png"
  },
  {
    id: 682,
    name: "Grimmjow",
    attribute: "Connaissance",
    rarity: "6★",
    image: baseImageUrl + "682.png"
  },
  {
    id: 683,
    name: "Yachiru",
    attribute: "Instinct",
    rarity: "6★",
    image: baseImageUrl + "683.png"
  },
  {
    id: 684,
    name: "Ichigo",
    attribute: "Instinct",
    rarity: "6★",
    image: baseImageUrl + "684.png"
  },
  {
    id: 685,
    name: "Orihime",
    attribute: "Technique",
    rarity: "6★",
    image: baseImageUrl + "685.png"
  },
  {
    id: 686,
    name: "Yhwach",
    attribute: "Connaissance",
    rarity: "6★",
    image: baseImageUrl + "686.png"
  },
  {
    id: 687,
    name: "Aizen",
    attribute: "Connaissance",
    rarity: "6★",
    image: baseImageUrl + "687.png"
  },
  {
    id: 688,
    name: "Kyoraku",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "688.png"
  },
  {
    id: 689,
    name: "Soi Fon",
    attribute: "Technique",
    rarity: "6★",
    image: baseImageUrl + "689.png"
  },
  {
    id: 690,
    name: "Riruka",
    attribute: "Instinct",
    rarity: "6★",
    image: baseImageUrl + "690.png"
  },
  {
    id: 691,
    name: "Mashiro",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "691.png"
  },
  {
    id: 692,
    name: "Hinamori",
    attribute: "Connaissance",
    rarity: "6★",
    image: baseImageUrl + "692.png"
  },
  {
    id: 693,
    name: "Shuei",
    attribute: "Vitesse",
    rarity: "6★",
    image: baseImageUrl + "693.png"
  },
  {
    id: 694,
    name: "Tetsuzaemon",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "694.png"
  },
  {
    id: 695,
    name: "Ikkaku",
    attribute: "Instinct",
    rarity: "6★",
    image: baseImageUrl + "695.png"
  },
  {
    id: 696,
    name: "Cang Du",
    attribute: "Vitesse",
    rarity: "6★",
    image: baseImageUrl + "696.png"
  },
  {
    id: 697,
    name: "Toshiro",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "697.png"
  },
  {
    id: 698,
    name: "Halibel",
    attribute: "Technique",
    rarity: "6★",
    image: baseImageUrl + "698.png"
  },
  {
    id: 699,
    name: "Wonderwice",
    attribute: "Connaissance",
    rarity: "6★",
    image: baseImageUrl + "699.png"
  },
  {
    id: 700,
    name: "Shaolon",
    attribute: "Instinct",
    rarity: "6★",
    image: baseImageUrl + "700.png"
  },
  {
    id: 701,
    name: "Meninas",
    attribute: "Instinct",
    rarity: "6★",
    image: baseImageUrl + "701.png"
  },
  {
    id: 702,
    name: "Rangiku",
    attribute: "Technique",
    rarity: "6★",
    image: baseImageUrl + "702.png"
  },
  {
    id: 703,
    name: "Yumichika",
    attribute: "Connaissance",
    rarity: "6★",
    image: baseImageUrl + "703.png"
  },
  {
    id: 704,
    name: "Rukia",
    attribute: "Connaissance",
    rarity: "6★",
    image: baseImageUrl + "704.png"
  },
  {
    id: 705,
    name: "Aaroniero",
    attribute: "Vitesse",
    rarity: "6★",
    image: baseImageUrl + "705.png"
  },
  {
    id: 706,
    name: "Ulquiorra",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "706.png"
  },
  {
    id: 707,
    name: "Orihime",
    attribute: "Technique",
    rarity: "6★",
    image: baseImageUrl + "707.png"
  },
  {
    id: 708,
    name: "Nnoitra",
    attribute: "Instinct",
    rarity: "6★",
    image: baseImageUrl + "708.png"
  },
  {
    id: 709,
    name: "Ichigo",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "709.png"
  },
  {
    id: 710,
    name: "Grimmjow",
    attribute: "Vitesse",
    rarity: "6★",
    image: baseImageUrl + "710.png"
  },
  {
    id: 711,
    name: "Masaki",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "711.png"
  },
  {
    id: 712,
    name: "Isshin",
    attribute: "Connaissance",
    rarity: "6★",
    image: baseImageUrl + "712.png"
  },
  {
    id: 713,
    name: "Ichigo",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "713.png"
  },
  {
    id: 714,
    name: "Kyoraku",
    attribute: "Connaissance",
    rarity: "6★",
    image: baseImageUrl + "714.png"
  },
  {
    id: 715,
    name: "Nanao",
    attribute: "Technique",
    rarity: "6★",
    image: baseImageUrl + "715.png"
  },
  {
    id: 716,
    name: "Bambietta",
    attribute: "Technique",
    rarity: "6★",
    image: baseImageUrl + "716.png"
  },
  {
    id: 717,
    name: "Candice",
    attribute: "Vitesse",
    rarity: "6★",
    image: baseImageUrl + "717.png"
  },
  {
    id: 718,
    name: "Meninas",
    attribute: "Connaissance",
    rarity: "6★",
    image: baseImageUrl + "718.png"
  },
  {
    id: 719,
    name: "Kenpachi",
    attribute: "Vitesse",
    rarity: "6★",
    image: baseImageUrl + "719.png"
  },
  {
    id: 720,
    name: "Gremmy",
    attribute: "Technique",
    rarity: "6★",
    image: baseImageUrl + "720.png"
  },
  {
    id: 721,
    name: "Toshiro",
    attribute: "Instinct",
    rarity: "6★",
    image: baseImageUrl + "721.png"
  },
  {
    id: 722,
    name: "Komamura",
    attribute: "Connaissance",
    rarity: "6★",
    image: baseImageUrl + "722.png"
  },
  {
    id: 723,
    name: "Soi Fon",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "723.png"
  },
  {
    id: 724,
    name: "Shinji",
    attribute: "Technique",
    rarity: "6★",
    image: baseImageUrl + "724.png"
  },
  {
    id: 725,
    name: "Kensei",
    attribute: "Instinct",
    rarity: "6★",
    image: baseImageUrl + "725.png"
  },
  {
    id: 726,
    name: "Oetsu",
    attribute: "Vitesse",
    rarity: "6★",
    image: baseImageUrl + "726.png"
  },
  {
    id: 727,
    name: "Tenjiro",
    attribute: "Technique",
    rarity: "6★",
    image: baseImageUrl + "727.png"
  },
  {
    id: 728,
    name: "Yamamoto",
    attribute: "Vitesse",
    rarity: "6★",
    image: baseImageUrl + "728.png"
  },
  {
    id: 729,
    name: "Unohana",
    attribute: "Instinct",
    rarity: "6★",
    image: baseImageUrl + "729.png"
  },
  {
    id: 730,
    name: "Ukitake",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "730.png"
  },
  {
    id: 731,
    name: "Byakuya",
    attribute: "Instinct",
    rarity: "6★",
    image: baseImageUrl + "731.png"
  },
  {
    id: 732,
    name: "Rukia",
    attribute: "Connaissance",
    rarity: "6★",
    image: baseImageUrl + "732.png"
  },
  {
    id: 733,
    name: "Renji",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "733.png"
  },
  {
    id: 734,
    name: "Candice",
    attribute: "Connaissance",
    rarity: "6★",
    image: baseImageUrl + "734.png"
  },
  {
    id: 735,
    name: "Masculine",
    attribute: "Vitesse",
    rarity: "6★",
    image: baseImageUrl + "735.png"
  },
  {
    id: 736,
    name: "Giselle",
    attribute: "Technique",
    rarity: "6★",
    image: baseImageUrl + "736.png"
  },
  {
    id: 737,
    name: "Bambietta",
    attribute: "Vitesse",
    rarity: "6★",
    image: baseImageUrl + "737.png"
  },
  {
    id: 738,
    name: "Chirutti",
    attribute: "Instinct",
    rarity: "6★",
    image: baseImageUrl + "738.png"
  },
  {
    id: 739,
    name: "Bazz-B",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "739.png"
  },
  {
    id: 740,
    name: "Robert",
    attribute: "Technique",
    rarity: "6★",
    image: baseImageUrl + "740.png"
  },
  {
    id: 741,
    name: "Unohana",
    attribute: "Connaissance",
    rarity: "6★",
    image: baseImageUrl + "741.png"
  },
  {
    id: 742,
    name: "Nemu",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "742.png"
  },
  {
    id: 743,
    name: "Isane",
    attribute: "Vitesse",
    rarity: "6★",
    image: baseImageUrl + "743.png"
  },
  {
    id: 744,
    name: "Liltotto",
    attribute: "Technique",
    rarity: "6★",
    image: baseImageUrl + "744.png"
  },
  {
    id: 745,
    name: "Gremmy",
    attribute: "Instinct",
    rarity: "6★",
    image: baseImageUrl + "745.png"
  },
  {
    id: 746,
    name: "Ichigo",
    attribute: "Instinct",
    rarity: "6★",
    image: baseImageUrl + "746.png"
  },
  {
    id: 747,
    name: "Senjumaru",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "747.png"
  },
  {
    id: 748,
    name: "Askin",
    attribute: "Vitesse",
    rarity: "6★",
    image: baseImageUrl + "748.png"
  },
  {
    id: 749,
    name: "Gin",
    attribute: "Technique",
    rarity: "6★",
    image: baseImageUrl + "749.png"
  },
  {
    id: 750,
    name: "Toshiro",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "750.png"
  },
  {
    id: 751,
    name: "As Nodt",
    attribute: "Vitesse",
    rarity: "6★",
    image: baseImageUrl + "751.png"
  },
  {
    id: 752,
    name: "NaNaNa",
    attribute: "Connaissance",
    rarity: "6★",
    image: baseImageUrl + "752.png"
  },
  {
    id: 753,
    name: "Driscoll",
    attribute: "Technique",
    rarity: "6★",
    image: baseImageUrl + "753.png"
  },
  {
    id: 754,
    name: "Yumichika",
    attribute: "Vitesse",
    rarity: "6★",
    image: baseImageUrl + "754.png"
  },
  {
    id: 755,
    name: "Rin",
    attribute: "Connaissance",
    rarity: "6★",
    image: baseImageUrl + "755.png"
  },
  {
    id: 756,
    name: "Shinji",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "756.png"
  },
  {
    id: 757,
    name: "Riruka",
    attribute: "Instinct",
    rarity: "6★",
    image: baseImageUrl + "757.png"
  },
  {
    id: 758,
    name: "Hinamori",
    attribute: "Technique",
    rarity: "6★",
    image: baseImageUrl + "758.png"
  },
  {
    id: 759,
    name: "Halibel",
    attribute: "Connaissance",
    rarity: "6★",
    image: baseImageUrl + "759.png"
  },
  {
    id: 760,
    name: "Stark",
    attribute: "Instinct",
    rarity: "6★",
    image: baseImageUrl + "760.png"
  },
  {
    id: 761,
    name: "Sunsun",
    attribute: "Technique",
    rarity: "6★",
    image: baseImageUrl + "761.png"
  },
  {
    id: 762,
    name: "Mila Rose",
    attribute: "Connaissance",
    rarity: "6★",
    image: baseImageUrl + "762.png"
  },
  {
    id: 763,
    name: "Apache",
    attribute: "Vitesse",
    rarity: "6★",
    image: baseImageUrl + "763.png"
  },
  {
    id: 764,
    name: "Ichigo",
    attribute: "Connaissance",
    rarity: "6★",
    image: baseImageUrl + "764.png"
  },
  {
    id: 765,
    name: "Ulquiorra",
    attribute: "Instinct",
    rarity: "6★",
    image: baseImageUrl + "765.png"
  },
  {
    id: 766,
    name: "Giselle",
    attribute: "Connaissance",
    rarity: "6★",
    image: baseImageUrl + "766.png"
  },
  {
    id: 767,
    name: "As Nodt",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "767.png"
  },
  {
    id: 768,
    name: "Askin",
    attribute: "Technique",
    rarity: "6★",
    image: baseImageUrl + "768.png"
  },
  {
    id: 769,
    name: "Kon",
    attribute: "Technique",
    rarity: "6★",
    image: baseImageUrl + "769.png"
  },
  {
    id: 770,
    name: "Ururu",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "770.png"
  },
  {
    id: 771,
    name: "Toshiro",
    attribute: "Vitesse",
    rarity: "6★",
    image: baseImageUrl + "771.png"
  },
  {
    id: 772,
    name: "Mayuri",
    attribute: "Instinct",
    rarity: "6★",
    image: baseImageUrl + "772.png"
  },
  {
    id: 773,
    name: "Rangiku",
    attribute: "Vitesse",
    rarity: "6★",
    image: baseImageUrl + "773.png"
  },
  {
    id: 774,
    name: "Aizen",
    attribute: "Force",
    rarity: "6★",
    image: baseImageUrl + "774.png"
  },
  {
    id: 775,
    name: "Byakuya",
    attribute: "Connaissance",
    rarity: "6★",
    image: baseImageUrl + "775.png"
  },
   {
    id: 776,
    name: "Yoruichi",
    attribute: "Vitesse",
    rarity: "6★",
    image: baseImageUrl + "776.png"
  },
   {
    id: 777,
    name: "Liltotto",
    attribute: "Instinct",
    rarity: "6★",
    image: baseImageUrl + "777.png"
  },
  {
    id: 778,
    name: "Masaki",
    attribute: "Connaissance",
    rarity: "6★",
    image: baseImageUrl + "778.png"
  },
  {
    id: 779,
    name: "Ichigo",
    attribute: "Connaissance",
    rarity: "6★",
    image: baseImageUrl + "779.png"
  },
  {
    id: 780,
    name: "Rukia",
    attribute: "Vitesse",
    rarity: "6★",
    image: baseImageUrl + "780.png"
  },
];
