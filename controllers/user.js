const {User} = require('../models');
const bcrypt = require('bcryptjs');

const show = async(req,res,next)=>{
    try{
        const foundUser = await User.findById(req.userId)
        return res.status(200).json({
            status:200,
            message:"success",
            data:foundUser
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
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.has(req.body.password, salt);
    User.findByIdAndUpdate(req.params.id,
    {...req.body,password:hash},
    {new:true},
    (err,updatedUser)=>{
        if(error){
            console.log('Error in user update:',error)
            return res.send('Incomplete user update')
        }
        return res.status(200).json({
            updatedUser
        })
    });
};

const destroy = async(req,res)=>{
    User.findByIdAndDelete(req,params.id,(err,deleteduser)=>{
        if(error){
            console.log("Error in delete User", error);
            return res.send("Incompleted delete of user")
        }

        res.status(200).json({
            deletedUser
        })
    })
}

module.exports={
    show,
    update,
    destroy,
}