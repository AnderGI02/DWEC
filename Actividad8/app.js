const users = new Set();
const votos = new Map();
const submitBtn = document.querySelector('button[type="submit"]');
const tablaUsuariosBody = document.querySelector("table#tablaUsuarios > tbody");
const tablaVotosBody = document.querySelector("table#tablaVotos > tbody");

submitBtn.addEventListener("click", handleFormSubmit);

function handleFormSubmit(event) {
  event.preventDefault();
  const userOptionForm = document.querySelector("form");
  getUserOption(userOptionForm, ({ usuario, voto }) =>
    addVote({ usuario, voto })
  );
}

function renderTablaUsuarios() {
  tablaUsuariosBody.replaceChildren();
  const createUserRow = (user) => `<tr>
    <th scope="col">${user}</th>
  </tr>`;

  for (const user of users) {
    tablaUsuariosBody.innerHTML += createUserRow(user);
  }
}

function renderTablaVotos() {}

function addVote({ usuario, voto }) {
  //Mirar si el usuario no esta en el set
  //Seria la primera vez
  //Se añade al set y al map el clave de usuario: voto
  if (!users.has(usuario)) {
    users.add(usuario);
    votos.set(usuario, voto);
  }

  if (users.has(usuario)) {
    let votosUsu = votos.get(usuario);
    votos.set(usuario, ++votosUsu);
  }

  renderTablaUsuarios();
  renderTablaVotos();
}

function getUserOption(form, cb) {
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
