// esta es la forma basica de mostrar en consola pero en el proyecto queda anticuado
require("colors");
const mostrarMenu = () => {
  return new Promise((resolve) => {
    console.log("===========================".green);
    console.log("  Selecciones una opcion".green);
    console.log("===========================".green);

    console.log(`${"1".green}. Crear tareas`);
    console.log(`${"2".green}. Listar tareas`);
    console.log(`${"3".green}. Listar tareas completadas`);
    console.log(`${"4".green}. Listar tareas pendientes`);
    console.log(`${"5".green}. Completar tareas(s)`);
    console.log(`${"6".green}. Borrar tarea`);
    console.log(`${"0".green}. Salir\n`);

    const readline = require("readline").createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    readline.question("Seleccione una opcion: ", (opt) => {
      readline.close();
      resolve(opt);
    });
  });
};

const pausa = () => {
  return new Promise((resolve) => {
    const readline = require("readline").createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    readline.question(`\nPresione ${"ENTER".green} para continuar\n`, () => {
      readline.close();
      resolve();
    });
  });
};
module.exports = {
  mostrarMenu,
  pausa,
};
