const mongoose = require('mongoose');
require('dotenv').config();

//const connectionString = process.env.MONGO_URI || 'mongodb://localhost:27017/portfolio'
const connectionString = process.env.MONGO_URI
const configOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };

  mongoose.connect(connectionString,configOptions)
  .then(()=>console.log("MongoDB Successfully connected..."))
  .catch((err)=>console.log(`MongoDB connection Error: ${err}`))

  module.exports = {
      Project:require("./Project"),
      User:require("./User")
  }
