const http = require('http');

const server = http.createServer((req, res) => {
    if (req.method === 'GET' && req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Welcome to test server');
    } else if (req.method === 'GET' && req.url === '/test') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Test endpoint');
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Not Found');
    }
});

const PORT = 5000;
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

//Test Jenkins trigger
//Test Jenkins trigger 4
//Test Jenkins trigger 5
//Test Jenkins trigger 6
//Test Jenkins trigger 7
//Test Jenkins trigger 8
//Test Jenkins trigger 9
//Test Jenkins trigger 10
//Test Jenkins trigger 11
//Test Jenkins trigger 12
//Test Jenkins trigger 13
//Test Jenkins trigger 14