// Join

// El método join une los elementos del array, mediante una separación, y retorna un string. Si un elemento es undefined o null, se convierte en una cadena vacía.

// Este procedimiento recibe un argumento:

// La separación de cada elemento del array al unirlos.
// array.join(separación)

const elements = ["Fire", "Air", "Water"];

let rtaFinal = "";
const separator = "--";
for (let index = 0; index < elements.length; index++) {
  const element = elements[index];
  rtaFinal = rtaFinal + element + separator;
}
console.log("for", rtaFinal);

const rta = elements.join("--");
console.log("join", rta);

const title = "Curso de manipulacion de arrays";
const titleFinal = title.split(" ");
console.log("split", titleFinal);
const urlFinal = title.split(" ").join("-").toLocaleLowerCase();
console.log("url", urlFinal);
