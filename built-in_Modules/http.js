const http = require("http");
const server = http.createServer((req, res) => {
    res.end("Hello from Node!");
    
});

server.listen(4000);