const { Employe } = require('../module/employeModule');
const mongoose = require('mongoose');

// Get all employees
exports.getEmploye = async (req, res) => {
    try {
        const employees = await Employe.find(); // Ensure Employe is imported correctly
        res.status(200).json(employees);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Add a new employee
exports.addEmploye = async (req, res) => {
    const { name, email, mobile, designation, gender, course, image } = req.body;
    console.log(req.body);

    const employe = new Employe({
        name,
        email,
        mobile,
        designation,
        gender,
        course,
        image,
    });

    try {
        const savedEmploye = await employe.save();
        res.status(201).json(savedEmploye);
    } catch (error) {
        console.error('Error saving employee:', error);
        res.status(400).json({ message: error.message });
    }
};

//delete employe
exports.deleteEmploye= async (req,res)=>{
    const id =req.params.id;
    try{
        await Employe.findByIdAndDelete(id);
        res.status(204).json({message :'employe deleted successfully'});
    }
    catch(err){
        console.log(err);
        res.send(err)
    }
}
//get individual employe
exports.individualEmploye= async (req,res)=>{
    const id = req.params.id;
    try{
       const singleEmploye = await Employe.findById(id);
       res.json(singleEmploye);
    }
    catch(err){
        console.log(err);
        res.send(err);

    }
}
//update employe
exports.updateEmploye = async (req, res) => {
    const id = req.params.id;
    const updateData = req.body;

    if (!mongoose.isValidObjectId(id)) {
        return res.status(400).send('Invalid ID format');
    }

    try {
        const employe = await Employe.findByIdAndUpdate(id, updateData, { new: true });
        res.json(employe);
    } catch (err) {
        console.log(err);
        res.status(500).send('Server Error');
    }
}
