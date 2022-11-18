const {Router} = require("express")
const router = Router()

const {getVentas, postVentas} = require("../controllers/ventas") //llamando lo que se esta exportando
router.get("/",getVentas)
router.post("/",postVentas)