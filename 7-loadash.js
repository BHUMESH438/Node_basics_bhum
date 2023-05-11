const _ = require('lodash');
const items = [1, [2, [3, [4, 5]]]];
const nei = _.flattenDeep(items); // make nested array flat deep
console.log(nei);
