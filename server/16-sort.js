//Sort
// El método sort es mutable y consiste en ordenar un array a partir de los valores Unicode de los caracteres y este retorna un array con la misma referencia en memoria que el original.

// Este proceso recibe un argumento:

// Una función de comparación que compara cada elemento con otro. Por defecto, evalúa el valor Unicode del caracter.
// let sortedArray = array.sort(function())
// La función comparativa, que recibe como argumento el método sort, utiliza dos parámetros:

// El primer elemento a comparar.
// El segundo elemento a comparar.
// array.sort(function(first, second))

const months = ["March", "Jan", "Feb", "Dec"];
months.sort();
console.log(months);

const numbers = [1, 30, 4, 21, 100000];
numbers.sort((a, b) => b - a);
console.log(numbers);

const words = [
  "réservé",
  "premier",
  "communiqué",
  "café",
  "adieu",
  "éclair",
  "banana",
];

words.sort();
console.log(words);

const orders = [
  {
    customerName: "Nicolas",
    total: 600,
    delivered: true,
  },
  {
    customerName: "Zulema",
    total: 120,
    delivered: false,
  },
  {
    customerName: "Santiago",
    total: 1840,
    delivered: true,
  },
  {
    customerName: "Valentina",
    total: 240,
    delivered: true,
  },
];
orders.sort((a, b) => b.total - a.total);
console.log(orders);
