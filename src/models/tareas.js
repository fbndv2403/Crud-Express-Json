const Tarea = require("./tarea");
// Creamos un listado para las tareas
class Tareas {
  _listado = {};
  get listadoArr() {
    const listado = [];
    Object.keys(this._listado).forEach((key) => {
      const tarea = this._listado[key];
      listado.push(tarea);
    });
    return listado;
  }
  constructor() {
    this._listado = {};
  }
  // Creamos una funccion que crea la tarea, recibe por parametro la descripcion de la tarea
  crearTarea(desc = "") {
    // Incluimos en la tarea la descripcion y por el paquete le genera un ID unico
    const tarea = new Tarea(desc);
    this._listado[tarea.id] = tarea;
  }
}

module.exports = Tareas;
