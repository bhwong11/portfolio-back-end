const {User} = require('../models');
const bcrypt = require('bcryptjs');
const jwt = require("jsonwebtoken");

const show = async (req,res,next)=>{
    try{
        const bearerHeader = req.headers.authorization;
        if (typeof bearerHeader === "undefined") {
            return res.sendStatus(403);
        }
        const token = bearerHeader.split(" ")[1];
        const payload = await jwt.verify(token, "supersecretwaffles");
        req.userId = payload._id;
        const foundUser = await User.findById(req.userId)
        return res.status(200).json({
            status: 200,
            message:"success",
            data: foundUser,
        })
    }catch(error){
        console.log(error)
        return res.status(500).json({
            status:500,
            message: `error occured ${error}`
        });
    }
}

const update = async(req,res,next)=>{
    try{
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(req.body.password, salt);
        const updatedUser = await User.findByIdAndUpdate(req.params.id,
        {...req.body,password:hash},
        {new:true})
        return res.status(200).json({
                updatedUser
            })
    }catch(error){
        console.log('Error in user update:',error)
        return res.send('Incomplete user update')
    }
};

const destroy = async(req,res)=>{
    try{
        const deletedUser = await User.findByIdAndDelete(req.params.id)
        return res.status(200).json({
            status:200,
            message:"success",
            data:deletedUser
        })
    }catch(error){
        console.log("Error in delete User", error);
        return res.send("Incompleted delete of user")
    }

}

module.exports={
    show,
    update,
    destroy,
}