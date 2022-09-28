const fs = require('fs');
const inquirer  = require('inquirer');

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
            const manager = new Manager(response.name, response.id, response.email, response.office);
            employeeList.push(manager);
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
                    } else { }

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
            const engineer = new Engineer(response.name, response.id, response.email, response.github);
            employeeList.push(engineer);
        })
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
            const engineer = new Engineer(response.name, response.id, response.email, response.github);
            employeeList.push(engineer);
        })
}

module.exports = {
    managerPrompt
}