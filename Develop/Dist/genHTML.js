function genHTML() {
    return `
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
    <title>Team Information</title>
</head>

<body>
   <nav class="navbar bg-primary">
    <div class="container-fluid justify-content-center">
        <h1 class="navbar-brand">My Team</h1>
    </div>
</nav>
<div class="container-fluid d-flex justify-content-center" style="margin-top:20px">
    <div class="row d-flex justify-content-center"></div>
</div>

</body>
</html>
   `
}
module.exports = genHTML;

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

function engineerHTML(response) {
    return `
<div class="col">
     <div class="card">
          <div class="card-header">${response.name}</div>
                <div class="card-body">
                    <ul style="list-style:none">
                        <li>${response.id}</li>
                        <li>${response.email}</li>
                        <li>${response.git}</li>
                    </ul>
               </div>
           </div>
      </div>
</div>`
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
