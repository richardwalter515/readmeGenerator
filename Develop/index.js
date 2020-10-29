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
          "email",
          "phone",
          "telekinesis"
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

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
