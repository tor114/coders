// npm init -y
// npm i date-fns
// npm install webpack webpack-cli --save-dev
// const { formatDistanceToNow } = require('date-fns');

import { formatDistanceToNow } from 'date-fns';

console.log(formatDistanceToNow(new Date(2019, 4, 5)));

const old = {
  a: 1,
  b: 2
};

// const oldCopy = old; <-- only indicator
// const oldCopy = {...old}; <-- real copy
const oldCopy = Object.assign({},old);

[oldCopy.a, oldCopy.b] = [oldCopy.b, oldCopy.a];

console.log(old);
console.log(oldCopy);