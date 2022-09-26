const fs = require('fs');
const Employee = require('./employee');


inquirer
  .prompt([
    {
      type: 'input',
      message: "What is the intern's current University?",
      name: 'school',
    }

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
    