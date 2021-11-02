const fs = require("fs");
const guardarDB = async (data) => {
  try {
    const archivo = "./src/db/data.json";
    fs.writeFileSync(archivo, JSON.stringify(data));
  } catch (err) {
    throw err;
  }
};
module.exports = {
  guardarDB,
};
