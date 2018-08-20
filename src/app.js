const path = require('path');
const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const app = express();
mongoose.connect('mongodb://localhost:27017/Alumno', { useNewUrlParser: true })
	.then(db => console.log('Db conectada'))
	.catch(err => console.log(err));

const indexRoutes = require('./routes/index');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));

app.use('/', indexRoutes);


app.listen('3000', () => {
	console.log(`aplicacion iniciada en le puerto 3000`);
});
