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

function 