const { readFileSync, writeFileSync } = require('fs');

const file1 = readFileSync('../content/first.txt', 'utf8');
const file2 = readFileSync('../content/second.txt', 'utf8');

writeFileSync(
    '../content/result-sync.txt',
    `Here is the result ::-- ${file1}, ${file2}`,
    { flag: 'w' }
)

// Important flag values:

// 'w' → write/overwrite existing content (default)
// 'a' → append to existing content
// 'wx' → write only if file doesn't already exist