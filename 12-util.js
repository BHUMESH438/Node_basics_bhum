const fs = require('fs');

const getText = path => {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf-8', (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
        console.log(data, '>>>>>>>>>>>>>>');
      }
    });
  });
};
// getText('./folder/subfolder/file.txt')
//   .then(result => console.log(result))
//   .catch(err => console.log(err));

const start = async () => {
  try {
    const first = await getText('./folder/subfolder/file.txt');
    console.log(first);
  } catch (err) {
    console.log(err);
  }
};
start();
