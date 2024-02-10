const express = require('express');
const routes = require('./routes');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors')

// Conección con la base de datos
mongoose.Promise = global.Promise;
mongoose.connect('mongodb+srv://CrudDatabaseUser:ed_F7-wdeiUaLMD@cluster0.vhua1he.mongodb.net/restapis?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

//creando el servidor
const app = express();

//configurar el body-parser
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors())

//Rutas de la app
app.use('/', routes());


//Puerto
app.listen(3000, () => console.log("Listening over port 3000"));

