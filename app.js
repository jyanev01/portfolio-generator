const fs = require('fs');
const profileDataArgs = process.argv.slice(2, process.argv.length);
// const name = profileDataArgs[0];
// const github = profileDataArgs[1];

// deconstructing
const [name, github] = profileDataArgs;

// const generatePage = (userName, githubName) => `Name: ${userName}, Github: ${githubName}`;

// console.log(generatePage('Jane', 'janehub'));

// multi-line input:
// const generatePage = (name, github) => {
//     return `
//     Name: ${name}
//     GitHub: ${github}
//     `;
// };

// console.log(name, github);
// console.log(generatePage(name, github));
const generatePage= require('./src/page-template.js');

fs.writeFile('index.html', generatePage(name, github), err => {
    if (err) throw err;

    console.log('Portfolio complete! Check out index.html to see the output!');
});
