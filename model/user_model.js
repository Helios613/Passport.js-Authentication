const mongoose = require('mongoose');
//declare schema with name todoSchema
const userSchema = new mongoose.Schema({
    name:{
        type : String,
        required : true 
    },
    email:{
        type : String,
        required: true,
        unique: true
    },
    username:{
        type : String,
        required : true,
        unique: true
    },
    password:{
        type: String,
        required: true
    }
});
//convert todoSchema schema to model named Todo
const User = mongoose.model('User', userSchema);
//export Todo model
module.exports = User;