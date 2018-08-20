const express = require('express');
const router = express.Router();

const modelo = require('../models/estructura');

router.get('/', async (req, res) => {
	const mod = await modelo.find();
	res.render('index', {mod});

});

router.post('/add', async (req, res) => {
	const task = new modelo(req.body);
	await task.save();
	res.redirect('/');
});

router.get('/editar/:id', async(req, res) => {
	const id = req.params.id; //
	const model = await  modelo.findById(id);
	console.log(model);
	res.render('editar',{
		mod:model
	});

});

router.post('/editar/:id', async (req, res) => {
	const  id  	= req.params.id;
	await modelo.update({_id: id}, req.body); //recibe y actualiza los datos.
	res.redirect('/');
});
//
router.get('/delete/:nombres', async (req, res) =>{
	const  nombre  = req.params.nombres; //crea una const q coge el ide q viene del id para eliminarlo
	await modelo.remove({nombres: nombre});
	res.redirect('/'); //para redireccionar a la pagina pricipal.

});

//cuando pidan al server, para que responda
module.exports = router;
//await -> tengo un dato y lo voy a almacenar ..
