// Paquete que genera ID unicos
const {v4: uudiv4} = require("uuid");
// Creamos la forma de la tarea con la descripcion, un id y la fecha de completado
class Tarea {
  id = "";
  descripcion = "";
  completadoEn = null;

  constructor(descripcion) {
    this.id = uudiv4();
    this.descripcion = descripcion;
    this.completadoEn = null;
  }
}

module.exports = Tarea;
