const express = require('express');
const routes = require('./routes');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

// Conección con la base de datos
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/restapis', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});



//creando el servidor
const app = express();

//configurar el body-parser
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//Rutas de la app
app.use('/', routes());


//Puerto
app.listen(3000);

