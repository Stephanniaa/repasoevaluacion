const {Schema,model} = require("mongoose")

const ventas = Schema({
    nombreCliente : {
        type:String
    },
    nombreProducto : {
        type:String
    },
    total : {
        type : Number
    }
})
module.exports = model("ventas",ventas)