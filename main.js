//--------- Inicio E1 - JS ---------

// ******** Ejercicio 1 ********

let a = 10;

const ImprimeParoImpar = (UserNum) => {
  if (UserNum % 2 === 0) {
    console.log(`El Numero ${UserNum} es Par`);
  } else {
    console.log(`El Numero ${UserNum} es Impar`);
  }
};

const PedirNumeroUsuario = (callback) => {
  let NumUsuario = prompt("Porfavor, Ingrese un Número.");
  callback(NumUsuario);
};

// PedirNumeroUsuario(ImprimeParoImpar);

// ******** Ejercicio 2 ********

// const CompararNumeros = (UserNum1, UserNum2) => {
//   if (UserNum1 === UserNum2) {
//     console.log("Ambos números son Iguales");
//   } else {
//     if (UserNum1 > UserNum2) {
//       console.log(`el Numero ${UserNum1} es Mayor que ${UserNum2}`);
//     } else {
//       console.log(`el Numero ${UserNum2} es Mayor que ${UserNum1}`);
//     }
//   }
// };

// const PedirNumerosUsuario = (callback) => {
//   let Num1 = prompt("Porfavor, Ingrese un Número");
//   let Num2 = prompt("Porfavor, Ingrese otro Número");
//   callback(Num1, Num2);
// };

// PedirNumerosUsuario(CompararNumeros);

// ******** Ejercicio 3 ********

// const ImprimeMultiplo5 = (UserNum) => {
//   if (UserNum % 5 === 0) {
//     console.log(`El Numero ${UserNum} ES Multiplo de 5`);
//   } else {
//     console.log(`El Numero ${UserNum} NO ES Multiplo de 5`);
//   }
// };

// const PedirNumUsuario = (callback) => {
//   let NumUsuario = prompt("Porfavor, Ingrese un Número");
//   callback(NumUsuario);
// };

// PedirNumUsuario(ImprimeMultiplo5);

// ******** Ejercicio 4 ********

// let NumUser = prompt("Porfavor, Ingrese un Número");
// function ImprimirNumeros(numero) {
//   let i = 0;
//   do {
//     console.log(i);
//     i++;
//   } while (i <= numero);
// }

// ImprimirNumeros(NumUser);

// ******** Ejercicio 5 ********

// const ImprimePalabra = (text, num) => {
//   for (let i = 0; i < num; i++) {
//     console.log(text);
//   }
// };

// const IngresoUsuario = (callback) => {
//   let PalabraUser = prompt("Porfavor, ingrese una Palabra");
//   let NumUser = prompt(
//     "Ingrese la cantidad de veces que quiere Repetir la Palabra"
//   );
//   callback(PalabraUser, NumUser);
// };

// IngresoUsuario(ImprimePalabra);

// ******** Ejercicio 6 ********

// let myArray = ["Mati", 38, "Córdoba", "Argentina", true, 642];

// const IterarArray = (Array) => {
//   for (const elemento of Array) {
//     console.log(elemento);
//   }
// };

// IterarArray(myArray);

// ******** Ejercicio 7 ********

// let ArrayNumerico = [25, 32, 45, 78, 150, 2541, 0, 95, 654, 20];

// const IterarArraySin5taPos = (Array) => {
//   for (let i = 0; i < Array.length; i++) {
//     if (i === 4) {
//       continue;
//     }
//     console.log(`Posición ${i + 1} - ${Array[i]}`);
//   }
// };

// IterarArraySin5taPos(ArrayNumerico);

// ******** Ejercicio 8 ********

// let ArrayNumeros = [214, 201, 21, 5, 36, 1800, 8500, 14, 53, 521, 2, 36, 0];

// console.log(ArrayNumeros);

// const IteararYMultiplicar = (Array) => {
//   let Multiplicador = prompt(
//     "Porfavor, ingrese el Número por el que va a multiplicar cada elemento del Array"
//   );
//   for (const value of Array) {
//     let Resultado = 0;
//     Resultado = value * Multiplicador;
//     console.log(
//       `El Número ${value} Multiplicado por ${Multiplicador} es Igual a: ${Resultado}`
//     );
//   }
// };

// IteararYMultiplicar(ArrayNumeros);

//--------- Fin E1 - JS ---------
