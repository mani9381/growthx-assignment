const router = require('express').Router();
const userController = require('../controller/userController')
const middleware = require("../middleware/middle")

router.post('/register',userController.saveUser)
router.get("/admins",middleware.authraiseUser,userController.getAllAdmins)



module.exports = router