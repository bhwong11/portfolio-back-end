const db = require('../models');

const index = async (req,res)=>{
    try{
        const foundProjects = await db.Project.find({})
        return res.status(200).json({
            projects:foundProjects
        })
    }catch(error){
        console.log(error)
        return res.status(500).json({
            status:500,
            message:`Something went wrong: ${error}`
        })
    }
}

const show = async(req,res)=>{
    try{
        const foundProject = await db.Project.findById(req.params.id)
        if(!foundProject){
            return res.status(400).json({
                status:400,
                message:'unable to find project'
            })
        }
        return res.status(200).json({
            project:foundProject
        })
    }catch(error){
        console.log(error)
        return res.status(500).json({
            status:500,
            message:`Something went wrong: ${error}`
        })
    }
}

const create = async(req,res)=>{
    try{
        console.log(req.body)
        const newProject = await db.Project.create(req.body)
        console.log(newProject)
        return res.status(200).json({
            status:200,
            message:'success',
            data: newProject
        })
    }catch(error){
        console.log(error)
        return res.status(500).json({
            status:500,
            message:`Something went wrong: ${error}`
        })
    }
}

const update = async(req,res)=>{
    try{
        console.log(req.params.id)
        const updatedProject = await db.Project.findByIdAndUpdate(req.params.id,req.body,{new:true})
        return res.status(200).json({
            status:200,
            message:'success',
            data:updatedProject
        })
    }catch(error){
        console.log(error)
        return res.status(500).json({
            status:500,
            message:`Something went wrong: ${error}`
        })
    }
}

const destroy = async(req,res)=>{
    try{
        const deletedProject = await db.Project.findByIdAndDelete(req.params.id)
        return res.status(200).json({
            status:200,
            message:'success',
            data:deletedProject
        })
    }catch(error){
        console.log(error)
        return res.status(500).json({
            status:500,
            message:`Something went wrong: ${error}`
        })
    }
}

module.exports ={
    index,
    show,
    create,
    update,
    destroy,
}