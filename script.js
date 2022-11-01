import parts from "./parts.json" assert { type: "json" };

async function getPrice(x) {
  const resp = await fetch(
    `https://api.coingecko.com/api/v3/simple/price?ids=${x}&vs_currencies=USD`
  );

  const respData = await resp.json();
  const price = respData;
  return price[`${x}`].usd;
}

async function mongenApi(x) {
  const resp = await fetch(
    `https://mainnet-api.monsterra.io/nft/get-mongen?id=${x}`
  );

  const respData = await resp.json();
  const mongen = respData;
  console.log(mongen);
}
mongenApi(365);

const magToken = await getPrice("monsterra-mag");
const mstrToken = await getPrice("monsterra");
// const magToken = 0;
// const mstrToken = 0;

const hidden = 4 / 18;
let pure2 = 9;
let pure1 = 18;

const id = [943, 115];

console.log("mstrToken: " + mstrToken);
console.log("magToken: " + magToken);

function form(x, z) {
  let w = z;
  let p1 = parts[x].dna[0].mongen[0].rarity;
  let p2 = parts[x].dna[0].r1[0].rarity;
  let p3 = parts[x].dna[0].r2[0].rarity;

  if (w == p1 && w == p2 && w == p3) {
    return (0.5 + 0.25 + 0.25) * 0.5;
  } else if (w == p1 && w == p2) {
    return (0.5 + 0.25) * 0.5;
  } else if (w == p1 && w == p3) {
    return (0.5 + 0.25) * 0.5;
  } else if (w == p2 && w == p3) {
    return (0.25 + 0.25) * 0.5;
  } else if (w == p1) {
    return 0.5 * 0.5;
  } else if (w == p2) {
    return 0.25 * 0.5;
  } else if (w == p3) {
    return 0.25 * 0.5;
  }
  return 0 * 0.5;
}

function head(x, z) {
  let w = z;
  let p1 = parts[x].dna[0].mongen[1].rarity;
  let p2 = parts[x].dna[0].r1[1].rarity;
  let p3 = parts[x].dna[0].r2[1].rarity;

  if (w == p1 && w == p2 && w == p3) {
    return (0.4 + 0.25 + 0.25 + hidden * 0.1) * 0.5;
  } else if (w == p1 && w == p2) {
    return (0.4 + 0.25 + hidden * 0.1) * 0.5;
  } else if (w == p1 && w == p3) {
    return (0.4 + 0.25 + hidden * 0.1) * 0.5;
  } else if (w == p2 && w == p3) {
    return (0.25 + 0.25 + hidden * 0.1) * 0.5;
  } else if (w == p1) {
    return (0.4 + hidden * 0.1) * 0.5;
  } else if (w == p2) {
    return (0.25 + hidden * 0.1) * 0.5;
  } else if (w == p3) {
    return (0.25 + hidden * 0.1) * 0.5;
  } else {
    return hidden * 0.1 * 0.5;
  }
}

function eyes(x, z) {
  let w = z;
  let p1 = parts[x].dna[0].mongen[2].rarity;
  let p2 = parts[x].dna[0].r1[2].rarity;
  let p3 = parts[x].dna[0].r2[2].rarity;

  if (w == p1 && w == p2 && w == p3) {
    return (0.35 + 0.3 + 0.25 + hidden * 0.1) * 0.5;
  } else if (w == p1 && w == p2) {
    return (0.35 + 0.3 + hidden * 0.1) * 0.5;
  } else if (w == p1 && w == p3) {
    return (0.35 + 0.25 + hidden * 0.1) * 0.5;
  } else if (w == p2 && w == p3) {
    return (0.3 + 0.25 + hidden * 0.1) * 0.5;
  } else if (w == p1) {
    return (0.35 + hidden * 0.1) * 0.5;
  } else if (w == p2) {
    return (0.3 + hidden * 0.1) * 0.5;
  } else if (w == p3) {
    return (0.25 + hidden * 0.1) * 0.5;
  }
  return 0.1 * hidden * 0.5;
}

function horns(x, z) {
  let w = z;
  let p1 = parts[x].dna[0].mongen[3].rarity;
  let p2 = parts[x].dna[0].r1[3].rarity;
  let p3 = parts[x].dna[0].r2[3].rarity;

  if (w == p1 && w == p2 && w == p3) {
    return (0.35 + 0.25 + 0.3 + hidden * 0.1) * 0.5;
  } else if (w == p1 && w == p2) {
    return (0.35 + 0.25 + hidden * 0.1) * 0.5;
  } else if (w == p1 && w == p3) {
    return (0.35 + 0.3 + hidden * 0.1) * 0.5;
  } else if (w == p2 && w == p3) {
    return (0.25 + 0.3 + hidden * 0.1) * 0.5;
  } else if (w == p1) {
    return (0.35 + hidden * 0.1) * 0.5;
  } else if (w == p2) {
    return (0.25 + hidden * 0.1) * 0.5;
  } else if (w == p3) {
    return (0.3 + hidden * 0.1) * 0.5;
  }
  return 0.1 * hidden * 0.5;
}

function tail(x, z) {
  let w = z;
  let p1 = parts[x].dna[0].mongen[4].rarity;
  let p2 = parts[x].dna[0].r1[4].rarity;
  let p3 = parts[x].dna[0].r2[4].rarity;

  if (w == p1 && w == p2 && w == p3) {
    return (0.35 + 0.3 + 0.25 + hidden * 0.1) * 0.5;
  } else if (w == p1 && w == p2) {
    return (0.35 + 0.3 + hidden * 0.1) * 0.5;
  } else if (w == p1 && w == p3) {
    return (0.35 + 0.25 + hidden * 0.1) * 0.5;
  } else if (w == p2 && w == p3) {
    return (0.3 + 0.25 + hidden * 0.1) * 0.5;
  } else if (w == p1) {
    return (0.35 + hidden * 0.1) * 0.5;
  } else if (w == p2) {
    return (0.3 + hidden * 0.1) * 0.5;
  } else if (w == p3) {
    return (0.25 + hidden * 0.1) * 0.5;
  }
  return 0.1 * hidden * 0.5;
}

function back(x, z) {
  let w = z;
  let p1 = parts[x].dna[0].mongen[5].rarity;
  let p2 = parts[x].dna[0].r1[5].rarity;
  let p3 = parts[x].dna[0].r2[5].rarity;

  if (w == p1 && w == p2 && w == p3) {
    return (0.3 + 0.2 + 0.2 + hidden * 0.3) * 0.5;
  } else if (w == p1 && w == p2) {
    return (0.3 + 0.2 + hidden * 0.3) * 0.5;
  } else if (w == p1 && w == p3) {
    return (0.3 + 0.2 + hidden * 0.3) * 0.5;
  } else if (w == p2 && w == p3) {
    return (0.2 + 0.2 + hidden * 0.3) * 0.5;
  } else if (w == p1) {
    return (0.3 + hidden * 0.3) * 0.5;
  } else if (w == p2) {
    return (0.2 + hidden * 0.3) * 0.5;
  } else if (w == p3) {
    return (0.2 + hidden * 0.3) * 0.5;
  }
  return hidden * 0.3 * 0.5;
}

function breeding(x) {
  let mag = [];
  let mstr = [];
  let part = parts[x];
  let breeding = parts[x].breeding;
  let magCosting = 0;
  let mstrCosting = 0;

  if (part.rarity == "Common") {
    mag = [300, 400, 655, 1060, 1710, 2770];
    mstr = [0, 4, 7, 9.75, 15.75, 24.25];
  } else if (part.rarity == "Uncommon") {
    mag = [1460, 2370, 2820, 6200, 10030];
    mstr = [11.5, 19, 29, 46.75, 74.75];
  } else if (part.rarity == "Rare") {
    mag = [3705, 5985, 9690, 15675];
    mstr = [2.5, 3.75, 5, 6.25];
  } else if (part.rarity == "Epic") {
    mag = [6050, 9790, 15840];
    mstr = [47, 75.5, 120];
  } else {
    mag = [16320, 26400];
    mstr = [12.5, 25];
  }

  if (breeding == 5) {
    magCosting = mag[5];
    mstrCosting = mstr[5];
  } else if (breeding == 4) {
    magCosting = mag[4];
    mstrCosting = mstr[4];
  } else if (breeding == 3) {
    magCosting = mag[3];
    mstrCosting = mstr[3];
  } else if (breeding == 2) {
    magCosting = mag[2];
    mstrCosting = mstr[2];
  } else if (breeding == 1) {
    magCosting = mag[1];
    mstrCosting = mstr[1];
  } else {
    magCosting = mag[0];
    mstrCosting = mstr[0];
  }

  return magCosting * magToken + mstrCosting * mstrToken;
}

function color(x) {
  if (parts[x].rarity == "Common") {
    return "#BDC3E4";
  } else if (parts[x].rarity == "Uncommon") {
    return "#4DA74F";
  } else if (parts[x].rarity == "Rare") {
    return "#64A7D2";
  } else if (parts[x].rarity == "Epic") {
    return "#C152F0";
  } else {
    return "#FF9D2A";
  }
}

//var result = [];
const chart = document.getElementById("chart");
const th = chart.insertRow(0);
const cell1 = th.insertCell(0);
const cell2 = th.insertCell(1);
const cell3 = th.insertCell(2);
const cell4 = th.insertCell(3);
const cell5 = th.insertCell(4);
const cell6 = th.insertCell(5);
const cell7 = th.insertCell(6);
const cell8 = th.insertCell(7);
cell1.outerHTML = "<th>Father</th>";
cell2.outerHTML = "<th>Race</th>";
cell3.outerHTML = "<th>Mother</th>";
cell4.outerHTML = "<th>Race</th>";
cell5.outerHTML = "<th>Chance</th>";
cell6.outerHTML = "<th>1 in</th>";
cell7.outerHTML = "<th>AvgCost</th>";
cell8.outerHTML = "<th>Cost</th>";

function calc(x, y, rarity) {
  let chance =
    (form(x, rarity) + form(y, rarity)) *
    (head(x, rarity) + head(y, rarity)) *
    (eyes(x, rarity) + eyes(y, rarity)) *
    (horns(x, rarity) + horns(y, rarity)) *
    (tail(x, rarity) + tail(y, rarity)) *
    (back(x, rarity) + back(y, rarity));

  if (parts[x].id !== parts[y].id) {
    const row = chart.insertRow(x + 1);
    const cols1 = row.insertCell(0);
    const cols2 = row.insertCell(1);
    const cols3 = row.insertCell(2);
    const cols4 = row.insertCell(3);
    const cols5 = row.insertCell(4);
    const cols6 = row.insertCell(5);
    const cols7 = row.insertCell(6);
    const cols8 = row.insertCell(7);

    cols1.innerHTML = parts[x].id;
    if (
      parts[x].dna[0].mongen[0].rarity == rarity &&
      parts[x].dna[0].mongen[1].rarity == rarity &&
      parts[x].dna[0].mongen[2].rarity == rarity &&
      parts[x].dna[0].mongen[3].rarity == rarity &&
      parts[x].dna[0].mongen[4].rarity == rarity &&
      parts[x].dna[0].mongen[5].rarity == rarity
    ) {
      // if (
      //   parts[x].id === id[0] ||
      //   parts[x].id === id[1] ||
      //   parts[x].id === id[2] ||
      //   parts[x].id === id[3] ||
      //   parts[x].id === id[4] ||
      //   parts[x].id === id[5] ||
      //   parts[x].id === id[6] ||
      //   parts[x].id === id[7] ||
      //   parts[x].id === id[8] ||
      //   parts[x].id === id[9] ||
      //   parts[x].id === id[10]
      // ) {
      cols1.style.backgroundColor = color(x);
    }
    cols2.innerHTML = parts[x].race;
    cols3.innerHTML = parts[y].id;
    if (
      parts[y].dna[0].mongen[0].rarity == rarity &&
      parts[y].dna[0].mongen[1].rarity == rarity &&
      parts[y].dna[0].mongen[2].rarity == rarity &&
      parts[y].dna[0].mongen[3].rarity == rarity &&
      parts[y].dna[0].mongen[4].rarity == rarity &&
      parts[y].dna[0].mongen[5].rarity == rarity
    ) {
      // if (
      //   parts[y].id === id[0] ||
      //   parts[y].id === id[1] ||
      //   parts[y].id === id[2] ||
      //   parts[y].id === id[3] ||
      //   parts[y].id === id[4] ||
      //   parts[y].id === id[5] ||
      //   parts[y].id === id[6] ||
      //   parts[y].id === id[7] ||
      //   parts[y].id === id[8] ||
      //   parts[y].id === id[9] ||
      //   parts[y].id === id[10]
      // ) {
      cols3.style.backgroundColor = color(y);
    }
    cols4.innerHTML = parts[y].race;
    cols5.innerHTML = (chance * 100).toFixed(2) + "%";
    cols6.innerHTML = (1 / chance).toFixed(2);
    cols7.innerHTML = ((breeding(x) + breeding(y)) / chance).toFixed(2);
    cols8.innerHTML = (breeding(x) + breeding(y)).toFixed(2);
  }
}
//////////////////////////pureness1////////////////////////////////////////////////////////////////
const pureness = {
  //////////////co
  "Cactus Cone": "Beast",
  "Dragon Poly": "Beast",
  "Dried Pumproom": "Beast",
  "Steam Engine": "Tectos",
  "Plumber Roller": "Tectos",
  "Assassin Worker": "Tectos",
  "Vegetable Caterpillar": "Mystic",
  "Hydra Aquatic": "Mystic",
  "Deepsea Aquatic": "Mystic",
  //////////////uc
  "Tulip Eggo": "Beast",
  "Melon Mutation": "Beast",
  "Scarecrow Gear": "Tectos",
  "Candy Bolt": "Tectos",
  "Pterois Jelly": "Mystic",
  "Flying Emerald": "Mystic",
  ////////////Ra///////
  "Banana Rose": "Beast",
  "Broccoli Builder": "Beast",
  "Strap Clock": "Tectos",
  "Electric Belt": "Tectos",
  "Lighting Seadog": "Mystic",
  "Darkness Horseshoe": "Mystic",
  //////////////EP///////
  "Cotton Twinke": "Beast",
  "Pineapple Spirits": "Beast",
  "Bulb Metal": "Tectos",
  "Chemical Pirate": "Tectos",
  "Water Succulent": "Mystic",
  "Bubble Hermit": "Mystic",
  "Mystical Flame": "Celest",
  "Golden Flame": "Celest",
};

function pureForm(x, race, form) {
  let w = race;
  let wr = form;
  let p1 = pureness[parts[x].dna[0].mongen[0].value];
  let p2 = pureness[parts[x].dna[0].r1[0].value];
  let p3 = pureness[parts[x].dna[0].r2[0].value];

  let pr1 = parts[x].dna[0].mongen[0].rarity;
  let pr2 = parts[x].dna[0].r1[0].rarity;
  let pr3 = parts[x].dna[0].r2[0].rarity;

  if (w == p1 && w == p2 && w == p3 && wr == pr1 && wr == pr2 && wr == pr3) {
    return (0.5 + 0.25 + 0.25) * 0.5;
  } else if (w == p1 && w == p2 && wr == pr1 && wr == pr2) {
    return (0.5 + 0.25) * 0.5;
  } else if (w == p1 && w == p3 && wr == pr1 && wr == pr3) {
    return (0.5 + 0.25) * 0.5;
  } else if (w == p2 && w == p3 && wr == pr2 && wr == pr3) {
    return (0.25 + 0.25) * 0.5;
  } else if (w == p1 && wr == pr1) {
    return 0.5 * 0.5;
  } else if (w == p2 && wr == pr2) {
    return 0.25 * 0.5;
  } else if (w == p3 && wr == pr3) {
    return 0.25 * 0.5;
  }
  return 0 * 0.5;
}

function pureHead(x, race, rarity) {
  let w = race;
  let wr = rarity;

  let p1 = pureness[parts[x].dna[0].mongen[1].value];
  let p2 = pureness[parts[x].dna[0].r1[1].value];
  let p3 = pureness[parts[x].dna[0].r2[1].value];

  let pr1 = parts[x].dna[0].mongen[1].rarity;
  let pr2 = parts[x].dna[0].r1[1].rarity;
  let pr3 = parts[x].dna[0].r2[1].rarity;

  if (w == p1 && w == p2 && w == p3 && wr == pr1 && wr == pr2 && wr == pr3) {
    return (0.4 + 0.25 + 0.25) * 0.5;
  } else if (w == p1 && w == p2 && wr == pr1 && wr == pr2) {
    return (0.4 + 0.25) * 0.5;
  } else if (w == p1 && w == p3 && wr == pr1 && wr == pr3) {
    return (0.4 + 0.25) * 0.5;
  } else if (w == p2 && w == p3 && wr == pr2 && wr == pr3) {
    return (0.25 + 0.25) * 0.5;
  } else if (w == p1 && wr == pr1) {
    return 0.4 * 0.5;
  } else if (w == p2 && wr == pr2) {
    return 0.25 * 0.5;
  } else if (w == p3 && wr == pr3) {
    return 0.25 * 0.5;
  } else {
    return 0;
  }
}

function pureEyes(x, race, rarity) {
  let w = race;
  let wr = rarity;

  let p1 = pureness[parts[x].dna[0].mongen[2].value];
  let p2 = pureness[parts[x].dna[0].r1[2].value];
  let p3 = pureness[parts[x].dna[0].r2[2].value];

  let pr1 = parts[x].dna[0].mongen[2].rarity;
  let pr2 = parts[x].dna[0].r1[2].rarity;
  let pr3 = parts[x].dna[0].r2[2].rarity;

  if (w == p1 && w == p2 && w == p3 && wr == pr1 && wr == pr2 && wr == pr3) {
    return (0.35 + 0.3 + 0.25) * 0.5;
  } else if (w == p1 && w == p2 && wr == pr1 && wr == pr2) {
    return (0.35 + 0.3) * 0.5;
  } else if (w == p1 && w == p3 && wr == pr1 && wr == pr3) {
    return (0.35 + 0.25) * 0.5;
  } else if (w == p2 && w == p3 && wr == pr2 && wr == pr3) {
    return (0.3 + 0.25) * 0.5;
  } else if (w == p1 && wr == pr1) {
    return 0.35 * 0.5;
  } else if (w == p2 && wr == pr2) {
    return 0.3 * 0.5;
  } else if (w == p3 && wr == pr3) {
    return 0.25 * 0.5;
  }
  return 0;
}

function pureHorns(x, race, rarity) {
  let w = race;
  let wr = rarity;
  let p1 = pureness[parts[x].dna[0].mongen[3].value];
  let p2 = pureness[parts[x].dna[0].r1[3].value];
  let p3 = pureness[parts[x].dna[0].r2[3].value];

  let pr1 = parts[x].dna[0].mongen[3].rarity;
  let pr2 = parts[x].dna[0].r1[3].rarity;
  let pr3 = parts[x].dna[0].r2[3].rarity;

  if (w == p1 && w == p2 && w == p3 && wr == pr1 && wr == pr2 && wr == pr3) {
    return (0.35 + 0.25 + 0.3) * 0.5;
  } else if (w == p1 && w == p2 && wr == pr1 && wr == pr2) {
    return (0.35 + 0.25) * 0.5;
  } else if (w == p1 && w == p3 && wr == pr1 && wr == pr3) {
    return (0.35 + 0.3) * 0.5;
  } else if (w == p2 && w == p3 && wr == pr2 && wr == pr3) {
    return (0.25 + 0.3) * 0.5;
  } else if (w == p1 && wr == pr1) {
    return 0.35 * 0.5;
  } else if (w == p2 && wr == pr2) {
    return 0.25 * 0.5;
  } else if (w == p3 && wr == pr3) {
    return 0.3 * 0.5;
  }
  return 0;
}

function pureTail(x, race, rarity) {
  let w = race;
  let wr = rarity;
  let p1 = pureness[parts[x].dna[0].mongen[4].value];
  let p2 = pureness[parts[x].dna[0].r1[4].value];
  let p3 = pureness[parts[x].dna[0].r2[4].value];

  let pr1 = parts[x].dna[0].mongen[4].rarity;
  let pr2 = parts[x].dna[0].r1[4].rarity;
  let pr3 = parts[x].dna[0].r2[4].rarity;

  if (w == p1 && w == p2 && w == p3 && wr == pr1 && wr == pr2 && wr == pr3) {
    return (0.35 + 0.3 + 0.25) * 0.5;
  } else if (w == p1 && w == p2 && wr == pr1 && wr == pr2) {
    return (0.35 + 0.3) * 0.5;
  } else if (w == p1 && w == p3 && wr == pr1 && wr == pr3) {
    return (0.35 + 0.25) * 0.5;
  } else if (w == p2 && w == p3 && wr == pr2 && wr == pr3) {
    return (0.3 + 0.25) * 0.5;
  } else if (w == p1 && wr == pr1) {
    return 0.35 * 0.5;
  } else if (w == p2 && wr == pr2) {
    return 0.3 * 0.5;
  } else if (w == p3 && wr == pr3) {
    return 0.25 * 0.5;
  }
  return 0;
}

function pureBack(x, race, rarity) {
  let w = race;
  let wr = rarity;
  let p1 = pureness[parts[x].dna[0].mongen[5].value];
  let p2 = pureness[parts[x].dna[0].r1[5].value];
  let p3 = pureness[parts[x].dna[0].r2[5].value];

  let pr1 = parts[x].dna[0].mongen[5].rarity;
  let pr2 = parts[x].dna[0].r1[5].rarity;
  let pr3 = parts[x].dna[0].r2[5].rarity;

  if (w == p1 && w == p2 && w == p3 && wr == pr1 && wr == pr2 && wr == pr3) {
    return (0.3 + 0.2 + 0.2) * 0.5;
  } else if (w == p1 && w == p2 && wr == pr1 && wr == pr2) {
    return (0.3 + 0.2) * 0.5;
  } else if (w == p1 && w == p3 && wr == pr1 && wr == pr3) {
    return (0.3 + 0.2) * 0.5;
  } else if (w == p2 && w == p3 && wr == pr2 && wr == pr3) {
    return (0.2 + 0.2) * 0.5;
  } else if (w == p1 && wr == pr1) {
    return 0.3 * 0.5;
  } else if (w == p2 && wr == pr2) {
    return 0.2 * 0.5;
  } else if (w == p3 && wr == pr3) {
    return 0.2 * 0.5;
  }
  return 0;
}

function pureChance(x, y, race, rarity, form) {
  let px = parts[x].race;
  let py = parts[y].race;

  let totalHidden = 0;

  if (px == form && py == form) {
    totalHidden = 2 / pure2;
  } else if (px !== form && py !== form) {
    totalHidden = 0;
  } else {
    totalHidden = 2 / pure1;
  }
  let chance =
    (pureForm(x, form, rarity) + pureForm(y, form, rarity)) *
    (pureHead(x, race, rarity) +
      pureHead(y, race, rarity) +
      totalHidden * 0.1) *
    (pureEyes(x, race, rarity) +
      pureEyes(y, race, rarity) +
      totalHidden * 0.1) *
    (pureHorns(x, race, rarity) +
      pureHorns(y, race, rarity) +
      totalHidden * 0.1) *
    (pureTail(x, race, rarity) +
      pureTail(y, race, rarity) +
      totalHidden * 0.1) *
    (pureBack(x, race, rarity, form) +
      pureBack(y, race, rarity, form) +
      totalHidden * 0.3);

  return chance;
}

const pureChart1 = document.getElementById("pureChart1");

function pureTable1() {
  const th = pureChart1.insertRow(0);
  const cell1 = th.insertCell(0);
  const cell2 = th.insertCell(1);
  const cell3 = th.insertCell(2);
  const cell4 = th.insertCell(3);
  const cell5 = th.insertCell(4);
  const cell6 = th.insertCell(5);
  const cell7 = th.insertCell(6);
  const cell8 = th.insertCell(7);
  cell1.outerHTML = "<th>Father</th>";
  cell2.outerHTML = "<th>Race</th>";
  cell3.outerHTML = "<th>Mother</th>";
  cell4.outerHTML = "<th>Race</th>";
  cell5.outerHTML = "<th>Chance</th>";
  cell6.outerHTML = "<th>1 in</th>";
  cell7.outerHTML = "<th>AvgCost</th>";
  cell8.outerHTML = "<th>Cost</th>";
}

function pureCalc1(x, y, race, rarity, form) {
  if (parts[x].id !== parts[y].id) {
    const row = pureChart1.insertRow(x + 1);
    const cols1 = row.insertCell(0);
    const cols2 = row.insertCell(1);
    const cols3 = row.insertCell(2);
    const cols4 = row.insertCell(3);
    const cols5 = row.insertCell(4);
    const cols6 = row.insertCell(5);
    const cols7 = row.insertCell(6);
    const cols8 = row.insertCell(7);

    cols1.innerHTML = parts[x].id;
    // if (parts[x].breeding >= 2) {
    if (
      parts[x].dna[0].mongen[0].rarity == rarity &&
      parts[x].dna[0].mongen[1].rarity == rarity &&
      parts[x].dna[0].mongen[2].rarity == rarity &&
      parts[x].dna[0].mongen[3].rarity == rarity &&
      parts[x].dna[0].mongen[4].rarity == rarity &&
      parts[x].dna[0].mongen[5].rarity == rarity
    ) {
      // if (
      //   parts[x].id === id[0] ||
      //   parts[x].id === id[1] ||
      //   parts[x].id === id[2] ||
      //   parts[x].id === id[3] ||
      //   parts[x].id === id[4] ||
      //   parts[x].id === id[5] ||
      //   parts[x].id === id[6] ||
      //   parts[x].id === id[7] ||
      //   parts[x].id === id[8] ||
      //   parts[x].id === id[9] ||
      //   parts[x].id === id[10]
      // ) {
      cols1.style.backgroundColor = color(x);
    }
    cols2.innerHTML = parts[x].race;
    cols3.innerHTML = parts[y].id;
    // if (parts[y].breeding >= 2) {
    if (
      parts[y].dna[0].mongen[0].rarity == rarity &&
      parts[y].dna[0].mongen[1].rarity == rarity &&
      parts[y].dna[0].mongen[2].rarity == rarity &&
      parts[y].dna[0].mongen[3].rarity == rarity &&
      parts[y].dna[0].mongen[4].rarity == rarity &&
      parts[y].dna[0].mongen[5].rarity == rarity
    ) {
      // if (
      //   parts[y].id === id[0] ||
      //   parts[y].id === id[1] ||
      //   parts[y].id === id[2] ||
      //   parts[y].id === id[3] ||
      //   parts[y].id === id[4] ||
      //   parts[y].id === id[5] ||
      //   parts[y].id === id[6] ||
      //   parts[y].id === id[7] ||
      //   parts[y].id === id[8] ||
      //   parts[y].id === id[9] ||
      //   parts[y].id === id[10]
      // ) {
      cols3.style.backgroundColor = color(y);
    }
    cols4.innerHTML = parts[y].race;
    cols5.innerHTML =
      (pureChance(x, y, race, rarity, form) * 100).toFixed(2) + "%";
    cols6.innerHTML = (1 / pureChance(x, y, race, rarity, form)).toFixed(2);
    cols7.innerHTML = (
      (breeding(x) + breeding(y)) /
      pureChance(x, y, race, rarity, form)
    ).toFixed(2);
    cols8.innerHTML = (breeding(x) + breeding(y)).toFixed(2);
  }
}
////////////////////////////////////////////////////////////////pureness2//////////
const pureChart2 = document.getElementById("pureChart2");

function pureTable2() {
  const th = pureChart2.insertRow(0);
  const cell1 = th.insertCell(0);
  const cell2 = th.insertCell(1);
  const cell3 = th.insertCell(2);
  const cell4 = th.insertCell(3);
  const cell5 = th.insertCell(4);
  const cell6 = th.insertCell(5);
  const cell7 = th.insertCell(6);
  const cell8 = th.insertCell(7);
  cell1.outerHTML = "<th>Father</th>";
  cell2.outerHTML = "<th>Race</th>";
  cell3.outerHTML = "<th>Mother</th>";
  cell4.outerHTML = "<th>Race</th>";
  cell5.outerHTML = "<th>Chance</th>";
  cell6.outerHTML = "<th>1 in</th>";
  cell7.outerHTML = "<th>AvgCost</th>";
  cell8.outerHTML = "<th>Cost</th>";
}

function pureCalc2(x, y, z, r, form) {
  if (parts[x].id !== parts[y].id) {
    const row = pureChart2.insertRow(x + 1);
    const cols1 = row.insertCell(0);
    const cols2 = row.insertCell(1);
    const cols3 = row.insertCell(2);
    const cols4 = row.insertCell(3);
    const cols5 = row.insertCell(4);
    const cols6 = row.insertCell(5);
    const cols7 = row.insertCell(6);
    const cols8 = row.insertCell(7);

    cols1.innerHTML = parts[x].id;
    // if (parts[x].breeding >= 2) {
    if (
      parts[x].id === id[0] ||
      parts[x].id === id[1] ||
      parts[x].id === id[2] ||
      parts[x].id === id[3] ||
      parts[x].id === id[4] ||
      parts[x].id === id[5] ||
      parts[x].id === id[6] ||
      parts[x].id === id[7] ||
      parts[x].id === id[8] ||
      parts[x].id === id[9] ||
      parts[x].id === id[10]
    ) {
      cols1.style.backgroundColor = color(x);
    }
    cols2.innerHTML = parts[x].race;
    cols3.innerHTML = parts[y].id;
    // if (parts[y].breeding >= 2) {
    if (
      parts[y].id === id[0] ||
      parts[y].id === id[1] ||
      parts[y].id === id[2] ||
      parts[y].id === id[3] ||
      parts[y].id === id[4] ||
      parts[y].id === id[5] ||
      parts[y].id === id[6] ||
      parts[y].id === id[7] ||
      parts[y].id === id[8] ||
      parts[y].id === id[9] ||
      parts[y].id === id[10]
    ) {
      cols3.style.backgroundColor = color(y);
    }
    cols4.innerHTML = parts[y].race;
    cols5.innerHTML = (pureChance(x, y, z, r, form) * 100).toFixed(2) + "%";
    cols6.innerHTML = (1 / pureChance(x, y, z, r, form)).toFixed(2);
    cols7.innerHTML = (
      (breeding(x) + breeding(y)) /
      pureChance(x, y, z, r, form)
    ).toFixed(2);
    cols8.innerHTML = (breeding(x) + breeding(y)).toFixed(2);
  }
}
////////////////////////////////////////////////////////////////pureness3//////////////////////
const pureChart3 = document.getElementById("pureChart3");

function pureTable3() {
  const th = pureChart3.insertRow(0);
  const cell1 = th.insertCell(0);
  const cell2 = th.insertCell(1);
  const cell3 = th.insertCell(2);
  const cell4 = th.insertCell(3);
  const cell5 = th.insertCell(4);
  const cell6 = th.insertCell(5);
  const cell7 = th.insertCell(6);
  const cell8 = th.insertCell(7);
  cell1.outerHTML = "<th>Father</th>";
  cell2.outerHTML = "<th>Race</th>";
  cell3.outerHTML = "<th>Mother</th>";
  cell4.outerHTML = "<th>Race</th>";
  cell5.outerHTML = "<th>Chance</th>";
  cell6.outerHTML = "<th>1 in</th>";
  cell7.outerHTML = "<th>AvgCost</th>";
  cell8.outerHTML = "<th>Cost</th>";
}

function pureCalc3(x, y, z, rarity, form) {
  if (parts[x].id !== parts[y].id) {
    const row = pureChart3.insertRow(x + 1);
    const cols1 = row.insertCell(0);
    const cols2 = row.insertCell(1);
    const cols3 = row.insertCell(2);
    const cols4 = row.insertCell(3);
    const cols5 = row.insertCell(4);
    const cols6 = row.insertCell(5);
    const cols7 = row.insertCell(6);
    const cols8 = row.insertCell(7);

    cols1.innerHTML = parts[x].id;
    // if (parts[x].breeding >= 2) {
    if (
      parts[x].dna[0].mongen[0].rarity == rarity &&
      parts[x].dna[0].mongen[1].rarity == rarity &&
      parts[x].dna[0].mongen[2].rarity == rarity &&
      parts[x].dna[0].mongen[3].rarity == rarity &&
      parts[x].dna[0].mongen[4].rarity == rarity &&
      parts[x].dna[0].mongen[5].rarity == rarity
    ) {
      // if (
      //   parts[x].id === id[0] ||
      //   parts[x].id === id[1] ||
      //   parts[x].id === id[2] ||
      //   parts[x].id === id[3] ||
      //   parts[x].id === id[4] ||
      //   parts[x].id === id[5] ||
      //   parts[x].id === id[6] ||
      //   parts[x].id === id[7] ||
      //   parts[x].id === id[8] ||
      //   parts[x].id === id[9] ||
      //   parts[x].id === id[10]
      // ) {
      cols1.style.backgroundColor = color(x);
    }
    cols2.innerHTML = parts[x].race;
    cols3.innerHTML = parts[y].id;
    // if (parts[y].breeding >= 2) {
    if (
      parts[y].dna[0].mongen[0].rarity == rarity &&
      parts[y].dna[0].mongen[1].rarity == rarity &&
      parts[y].dna[0].mongen[2].rarity == rarity &&
      parts[y].dna[0].mongen[3].rarity == rarity &&
      parts[y].dna[0].mongen[4].rarity == rarity &&
      parts[y].dna[0].mongen[5].rarity == rarity
    ) {
      // if (
      //   parts[y].id === id[0] ||
      //   parts[y].id === id[1] ||
      //   parts[y].id === id[2] ||
      //   parts[y].id === id[3] ||
      //   parts[y].id === id[4] ||
      //   parts[y].id === id[5] ||
      //   parts[y].id === id[6] ||
      //   parts[y].id === id[7] ||
      //   parts[y].id === id[8] ||
      //   parts[y].id === id[9] ||
      //   parts[y].id === id[10]
      // ) {
      cols3.style.backgroundColor = color(y);
    }
    cols4.innerHTML = parts[y].race;
    cols5.innerHTML = (pureChance(x, y, z, rarity, form) * 100).toFixed(2) + "%";
    cols6.innerHTML = (1 / pureChance(x, y, z, rarity, form)).toFixed(2);
    cols7.innerHTML = (
      (breeding(x) + breeding(y)) /
      pureChance(x, y, z, rarity, form)
    ).toFixed(2);
    cols8.innerHTML = (breeding(x) + breeding(y)).toFixed(2);
  }
}
////////////////////////////////////////////////////////////////pureness4//////////////////////
const pureChart4 = document.getElementById("pureChart4");

function pureTable4() {
  const th = pureChart4.insertRow(0);
  const cell1 = th.insertCell(0);
  const cell2 = th.insertCell(1);
  const cell3 = th.insertCell(2);
  const cell4 = th.insertCell(3);
  const cell5 = th.insertCell(4);
  const cell6 = th.insertCell(5);
  const cell7 = th.insertCell(6);
  const cell8 = th.insertCell(7);
  cell1.outerHTML = "<th>Father</th>";
  cell2.outerHTML = "<th>Race</th>";
  cell3.outerHTML = "<th>Mother</th>";
  cell4.outerHTML = "<th>Race</th>";
  cell5.outerHTML = "<th>Chance</th>";
  cell6.outerHTML = "<th>1 in</th>";
  cell7.outerHTML = "<th>AvgCost</th>";
  cell8.outerHTML = "<th>Cost</th>";
}

function pureCalc4(x, y, race, rarity, form) {
  if (parts[x].id !== parts[y].id) {
    const row = pureChart4.insertRow(x + 1);
    const cols1 = row.insertCell(0);
    const cols2 = row.insertCell(1);
    const cols3 = row.insertCell(2);
    const cols4 = row.insertCell(3);
    const cols5 = row.insertCell(4);
    const cols6 = row.insertCell(5);
    const cols7 = row.insertCell(6);
    const cols8 = row.insertCell(7);

    cols1.innerHTML = parts[x].id;
    // if (parts[x].breeding >= 2) {
    if (
      parts[x].id === id[0] ||
      parts[x].id === id[1] ||
      parts[x].id === id[2] ||
      parts[x].id === id[3] ||
      parts[x].id === id[4] ||
      parts[x].id === id[5] ||
      parts[x].id === id[6] ||
      parts[x].id === id[7] ||
      parts[x].id === id[8] ||
      parts[x].id === id[9] ||
      parts[x].id === id[10]
    ) {
      cols1.style.backgroundColor = color(x);
    }
    cols2.innerHTML = parts[x].race;
    cols3.innerHTML = parts[y].id;
    // if (parts[y].breeding >= 2) {
    if (
      parts[y].id === id[0] ||
      parts[y].id === id[1] ||
      parts[y].id === id[2] ||
      parts[y].id === id[3] ||
      parts[y].id === id[4] ||
      parts[y].id === id[5] ||
      parts[y].id === id[6] ||
      parts[y].id === id[7] ||
      parts[y].id === id[8] ||
      parts[y].id === id[9] ||
      parts[y].id === id[10]
    ) {
      cols3.style.backgroundColor = color(y);
    }
    cols4.innerHTML = parts[y].race;
    cols5.innerHTML =
      (pureChance(x, y, race, rarity, form) * 100).toFixed(2) + "%";
    cols6.innerHTML = (1 / pureChance(x, y, race, rarity, form)).toFixed(2);
    cols7.innerHTML = (
      (breeding(x) + breeding(y)) /
      pureChance(x, y, race, rarity, form)
    ).toFixed(2);
    cols8.innerHTML = (breeding(x) + breeding(y)).toFixed(2);
  }
}
////////////////////////////////////////////////////////////////pureness5//////////////////////
const pureChart5 = document.getElementById("pureChart5");

function pureTable5() {
  const th = pureChart5.insertRow(0);
  const cell1 = th.insertCell(0);
  const cell2 = th.insertCell(1);
  const cell3 = th.insertCell(2);
  const cell4 = th.insertCell(3);
  const cell5 = th.insertCell(4);
  const cell6 = th.insertCell(5);
  const cell7 = th.insertCell(6);
  const cell8 = th.insertCell(7);
  cell1.outerHTML = "<th>Father</th>";
  cell2.outerHTML = "<th>Race</th>";
  cell3.outerHTML = "<th>Mother</th>";
  cell4.outerHTML = "<th>Race</th>";
  cell5.outerHTML = "<th>Chance</th>";
  cell6.outerHTML = "<th>1 in</th>";
  cell7.outerHTML = "<th>AvgCost</th>";
  cell8.outerHTML = "<th>Cost</th>";
}

function pureCalc5(x, y, z, r, form) {
  if (parts[x].id !== parts[y].id) {
    const row = pureChart5.insertRow(x + 1);
    const cols1 = row.insertCell(0);
    const cols2 = row.insertCell(1);
    const cols3 = row.insertCell(2);
    const cols4 = row.insertCell(3);
    const cols5 = row.insertCell(4);
    const cols6 = row.insertCell(5);
    const cols7 = row.insertCell(6);
    const cols8 = row.insertCell(7);

    cols1.innerHTML = parts[x].id;
    // if (parts[x].breeding >= 2) {
    if (
      parts[x].id === id[0] ||
      parts[x].id === id[1] ||
      parts[x].id === id[2] ||
      parts[x].id === id[3] ||
      parts[x].id === id[4] ||
      parts[x].id === id[5] ||
      parts[x].id === id[6] ||
      parts[x].id === id[7] ||
      parts[x].id === id[8] ||
      parts[x].id === id[9] ||
      parts[x].id === id[10]
    ) {
      cols1.style.backgroundColor = color(x);
    }
    cols2.innerHTML = parts[x].race;
    cols3.innerHTML = parts[y].id;
    // if (parts[y].breeding >= 2) {
    if (
      parts[y].id === id[0] ||
      parts[y].id === id[1] ||
      parts[y].id === id[2] ||
      parts[y].id === id[3] ||
      parts[y].id === id[4] ||
      parts[y].id === id[5] ||
      parts[y].id === id[6] ||
      parts[y].id === id[7] ||
      parts[y].id === id[8] ||
      parts[y].id === id[9] ||
      parts[y].id === id[10]
    ) {
      cols3.style.backgroundColor = color(y);
    }
    cols4.innerHTML = parts[y].race;
    cols5.innerHTML = (pureChance(x, y, z, r, form) * 100).toFixed(2) + "%";
    cols6.innerHTML = (1 / pureChance(x, y, z, r, form)).toFixed(2);
    cols7.innerHTML = (
      (breeding(x) + breeding(y)) /
      pureChance(x, y, z, r, form)
    ).toFixed(2);
    cols8.innerHTML = (breeding(x) + breeding(y)).toFixed(2);
  }
}

const title1 = document.getElementById("title1");
const title2 = document.getElementById("title2");
const title3 = document.getElementById("title3");
const title4 = document.getElementById("title4");
const title5 = document.getElementById("title5");

function calcLoop() {
  title1.innerHTML = "Pure Beast";
  title2.innerHTML = "Pure Tectos";
  title3.innerHTML = "Pure Mystic";
  title4.innerHTML = "Pure Celest";
  title5.innerHTML = "Tectos/Mystic/Critical";
  pureTable1();
  pureTable2();
  pureTable3();
  pureTable4();
  pureTable5();

  let x = 0;
  while (x < parts.length) {
    for (let n = 0; n < parts.length; n++) {
      calc(x, n, "Epic");
      pureCalc1(x, n, "Beast", "Epic", "Beast");
      pureCalc2(x, n, "Tectos", "Epic", "Tectos");
      pureCalc3(x, n, "Mystic", "Epic", "Mystic");
      pureCalc4(x, n, "Celest", "Epic", "Celest");
      pureCalc5(x, n, "Mystic", "Epic", "Tectos");
    }
    x += 1;
  }
}
calcLoop();

sortTable("chart", 6);
sortTable("pureChart1", 6);
sortTable("pureChart2", 6);
sortTable("pureChart3", 6);
sortTable("pureChart4", 6);
sortTable("pureChart5", 6);

// result.sort(function (a, b) {
//   return parseFloat(a.avgCost) - parseFloat(b.avgcost);
// });

// //chart.innerHTML = JSON.stringify(result,"br");

// for (let str of result) {
//   chart.innerHTML += JSON.stringify(str) + "<br>";
// }

function sortTable(id, column) {
  var table, rows, switching, i, x, y, shouldSwitch;
  table = document.getElementById(id);
  switching = true;
  /*Make a loop that will continue until
  no switching has been done:*/
  while (switching) {
    //start by saying: no switching is done:
    switching = false;
    rows = table.rows;
    /*Loop through all table rows (except the
    first, which contains table headers):*/
    for (i = 1; i < rows.length - 1; i++) {
      //start by saying there should be no switching:
      shouldSwitch = false;
      /*Get the two elements you want to compare,
      one from current row and one from the next:*/
      x = rows[i].getElementsByTagName("TD")[column];
      y = rows[i + 1].getElementsByTagName("TD")[column];
      //check if the two rows should switch place:
      if (Number(x.innerHTML) > Number(y.innerHTML)) {
        //if so, mark as a switch and break the loop:
        shouldSwitch = true;
        break;
      }
    }
    if (shouldSwitch) {
      /*If a switch has been marked, make the switch
      and mark that a switch has been done:*/
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
    }
  }
}
