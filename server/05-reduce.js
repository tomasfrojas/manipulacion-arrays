//REDUCE

// El método reduce es inmutable y consiste retornar un solo valor del array iterado a partir de una función (callback) que indica de qué manera se itera cada elemento para reducirlo.

// Este método recibe dos argumentos:

// La función que itera y reduce cada elemento del array. (obligatorio)
// El valor inicial que utilizará como argumento la función. Si no se especifica, en la primera iteración el valor inicial será el primer elemento del array y no ejecuta la función.
// let reducedValue = array.reduce(function(), initialValue)
// La función, que recibe como argumento el método map, utiliza cuatro parámetros:

// El valor acumulado por la función (callback). En la primera iteración será igual al valor inicial del argumento del método. (obligatorio)
// El valor actual del elemento iterado. Es decir, si es la primera iteración, será el primer elemento, y así sucesivamente. (obligatorio)
// El índice del elemento iterado. Es decir, si es la primera iteración, será el índice 0, y así sucesivamente.
// El array que está iterando.
// let reducedValue = array.reduce(
//     function(acumulator,element, index, array),
//     valorInicial
// )

const totals = [1, 2, 3, 4];

let sum = 0;
for (let index = 0; index < totals.length; index++) {
  const element = totals[index];
  sum = sum + element;
}

const rta = totals.reduce((acumulador, item) => acumulador + item, 0);
// el item es el que itera por el array
// reduce recibe 2 parametros: el primero en este caso seria el arrow function y el segundo parametro seria el estado inicial del acumulador el cual seria 0.

console.log("rta", rta);

console.log(sum);
