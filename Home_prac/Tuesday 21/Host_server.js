const http = require('http');
const host = "localhost";
const port = 1880;

const requestListner= function listern (req, res) {
    let requestURL = req.url
    if(requestURL === "/") {
        res.end("My second server")
    }
    if(requestURL === "/login"){
        res.end("My second login")
    }

    res.writeHead(200)
};

const server = http.createServer(requestListner)
server.listen(port,host,() => {
    console.log(`server is running on http://${host}:${port}`)
})

server.close(requestURL)