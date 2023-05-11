const fs = require('fs');
console.log('start task1');
//the waay the asyn works we need to provide call back if we dont provide the utf we get the buffer
fs.readFile('./folder/result-sync.txt', 'utf8', (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  const first = result; // reading and storing txt from the first file in 1 callback
  fs.readFile('./folder/result-async.txt', 'utf8', (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    const second = result; // reading and storing txt from the second file in 2 callback
    fs.writeFile('./folder/result-cllhll.txt', `now we combine the value from the first and second txt file${first} and second ${second} `, (err, result) => {
      if (err) {
        console.log(err);
        return;
      }
      console.log('finish task1'); // from this call back we are not expecting the result but the expected result is to create a new file in the folder and the string which we passed
    });
  });
});
console.log('start task2');
