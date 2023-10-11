function Baraja() {
  this.baraja = [];
  this.inicializar = function () {
    for (let i = 0; i <= 39; i++) {
      this.baraja.push(new Carta(i));
    }
  };
  this.merge = function (baraja) {
    if (baraja.length === 1) return baraja;
    const middleIndex = Math.floor(baraja.length / 2);
    const leftArray = baraja.slice(0, middleIndex);
    const rightArray = baraja.slice(middleIndex + 1);
    return this.sort(this.merge(leftArray), this.merge(rightArray));
  };
  this.sort = function (leftArray, rightArray) {
    const shortedArray = [];
    while (leftArray.length && leftArray.length) {
      if (leftArray[0] > rightArray[0]) {
        shortedArray.push(rightArray.shift());
      } else {
        shortedArray.push(leftArray.shift());
      }
    }
    return [...shortedArray, ...leftArray, ...rightArray];
  };
  this.ordenar = function () {
    this.merge(this.baraja);
  };
  this.mezclar = function () {
    this.baraja.sort((a, b) => {
      //positivo b antes que a
      //negativo a antes que b
      const randomNum = Math.random();
      if (randomNum <= 0.5) {
        return a - b;
      } else {
        return b - a;
      }
    });
  };
  this.mano = function (num) {
    return this.baraja.splice(0, num);
  };
}

function Carta(posicion) {
  const nombresCartas = [
    "As",
    "Dos",
    "Tres",
    "Cuatro",
    "Cinco",
    "Seis",
    "Siete",
    "Sota",
    "Caballo",
    "Rey",
  ];
  const paloCartas = ["Oros", "Copas", "Espadas", "Bastos"];

  if (!(this instanceof Carta)) {
    return new Carta(posicion);
  }

  const getInfoFromPosition = (posicion) => {
    if (posicion <= 9) {
      return {
        paloIndex: 0,
        nombreIndex: posicion,
      };
    } else if (posicion <= 19) {
      return {
        paloIndex: 1,
        nombreIndex: posicion - 10,
      };
    } else if (posicion <= 29) {
      return {
        paloIndex: 2,
        nombreIndex: posicion - 20,
      };
    } else if (posicion <= 39) {
      return {
        paloIndex: 3,
        nombreIndex: posicion - 30,
      };
    }
  };
  const infoFromPos = getInfoFromPosition(posicion);
  const calcularValor = ({ nombreIndex }) =>
    nombreIndex === 0 ? 11 : nombreIndex + 1;
  const calcularNombre = ({ nombreIndex }) => nombresCartas[nombreIndex];
  const calcularPalo = ({ paloIndex }) => paloCartas[paloIndex];
  this.valor = calcularValor(infoFromPos);
  this.valorDeTexto = `${calcularNombre(infoFromPos)} de ${calcularPalo(
    infoFromPos
  )}`;
  this.palo = calcularPalo(infoFromPos);
  this.nombre = calcularNombre(posicion);
  this.toString = function () {
    return this.valorDeTexto;
  };
  this.valueOf = function () {
    return this.valor;
  };
}
