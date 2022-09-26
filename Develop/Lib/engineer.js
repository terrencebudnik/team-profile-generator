const fs = require('fs');
const Employee = require('./employee');

class Engineer extends Employee {
    constructor(git) {
        this.git = git;
    }
}

inquirer
  .prompt([
    {
      type: 'input',
      message: "What is the employee's GitHub?",
      name: 'git',
    },



    function engineerHTML(response) {
        return `
        <div class="col">
                <div class="card">
                     <div class="card-header">${response.name}</div>
                     <div class="card-body">
                        <ul style="list-style:none">
                            <li>${response.id}</li>
                            <li>${response.email}</li>
                            <li>${response.git}</l>
                        </ul>
                     </div>
                </div>
            </div>`
    }
    