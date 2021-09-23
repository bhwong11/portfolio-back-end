const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProjectSchema = Schema({
    title:{
        type: String,
        required:true,
        default:"N/A",
    },
    //maybe add technologies
    description:{
        type:String,
        default:"N/A",
    },
    liveLink:{
        type:String,
        default:"N/A",
    },
    github:{
        type:String,
        default:"N/A",
    },
    image:{
        type:String,
        default:"N/A",
    }
})

const Project = mongoose.model("Project",ProjectSchema);

module.exports = Project;