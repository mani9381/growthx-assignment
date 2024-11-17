const {assigmentModel} = require("../models/assignments")
const {ObjectId} = require("mongoose")
async function saveAssignment(req,res){
    try{
        const {task, admin} = req.body;
        await new assigmentModel({userId:req.user.userId,task,admin,status:"pending"}).save();
        return res.status(201).json({message:"assignment submited successfull"})
    }
    catch(err){
        return res.status(500).json({message:"Internal server error"})
    }
}

async function findAllAssignments(req,res) {

    try{
        return res.status(200).json(await assigmentModel.find({}))
    }
    catch(err){
        return res.status(500).json({message:"Internal server error"})
    }
    
}

async function acceptAssignment(req,res) {
    try{
        let id = req.params.id
        await assigmentModel.findByIdAndUpdate(id,{status:"accepted"})
        return res.status(200).json({message:"assigment is accepted"})
    }
    catch(err){
        return res.status(500).json({message:"Internal server error"})
    }
    
}

async function rejectAssignment(req,res) {
    try{
        let id = req.params.id
        await assigmentModel.findByIdAndUpdate(id,{status:"rejected"})
        return res.status(200).json({message:"assigment is rejected"})
    }
    catch(err){
        return res.status(500).json({message:"Internal server error"})
    }
    
}

module.exports ={
    saveAssignment,
    findAllAssignments,
    acceptAssignment,
    rejectAssignment
}