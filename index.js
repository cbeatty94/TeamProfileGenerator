const inquirer = require('inquirer')
const fs = require('fs')


const employees = [];

init = () => {
    console.log('Welcome to my team profile generator! Answer the following questions to begin building your team: ')
    return inquirer.prompt([
        {
            type: 'input',
            message: 'Who is the team manager?',
            name: 'name'
        },

        {
            type: 'input',
            message: "What is the manager's employee ID?",
            name: 'id'
        },

        {
            type: 'input',
            message: "What is the manager's email address?",
            name: 'email'
        },
        {
           type: 'input',
           message: "What is the manager's office number?",
           name: 'officeNumber' 
        }
    ])
}

employeeType = () => {
    console.log('Choose a role for new employee!')
    return inquirer.prompt([
        {
            type: 'rawlist',
            message: 'Choose employee role: ',
            name: 'employeeRole',
            choices: [
                'Engineer',
                'Intern'
            ],
        }
    ])
}
init();