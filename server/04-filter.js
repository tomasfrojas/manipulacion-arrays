// FILTER
// El método filter consiste en crear un nuevo array a partir de los elementos originales filtrados mediante una función (callback) que indica la condición a cumplir y es inmutable. Si la condición se cumple, retorna el elemento completo.

// Este proceso recibe dos argumentos:

// La función que itera y evalúa si cada elemento del array si cumple con la condición especificada (obligatorio).
// Un objeto al que puede hacer referencia el contexto this en la función. Si se lo omite, será undefined. Recuerde que this en arrow functions es el objeto global.

// let otherArray = array.filter(function(), thisArg)

// La función, que recibe como argumento el método filter, utiliza tres parámetros:

// El valor actual del elemento iterado. Es decir, si es la primera iteración, será el primer elemento, y así sucesivamente.
// El índice del elemento iterado. Es decir, si es la primera iteración, será el índice 0, y así sucesivamente.
// El array que está iterando.

// const other = array.map(function(element, index, array))

const words = ["spray", "limit", "elite", "exuberant"];

const newArray = [];
for (let index = 0; index < words.length; index++) {
  const item = words[index];
  if (item.length >= 6) {
    newArray.push(item);
  }
}

console.log("newArray", newArray);
console.log("words", words);

const rta = words.filter((item) => item.length >= 6);
console.log("rta", rta);
console.log("words", words);

const orders = [
  {
    customerName: "Nicolas",
    total: 60,
    delivered: true,
  },
  {
    customerName: "Zulema",
    total: 120,
    delivered: false,
  },
  {
    customerName: "Santiago",
    total: 180,
    delivered: true,
  },
  {
    customerName: "Valentina",
    total: 240,
    delivered: true,
  },
  {
    customerName: "Nicolas",
    total: 2322,
    delivered: false,
  },
];

// const rta3 = orders.filter((item) => item.delivered && item.total >= 100);
// console.log("rta3", rta3);

const search = (query) => {
  return orders.filter((item) => {
    return item.customerName.includes(query);
  });
};

console.log(search("Nico"));
console.log("a", search("a"));

const array = ["a", "bb", "ccc"];
const rta8 = array.map((item) => item.length);
console.log(rta8);
