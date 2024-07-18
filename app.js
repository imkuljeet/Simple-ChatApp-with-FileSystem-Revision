const express = require("express");
const bodyParser = require("body-parser");

const app = express();
// app.use(bodyParser.json());
app.use(express.json());


app.get('/login',(req,res,next)=>{
    console.log("Server is running");

    res.sendFile('login.html', { root: 'views' });
})

app.get('/mainpage',(req,res,next)=>{
    // res.send("<h1>Working</h1>");
    // console.log(req.body);
    res.sendFile('mainpage.html',{root : 'views'})
    
})

app.post('/',(req,res,next)=>{
    console.log(req.body);
})


app.listen(3000);