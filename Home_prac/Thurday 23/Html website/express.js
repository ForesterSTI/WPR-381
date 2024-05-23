const http = require('http');
const fs = require('fs').promises;
const host = "localhost";
//const path = require('path');
const port = 8080;


const requestListner = function listen(req, res){
let requestURL = req.url
switch(requestURL){
    case"/":
    fs.readFile(__dirname+"/index.html").then((content)=>{
        res.setHeader('Content-Type', 'text/html');
        res.writeHead(200)
        res.end(content)
    }).catch((err)=>{
        res.writeHead(200)
        res.end(err)
        return
    })
    break
    case"/contact":
    fs.readFile(__dirname + "/contact.html").then((content)=>{
        res.setHeader('Content-Type', 'text/html');
        res.writeHead(200)
        res.end(content)
    }).catch((err)=>{
        res.writeHead(200)
        res.end(err)
    })
    break
    default:
        break
}
}
const server = http.createServer(requestListner)
server.listen(port,host,()=>{
    console.log(`Server hosts http://${host}:${port}`)
})