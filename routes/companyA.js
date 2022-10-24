const { response } = require('express');
const express = require ('express');
const router = express.Router();
const registrationController = require("../controllers/registerController")


router.route('/')
    .get( registrationController.getAllUsers)

router.route('/registration')
    .post(registrationController.creatNewUser )

router.route('/userbyid/:id')
    .get(registrationController.getUserById)

router.route('/updatebyid/:id')
    .patch( registrationController.updateUser)

router.route('/deletebyid/:id')
    .delete( registrationController.deleteUser)

module.exports = router;