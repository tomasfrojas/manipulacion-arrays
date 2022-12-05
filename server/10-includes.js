// Includes

// El método includes determina si un array o string incluye un determinado elemento. Devuelve true o false, si existe o no respectivamente.

// Este método recibe dos argumentos:

// El elemento a comparar.
// El índice inicial desde donde comparar hasta el último elemento.
// Índices positivos y negativos
// Los índices positivos comienzan desde 0 hasta la longitud total menos uno, de izquierda a derecha del array.

// [0,1,2,3, ...., lenght-1]
// Los índices negativos comienzan desde -1 hasta el negativo de la longitud total del array, de derecha a izquierda.

// [-lenght, ...,  -3, -2, -1]

const pets = ["cat", "dog", "bat"];

let includeInArray = false;
for (let index = 0; index < pets.length; index++) {
  const element = pets[index];
  if (element === "dog") {
    includeInArray = true;
    break;
  }
}

console.log("for", includeInArray);

const rta = pets.includes("dog");
console.log("includes", rta);
