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

/**
 * Definir otro constructor llamado Baraja que defina una matriz para almacenar las 
 * 40 cartas de la baraja.
Tendrá los siguientes métodos:

inicializar : Creará una nueva baraja con las 40 cartas (se llamará en el propio constructor para que
al crear un objeto Baraja tengamos ya la baraja inicializada)

ordenar : Ordenará la baraja en base a su posición (primero oros, luego copas, ...)

mezclar : Mezclará las cartas de la baraja. Para ello emplearemos el método sort pero con un 
valor aleatorio que más o menos en la mitad de las comparaciones retorne un 1 y la otra mitad un -1

mano(num) : Extraerá el número de cartas indicadas del principio de la baraja

Si se usa la baraja como un string deberá retornar sus elementos unidos por un carácter de salto
de línea (\n)

 */

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
const renderCardElement = (row, col) =>
  `<div style="background: url('cartas.png') -${80 * col}px -${
    123 * row
  }px; width: 80px; height: 123px;"></div>`;
function renderBaraja(array) {
  const baraja = document.querySelector("div#baraja");
  baraja.style.cssText = `
  display:grid;
  grid-template-rows:repeat(4,1fr);
  row-gap:0.75rem;
  `;
  let index = 0;
  let row = 0;
  baraja.replaceChildren();
  let rowEl;
  while (row * 10 < array.length) {
    rowEl = document.createElement("div");
    rowEl.style.cssText = `
    display:grid;
    grid-template-columns:repeat(10,1fr);
    column-gap:0.25rem;
    `;
    let col = 0;
    while (row * 10 < array.length && col < 10) {
      const card = array[index];
      //["Oros", "Copas", "Espadas", "Bastos"]
      const paloANum = {
        Oros: 0,
        Copas: 1,
        Espadas: 2,
        Bastos: 3,
      };
      const cardEl = renderCardElement(paloANum[card.palo], card.valor);
      rowEl.innerHTML += cardEl;
      col++;
      index++;
    }
    baraja.append(rowEl);
    row++;
  }
}

const a = new Baraja();
a.inicializar();

renderBaraja(a.baraja);

const buttons = document.querySelector("div#actionContainer");

const mezclarBaraja = () => {
  a.mezclar();
  renderBaraja(a.baraja);
};

const barajasDOM = [...document.querySelectorAll("div.mano")];
const barajasManos = [];
const barajasResultado = [];
const cogerMano = () => {
  if (barajasDOM.length) {
    const manoDiv = barajasDOM.shift();
    const mano = a.mano(5);
    barajasManos.push(...mano);
    const total = mano.reduce((acc, current) => acc + current, 0);
    barajasResultado.push(total);
    manoDiv.textContent = `Mano 1. Total : ${total}`;
    renderBaraja(a.baraja);
  } else {
    const resultado = document.querySelector("div.resultadoMano");
    resultado.textContent =
      barajasResultado[0] > barajasResultado[1]
        ? "Mano 1 es mas grande"
        : "Mano 2 es mas grande";
    const resultadoManoOros = document.querySelector("div.resultadoManoOros");
    resultadoManoOros.textContent =
      "Oros en la baraja : " +
      barajasManos.filter((carta) => carta.palo === "Oros").join(" ");
  }
};

buttons.addEventListener("click", handleAction);

function handleAction(event) {
  const target = event.target.dataset.action;
  const actionFunctionMap = {
    mezclar: mezclarBaraja,
    mano: cogerMano,
  };

  actionFunctionMap[target]();
}
