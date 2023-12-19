dataSetVersion = "2023-12-18"; // Change this when creating a new data set version. YYYY-MM-DD format.
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
    img: "1e5XCqx.png",
    opts: {
      series: [ "xblaze"]
    }
  },
  {
    name: "Akane Teruhiko",
    img: "0iyrv0k.png",
    opts: {
      series: [ "remix"]
    }
  },
  {
    name: "Akira Kamewari",
    img: "ppzcUDU.png",
    opts: {
      series: ["xblaze"]
    }
  },
  {
    name: "Amane Nishiki",
    img: "5nuTIaJ.png",
    opts: {
      series: ["play"],
    },
  },
  {
    name: "Arakune",
    img: "0QSwda0.png",
    opts: {
      series: [ "play"]
    }
  },
  {
    name: "Avenge",
    img: "8hxcIXV.png",
    opts: {
      series: ["xblaze"]
    }
  },
  {
    name: "Ayame Yayoi",
    img: "sYXdo3Q.png",
    opts: {
      series: ["phase"],
    }
  },
  {
    name: "Azrael",
    img: "DXFLoE0.png",
    opts: {
      series: ["play"]
    }
  },
  {
    name: "Bang Shishigami",
    img: "3m9BPhW.png",
    opts: {
      series: [ "play"]
    }
  },
  {
    name: "Bell",
    img: "vtSOQmq.png",
    opts: {
      series: ["remix"]
    }
  },
  {
    name: "Bullet",
    img: "1hWaHN0.png",
    opts: {
      series: ["play"]
    }
  },
  {
    name: "Carl Clover",
    img: "8trQZXw.png",
    opts: {
      series: ["play"]
    }
  },
  {
    name: "Celica A. Mercury",
    img: "lJ2zlRl.png",
    opts: {
      series: ["play", "phase"]
    }
  },
  {
    name: "Chachakaka",
    img: "YAuvpNP.png",
    opts: {
      series: ["remix"]
    }
  },
  {
    name: "Ciel Sulfur",
    img: "piikR7M.png",
    opts: {
      series: ["dark"]
    }
  },
  {
    name: "Clavis Alucard",
    img: "HMPmVJK.png",
    opts: {
      series: ["side", "phase", "blood"]
    }
  },
  {
    name: "Cypher Albar",
    img: "xPneJED.png",
    opts: {
      series: ["remix"]
    }
  },
  {
    name: "Another Dark Kagura",
    img: "YLZtZDO.png",
    opts: {
      series: ["dark"]
    }
  },
  {
    name: "Another Dark Mai",
    img: "A8v3Jof.png",
    opts: {
      series: [ "dark"]
    }
  },
  {
    name: "Drei",
    img: "rvJsWJ1.png",
    opts: {
      series: [ "xblaze"]
    }
  },
  {
    name: "Eight",
    img: "E8TZ74h.png",
    opts: {
      series: ["phase"]
    }
  },
  {
    name: "Elise von Klagen",
    img: "YRtuOjB.png",
    opts: {
      series: [ "xblaze"]
    }
  },
  {
    name: "Es",
    img: "Dgdpd1S.png",
    opts: {
      series: ["play", "xblaze"]
    }
  },
  {
    name: "Estella McKenzie",
    img: "U3xuWgt.png",
    opts: {
      series: ["remix"]
    }
  },
  {
    name: "Fuzzy",
    img: "Wbg7eE4.png",
    opts: {
      series: ["remix"]
    }
  },
  {
    name: "Gii",
    img: "Hgg344L.png",
    opts: {
      series: ["side"]
    }
  },
  {
    name: "Grimwood Huster",
    img: "OW2c2VW.png",
    opts: {
      series: ["spiral"]
    }
  },
  {
    name: "Hakumen",
    img: "YzFUeQL.png",
    opts: {
      series: ["play", "phase"]
    }
  },
  {
    name: "Haruka Hayami",
    img: "7bcMlwq.png",
    opts: {
      series: ["blood"]
    }
  },
  {
    name: "Hazama",
    img: "3znkUuz.png",
    opts: {
      series: ["play"]
    }
  },
  {
    name: "Hearn",
    img: "69qaJPS.png",
    opts: {
      series: ["dark"]
    }
  },
  {
    name: "Hibiki Kohaku",
    img: "WzOwcag.png",
    opts: {
      series: [ "play"]
    }
  },
  {
    name: "Hinata Himezuru",
    img: "yB0f95H.png",
    opts: {
      series: ["xblaze"]
    }
  },
  {
    name: "Homura Amanohokosaka",
    img: "LjPxgab.png",
    opts: {
      series: ["side"]
    }
  },
  {
    name: "Houichirou Hazuki",
    img: "FuL4Ev4.png",
    opts: {
      series: ["remix"]
    }
  },
  {
    name: "Fluctus Redactum: Ignis",
    img: "Y62By9Y.png",
    opts: {
      series: ["side"]
    }
  },
  {
    name: "Hades: Izanami",
    img: "cbeiZoP.png",
    opts: {
      series: ["play"]
    }
  },
  {
    name: "Izayoi",
    img: "BxAjv69.png",
    opts: {
      series: ["play"]
    }
  },
  {
    name: "Jin Kisaragi",
    img: "AixnptV.png",
    opts: {
      series: ["play", "spiral", "remix"]
    }
  },
  {
    name: "Jubei",
    img: "ZjAZRjl.png",
    opts: {
      series: ["play", "phase"]
    }
  },
  {
    name: "Kagami Hajou",
    img: "EQJvDCx.png",
    opts: {
      series: ["dark"]
    }
  },
  {
    name: "Kagura Mutsuki",
    img: "fBn0ZvZ.png",
    opts: {
      series: ["play"]
    }
  },
  {
    name: "Kajun Faycott",
    img: "CcNnUBJ.png",
    opts: {
      series: ["side", "remix"]
    }
  },
  {
    name: "Karenjina Parsett",
    img: "OTXUSvp.png",
    opts: {
      series: ["spiral"]
    }
  },
  {
    name: "Kazuma Kval",
    img: "Dzn3AU5.png",
    opts: {
      series: ["phase"]
    }
  },
  {
    name: "Kiiro Hikagami",
    img: "gBX1dKG.png",
    opts: {
      series: ["blood"]
    }
  },
  {
    name: "Kiri",
    img: "KSzwGnS.png",
    opts: {
      series: ["xblaze"]
    }
  },
  {
    name: "Kokonoe",
    img: "NIvIGaA.png",
    opts: {
      series: ["play"]
    }
  },
  {
    name: "Kuon Glamred Stroheim",
    img: "i1eVTRf.png",
    opts: {
      series: ["xblaze"]
    }
  },
  {
    name: "Lambda-11",
    img: "AAcoIgE.png",
    opts: {
      series: ["play"]
    }
  },
  {
    name: "Lao Jiu",
    img: "hFKrztf.png",
    opts: {
      series: ["side"]
    }
  },
  {
    name: "Linhua",
    img: "DK4bjug.png",
    opts: {
      series: ["side"]
    }
  },
  {
    name: "Litchi Faye-Ling",
    img: "YzM2spH.png",
    opts: {
      series: ["play"]
    }
  },
  {
    name: "Mai Natsume",
    img: "s2VqxpU.png",
    opts: {
      series: ["play", "remix"]
    }
  },
  {
    name: "Makoto Nanaya",
    img: "XjNOnSj.png",
    opts: {
      series: ["play", "remix"]
    }
  },
  {
    name: "'Me''",
    img: "XZKrsz9.png",
    opts: {
      series: ["xblaze"]
    }
  },
  {
    name: "Meifang Lapislazuli",
    img: "88De4lS.png",
    opts: {
      series: ["remix", "spiral"]
    }
  },
  {
    name: "Mei Amanohokosaka",
    img: "cDk1Zls.png",
    opts: {
      series: ["xblaze"]
    }
  },
  {
    name: "Ex Machina: Minerva",
    img: "xP3vOHP.png",
    opts: {
      series: ["side"]
    }
  },
  {
    name: "Mu-12",
    img: "C8U0gqW.png",
    opts: {
      series: ["play"]
    }
  },
  {
    name: "Nago",
    img: "dnoD145.png",
    opts: {
      series: ["side"]
    }
  },
  {
    name: "Naoto Kurogane",
    img: "Yp8f9n1.png",
    opts: {
      series: ["play", "blood"]
    }
  },
  {
    name: "Nine the Phantom",
    img: "bIOVfFE.png",
    opts: {
      series: ["play", "phase"]
    }
  },
  {
    name: "Deus Machina: Nirvana",
    img: "YSCoPSM.png",
    opts: {
      series: ["side"]
    }
  },
  {
    name: "'Nobody'",
    img: "0t4dlnq.png",
    opts: {
      series: ["xblaze"]
    }
  },
  {
    name: "Noel Vermillion",
    img: "UvF3sF1.png",
    opts: {
      series: ["play", "remix"]
    }
  },
  {
    name: "Nu-13",
    img: "a0EJ8HC.png",
    opts: {
      series: ["play"]
    }
  },
  {
    name: "Oliver",
    img: "nFEE19p.png",
    opts: {
      series: ["dark"]
    }
  },
  {
    name: "The Origin",
    img: "yk8675Z.png",
    opts: {
      series: ["side"]
    }
  },
  {
    name: "Platinum the Trinity",
    img: "V3sJPCX.png",
    opts: {
      series: ["play"]
    }
  },
  {
    name: "Rachel Alucard",
    img: "QMxqP9X.png",
    opts: {
      series: ["play", "phase"]
    }
  },
  {
    name: "Ragna the Bloodedge",
    img: "pirKaqZ.png",
    opts: {
      series: ["play"]
    }
  },
  {
    name: "Raquel Alucard",
    img: "xer3Q1u.png",
    opts: {
      series: ["blood"]
    }
  },
  {
    name: "Rei",
    img: "UufW7WN.png",
    opts: {
      series: ["dark"]
    }
  },
  {
    name: "Relius Clover",
    img: "bT20QI0.png",
    opts: {
      series: ["play", "blood"],
    }
  },
  {
    name: "Rin Hazuki",
    img: "nH6hoWe.png",
    opts: {
      series: ["remix"]
    }
  },
  {
    name: "Ringo Akagi",
    img: "wAcoS8A.png",
    opts: {
      series: ["xblaze"]
    }
  },
  {
    name: "Ripper",
    img: "XSZQfHg.png",
    opts: {
      series: ["xblaze"]
    }
  },
  {
    name: "Saya",
    img: "k4bPoAe.png",
    opts: {
      series: ["side"]
    }
  },
  {
    name: "Saya Terumi",
    img: "Z2eJJAY.png",
    opts: {
      series: ["blood"]
    }
  },
  {
    name: "Sechs",
    img: "kN9CrtR.png",
    opts: {
      series: ["xblaze"]
    }
  },
  {
    name: "Semia",
    img: "vrHAiql.png",
    opts: {
      series: ["dark"]
    }
  },
  {
    name: "Seven",
    img: "LhV2SNp.png",
    opts: {
      series: ["phase"]
    }
  },
  {
    name: "Shiori Kirihito",
    img: "mX6Wq1v.png",
    opts: {
      series: ["remix"]
    }
  },
  {
    name: "'Little Sister'",
    img: "w9TZzdI.png",
    opts: {
      series: ["xblaze"]
    }
  },
  {
    name: "Souichiro Unomaru",
    img: "l1EoboP.png",
    opts: {
      series: ["xblaze"]
    }
  },
  {
    name: "Spinner Superior",
    img: "gGqhTYY.jpg",
    opts: {
      series: ["blood"]
    }
  },
  {
    name: "Susano'o",
    img: "fUn08LC.jpg",
    opts: {
      series: ["play"]
    }
  },
  {
    name: "Suzukaka",
    img: "7bIOta8.png",
    opts: {
      series: ["phase"]
    }
  },
  {
    name: "Iron Tager",
    img: "yECdrBh.png",
    opts: {
      series: ["play"]
    }
  },
  {
    name: "Taokaka",
    img: "sdOYfad.png",
    opts: {
      series: ["play"]
    }
  },
  {
    name: "Taro Sasaga'e",
    img: "GFoRqoY.png",
    opts: {
      series: ["remix"]
    }
  },
  {
    name: "Tenjo Amanohokosaka",
    img: "yjGGvOo.png",
    opts: {
      series: ["side", "spiral"]
    }
  },
  {
    name: "Yuki Terumi",
    img: "8ft2bYy.png",
    opts: {
      series: ["play", "phase"],
    }
  },
  {
    name: "Tomonori",
    img: "jFp8GaJ.png",
    opts: {
      series: ["phase"]
    }
  },
  {
    name: "Torakaka",
    img: "iwQV2I6.png",
    opts: {
      series: ["side"]
    }
  },
  {
    name: "Totokaka",
    img: "gsxmD4O.png",
    opts: {
      series: ["side"]
    }
  },
  {
    name: "Touya Kagari",
    img: "SaTCYfj.png",
    opts: {
      series: ["xblaze"]
    }
  },
  {
    name: "Trinity Glassfille",
    img: "XRxTIBP.png",
    opts: {
      series: ["side", "phase"],
    }
  },
  {
    name: "Tsubaki Yayoi",
    img: "8dijov8.png",
    opts: {
      series: ["play", "remix"],
    }
  },
  {
    name: "Valkenhayn R. Hellsing",
    img: "ybc5F1N.png",
    opts: {
      series: ["play", "phase", "blood"],
    }
  },
  {
    name: "White Justice",
    img: "bqcquTT.png",
    opts: {
      series: ["dark"],
    }
  },
  {
    name: "Yuki Himezuru",
    img: "nIv97nL.png",
    opts: {
      series: ["xblaze"],
    }
  },
  {
    name: "Zara",
    img: "ssbzYke.png",
    opts: {
      series: ["dark"],
    }
  }
];
