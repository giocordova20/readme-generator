// function to generate markdown for README
function generateMarkdown(data) {

  // console.log("");
  // console.log("============");
  // console.log("In the generateMarkdown function")
  // console.log("answers:" , data);
  // console.log("============");
  // console.log("");

  return `
# ${data.projectTitle}
![GitHub](https://img.shields.io/github/license/${data.github}/${data.repo}?color=green)

## Descripttion 
${data.description}

## Table of Contents
[Installation Instructions](#installation)
[Usage](#usage)
[Contributing to this Application](#contributing)
[How to test](#how-to-test)
[License](#license)
[Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

${data.screenshot1desc}
![screenshot1](${data.screenshot1})

${data.screenshot2desc}
![screenshot1](${data.screenshot2})


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
