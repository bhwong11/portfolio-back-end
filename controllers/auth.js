const db = require('../models');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const register = async(req,res)=>{
    try{
        const foundUser = await db.User.findOne({email:req.body.email})
        if(foundUser){
            return res.status(400).json({
                status:400,
                message:"This email address has already been taken"
            })
        }
        const foundUserUsername = await db.User.findOne({username:req.body.username})
        if(foundUserUsername){
            return res.status(400).json({
                status:400,
                message:"This username has already been taken"
            })
        }
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(req.body.password, salt);
        const createdUser = await db.User.create({...req.body, password:hash});
        return res.status(201).json({
            status:201,
            message: "success",
            createdUser
        })
    }catch(error){
        console.log(error)
        return res.status(500).json({
            status:500,
            message:'an error occured'
        })
    }
}

const login = async(req,res)=>{
    try{
        const foundUser = await db.User.findOne({email: req.body.email}).select(
            '+password'
        )

        if(!foundUser){
            return res.status(400).json({
                status:400,
                message:"No user was found with those creditionals, please try again"
            })
        }

        const isMatch = await bcrypt.compare(req.body.password, foundUser.password)
        if(isMatch){
            const token = jwt.sign({ _id:foundUser._id }, process.env.JWTSECRECT,{
                expiresIn:'1d',
            });

            return res.status(200).json({
                status:200,
                message:'success',
                token
            })
        }else{
            return res.status(400).json({
                status:400,
                message:"Username or password is incorrect"
            })
        }
    }catch(error){
        return res.status(500).json({
            status:500,
            message: `something went wrong ${error}`
        })
    }
}

module.exports ={
    register,
    login,
}