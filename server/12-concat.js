// Concat

// El método concat es inmutable y consiste en crear un nuevo array a partir de la unión de otros valores o arrays especificados como argumentos.

// Este método recibe uno o varios argumentos:

// Valores cualesquiera y/o arrays para concatenar.
// let result = array.concat(otherArray)

const elements = [1, 1, 2, 2];
const otherElements = [3, 3, 4, 4];

const newArray = [...elements]; // spread operator para no copiar o clonar la referencia en memoria de los elementos, sino que en este caso no modifica el array original.
for (let index = 0; index < otherElements.length; index++) {
  const element = otherElements[index];
  newArray.push(element);
}
console.log("for", newArray);

const rta = elements.concat(otherElements);
const rta2 = [...elements, ...otherElements];
const rta3 = [...elements, "random"];

console.log("concat", rta);
console.log("...", rta2);
console.log("rta3", rta3);

elements.push(...otherElements);
console.log("push", elements);
