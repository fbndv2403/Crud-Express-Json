const fs = require("fs");
const archivo = "./src/db/data.json";
const guardarDB = async (data) => {
  try {
    fs.writeFileSync(archivo, JSON.stringify(data));
  } catch (err) {
    throw err;
  }
};
const leerDB = () => {
  if (!fs.existsSync(archivo)) {
    return null;
  }

  const info = fs.readFileSync(archivo, {encoding: 'utf-8'})
  const data = JSON.parse(info);
  return data
}
module.exports = {
  guardarDB,
  leerDB
};
