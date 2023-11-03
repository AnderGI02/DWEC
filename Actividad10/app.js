/*
Se definirán en el prototipo de la clase los siguientes elementos:

    método equals(tarea) que retorne true si tiene el mismo id que la actual
*/
class Tarea {
  static id = 0;
  constructor(_tarea, _fechaFinalizacion) {
    (this.tarea = (typeof _tarea === "string" && _tarea) || "Tarea"),
      (this.fecha =
        (typeof _fechaFinalizacion === "object" && _fechaFinalizacion) ||
        new Date()),
      (this.id = ++Tarea.id),
      (this.finalizada = false);
  }
}

class Clase {
  static id = 0;
  constructor() {
    this.id = ++Clase.id;
  }

  set texto(_texto = "Clase") {
    if (typeof _texto === "string") this.texto = _texto;
  }

  set fecha(_fecha = new Date()) {
    if (typeof _fecha === "object") this.fecha = _fecha;
  }

  set finalizada(_finalizada = false) {
    if (typeof _finalizada === "boolean") this.finalizada = _finalizada;
  }

  toString() {
    return `${this.texto}`;
  }

  equals(clase) {
    return this.id === clase.id;
  }
}

/*
En el prototipo de dicho constructor se definirán los siguientes métodos:

Además deberá definirse un iterador que nos permita recorrer la lista de tareas 
con una repetitiva for(let tarea of tareas) 
(donde tareas es un objeto de tipo Tareas)

*/

class Tareas {
  constructor() {
    this.tareas = [];
  }

  nuevaTarea(tarea) {
    this.tareas.push(tarea);
  }

  getTarea(id) {
    return this.tareas.find((t) => t.id === id);
  }

  finalizarTarea(id) {
    this.getTarea(id).finalizada = true;
  }

  getTareasHoy() {
    return this.tareas.filter(
      (t) =>
        t.finalizada === false &&
        t.fecha.toDateString() === new Date().toDateString()
    );
  }

  ordenarTareas() {
    const result = this.tareas.sort((t1, t2) => {
      if (t1.finalizada && !t2.finalizada) {
        return 1;
      } else if (!t1.finalizada && t2.finalizada) {
        return -1;
      } else {
        return t1.fecha.getTime() - t2.fecha.getTime();
      }
    });
    this.tareas = result;
  }
}

class Cita extends Tarea {
  /*
Una cita tendrá, además de los campos de la Tarea, una 
propiedad persona que identifique a la persona de la cita.
Se deberán definir métodos set/get para dicho campo, así como redefinir 
el método toString para que muestre, el texto y la hora de la cita.        
    */
}

const addData = () => {
  const tarea1 = new Tarea("Hacer la compra", new Date("2023-11-10"));
  const tarea2 = new Tarea("Estudiar para el examen", new Date("2023-11-15"));
  tarea2.finalizada = true;
  const tarea3 = new Tarea("Limpiar la casa", new Date());
  const tarea4 = new Tarea("Hacer ejercicio", new Date("2023-11-25"));
  const tarea5 = new Tarea("Leer un libro", new Date("2023-11-30"));
  tarea5.finalizada = true;
  const tareas = new Tareas();
  tareas.nuevaTarea(tarea1);
  tareas.nuevaTarea(tarea2);
  tareas.nuevaTarea(tarea3);
  tareas.nuevaTarea(tarea4);
  tareas.nuevaTarea(tarea5);
};
