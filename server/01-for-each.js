// El método forEach de los arrays consiste en ejecutar una función (callback) para cada uno de los elementos iterados. Iterar significa repetir una acción varias veces.

// Este método recibe dos argumentos:

// La función que itera cada elemento del array (obligatorio).
// Un objeto al que puede hacer referencia el contexto this en la función. Si se lo omite, será undefined. Recuerde que this en arrow functions es el objeto global.

// array.forEach(function(), thisArg)

// La función, que recibe como argumento el método forEach, utiliza tres parámetros opcionales:

// El valor actual del elemento iterado. Es decir, si es la primera iteración, será el primer elemento, y así sucesivamente.
// El índice del elemento iterado. Es decir, si es la primera iteración, será el índice 0, y así sucesivamente.
// El array que está iterando.

// array.forEach(function(element, index, array))

const letters = ["a", "b", "c"];

for (let index = 0; index < letters.length; index++) {
  const element = letters[index];
  console.log("for", element);
}

letters.forEach((item) => console.log("forEach", item));
