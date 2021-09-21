const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Project = Schema({
    title:{
        type: String,
        required:true,
        default:"N/A",
    },
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