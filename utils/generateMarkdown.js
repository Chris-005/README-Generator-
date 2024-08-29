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
    ${renderLicenseBadge(data.license)}

    # Description

    ${data.description}
    # Table of Contents

    1. [Installation](#installation)

    2. [Usage](#usage)
    
    3. [Contribution](#contribution)
    
    4. [Tests](#tests)
    
    ${renderLicenseLink(data.license)}

    5. [Questions](#questions)

    # Installation

    ${data.installation}

    # Usage

    ${data.usage}

    # Contribution

    ${data.contribution}

    # Tests

    ${data.test}
    ${renderLicenseSection(data.license)}

    # Questions

    If you have any questions, please feel free to contact me at ${data.email}.
    You can also find me on GitHub at [${data.github}]`;
}
export default generateMarkdown;