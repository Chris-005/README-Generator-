// TODO: Include packages needed for this application
import inquirer from 'inquirer';
import generateMarkdown from './utils/generateMarkdown.js';
import fs from 'fs';

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is your project title:'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Enter a description of your project:'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Enter installation instructions:'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Enter usage information:'
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'Enter contribution guidelines:'
    },
    {
        type: 'input',
        name: 'test',
        message: 'Enter test instructions:'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Please choose a license:',
        choices: ['MIT', 'Apache', 'GPL', 'BSD', 'None']
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username:'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email address:'
    }
];

const README = (data) => {
    return `# ${data.title}
    ${renderLicenseBadge(data.license)}
    ## Description
    ${data.description}
    ## Table of Contents
    * [Installation](#installation)
    * [Usage](#usage)
    * [Contribution](#contribution)
    * [Tests](#tests)
    ${renderLicenseLink(data.license)}
    * [Questions](#questions)
    ## Installation
    ${data.installation}
    ## Usage
    ${data.usage}
    ## Contribution
    ${data.contribution}
    ## Tests
    ${data.test}
    ${renderLicenseSection(data.license)}
    ## Questions
    If you have any questions, please feel free to contact me at ${data.email}.
    You can also find me on GitHub at [${data.github}]`;
}


// TODO: Create a function to write README file
function writeToFile(fileName, data
) {
    fs.writeFile(fileName, data, (err) =>
        err ? console.error(err) : console.log('README.md generated successfully!')
    );
}
// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then((data) => {
            writeToFile('README.md', generateMarkdown(data));
        });
}
// Function call to initialize app
init();
