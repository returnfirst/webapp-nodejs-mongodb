const fs = require('fs');

// fs.readFile('./json-data/starwars-naver.json', 'utf-8', function(err, data) {
//     console.log(data);
// });

// console.log('program exited...');

let fileContent = fs.readFileSync('./json-data/starwars-naver.json', 'utf-8');
console.log(fileContent);
console.log('Program exited...');