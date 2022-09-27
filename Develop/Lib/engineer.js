const fs = require('fs');
const Employee = require('./employee');
const employeeList = [];

class Engineer extends Employee {
    constructor(github) {
      this.github = github;
    }
    getRole(){
        return 'Engineer';
    }
    getGithub(){
        return this.getGithub; 
    }
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

    







    // function engineerHTML(response) {
    //     return `
    //     <div class="col">
    //             <div class="card">
    //                  <div class="card-header">${response.name}</div>
    //                  <div class="card-body">
    //                     <ul style="list-style:none">
    //                         <li>${response.id}</li>
    //                         <li>${response.email}</li>
    //                         <li>${response.git}</l>
    //                     </ul>
    //                  </div>
    //             </div>
    //         </div>`
    // }
