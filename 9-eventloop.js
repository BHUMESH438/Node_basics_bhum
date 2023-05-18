//example 1
// console.log('task 1');
//setTimeout(() => console.log('second task'), 0); // as this is async the event will offload
//console.log('task 3');

//example 2
// const fs = require('fs');
// console.log('task 1');
// fs.readFile('./folder/subfolder/file.txt', 'utf-8', (err, result) => {//async function
//   err ? console.log('error') : console.log('task 2', result);
// });
// console.log('task 3');

//example 3
// setInterval(() => console.log('hiiiiih'), 2000); // async
// console.log('i will go 1'); it will run first

// //expamle 4 - server
// const http = require('http');
// const server = http.createServer((req, res) => {
//   console.log('server startted');
//   res.end('welcome home');
// });

// server.listen(5000, () => console.log('listening to 5000'));
