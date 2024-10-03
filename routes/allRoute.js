const express = require('express');
const router = express.Router();

router.use('/',require('../routes/employeRoute'));
router.use('/',require('../routes/authRoute'));

module.exports=router;