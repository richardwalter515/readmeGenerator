var inquirer = require("inquirer");
var fs = require("fs");

// array of questions for user
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is your project title?"
      },
      {
        type: "input",
        name: "description",
        message: "Please enter a description of your project"
      },
      {
        type: "input",
        name: "inst",
        message: "Please enter any installation instructions"
      },
      {
        type: "input",
        name: "usage",
        message: "Please enter any usage information"
      },
      {
        type: "input",
        name: "contribute",
        message: "Please enter any instructions on how to contribute to the project"
      },
      {
        type: "input",
        name: "test",
        message: "Please enter any testing instructions"
      },
      {
        type: "list",
        message: "Please select a license from the following list",
        name: "license",
        choices: [
          "None",
          "Apache License 2.0",
          "GNU General Public License v3.0",
          "MIT License",
          "BSD 2-Clause 'Simplified' License",
          "BSD 3-Clause 'New' or 'Revised' License",
          "Boost Software License 1.0",
          "Creative Commons Zero v.1.0 Universal",
          "Eclipse Public License 2.0",
          "GNU Affero General Public License v3.0",
          "GNU General Public License v2.0",
          "GNU Lesser General Public License v2.1",
          "Mozilla Public License 2.0",
          "The Unlicense"
        ]
      },
      {
        type: "input",
        name: "github",
        message: "What is your GitHub username?"
      },
      {
        type: "input",
        name: "email",
        message: "What is your email address?"
      },
];

inquirer.prompt(questions)
// function to write README data
.then(function(answers){
  var dataDisplay = `
  # ${answers.title}
  
  ## Table of Contents
  1. [Description](#description)
  2. [Installation](#installation)
  3. [Usage](#usage)
  4. [Contributing](#contributing)
  5. [Tests](#tests)
  6. [License](#license)
  7. [Questions](#questions)
  
  
  
  ## Description <a name="description"></a>
  ${answers.description}
  
  
  ## Installation <a name="installation"></a>
  ${answers.inst}
  
  
  ## Usage <a name="usage"></a>
  ${answers.usage}
  
  
  ## Contributing <a name="contributing"></a>
  ${answers.contribute}
  
  
  ## Tests <a name="tests"></a>
  ${answers.test}
  
  
  ## License <a name="license"></a>
  This project is licensed under the terms of the ${answers.license}
  
  
  ## Questions <a name="questions"></a>
  If you have any questions, you may reach out to me at ${answers.email}
  Please visit me on [GitHub](https://www.github.com/${answers.github})
  
`
let fileName = answers.title.toLowerCase().split(' ').join('') + ".md";
fs.writeFile(fileName, dataDisplay, (err) => {
  if (err) {
    throw err
  }
});

})
  // function to write README file


// function to initialize program
// function init() {

// }

// function call to initialize program
// init();
