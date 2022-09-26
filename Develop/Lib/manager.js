const fs = require('fs');
const inquirer = require('inquirer');
const Employee = require('./employee');


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
            },
            {
                type: 'list',
                message: "What is the next employee's title",
                name: 'position',
                choices: ["Engineer", "Intern"],
            }

        ])
        .then((response) => {
            fs.appendFile('index.html', managerHTML(response), (err) => {
                if (err === true) {
                    console.log("Error")
                } else {
                    if (response.position === "Engineer") {
                        return engineerPrompt();
                    } else {
                        return internPrompt();
                    }
            }
        }

    )
})

function managerHTML(response) {
    return `
    <div class="col">
            <div class="card">
                 <div class="card-header">${response.name}</div>
                 <div class="card-body">
                    <ul style="list-style:none">
                        <li>${response.id}</li>
                        <li>${response.email}</li>
                        <li>${response.office}</l>
                    </ul>
                 </div>
            </div>
        </div>`
}


module.exports = managerPrompt;




