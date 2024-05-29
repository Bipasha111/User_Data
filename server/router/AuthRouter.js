const router = require("express").Router()
const {login,singup, refrshTokenController} =require('../controller/AuthController')
// const {loginn} = require("../controller/NewAuthController")
const r = require("../middleware/require")


router.post("/login",login);
router.post("/signup",singup)
router.get("/refresh",refrshTokenController)

// router.post("/loginn",loginn)


module.exports = router;