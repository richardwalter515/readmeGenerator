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
    //create licenseBadge variable to add to template
    if (answers.license = "Apache License 2.0") {
      var licenseBadge = `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
    } else if (answers.license = "GNU General Public License v3.0") {
      var licenseBadge = `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`
    } else if (answers.license = "MIT License") {
      var licenseBadge = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
    } else if (answers.license = "BSD 2-Clause 'Simplified' License") {
      var licenseBadge = `[![License](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)`
    } else if (answers.license = "BSD 3-Clause 'New' or 'Revised' License") {
      var licenseBadge = `[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`
    } else if (answers.license = "Boost Software License 1.0") {
      var licenseBadge = `[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)`
    } else if (answers.license = "Creative Commons Zero v.1.0 Universal") {
      var licenseBadge = `[![License: CC0-1.0](https://img.shields.io/badge/License-CC0%201.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/)`
    } else if (answers.license = "Eclipse Public License 2.0") {
      var licenseBadge = `[![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)](https://opensource.org/licenses/EPL-1.0)`
    } else if (answers.license = "GNU Affero General Public License v3.0") {
      var licenseBadge = `[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)`
    } else if (answers.license = "GNU General Public License v2.0") {
      var licenseBadge = `[![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)`
    }else if (answers.license = "Mozilla Public License 2.0") {
      var licenseBadge = `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`
    } else if (answers.license = "The Unlicense") {
      var licenseBadge = `[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)`
    }
  var dataDisplay = `
  # ${answers.title} ${licenseBadge}
  
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

});
