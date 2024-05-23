const express = require('express')
const app = express()
const PORT = process.env.PORT || 8080;
const path = require('path')
//serves as a static files from the public directory(folder)
app.use(express.static(path.join(__dirname,"public")));

app.get('/', (req, res) =>{
    res.sendFile(path.join(__dirname,"public","home.html"));
});
app.get('/about', (req, res) =>{
    res.sendFile(path.join(__dirname,"public","about.html"));
});
app.listen(PORT,()=>{
    console.log(`The server is on port http://localhost:${PORT}`)
    //``=title 
});
