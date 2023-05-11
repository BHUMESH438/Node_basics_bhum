const { readFileSync, writeFileSync } = require('fs');
console.log('start task1');
// fs.readFileSync
// fs.writeFileSync
const first = readFileSync('./folder/subfolder/file.txt', 'utf8');
const second = readFileSync('./folder/subfolder/sample.txt', 'utf8');
console.log(first, second);

writeFileSync('./folder/result-async.txt', ',hi in folder 3', { flag: 'a' }); // it will see any file is there if not there it will create and also replace existing content. if you dont want to replace the existing content then use the options in third{} and give the flag append a value
console.log('task 1 done');
console.log('start task2');
