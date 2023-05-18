const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.end('welcome to the page');
    console.log('///////////////');
  }
  if (req.url === '/about') {
    console.log('about');
    for (let i = 0; i < 1000; i++) {
      //until this loop ends ther other two routs will keep on rotating
      for (let j = 0; j < 1000; j++) {
        console.log(`${i} ${j}`);
      }

      res.end('welcome to the page');
    }
  }
  if (req.url === '/hi') {
    console.log('hiiiiiiiiiiiiii');
    res.end('welcome to the hi page');
  }
});
server.listen(7000);
console.log('hi>>>>>');
