// const { promises, BADRESP } = require('dns');
const http = require('http');
const fs = require('fs').promises;
//const path = require('path');
const host = "localhost"
const port = 8080


const requestListner = function listern(req,res){
  /*_dirname = module wrapper object that computes the path to a resource that we want to use 
  it to create a path to the index.html*/
 let requestURL = req.url;
  switch(requestURL){
    case "/":
        fs.readFile(__dirname+"/index.html").then((content)=>{
            res.setHeader('Content-Type', 'text/html');
            res.writeHead(200); 
            res.end(content)
        }).catch((err)=>{
            res.writeHead(500);
            res.end(err);
        })
    break
    case "/about":
        res.end("page comming soon")  
    break
    case "/contact":     
    fs.readFile(__dirname+"/contact.html").then((content)=>{
        res.setHeader('Content-Type','text/html');
        res.writeHead(200); 
        res.end(content)
    }).catch((err)=>{
        res.writeHead(500);
        res.end(err);
    })
    break
    
    default:
        break;
    }   
}
const server = http.createServer(requestListner)
server.listen(port,host,() => {
    console.log(`server is running on http://${host}:${port}`);
})