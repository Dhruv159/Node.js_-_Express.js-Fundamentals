const { readFile, writeFile } = require('fs');

readFile('../content/first.txt', 'utf8',(err, data) => {
    if(err) return;
    const first = data;
    console.log('Result1 :-', data);

    readFile('../content/second.txt', 'utf8', (err, data) => {
        if(err) return;
        const second = data;
        console.log('Result2 :-', data)

        writeFile(
            '../content/result-async.txt',
            `Here is the result ::-- ${first}, ${second}`,
            (err, data) => {
                if(err) {
                    console.log('WriteFile Error:', err);
                    return;
                }
                console.log('WriteFile Result: ', data)
            }
        )
    });
});
