const http = require('http');

const server = http.createServer((req, res) => {
  req.url === '/'
    ? res.end('welcome to the page')
    : req.url === '/about'
    ? res.end('welcome to the aout abpage')
    : res.end(`<h1>OOps</h1>
  <h3>get back to <a href='/'>home</a></h3>`);
});

server.listen(7000);

//if you used if give return in the end or use else
//res.write - cam send the chunk of date and the can reoccur and it sends the data to the body
//res.end - can use only once and can be send the data at a time all together
