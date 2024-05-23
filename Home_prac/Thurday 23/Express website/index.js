const { Console } = require('console');
const express = require('express')
const app = express()
const PORT = process.env.PORT ||8080
const path = require('path')

app.use(express.static(path.join(__dirname, 'public')));

app.get('/',(req, res) => {
    res.sendFile(path.join(__dirname,"public",'index.html'));
});
app.get('/contact',(req, res) => {
    res.sendFile(path.join(__dirname,"public","contact.html"));
});
app.listen(PORT,()=>{
    console.log(`Server to http://localhost:${PORT}`);
})