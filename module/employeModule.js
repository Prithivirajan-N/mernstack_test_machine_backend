
const mongoose = require('mongoose');

const employeSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        match: /.+\@.+\..+/
    },
    mobile: {
        type: String,
        required: true,
        match: /^\d{10}$/
    },
    designation: {
        type: String,
        enum: ['hr', 'manager', 'sales'],
        required: true
    },
    gender: {
        type: String,
        enum: ['male', 'female'],
        required: true
    },
    course: {
        type: [String],
        enum: ['mca', 'bca', 'bsc'],
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const Employe = mongoose.model('employe', employeSchema);

module.exports = { Employe };
