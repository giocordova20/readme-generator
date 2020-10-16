const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const writeFileAsync = util.promisify(fs.writeFile);

// array of questions for user
const questions = [
    {
        type: "input",
        name: "project title",
        message: "What is the name of your application?"
      },
      {
        type: "input",
        name: "description",
        message: "Please enter a description of your application. What is does and any items to note."
      },
      {
        type: "input",
        name: "installation",
        message: "Are there any installation instructions?"
      },
      {
        type: "input",
        name: "usage",
        message: "How can a user utilize this application?"
      },
      {
        type: "input",
        name: "contribution",
        message: "Are there any instructions for contributing to this application?"
      },
      {
        type: "input",
        name: "test",
        message: "Are there any instructions for testing this application?"
      },
      {
        type: "checkbox",
        name: "licenses",
        message: "Which licene(s) is the application covered under?",
        choices: [
          "MIT", 
          "GPLv2", 
          "Apache", 
          "Other"
        ]
      },
      {
        type: "input",
        name: "github",
        message: "Enter your GitHub Username"
      },
      {
        type: "input",
        name: "email",
        message: "What is your email address?"
      }
];

function promptUser (){
  return inquirer.prompt(questions)
};

// function to write README file
function writeToFile(fileName, data) {
}



function generateREADME(answers) {
  return `

  `;
};

// function to initialize program
async function init() {
  console.log("  - Hi - ")
  try {
    const answers = await promptUser();

    // const readme = generateREADME(answers);

    // await writeFileAsync("README.md", readme);

    console.log("answers", answers)
    // console.log("Successfully wrote to READM.ms");
  } catch(err) {
    console.log(err);
  }
};

// function call to initialize program
init();

