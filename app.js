const profileDataArgs = process.argv.slice(2);

const generatePage = (userName, githubName) => `Name: ${userName}, Github: ${githubName}`;

console.log(generatePage('Jane', 'janehub'));
