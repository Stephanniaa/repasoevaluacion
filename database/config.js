const mongoose = require("mongoose")
const dbconnection = async () => {
    try {
        mongoose.connect(process.env.MONGODB_CNN)
        console.log("CONECTADO")
    } catch (error) {
        console.log("ERROR CONECTANDO A LA BASE DE DATOS")
    }
} 
module.exports = dbconnection