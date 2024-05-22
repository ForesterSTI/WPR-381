const http = require('http');
const host = "localhost"//127.0.0.1
const port = 8000;

const requestListner = function name(req,res) {
    let requestURL = req.url
    if(requestURL === "/") {
        res.end("My first server")
    }
    if(req.requestURL === "/login"){
        res.end("login requested")
    }

    res.writeHead(200)
};

const server = http.createServer(requestListner);
server.listen(port,host,()=>{
    console.log(`server is running on http://${host}:${port}`)
});

