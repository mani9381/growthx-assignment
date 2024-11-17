const mongoose = require('mongoose')

const user = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    userId:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    role:{
        type:String,
        enum:["user","admin"],
        required:true
    }
},{timestamps:true})

const userModel = mongoose.model('users',user)
module.exports = {
    userModel
}