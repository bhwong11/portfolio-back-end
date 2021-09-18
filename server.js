const express = require('express');
const app = express();
PORT = 4000


app.get('/',async (req,res)=>{
    res.send('hello world')
})

app.listen(PORT,function(){
    console.log(`Listening on port ${PORT}`)
})