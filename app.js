const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use((req,res,next)=>{
    console.log("Server is running");

    res.sendFile('login.html', { root: 'views' });
})

app.listen(3000);