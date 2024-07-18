const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use('/login',(req,res,next)=>{
    console.log("Server is running");

    res.sendFile('login.html', { root: 'views' });
})

app.use((req,res,next)=>{
    res.send("<h1>Working</h1>");
})

app.listen(3000);