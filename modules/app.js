const names = require('./names');
const sayHiFn = require('./utlis');
const alterData = require('./alternative');

console.log(alterData);
console.log(names, sayHiFn);

sayHiFn('NodeMember');
sayHiFn(names.userName1);
sayHiFn(names.userName2);