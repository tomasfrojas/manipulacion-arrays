// El método every es inmutable y consiste retornar un valor lógico verdadero si todos los elementos cumplen con la condición establecida en la función (callback). retorna true o false.

// Este método recibe dos argumentos:

// La función que itera y evalúa cada elemento del array hasta que al menos uno cumpla con la condición especificada (obligatorio).
// Un objeto al que puede hacer referencia el contexto this en la función. Si se lo omite, será undefined. Recuerde que this en arrow functions es el objeto global.
// array.every(function(), thisArg)
// La función, que recibe como argumento el método every, utiliza tres parámetros:

// El valor actual del elemento iterado. Es decir, si es la primera iteración, será el primer elemento, y así sucesivamente.
// El índice del elemento iterado. Es decir, si es la primera iteración, será el índice 0, y así sucesivamente.
// El array que está iterando.
// array.every(function(element, index, array))

const numbers = [1, 30, 49, 29, 10, 13];

let rta = true;
for (let index = 0; index < numbers.length; index++) {
  const element = numbers[index];
  if (element > 40) {
    rta = false;
  }
}

console.log("for", rta);

const rta2 = numbers.every((item) => item < 40);

console.log("rta2", rta2);

const team = [
  {
    name: "Nicolas",
    age: 12,
  },
  {
    name: "Andrea",
    age: 8,
  },
  {
    name: "Zulema",
    age: 2,
  },
  {
    name: "Santiago",
    age: 14,
  },
];

const rta3 = team.every((item) => item.age < 15);
console.log("rta3", rta3);

const rta4 = (array) => {
  return array.every((item) => item.age < 15);
};
