const {Router} = require("express")
const router = Router()

const {getVentas, postVentas, deleteVentas, putVentas, patchVentas} = require("../controllers/ventas") //llamando lo que se esta exportando
router.get("/",getVentas)
router.post("/",postVentas)
router.delete("/",deleteVentas)
router.put("/",putVentas)
router.patch("/",patchVentas)

module.exports = router