const {userModel} = require("../models/user")


async function saveUser(req,res){
    try{
        const {name,userId,password,role} = req.body;

        let user = await userModel.findOne({userId})
        if(user)
            return res.status(409).json({message:"user already exist with same id"})

        await new userModel({name,userId,password,role}).save()

        return res.status(201).json({message:"user regisistration successfull"})
    }
    catch(err){
        return res.status(500).json({message:"Internal server Error"})
    }
}

async function getAllAdmins(req,res) {
    
    try{
        return res.status(200).json(await userModel.find({role:"admin"},{password:0}))
    }
    catch(err){
        return res.status(500).json({message:"Internal server Error"})
    }
}


module.exports ={
    saveUser,
    getAllAdmins
}
