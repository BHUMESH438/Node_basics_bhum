const os = require('os'); //we are not doing any ./ for importing as it is a built in modules

//info about current user
const user = os.userInfo();
console.log('>>>>>', user);
const systemuptime = os.uptime();
console.log('>>>>>', systemuptime);
const currentos = {
  type: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freememory: os.freemem()
};
console.log('>>>>>', currentos);
