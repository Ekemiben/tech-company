const { response } = require('express');
const express = require ('express');
const router = express.Router();
const registrationController = require("../controllers/registerController")


router.get("/getall", registrationController.getAllUsers)

router.post('/registration', registrationController.creatNewUser)
    

router.route('/userbyid/:id')
    .get(registrationController.getUserById)

router.route('/updatebyid/:id')
    .patch( registrationController.updateUser)

router.route('/deletebyid/:id')
    .delete( registrationController.deleteUser)




module.exports = router;