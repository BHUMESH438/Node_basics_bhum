const path = require('path');
console.log(path.sep);
const filepath = path.join('/folder/', 'subfolder', 'file.txt'); //even it is arranged not good manner it will arrange it
console.log('filepath join>>>>>>>>>>>', filepath);
const basename = path.basename(filepath);
console.log('basepath>>>>>>>>>>>>>>', basename);

// when it comes to an absolute path it accept a sequence of segment and resolves into an absolute path
const result = path.resolve(__dirname, 'folder', 'subfolder', 'file.txt'); //returns an absolute path and dirname represent the nodejst1
console.log('absolute path>>>>>>>>>>>>', result);
