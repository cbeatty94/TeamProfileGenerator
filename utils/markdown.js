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

const generateEngineer = function (engineer) {
    return `
    <div class='col'>
        <div class='card'>
            <div class='card-body'>
                <h5 class='card-title'>Manager</h5>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">Name: ${engineer.name}</li>
                <li class="list-group-item">Employee ID: ${engineer.id}</li>
                <li class="list-group-item">Email: <a href = 'mailto: ${engineer.email}'>${engineer.email}</a> </li>
                <li class="list-group-item">GitHub Account: <a href = 'github.com/${engineer.githubUser}</li>
            </ul>
        </div>
    </div>
    `
}

const generateIntern = function (intern) {
    return `
    <div class='col'>
        <div class='card'>
            <div class='card-body'>
                <h5 class='card-title'>Manager</h5>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">Name: ${intern.name}</li>
                <li class="list-group-item">Employee ID: ${intern.id}</li>
                <li class="list-group-item">Email: <a href = 'mailto: ${intern.email}'>${intern.email}</a> </li>
                <li class="list-group-item">School: ${intern.school}</li>
            </ul>
        </div>
    </div>
    `
}

generateHTML = (data) => {
    cardArray = [];

    for (let index = 0; index < data.length; index++) {
        const employee = data[index];
        const role = employee.getRole();

        if (role === 'Manager') {
            const managerCard = generateManager(employee);

            cardArray.push(managerCard);
        } else if (role === 'Engineer') {
            const engineerCard = generateEngineer(employee);

            cardArray.push(engineerCard);
        } else if (role === 'Intern') {
            const internCard = generateIntern(employee);

            cardArray.push(internCard);
        }
        
    }
}
const generateTeamProfile = function (data) {
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

module.exports = generateHTML;