const fs = require('fs');
const util = require('util');
const ReadFilePromise = util.promisify(fs.readFile);
const writeFilePromise = util.promisify(fs.writeFile);
const start = async () => {
  try {
    const first = await ReadFilePromise('./folder/subfolder/file.txt', 'utf-8');
    await writeFilePromise('./folder/subfolder/file.txt', 'added a extra>>>>>>>>>>>>', { flag: 'a' });
    const second = await ReadFilePromise('./folder/subfolder/file.txt', 'utf-8');
    console.log('hi..-1..................', first);
    console.log(second);
  } catch (err) {
    console.log(err);
  }
};
start();
console.log('hi>>>>>>>>>>>');
