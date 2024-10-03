// backend/routes/employeRoute.js
const express = require('express');

const router = express.Router();
const { addEmploye, getEmploye,deleteEmploye,individualEmploye,updateEmploye } = require('../controllers/employeControll');



// Add employes 
router.post('/addemployes', addEmploye);

// Get employe details
router.get('/employedetails', getEmploye);

//delete employe
router.delete('/deleteemploye/:id',deleteEmploye);

// Get  individual employe details
router.get('/employe/:id',individualEmploye);

//update employe
router.put('/employe/:id',updateEmploye);

module.exports = router;
