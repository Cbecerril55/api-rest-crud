const Clientes = require('../models/clientes');

//Agrega un nuevo cliente
exports.nuevoCliente = async (req, res, next) => {
    const cliente = new Clientes(req.body);

    try {
        await cliente.save();
        res.json({ mensaje: 'Se agrego un nuevo cliente' });
    } catch (error) {
        console.log(error);
        next();
    }

}

//Muestra todos los clientes
exports.mostrarClientes = async (req, res, next) => {
    try {
        const clientes = await Clientes.find({});
        res.json(clientes);
    } catch (error) {
        console.log(error);
        next();
    }
}

//Mostrar un cliente por su ID
exports.mostrarCliente = async (req, res, next) => {
    const cliente = await Clientes.findById(req.params.idCliente);
    
    if(!cliente){
        res.json({mensaje: 'Ese cliente no existe'});
        next()
    }

    res.json(cliente);
}

//Actualizar por ID
exports.actualizarCliente = async (req, res, next) => {
    try {
        const cliente = await Clientes.findOneAndUpdate({ _id : req.params.idCliente }, req.body, {
            new : true
        })
        res.json(cliente);
    } catch (error) {
        console.log(error);
        next();
    }
}

//Eliminar un cliente por su ID
exports.eliminarCliente = async (req, res, next) => {
    const cliente = await Clientes.findByIdAndDelete(req.params.idCliente);

    if(!cliente){
        res.json({mensaje: 'Ese cliente no existe'});
        next()
    }

    res.json(cliente);
}