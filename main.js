//--------- Inicio E1 - JS ---------

// ******** Ejercicio 1 ********

alert(`Ejercicio 1: Par/Impar`);
console.log(`******** Ejercicio 1 ********`);

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

PedirNumeroUsuario(ImprimeParoImpar);

console.log(`---------------------------`);

// ******** Ejercicio 2 ********

alert(`Ejercicio 2: Mayor/Menor/Igual`);
console.log(`******** Ejercicio 2 ********`);

const CompararNumeros = (UserNum1, UserNum2) => {
  if (UserNum1 === UserNum2) {
    console.log("el Número A y el Número B son Iguales");
  } else {
    if (UserNum1 > UserNum2) {
      console.log(
        `el Número A: ${UserNum1} es Mayor que el Número B: ${UserNum2}`
      );
    } else {
      console.log(
        `el Número B: ${UserNum2} es Mayor que el Número A: ${UserNum1}`
      );
    }
  }
};

const PedirNumerosUsuario = (callback) => {
  let Num1 = prompt("Porfavor, Ingrese un Número A:");
  let Num2 = prompt("Porfavor, Ingrese un Número B:");
  callback(Num1, Num2);
};

PedirNumerosUsuario(CompararNumeros);

console.log(`---------------------------`);

// ******** Ejercicio 3 ********

alert(`Ejercicio 3: Multiplo de 5`);
console.log(`******** Ejercicio 3 ********`);

const ImprimeMultiplo5 = (UserNum) => {
  if (UserNum % 5 === 0) {
    console.log(`El Número ${UserNum}, Es Multiplo de 5? = SI`);
  } else {
    console.log(`El Número ${UserNum}, Es Multiplo de 5? = NO`);
  }
};

const PedirNumUsuario = (callback) => {
  let NumUsuario = prompt("Porfavor, Ingrese un Número");
  callback(NumUsuario);
};

PedirNumUsuario(ImprimeMultiplo5);

// ******** Ejercicio 4 ********

alert(`Ejercicio 4: Imprimir hasta el número ingresado`);
console.log(`******** Ejercicio 4 ********`);

let NumUser = prompt("Porfavor, Ingrese un Número");
function ImprimirNumeros(numero) {
  let i = 0;
  do {
    console.log(i);
    i++;
  } while (i <= numero);
}

ImprimirNumeros(NumUser);

// ******** Ejercicio 5 ********

alert(`Ejercicio 5: Imprimir Palabra "N" Veces`);
console.log(`******** Ejercicio 5 ********`);

const ImprimePalabra = (text, num) => {
  for (let i = 0; i < num; i++) {
    console.log(text);
  }
};

const IngresoUsuario = (callback) => {
  let PalabraUser = prompt("Porfavor, ingrese una Palabra");
  let NumUser = prompt(
    "Ingrese la cantidad de veces que quiere Repetir la Palabra"
  );
  callback(PalabraUser, NumUser);
};

IngresoUsuario(ImprimePalabra);

// ******** Ejercicio 6 ********

alert(`Ejercicio 6: Iterar e Imprimir Array`);
console.log(`******** Ejercicio 6 ********`);

let myArray = ["Mati", 38, "Córdoba", "Argentina", true, 642];

console.log(`Array Utilizado = ${myArray}`);

const IterarArray = (Array) => {
  for (const elemento of Array) {
    console.log(elemento);
  }
};

IterarArray(myArray);

// ******** Ejercicio 7 ********

alert(`Ejercicio 7: Iterar e Imprimir Array, excepto la 5ta posición`);
console.log(`******** Ejercicio 7 ********`);

let ArrayNumerico = [25, 32, 45, 78, 150, 2541, 0, 95, 654, 20];

console.log(`Array Utilizado = ${ArrayNumerico}`);

const IterarArraySin5taPos = (Array) => {
  for (let i = 0; i < Array.length; i++) {
    if (i === 4) {
      continue;
    }
    console.log(`Posición ${i + 1} - ${Array[i]}`);
  }
};

IterarArraySin5taPos(ArrayNumerico);

// ******** Ejercicio 8 ********

alert(`Ejercicio 8: Multiplica por "N" Numero cada item del Array`);
console.log(`******** Ejercicio 8 ********`);

let ArrayNumeros = [214, 201, 21, 5, 36, 1800, 8500, 14, 53, 521, 2, 36, 0];

console.log(`Array Utilizado = ${ArrayNumeros}`);

const IteararYMultiplicar = (Array) => {
  let Multiplicador = prompt(
    "Porfavor, ingrese el Número por el que va a multiplicar cada elemento del Array"
  );
  for (const value of Array) {
    let Resultado = 0;
    Resultado = value * Multiplicador;
    console.log(
      `El Número ${value} Multiplicado por ${Multiplicador} es Igual a: ${Resultado}`
    );
  }
};

IteararYMultiplicar(ArrayNumeros);

console.log(`************ Fin ************`);

//--------- Fin E1 - JS ---------
