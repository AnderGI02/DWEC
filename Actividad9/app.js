const login = {
  login({ nombre, password }) {
    if (this.password === password && this.nombre === nombre)
      return { nombre, password };
    return null;
  },
};

Object.defineProperties(login, {
  nombre: {
    value: "ana",
    enumerable: false,
  },
  password: {
    value: "password",
    enumerable: false,
  },
});

// console.log(login.login({nombre: 'ana', password: 'password'}))

const ana = {
  nombre: "ana",
  password: "password",
  __proto__: login,
};

const juan = {
  nombre: "juan",
  password: "password",
  __proto__: login,
};

console.log(ana.__proto__.login(ana));
console.log(juan.__proto__.login(juan));

ana.__proto__.saludo = function () {
  return `Hola ${this.nombre}`;
};

console.log(ana.saludo());
console.log(juan.saludo());
// Al guardarse en el __proto__ tanto ana como juan tienen acceso

login.__proto__.adios = function () {
  return `Adios ${this.nombre}`;
};

console.log(ana.adios());
console.log(juan.adios());
console.log(login.adios());

/*
¿Qué pasa si ejecuto

let u={ nombre: Iñigo ""}};

u . adios()? ¿por qué?
porque el metodo adios esta guardado en login.__proto__ 
que es === Object.prototype
*/

let u = { nombre: "Iñigo" };

console.log(u.adios());

// 2
/*
2. Conseguir que funcione lo siguiente:


[1,5,2,4,3].maximo()
> 5
[12,3,4,5,6].minimo()
> 3

Evidentemente debe funcionar con cualquier matriz de números
*/

Array.prototype.maximo = function () {
  return this.sort((e1, e2) => e1 - e2).pop();
};
