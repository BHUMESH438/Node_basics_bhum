const { readFile, writeFile } = require('fs').promises;
// const util = require('util');
// const ReadFilePromise = util.promisify(fs.readFile);
// const writeFilePromise = util.promisify(fs.writeFile);
const start = async () => {
  try {
    const first = await readFile('./folder/subfolder/file.txt', 'utf-8');
    await writeFile('./folder/subfolder/file.txt', 'added a extra>>>>>>>>>>>>', { flag: 'a' });
    const second = await readFile('./folder/subfolder/file.txt', 'utf-8');
    console.log('hi..-1..................<<<<<<<<<<<', first);
    console.log('2>>>>>>>>>>', second);
  } catch (err) {
    console.log(err);
  }
};
start();
console.log('hi>>>>>>>>>>>');
// we can directly use the promise like this and use the async await so the code line will reduce
