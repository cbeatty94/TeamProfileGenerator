const generateManager = function (manager) {
    return `
    <div class='col'>
        <div class='card'>
            <div class='card-body'>
                <h5 class='card-title'>Manager</h5>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">Name: ${manager.name}</li>
                <li class="list-group-item">Employee ID: ${manager.id}</li>
                <li class="list-group-item">Email: <a href = 'mailto: ${manager.email}'>${manager.email}</a> </li>
                <li class="list-group-item">Office Number: ${manager.officeNumber}</li>
            </ul>
        </div>
    </div>
    `
}

const generateHTML = function (data) {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x" crossorigin="anonymous">
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
        <title> Team Profile Generator </title>
    </head>
    <body>
        <h1>Team Profile Generator</h1>
        <div class='container'>
            <div class="row row-cols-1 row-cols-md-3 g-4">
            ${employeeCards}
            </div>
        </div>
    </body>
    </html>    
    `
}