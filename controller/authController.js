const {userModel} = require("../models/user")
const jwt = require("jsonwebtoken")

async function login(req, res) {

    try{
        const {userId,password } = req.body

        let user = await userModel.findOne({userId,password})
        if(!user)
            return res.status(404).json({token:null,message:"user doesn't exist/ wrong password"})

        let token = jwt.sign({userId:user.userId,role:user.role},"36usgf9823lavffr@98e8ty8#$%",{expiresIn:"10h"})
        return res.status(200).json({token,message:"Login success!"})
    }
    catch(err){
        return res.status(500).json({message:"Internal server Error"})
    }
}

module.exports = {
    login
}