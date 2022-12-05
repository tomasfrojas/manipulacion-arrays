// Los conceptos de mutabilidad e inmutabilidad son muy importantes para los siguientes métodos de arrays. Existen métodos mutables que cambian el array original; e inmutables que devuelven un array diferente al original.

// Referencias en memoria
// En JavaScript, cada estructura está guardada en una referencia en memoria, por lo que si cambiamos un elemento en el array, también lo haremos en esa referencia. Al clonar arrays, se crea un nuevo array que tiene las mismas referencias en memoria que el original, por lo que si se realiza un cambio en el original, también cambiará en la copia.

// const original = [1,2,3]
// const copia = original
// copia[0] = "Hola"

// console.log(original) // [ 'Hola', 2, 3 ]
// Diferencia entre mutabilidad e inmutabilidad
// Con lo mencionado anteriormente, mutable es aquella acción que cambia el valor en la referencia en memoria del elemento del array original, provocando que cambien el original y la copia. Inmutable es la acción en la que se cambia el valor, pero en una referencia diferente del original, provocando que el original siga igual.

// La mutabilidad es más flexible y una buena opción si se requiere cambiar, actualizar o eliminar datos; pero esto puede ocasionar fallos o resultados erróneos en nuestra aplicación. La inmutabilidad es más exigente, te permite generar nuevas estructuras para manejarlas sin cambiar la original; pero esto puede provocar que la memoria colapse.

// Por lo que, ¿cuál es mejor? La respuesta es ninguna, cada uno te permite manejar estructuras de datos, por ende es necesario identificar cuál forma es la adecuada a aplicar en un algoritmo.

//METODO MAP()
// El método map consiste en crear un nuevo array a partir de los elementos originales transformados mediante una función (callback) y es inmutable.

// La transformación implica cambiar cualquier elemento en otro, ya sea un número, un objeto, otro array. Las posibilidades son infinitas.

// Este método recibe dos argumentos:

// La función que itera y transforma cada elemento del array (obligatorio).
// Un objeto al que puede hacer referencia el contexto this en la función. Si se lo omite, será undefined. Recuerde que this en arrow functions es el objeto global.

// let otherArray = array.map(function(), thisArg)

// La función, que recibe como argumento el método map, utiliza tres parámetros:

// El valor actual del elemento iterado. Es decir, si es la primera iteración, será el primer elemento, y así sucesivamente.
// El índice del elemento iterado. Es decir, si es la primera iteración, será el índice 0, y así sucesivamente.
// El array que está iterando.

// const other = array.map(function(element, index, array))

// Diferencia entre forEach y map
// La principal diferencia entre estos dos es que forEach solamente itera cada elemento, mientras que map itera y transforma cada elemento en un nuevo array.

const letters = ["a", "b", "c"];

const newArray = [];
for (let index = 0; index < letters.length; index++) {
  const element = letters[index];
  newArray.push(element + "++");
}

const newArray2 = letters.map((item) => item + "++");

console.log("original", letters);
console.log("newArray", newArray);
console.log("newArray2", newArray2);

const nums = [2, 4, 5, 6, -3];

const nums2 = nums.map((num) => num * 2);

console.log(nums2);

function multiplyArray(array) {
  return array.map((item) => item * 2);
}
console.log(multiplyArray([2, 4, 5, 6, 8]));
