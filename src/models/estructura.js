//para definir un esquema, para poder validar los datos despues

//importamos, e utilizamos su Schema para definar como luciran o seran los datos
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const esquema = new Schema({
	nombres: String,
	apellidos: String,
	edad:Number
});
module.exports = mongoose.model('tablas', esquema);
//lo pasamos con el metodo "model" para usarlo en otros archivos
//'tasks' -> "tareas" para cada conjunto se almacenara ahi
//para poder reutilizar el esquema "schema", buscar eliminar actulizar insertar..
