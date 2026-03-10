import express from 'express'
const app = express();
const port = 3000;

app.get("/", (req, res)=>{
    res.send("<h1>My Home page</h1>");
});

app.get("/about", (req, res)=>{
    res.send("<h3>About me page</h3>");
});

app.get("/contact", (req, res)=>{
    res.send("<h3>Contact us</h3>");
});

app.get("/info", (req, res)=>{
    res.send("<h3>Info page</h3>");
});

app.listen(3000, "127.0.0.1", () =>{
    console.log("Server running on port " + port);
});