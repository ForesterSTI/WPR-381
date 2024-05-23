const http = require("http");
const host = "localhost"; //127.0.0.1
const port = 8000;

const requestListener= function (req, res) {
    let requestURL = req.url;
    if (requestURL === "/") {
        res.end("This is my first server, and I am running it for the 1st time!!");
    }
    if (requestURL === "/login") {
        res.end("login page requested");
    }

    res.writeHead(200);
};

const server = http.createServer(requestListener);

server.listen(port, host, () => {
    console.log(`Sever is running on http://${host}:${port}`);
})
