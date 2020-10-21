const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const { title } = require("process");
const generateMarkdown=require("./utils/generateMarkdown.js")
const writeFileAsync = util.promisify(fs.writeFile);

// array of questions for user
const questions = [
      {
        type: "input",
        name: "projectTitle",
        message: "What is the name of your application?"
      },
      {
        type: "input",
        name: "description",
        message: "Please enter a description of your application. What it does and any items to note."
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
        name: "screenshot1",
        message: "Would you like to insert a screenshot or gif to the Usage section? \n  Provide file location: './filelocation.jpeg' \n  "
      },
      {
        type: "input",
        name: "screenshot1desc",
        message: "Would you like to enter a description for the first screenshot or gif in the Usage section? \n  Press Enter/Return leave the description blank. \n  "
      },
      {
        type: "input",
        name: "video",
        message: "Insert a link to a hosted video demo of the application if you have one?"
      },
      {
        type: "input",
        name: "videodesc",
        message: "Would you like to enter a description for the second screenshot or gif in the Usage section? \n  Press Enter/Return leave the description blank. \n  "
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
        message: "Which licene is the application covered under?",
        choices: [
          "MIT", 
          "GPLv3", 
          "Apache", 
          "Other"
        ]
      },
      {
        type: "input",
        name: "github",
        message: "Enter your GitHub Username: "
      },
      {
        type: "input",
        name: "repo",
        message: "Enter your GitHub Repository: "
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


// function to initialize program
async function init() {
  console.log("")
  try {
    const answers = await promptUser();
    const readme = generateMarkdown(answers);

    console.log("");
    console.log("README console.log \n", readme);
    console.log(" ");
    
    await writeFileAsync("../README.md", readme);
    
    console.log("Successfully wrote to READM.md");
    console.log("");

  } catch(err) {
    console.log(err);
  }
};

// Function call to initialize program
init();

