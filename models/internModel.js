const mongoose = require('mongoose');
const validator = require('validator');

const internSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: [true, "Email already exists"],
    },
    mobile: { 
        type: Number,
        required: true,
        unique: [true, "Mobile no. already exists"],
    },

    collegeId: {
        type: mongoose.Types.ObjectId, 
        ref: 'College'
    },
    isDeleted: {
        type: Boolean,
        default: false
    },
}, { timestamp: true })

const Intern = new mongoose.model('Intern', internSchema);
module.exports = Intern;

// { name: {mandatory}, email: {mandatory, valid email, unique}, mobile: {mandatory, valid mobile number, unique}, collegeId: {ObjectId, ref to college model, isDeleted: {boolean, default: false}}
