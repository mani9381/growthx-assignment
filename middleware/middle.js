const jwt = require('jsonwebtoken')

function authraiseUser(req,res,next){
    try{
        let token = req.headers['x-auth-token']

        if(!token)
            return res.status(401).json({message:"token not found to authraise"})

        let decode = jwt.verify(token,"36usgf9823lavffr@98e8ty8#$%")

        if(decode.role ==="admin"){
            return res.status(401).json({message:"you can't access user privilages"})
        }
        req.user = decode
        next()

    }
    catch(err){
        return res.status(500).json({message:"Internal server Error"})
    }
}

function authraiseAdmin(req,res,next){
    try{
        let token = req.headers['x-auth-token']

        if(!token)
            return res.status(401).json({message:"token not found to authraise"})

        let decode = jwt.verify(token,"36usgf9823lavffr@98e8ty8#$%")

        if(decode.role ==="user"){
            return res.status(401).json({message:"you can't access admin privilages"})
        }
        req.user = decode
        next()

    }
    catch(err){
        return res.status(500).json({message:"Internal server Error"})
    }
}

module.exports = {
    authraiseUser,
    authraiseAdmin
}