//FIND Y FINDINDEX

// Los métodos find y findIndex consisten en encontrar el primer elemento de un array que cumpla con la condición especificada en la función (callback).

// En el caso de find retornará el elemento completo, si cumple con la condición, caso contrario retornará undefined. El método findIndex retornará el índice del elemento encontrado, caso contrario retornará -1.

// Estos procedimientos reciben dos argumentos:

// La función que itera y evalúa cada elemento del array hasta encuentre uno que cumpla con la condición especificada (obligatorio).
// Un objeto al que puede hacer referencia el contexto this en la función. Si se lo omite, será undefined. Recuerde que this en arrow functions es el objeto global.
// array.find(function(), thisArg)
// array.findIndex(function(), thisArg)
// La función, que recibe como argumento los métodos find y findIndex, utiliza tres parámetros:

// El valor actual del elemento iterado. Es decir, si es la primera iteración, será el primer elemento, y así sucesivamente.
// El índice del elemento iterado. Es decir, si es la primera iteración, será el índice 0, y así sucesivamente.
// El array que está iterando.
// array.find(function(element, index, array))
// array.findIndex(function(element, index, array))

const numbers = [1, 30, 49, 29, 10, 13];

let rta = undefined;
for (let index = 0; index < numbers.length; index++) {
  const element = numbers[index];
  if (element === 30) {
    rta = element;
    break;
  }
}
console.log("for", rta);

const rta2 = numbers.find((item) => item === 30);

console.log("find", rta2);

const products = [
  { name: "Pizza", price: 12, id: "🍕" },
  { name: "Burger", price: 23, id: "🍔" },
  { name: "Hot dog", price: 34, id: "🌭" },
  { name: "Hot cakes", price: 355, id: "🥞" },
];

const rta3 = products.find((item) => item.id === "🍔");
console.log("rta3", rta3);

const rta4 = products.findIndex((item) => item.id === "🍔");
console.log("rta4", rta4);
