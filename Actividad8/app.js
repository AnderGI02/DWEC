const users = new Set();
const votos = new Map();
const submitBtn = document.querySelector('button[type="submit"]');
const tablaUsuariosBody = document.querySelector("table#tablaUsuarios > tbody");
const tablaVotosBody = document.querySelector("table#tablaVotos > tbody");

//OPCIONES AL PRINCIPIO
const opciones = [];
const addOpcionesFromNum = (limitNum = 5) => {
  for (let i = 1; i <= limitNum; i++) {
    opciones.push(`<option value="${i}">Opcion ${i}</option>`);
  }
};
const renderOpcionesInSelect = (selectEl) =>
  opciones.forEach((opt) => (selectEl.innerHTML += opt));

const renderDataInTable = (tableEl, cb) => {
  tableEl.replaceChildren();
  cb();
};

const renderOpciones = () => {
  addOpcionesFromNum();
  renderOpcionesInSelect(document.querySelector("select#voto"));
};

renderOpciones();

//OPCIONES

submitBtn.addEventListener("click", handleFormSubmit);

function getUserOption(form, cb) {
  //COGE LOS ELEMENTOS NECESARIOS DEL FORMULARIO
  //LY LOS UTILIZA PARA GENERAR UN OBJETO QUE SE LE PASA A LA IMPLEMENTACION DE CALLBACK
  const neededFormElements = [...form.elements].filter((el) =>
    el.getAttribute("id")
  );
  const data = {};
  for (const el of neededFormElements) {
    const key = el.id;
    const value = el.value;
    data[key] = value;
  }
  cb(data);
}

function handleFormSubmit(event) {
  event.preventDefault();
  const userOptionForm = document.querySelector("form");
  //nombre de usuario y la opcion a la que va a votar
  getUserOption(userOptionForm, ({ usuario, voto }) =>
    addUserToSetAndVoteToMap({ usuario, voto })
  );
}

function addUserToSetAndVoteToMap({ usuario, voto }) {
  //El usuario solopuede votar una vez por lo que no tiene que estra en el set antes de añadirlo
  if (!users.has(usuario)) {
    users.add(usuario);
    //Mira si la opcion esta en el map
    if (!votos.has(voto)) {
      votos.set(voto, 1);
    } else {
      let votosOpc = votos.get(voto);
      votosOpc += 1;
      votos.set(voto, votosOpc);
    }
    renderDataInTable(tablaUsuariosBody, () => {
      for (const [key, value] of new Set([...users].sort()).entries()) {
        tablaUsuariosBody.innerHTML += `<tr>
        <th scope="col">${value}</th>
      </tr>`;
      }
    });
    renderDataInTable(tablaVotosBody, () => {
      for (const [key, value] of new Map(
        Array.from(votos).sort((a, b) => b[1] - a[1])
      )) {
        tablaVotosBody.innerHTML += `<tr>
        <th scope="col">Opción ${key}</th>
        <th scope="col" >${value}</th>
      </tr>`;
      }
    });
  }
}
