dataSetVersion = "2021-05-09"; // Change this when creating a new data set version. YYYY-MM-DD format.
dataSet[dataSetVersion] = {};

dataSet[dataSetVersion].options = [
  {
    name: "Filter by category",
    key: "series",
    tooltip: "Check this to restrict to certain categories.",
    checked: false,
    sub: [
      { name: "C-series Playable Characters", key: "play" },
      { name: "C-series Side Characters", key: "side" },
      { name: "Remix Heart Characters", tooltip: "Includes Variable Heart", key: "remix" },
      { name: "Phase Shift Characters", tooltip: "Celica is also included in Playable Characters", key: "phase" },
      { name: "Bloodedge Experience Characters", tooltip: "Naoto is also included in Playable Characters", key: "blood" },
      { name: "Spiral Shift Characters",  key: "spiral" },
      { name: "Alternative: Dark War Characters", key: "dark" },
      { name: "XBlaze Characters", tooltip: "Es is also included in Playable Characters", key: "xblaze" },
    ]
  },
];

dataSet[dataSetVersion].characterData = [
  {
    name: "Acht",
    img: "c5DqpgX.png",
    opts: {
      series: [ "xblaze"]
    }
  },
  {
    name: "Akane Teruhiko",
    img: "tJnkSzK.png",
    opts: {
      series: [ "remix"]
    }
  },
  {
    name: "Akira Kamewari",
    img: "0YT7QlS.png",
    opts: {
      series: ["xblaze"]
    }
  },
  {
    name: "Amane Nishiki",
    img: "NWlZud3.png",
    opts: {
      series: ["play"],
    },
  },
  {
    name: "Arakune",
    img: "qdveFSy.png",
    opts: {
      series: [ "play"]
    }
  },
  {
    name: "Avenge",
    img: "ptGp0x4.png",
    opts: {
      series: ["xblaze"]
    }
  },
  {
    name: "Ayame Yayoi",
    img: "vBKdDm4.png",
    opts: {
      series: ["phase"],
    }
  },
  {
    name: "Azrael",
    img: "A7ZnuHo.png",
    opts: {
      series: ["play"]
    }
  },
  {
    name: "Bang Shishigami",
    img: "sgZPf11.png",
    opts: {
      series: [ "play"]
    }
  },
  {
    name: "Bell",
    img: "8UX7hKE.png",
    opts: {
      series: ["remix"]
    }
  },
  {
    name: "Bullet",
    img: "OhaDcnc.png",
    opts: {
      series: ["play"]
    }
  },
  {
    name: "Carl Clover",
    img: "MgzqjFK.png",
    opts: {
      series: ["play"]
    }
  },
  {
    name: "Celica A. Mercury",
    img: "ohmetZh.png",
    opts: {
      series: ["play", "phase"]
    }
  },
  {
    name: "Chachakaka",
    img: "aDIf0pN.png",
    opts: {
      series: ["remix"]
    }
  },
  {
    name: "Ciel Sulfur",
    img: "2Pr8b2N.png",
    opts: {
      series: ["dark"]
    }
  },
  {
    name: "Clavis Alucard",
    img: "htOMdDQ.png",
    opts: {
      series: ["side", "phase", "blood"]
    }
  },
  {
    name: "Cypher Albar",
    img: "PrRPujP.png",
    opts: {
      series: ["remix"]
    }
  },
  {
    name: "Another Dark Kagura",
    img: "ze79bFC.png",
    opts: {
      series: ["dark"]
    }
  },
  {
    name: "Another Dark Mai",
    img: "WMjyRLJ.png",
    opts: {
      series: [ "dark"]
    }
  },
  {
    name: "Drei",
    img: "VT9mTGb.png",
    opts: {
      series: [ "xblaze"]
    }
  },
  {
    name: "Eight",
    img: "rshnJPV.png",
    opts: {
      series: ["phase"]
    }
  },
  {
    name: "Elise von Klagen",
    img: "qsceD4I.png",
    opts: {
      series: [ "xblaze"]
    }
  },
  {
    name: "Es",
    img: "pLdMjQ3.png",
    opts: {
      series: ["play", "xblaze"]
    }
  },
  {
    name: "Estella McKenzie",
    img: "8DLUAPf.png",
    opts: {
      series: ["remix"]
    }
  },
  {
    name: "Fuzzy",
    img: "6KyhLqE.png",
    opts: {
      series: ["remix"]
    }
  },
  {
    name: "Gii",
    img: "99w0Chm.png",
    opts: {
      series: ["side"]
    }
  },
  {
    name: "Grimwood Huster",
    img: "yqNfNje.png",
    opts: {
      series: ["spiral"]
    }
  },
  {
    name: "Hakumen",
    img: "PrYzRcC.png",
    opts: {
      series: ["play", "phase"]
    }
  },
  {
    name: "Haruka Hayami",
    img: "ceo4DhK.png",
    opts: {
      series: ["blood"]
    }
  },
  {
    name: "Hazama",
    img: "2YDuTk3.png",
    opts: {
      series: ["play"]
    }
  },
  {
    name: "Hearn",
    img: "3zo4VKV.png",
    opts: {
      series: ["dark"]
    }
  },
  {
    name: "Hibiki Kohaku",
    img: "8TLXMST.png",
    opts: {
      series: [ "play"]
    }
  },
  {
    name: "Hinata Himezuru",
    img: "IImsp7K.png",
    opts: {
      series: ["xblaze"]
    }
  },
  {
    name: "Homura Amanohokosaka",
    img: "MZXJQq5.png",
    opts: {
      series: ["side"]
    }
  },
  {
    name: "Houichirou Hazuki",
    img: "aX4WIH8.png",
    opts: {
      series: ["remix"]
    }
  },
  {
    name: "Fluctus Redactum: Ignis",
    img: "nPBvatH.png",
    opts: {
      series: ["side"]
    }
  },
  {
    name: "Hades: Izanami",
    img: "3pDRgvR.png",
    opts: {
      series: ["play"]
    }
  },
  {
    name: "Izayoi",
    img: "bV0DaN7.png",
    opts: {
      series: ["play"]
    }
  },
  {
    name: "Jin Kisaragi",
    img: "J11NjNj.png",
    opts: {
      series: ["play", "spiral", "remix"]
    }
  },
  {
    name: "Jubei",
    img: "4Ufced2.png",
    opts: {
      series: ["play", "phase"]
    }
  },
  {
    name: "Kagami Hajou",
    img: "qGMjnYk.png",
    opts: {
      series: ["dark"]
    }
  },
  {
    name: "Kagura Mutsuki",
    img: "ATTRSWU.png",
    opts: {
      series: ["play"]
    }
  },
  {
    name: "Kajun Faycott",
    img: "nQ78Lz7.png",
    opts: {
      series: ["side", "remix"]
    }
  },
  {
    name: "Karenjina Parsett",
    img: "yJaD5ZV.png",
    opts: {
      series: ["spiral"]
    }
  },
  {
    name: "Kazuma Kval",
    img: "xgAlECj.png",
    opts: {
      series: ["phase"]
    }
  },
  {
    name: "Kiiro Hikagami",
    img: "tZLYivt.png",
    opts: {
      series: ["blood"]
    }
  },
  {
    name: "Kiri",
    img: "VgJgaEf.png",
    opts: {
      series: ["xblaze"]
    }
  },
  {
    name: "Kokonoe",
    img: "sqgJ2St.png",
    opts: {
      series: ["play"]
    }
  },
  {
    name: "Kuon Glamred Stroheim",
    img: "lkoAJod.png",
    opts: {
      series: ["xblaze"]
    }
  },
  {
    name: "Lambda-11",
    img: "tDO653L.png",
    opts: {
      series: ["play"]
    }
  },
  {
    name: "Lao Jiu",
    img: "dup7Nt6.png",
    opts: {
      series: ["side"]
    }
  },
  {
    name: "Linhua",
    img: "uQjbw1W.png",
    opts: {
      series: ["side"]
    }
  },
  {
    name: "Litchi Faye-Ling",
    img: "DfdaXPW.png",
    opts: {
      series: ["play"]
    }
  },
  {
    name: "Mai Natsume",
    img: "wVCcens.png",
    opts: {
      series: ["play", "remix"]
    }
  },
  {
    name: "Makoto Nanaya",
    img: "EpHQbiY.png",
    opts: {
      series: ["play", "remix"]
    }
  },
  {
    name: "'Me''",
    img: "kJbv4dc.png",
    opts: {
      series: ["xblaze"]
    }
  },
  {
    name: "Meifang Lapislazuli",
    img: "Fyn5yVx.png",
    opts: {
      series: ["remix", "spiral"]
    }
  },
  {
    name: "Mei Amanohokosaka",
    img: "39KYpvW.png",
    opts: {
      series: ["xblaze"]
    }
  },
  {
    name: "Ex Machina: Minerva",
    img: "5yihisu.png",
    opts: {
      series: ["side"]
    }
  },
  {
    name: "Mu-12",
    img: "2ppPxny.png",
    opts: {
      series: ["play"]
    }
  },
  {
    name: "Nago",
    img: "zL4S8Mj.png",
    opts: {
      series: ["side"]
    }
  },
  {
    name: "Naoto Kurogane",
    img: "LgvoTaJ.png",
    opts: {
      series: ["play", "blood"]
    }
  },
  {
    name: "Nine the Phantom",
    img: "VbqXiB6.png",
    opts: {
      series: ["play", "phase"]
    }
  },
  {
    name: "Deus Machina: Nirvana",
    img: "OBqgP48.png",
    opts: {
      series: ["side"]
    }
  },
  {
    name: "'Nobody'",
    img: "sNw61ap.png",
    opts: {
      series: ["xblaze"]
    }
  },
  {
    name: "Noel Vermillion",
    img: "sLiqEBA.png",
    opts: {
      series: ["play", "remix"]
    }
  },
  {
    name: "Nu-13",
    img: "6jq6eh6.png",
    opts: {
      series: ["play"]
    }
  },
  {
    name: "Oliver",
    img: "090hLPL.png",
    opts: {
      series: ["dark"]
    }
  },
  {
    name: "The Origin",
    img: "y0UXwFO.png",
    opts: {
      series: ["side"]
    }
  },
  {
    name: "Platinum the Trinity",
    img: "WTZ97LE.png",
    opts: {
      series: ["play"]
    }
  },
  {
    name: "Rachel Alucard",
    img: "3Xiqd22.png",
    opts: {
      series: ["play", "phase"]
    }
  },
  {
    name: "Ragna the Bloodedge",
    img: "gMpWdmA.png",
    opts: {
      series: ["play"]
    }
  },
  {
    name: "Raquel Alucard",
    img: "fxCGmUk.png",
    opts: {
      series: ["blood"]
    }
  },
  {
    name: "Rei",
    img: "brWCLVx.png",
    opts: {
      series: ["dark"]
    }
  },
  {
    name: "Relius Clover",
    img: "VAMLiJD.png",
    opts: {
      series: ["play", "blood"],
    }
  },
  {
    name: "Rin Hazuki",
    img: "qwwL0bB.png",
    opts: {
      series: ["remix"]
    }
  },
  {
    name: "Ringo Akagi",
    img: "vWNeMaH.png",
    opts: {
      series: ["xblaze"]
    }
  },
  {
    name: "Ripper",
    img: "EJFQHQN.png",
    opts: {
      series: ["xblaze"]
    }
  },
  {
    name: "Saya",
    img: "16RUacj.png",
    opts: {
      series: ["side"]
    }
  },
  {
    name: "Saya Terumi",
    img: "Zl2tN7W.png",
    opts: {
      series: ["blood"]
    }
  },
  {
    name: "Sechs",
    img: "SLLEccR.png",
    opts: {
      series: ["xblaze"]
    }
  },
  {
    name: "Semia",
    img: "mc7ICW6.png",
    opts: {
      series: ["dark"]
    }
  },
  {
    name: "Seven",
    img: "0ra00WG.png",
    opts: {
      series: ["phase"]
    }
  },
  {
    name: "Shiori Kirihito",
    img: "xQOsFlZ.png",
    opts: {
      series: ["remix"]
    }
  },
  {
    name: "'Little Sister'",
    img: "rGS7dyn.png",
    opts: {
      series: ["xblaze"]
    }
  },
  {
    name: "Souichiro Unomaru",
    img: "HLT338X.png",
    opts: {
      series: ["xblaze"]
    }
  },
  {
    name: "Spinner Superior",
    img: "9Jje7ZQ.jpg",
    opts: {
      series: ["blood"]
    }
  },
  {
    name: "Susano'o",
    img: "NsfLZjY.jpg",
    opts: {
      series: ["play"]
    }
  },
  {
    name: "Suzukaka",
    img: "EH3Ulol.png",
    opts: {
      series: ["phase"]
    }
  },
  {
    name: "Iron Tager",
    img: "ql5KxJH.png",
    opts: {
      series: ["play"]
    }
  },
  {
    name: "Taokaka",
    img: "gYFhJ3Y.png",
    opts: {
      series: ["play"]
    }
  },
  {
    name: "Taro Sasaga'e",
    img: "wWUStkF.png",
    opts: {
      series: ["remix"]
    }
  },
  {
    name: "Tenjo Amanohokosaka",
    img: "wrPVhAo.png",
    opts: {
      series: ["side", "spiral"]
    }
  },
  {
    name: "Yuki Terumi",
    img: "8w9gAy2.png",
    opts: {
      series: ["play", "phase"],
    }
  },
  {
    name: "Tomonori",
    img: "DesAqAC.png",
    opts: {
      series: ["phase"]
    }
  },
  {
    name: "Torakaka",
    img: "icWvMyo.png",
    opts: {
      series: ["side"]
    }
  },
  {
    name: "Totokaka",
    img: "LenxXR4.png",
    opts: {
      series: ["side"]
    }
  },
  {
    name: "Touya Kagari",
    img: "V9OznT1.png",
    opts: {
      series: ["xblaze"]
    }
  },
  {
    name: "Trinity Glassfille",
    img: "Ke3316E.png",
    opts: {
      series: ["side", "phase"],
    }
  },
  {
    name: "Tsubaki Yayoi",
    img: "ru2vIIW.png",
    opts: {
      series: ["play", "remix"],
    }
  },
  {
    name: "Valkenhayn R. Hellsing",
    img: "QTQt0ZL.png",
    opts: {
      series: ["play", "phase", "blood"],
    }
  },
  {
    name: "White Justice",
    img: "CzcIMxF.png",
    opts: {
      series: ["dark"],
    }
  },
  {
    name: "Yuki Himezuru",
    img: "GxeziYO.png",
    opts: {
      series: ["xblaze"],
    }
  },
  {
    name: "Zara",
    img: "Z4jclTi.png",
    opts: {
      series: ["dark"],
    }
  }
];
