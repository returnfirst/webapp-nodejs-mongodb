const http = require('http');

http.createServer(function(req, res) {
    console.log('client requested... from ' + req.url);
    res.end('hello');
}).listen(3000, function() {
    console.log('server ready on 3000');
});