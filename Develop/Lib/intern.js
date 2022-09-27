const fs = require('fs');
const Employee = require('./employee');

class Intern extends Employee {
    constructor(school) {
      this.school = school;
    }
    getRole(){
        return 'Intern';
    }
    getSchool(){
        return this.school; 
    }
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
        fs.appendFile('index.html', internHTML(response), (err) => {
            if (err === true) {
                console.log("Error")
            }
})

function internHTML(response) {
                return `
        <div class="col">
                <div class="card">
                     <div class="card-header">${response.name}</div>
                     <div class="card-body">
                        <ul style="list-style:none">
                            <li>${response.id}</li>
                            <li>${response.email}</li>
                            <li>${response.school}</l>
                        </ul>
                     </div>
                </div>
            </div>`
            }
