const {readFile, writeFile} = require('fs');

readFile('../content/first.txt', (err, result) => {
    if(err) {
        console.log(err);
        return;
    }
    console.log('Result: ', result);
    console.log('completed First task');
});

console.log('Starting next task');