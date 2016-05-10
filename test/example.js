var remove = require('../remove');
var a = ['A','B','C'];

a = remove(a, 2);
console.log(a);

a = ['A','B','C'];
a = remove(a, -1);
console.log(a);

a = ['A','B','C'];
a = remove(a, -3);
console.log(a);
