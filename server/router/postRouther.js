
const router = require("express").Router()
const postController =require('../controller/postController')
const middleware = require('../middleware/require')

router.get("/All",middleware,postController.getPostController);


module.exports = router;