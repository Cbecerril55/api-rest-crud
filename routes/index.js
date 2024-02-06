const express = require('express');
const router = express.Router();
const clienteController = require('../controllers/clienteController');

module.exports = function(){

    //Agregar nuevos clientes via POST
    router.post('/clientes', clienteController.nuevoCliente );

    //Obtener todos los clientes
    router.get('/clientes', clienteController.mostrarClientes);

    //Mostrar un cliente en especifico (ID)
    router.get('/clientes/:idCliente', clienteController.mostrarCliente );

    router.put('/clientes/:idCliente', clienteController.actualizarCliente);

    return router;
}
