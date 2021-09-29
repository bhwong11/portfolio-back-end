//external modules
const express = require('express');
const app = express();
const cors = require('cors')
PORT = process.env.PORT || 4000

//internal
const routes = require('./routes');

//middleware
app.use(express.json())
app.use(express.urlencoded({extended: true}))

//cors body parser
app.use(cors())

app.get('/',async (req,res)=>{
    res.send('hello world')
})

app.get('/jsontest',async (req,res)=>{
    try{
        res.status(200).json({
            "test":"test value",
        })
    }
    catch(error){
        console.log(error)
        res.send('error occured:',error)
    }
    
})

app.use("/api/users",routes.user);
app.use("/api/auth", routes.auth);
app.use("/api/projects",routes.project);
app.use("/api/mail",routes.mail)

app.listen(PORT,function(){
    console.log(`Listening on port ${PORT}`)
})