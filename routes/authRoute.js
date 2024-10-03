const express = require('express');
const router = express.Router();
const {signup,login}= require('../controllers/authControll')

//signup user
router.post('/signup',signup);

//login user
router.post('/login',login);


module.exports = router;