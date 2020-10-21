// function to generate markdown for README
function generateMarkdown(data) {

  return `
# ${data.projectTitle}
![GitHub](https://img.shields.io/github/license/${data.github}/${data.repo}?color=green)

## Descripttion 
${data.description}

## Table of Contents
1. [Installation Instructions](#installation)
2. [Usage](#usage)
3. [Contributing to this Application](#contributing)
4. [How to test](#how-to-test)
5. [License](#license)
6. [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

${data.screenshot1desc}
![screenshot1](${data.screenshot1})

${data.videodesc}
[video Demo](${data.videod})

# License
This is the license being used for this applicaiton. Please look at the LICENSE.txt file in the repository for more information.
* ${data.licenses}

## Contributing
${data.contribution}

## How to Test
${data.test}

# Questions
Have questions? Contact the developer at: 
* GitHub Username: ${data.github}
* Email: ${data.email}
`;
  
};

module.exports = generateMarkdown;
