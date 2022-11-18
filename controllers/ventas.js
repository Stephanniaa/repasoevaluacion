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


module.exports = {
    getVentas, postVentas
}