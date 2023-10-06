//Pedir una cadena al usuario y realizar sobre ella las siguientes operaciones (hacer una función para cada
//opción excepto para la última):

//Mostrar la cadena invertida
const reverseString = (string) => string.split("").reverse().join("");
//Indicar si la cadena es un palíndromo (que se escribe igual de izquierda a derecha que de derecha a izquierda).
//NOTA: Los espacios no cuentan (eliminarlos primero)
const isPalindrome = (string) => string.trim() === reverseString(string.trim());

//Extraer la primera y la última palabra de la cadena (se supone que están separadas por un único espacio).
//Si la cadena es una palabra, se retornará la misma
const isAUniqueWord = (string) => string.split(" ").length === 1;
const extractFirstOrLastWord = (string) => {
  if (isAUniqueWord(string)) return string;
  const arrayOfWords = string.split(" ");
  return {
    firstWord: arrayOfWords.shift(),
    lastWord: arrayOfWords.pop(),
  };
};

//Poner la cadena en modo versales, es decir, la primera letra de cada palabra en mayúsculas.
const versalesMode = (phrase) => {
  const versalesModePhrase = phrase
    .split(" ")
    .map((word) => word.at(0).toUpperCase() + word.substring(1))
    .join(" ");

  return versalesModePhrase;
};

//Quitar los acentos sustituyendo las vocales acentuadas por las mismas
//sin acentuar.
const takeOutWordAccent = (phrase) => {
  const fromAccentToNoAccent = {
    á: "a",
    é: "e",
    í: "i",
    ó: "o",
    ú: "u",
  };

  const arrayOfWords = phrase.split(" ");
  const wordsNoAccent = arrayOfWords.map((word) => {
    return word
      .split("")
      .map((char) => {
        if (char.toLowerCase() in fromAccentToNoAccent) {
          return fromAccentToNoAccent[char];
        }
        return char;
      })
      .join("");
  });

  return wordsNoAccent.join(" ");
};

//Mostrar la cadena sucesivamente quitándole cada vez la primera palabra

const showWord = (word) => console.log(word);
const showPhrase = (phrase) => {
  const wordsArray = phrase.split(" ");
  while (wordsArray.length !== 0) {
    showWord(wordsArray.shift());
  }
};

showPhrase("hola que tal estan ustedes");
