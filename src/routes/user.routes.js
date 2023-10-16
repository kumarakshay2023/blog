const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');
const auth = require('../middleware/auth');


router.post('/register',userController.registerUser);
router.post('/login',userController.loginUser);



module.exports =router;