const http = require('http');

const server = http.createServer((req, res) => {
    console.log('Server request event');
    console.log(req.url);
    res.end('End');
});

server.listen(3200, () => {
    console.log('Server Listening to 3200...');
});
