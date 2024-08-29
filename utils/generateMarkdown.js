// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if (license === 'MIT') {
        return `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`;
    }
    if (license === 'Apache') {
        return `![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)`;
    }
    if (license === 'GPL') {
        return `![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)`;
    }
    if (license === 'BSD') {
        return `![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)`;
    }
    return 'No license';
}
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    if (license === 'None') {
        return '';
    }
    return `* [License](#license)`;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    if (license === 'None') {
        return '';
    }
    return `## License
    This project is licensed under the ${license} license.`;
}
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
    return `# ${data.title}
    ![License Badge](https://img.shields.io/badge/License-${data.license}&message=License&color=blue)

    ## Table of Contents
    * [Description](#description)
    * [Installation](#installation)
    * [Usage](#usage)
    * [Contribution](#contribution)
    * [Test](#test)
    * [License](#license)
    * [Questions](#questions)
    * [GitHub](#github)
    * [Email](#email)

    ## Description
    ${data.description}

    ## Installation
    ${data.installation}

    ## Usage
    ${data.usage}

    ## Contribution
    ${data.contribution}

    ## Test
    ${data.test}

    ## License
- This project is licensed under the ${data.license} license.

    ## Questions

    If you have any questions, please feel free to contact me at ${data.email}.
    You can also find me on GitHub at [https://github.com/${data.github}]`;
}

export default generateMarkdown;