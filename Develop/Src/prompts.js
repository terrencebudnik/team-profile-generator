const inquirer  = require('inquirer');
const managerHTML = require('../Dist/genHTML.js');
const engineerHTML = require('../Dist/genHTML.js');
const internHTML = require('../Dist/genHTML.js');


function managerPrompt() {
    inquirer
        .prompt([
            {
                type: 'input',
                message: "What is manager's name",
                name: 'name',
            },
            {
                type: 'input',
                message: "What is the manager's ID number?",
                name: 'idNumber',
            },
            {
                type: 'input',
                message: "What is the manager's email address?",
                name: 'email',
            },
            {
                type: 'input',
                message: "What is manager's office number?",
                name: 'office',
            }
        ])
        .then((response) => {
            managerHTML(response)
        })
        .then(addEmployee())
}

function addEmployee() {
    inquirer.
        prompt([
            {
                type: 'confirm',
                message: "Would you like to add an additional team member?",
                name: 'new',
            }
                .then((response) => {
                    if (response.new === true) {
                        employeeType();
                    } else {
                        console.log("Check out your new team page!")
                     }

                })

        ])
}

function employeeType() {
    inquirer.
        prompt([
            {
                type: 'list',
                message: "What is the next employee's title",
                name: 'position',
                choices: ["Engineer", "Intern"],
            }
                .then((response) => {
                    if (response.position === "Engineer") {
                        engineerPrompt();
                    } else {
                        internPrompt();
                    }
                })
        ])
}


function engineerPrompt() {
    inquirer
        .prompt([
            {
                type: 'input',
                message: "What is Engineer's name",
                name: 'name',
            },
            {
                type: 'input',
                message: "What is the Engineer's ID number?",
                name: 'idNumber',
            },
            {
                type: 'input',
                message: "What is the Engineer's email address?",
                name: 'email',
            },
            {
                type: 'input',
                message: "What is the employee's GitHub?",
                name: 'github',
            }

        ])

        .then((response) => {
            engineerHTML(response)
        })
        .then(addEmployee())
}

function internPrompt() {
    inquirer
        .prompt([
            {
                type: 'input',
                message: "What is manager's name",
                name: 'name',
            },
            {
                type: 'input',
                message: "What is the manager's ID number?",
                name: 'idNumber',
            },
            {
                type: 'input',
                message: "What is the manager's email address?",
                name: 'email',
            },
            {
                type: 'input',
                message: "What is the intern's current University?",
                name: 'school',
            }
        ])

        .then((response) => {
            internHTML(response)
        })
        .then(addEmployee())
}

module.exports = managerPrompt; 