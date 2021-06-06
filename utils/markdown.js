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