// Paquete para el manejo de la consola interactivo
const inquirer = require("inquirer");

require("colors");

// Generamos el listado de valores que va a tener el menu
const inquirerMenu = async () => {
  const menuOpts = [
    {
      type: "list",
      name: "opcion",
      message: "Que desea hacer?",
      choices: [
        {
          value: "1",
          name: `${"1.".green} Crear tarea`,
        },
        {
          value: "2",
          name: `${"2.".green} Listar tarea`,
        },
        {
          value: "3",
          name: `${"3.".green} Listar tareas completas`,
        },
        {
          value: "4",
          name: `${"4.".green} Listar tareas pendientes`,
        },
        {
          value: "5",
          name: `${"5.".green} Completar tarea(s)`,
        },
        {
          value: "6",
          name: `${"6.".green} Borrar tarea`,
        },
        {
          value: "0",
          name: `${"0.".green} Salir\n`,
        },
      ],
    },
  ];
  console.clear();
  console.log("===========================".green);
  console.log("  Selecciones una opcion".white);
  console.log("===========================".green);

  // Cuando veamos esta desestructaracion es porque estamos tomando el arreglo de las opciones a mostrar y escogemos solamente el NAME que es el abarca todas las posibilidades
  const {opcion} = await inquirer.prompt(menuOpts);
  return opcion;
};

// Cuando escogemos una opcion este es elmensaje que se muestra que es para seguir
const pausarMenu = async () => {
  const pausarMessage = [
    {
      type: "input",
      name: "pausa",
      message: `Presiones ${"Enter".green} para continuar`,
    },
  ];
  console.log("\n");
  const {pausa} = await inquirer.prompt(pausarMessage);
  return pausa;
};
// Leer un input que ingresa el usuario
const leerInput = async (message) => {
  const question = [
    {
      type: "input",
      name: "desc",
      message,
      validate(value) {
        if (value.length === 0) {
          return "Por favor ingrese un valor";
        }
        return true;
      },
    },
  ];
  const {desc} = await inquirer.prompt(question);
  return desc;
};

listadoTareasBorrar = async (tareas = []) => {
  const choices = tareas.map((tarea, i) => {
    const idx = `${i + 1}.`.green;
    return {
      value: tarea.id,
      name: `${idx} ${tarea.descripcion}`,
    };
  });

  choices.unshift({
    value: "0",
    name: "0.".green + " Cancelar",
  });

  const preguntas = [
    {
      type: "list",
      name: "id",
      message: "Borrar",
      choices,
    },
  ];
  const {id} = await inquirer.prompt(preguntas);
  return id;
};

const confirmar = async (message) => {
  const question = [
    {
      type: "confirm",
      name: "ok",
      message,
    },
  ];

  const {ok} = await inquirer.prompt(question);
  return ok;
};
module.exports = {
  inquirerMenu,
  pausarMenu,
  leerInput,
  listadoTareasBorrar,
  confirmar,
};
