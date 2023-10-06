//3 Diseñar una función llamada euromillón que retorne una combinación para jugar al euromillón.
//La función deberá retornar una cadena con el siguiente formato: " n1 n2 n3 n4 n5 : e1 e2 "
//(por ejemplo, " 12 23 34 35 47 : 1 3 ") donde los cinco primeros valores deben ser valores aleatorios entre 1 y 50
//y los dos últimos (estrellas) deben ser valores entre 1 y 12 (ambos incluidos en ambos casos).

//En las dos partes (números y estrellas) no podrá haber valores repetidos.

//Para obtener los valores aleatorios se deberá definir una función que retorne un valor aleatorio entre dos parámetros
//que se le pasen (evidentemente ambos incluidos).

//NOTA: Se debe hacer exclusivamente con las clases String y Math (no se pueden emplear ni matrices ni colecciones).

const calcRandomNum = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);

const euromillon = () => {
  let euromillonCombi = "";
  let euromillonCombiOrdenada = "";
  let cantidadValor = 0;
  let currentNum;
  let cantidadEstrella = 0;
  while (cantidadValor !== 5) {
    currentNum = calcRandomNum(1, 50);
    if (euromillonCombi.indexOf(`${currentNum}`) === -1) {
      euromillonCombi += ` ${currentNum}`;
      cantidadValor++;
    }
  }

  euromillonCombiOrdenada = insertar(euromillonCombi) + " :";
  euromillonCombi = "";

  while (cantidadEstrella !== 2) {
    currentNum = calcRandomNum(1, 12);
    if (euromillonCombi.indexOf(`${currentNum}`) === -1) {
      euromillonCombi += ` ${currentNum}`;
      cantidadEstrella++;
    }
  }

  euromillonCombiOrdenada += insertar(euromillonCombi) + " ";

  return euromillonCombiOrdenada;
};

//Diseñar una página con un botón que, al pulsarlo, muestre la combinación en un div
//const calcularBtn = document.querySelector("button");
//const resultadoSpan = document.querySelector("span.euro");
//const appendResult = () => (resultadoSpan.textContent = euromillon());
//calcularBtn.addEventListener("click", appendResult);

//RETO: Conseguir que la combinación aparezca ordenada (números por un lado y
//estrellas por otro).
//Diseñar una función a la que se le pase una cadena con los números hasta ahora
//obtenidos (se supone que ya ordenados)
//y retorne la misma cadena con el nuevo valor insertado en su posición:

//insertar(" 8 12 34 ", 20) à " 8 12 20 34 "

//insertar(" 8 12 34 ", 40) à " 8 12 34 40 "

//insertar(" 8 12 34 ", 3) à " 3 8 12 34 40 "

function insertar(cadena, num = "") {
  const matriz = [...cadena.split(" "), num]
    .filter((el) => el !== "")
    .map((el) => +el);

  return sort(matriz).join(" ");
}

function merge(leftArray, rightArray) {
  const result = [];
  while (leftArray.length && rightArray.length) {
    if (leftArray[0] >= rightArray[0]) {
      result.push(rightArray.shift());
    } else {
      result.push(leftArray.shift());
    }
  }

  return [...result, ...leftArray, ...rightArray];
}

function sort(array) {
  if (array.length === 1) return array;
  const middleINDEX = Math.floor(array.length / 2);
  const leftArray = array.slice(0, middleINDEX);
  const rightArray = array.slice(middleINDEX);
  return merge(sort(leftArray), sort(rightArray));
}

//Aplicarla por un lado a la parte de los números y por otro a la parte de las estrellas y comprobar su correcto
//funcionamiento.

console.log(euromillon());
