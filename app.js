const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use((req,res,next)=>{
    console.log("Server is running");

    res.send("<h1>Server running</h1>");
})

app.listen(3000);