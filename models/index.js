const mongoose = require('mongoose');

const connectionString = process.env.MONGO_URI || 'mongodb://localhost:27017/portfolio'
const configOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };

  mongoose.connect(connectionString,configOptions)
  .then(()=>console.log("MongoDB Successfully connected..."))
  .catch((err)=>console.log(`MongoDB connection Error: ${err}`))

  module.exports = {
      Game:require("./Project"),
      User:require("./User")
  }
