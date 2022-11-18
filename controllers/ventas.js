const {response} = require ("express")

const modelventas = require ("../models/ventas") //llamando a la estructura de mongoose

//GET
const getVentas = async(req, res = response) =>{
    const consultaVentas = await modelventas.find()
    res.json({
        msg: "GET API VENTAS",
        consultaVentas
    })
} 

//POST
const postVentas = async(req, res) =>{
    const {nombreCliente, nombreProducto, total} = req.body
    const agregarVentas = new modelventas({nombreCliente, nombreProducto, total})
    await agregarVentas.save()
    res.json({
        msg: "POST API VENTAS",
        agregarVentas
    })
}

//DELETE
const deleteVentas = async(req, res) =>{
    const {nombreCliente} = req.query
    const eliminarVentas = await modelventas.findOneAndDelete({nombreCliente:nombreCliente})
    res.json({
        msg: "DELETE API VENTAS",
        eliminarVentas
    })
}

//PUT
const putVentas = async(req, res) =>{
    const {nombreCliente, nombreProducto, total, nombreNuevo} = req.body
    const modificarVentas = await modelventas.findOneAndUpdate({nombreCliente:nombreCliente},{nombreCliente:nombreNuevo,nombreProducto:nombreProducto, total:total})
    res.json({
        msg: "PUT API VENTAS",
        modificarVentas
    })  
}

//PATCH modifica cosas chiquitas
const patchVentas = async(req,res) =>{
    const {nombreCliente, nombreProducto} = req.body
    const patch = await modelventas.findOneAndUpdate({nombreCliente:nombreCliente},{nombreProducto:nombreProducto})
    res.json({
        msg: "PATCH API VENTAS",
        patch
    })
}


module.exports = {
    getVentas, postVentas, deleteVentas, putVentas, patchVentas
}