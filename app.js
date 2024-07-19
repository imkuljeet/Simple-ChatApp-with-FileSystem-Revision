const express = require("express");
const bodyParser = require("body-parser");
const fs = require('fs');

const app = express();

// app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.get('/login', (req, res, next) => {
    console.log("Server is running");

    // res.sendFile('login.html', { root: 'views' });

    res.send(`
        <form method = "POST" onsubmit="saveToLocalstorage(event)">
            <label for="username">Username:</label>
            <input type="text" id="username" name="username" required>
            <button type="submit">Login</button>
        </form>

        <script>
            function saveToLocalstorage(e) {
                e.preventDefault();
                let name = e.target.username.value;
                localStorage.setItem("username", name);
                window.location.href='/mainpage';
            }
        </script>
    `);
});

app.get('/mainpage',(req,res,next)=>{
    fs.readFile('files.txt',(err,data)=>{
        if(err){
            console.log(err);
            data = 'No Chat Exists'
        }
        const htmlResponse = `
        ${data}<form action="/" method="POST" onsubmit="getItDone(event)">
        <input type="text" name="message" id="message">
        <input type="hidden" name="username" id="username"><br>
        <button type="submit">Send</button>
    </form>
    <script>
        function getItDone(e){
            e.target.username.value = localStorage.getItem('username');
        }
    </script>
    `;
    
    res.send(htmlResponse);
    })
})

app.post('/', (req, res, next) => {
    const { message, username } = req.body;

    fs.appendFile("files.txt", `${username}: ${message}\n`, (err) => {
        if (err) {
            console.error("Error writing to file:", err);
        } else {
            res.redirect("/mainpage");
        }
    });
});



app.listen(3000);