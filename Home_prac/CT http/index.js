const http = require ("http");
const fs = require ("fs").promises;
const host = "localhost";
const port = 8080;


const requeatListner = (req,res)=>{
let requestURL = req.url;
    switch(requestURL){
        case "/": 
         fs.readFile(__dirname+'/index.html').then((content) => {
            res.setHeader('Content-Type', 'text/html')
            res.writeHead(200)
            res.end(content)
         }).catch((err) => {
            res.writeHead(500)
            res.end(err)
         });
        break
        default:
        break;
    }
}

const server = http.createServer(requeatListner)
server.listen(port,host,()=>{
    console.log(`listening on http://${host}:${port}`)
});