//external modules
const express = require('express');
const app = express();
const cors = require('cors')
PORT = 4000

//middleware
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

//app.use("/api/users",routes.user);
//app.use("/api/v1/auth", routes.auth);
//app.use("/api/projects",routes.projects);

app.listen(PORT,function(){
    console.log(`Listening on port ${PORT}`)
})