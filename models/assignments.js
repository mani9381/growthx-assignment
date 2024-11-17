const mongoose = require("mongoose")

const assigment = new mongoose.Schema({
    userId:{
        type:String,
        required:true,
        ref:"user"
    },
    task:{
        type:String,
        required:true
    },
    admin:{
        type:String,
        required:true,
        ref:"user"
    },
    status:{
        type:String,
        enum:["pending","accepted","rejected"],
        required:true
    }
},{timestamps:true})

const assigmentModel = mongoose.model('assignments',assigment)

module.exports ={
    assigmentModel
}