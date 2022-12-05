const items = [1, 3, 2, 3, 3, 1, 10];

const rta = items.reduce((obj, item) => {
  if (!obj[item]) {
    obj[item] = 1;
  } else {
    obj[item] = obj[item] + 1;
  }
  return obj;
}, {});

console.log("rta", rta);

const data = [
  {
    name: "Nicolas",
    level: "low",
  },
  {
    name: "Andrea",
    level: "medium",
  },
  {
    name: "Zulema",
    level: "high",
  },
  {
    name: "Santiago",
    level: "low",
  },
  {
    name: "Valentina",
    level: "medium",
  },
  {
    name: "Lucia",
    level: "high",
  },
];

const prueba = data.map((item) => item.level);
console.log("prueba", prueba);

const rta1 = data
  .map((item) => item.level)
  .reduce((obj, item) => {
    if (!obj[item]) {
      obj[item] = 1;
    } else {
      obj[item] = obj[item] + 1;
    }
    return obj;
  }, {});

console.log("rta1", rta1);

const list = [];
for (let index = 0; index < 30; index++) {
  list.push(Math.floor(Math.random() * 11));
}
const rangoNumerico = list.reduce(
  (obj, value) => {
    if (value < 5) {
      obj["1-4"] += 1;
    } else if (value < 9) {
      obj["5-8"] += 1;
    } else {
      obj["9-10"] += 1;
    }
    return obj;
  },
  {
    "1-4": 0,
    "5-8": 0,
    "9-10": 0,
  }
);

console.log(list);
console.log(rangoNumerico);
