function Tarea(texto, fechaFinalizacion = new Date()) {
  if (!this instanceof Tarea) {
    return new Tarea(texto, (fechaFinalizacion = new Date()));
  }
  const id = ++Tarea.prototype.id;
  const baseData = {
    id,
    finalizada: false,
  };

  return {
    ...baseData,
    texto,
    fechaFinalizacion,
  };
}

Tarea.prototype.id = 1;
Tarea.prototype.equals = function (tareas) {
  if (!tareas instanceof Tarea) throw new Error("Parameter not tarea instance");
  return this?.id === tareas?.id;
};

Object.defineProperties(Tarea.prototype, {
  texto: {
    value: "Texto por defecto",
  },
  fecha: {
    value: new Date(),
  },
  finalizada: {
    value: false,
  },
});

Tarea.prototype.toString = function () {
  return this.texto;
};

const t = Tarea("Hola");
const t2 = Tarea("Hxascasdveargberola");
// console.log(t);
//console.log(t.equals({ id: 1 }));
//console.log(t.equals(new Tarea("hhhh")));
// console.log(t.toString());
console.log(t.equals(t2));
