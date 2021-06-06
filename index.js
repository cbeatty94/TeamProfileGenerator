const inquirer = require('inquirer')
const fs = require('fs')


const employees = [];

const addManager = () => {
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
    ]).then((managerResults) => {
        const { name, id, email, officeNumber } = managerResults;
        const manager = new Manager (name, id, email, officeNumber);
        employees.push(manager);
        console.log(manager);
    })
};

const addEmployee = () => {
    console.log('Add employee info!')
    return inquirer.prompt([
        {
            type: 'list',
            message: 'Select employee role: ',
            name: 'role',
            choices: [
                'Engineer',
                'Intern'
            ]
        },
        {
            type: 'input',
            message: 'Employee name: ',
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
            message: 'Enter their GitHub username: ',
            name: 'githubUser',
            when: (input) => input.role === 'Engineer'
        },
        {
            type: 'input',
            message: 'Enter Intern School: ',
            name: 'school',
            when: (input) => input.role === 'Intern'
        },
        {
            type: 'confirm',
            message: 'Add more team members?',
            name: 'addNewEmployee',
            default: false
        }
    
    ]).then(employeeData => {
        let { name, id, email, githubUser, school, addNewEmployee } = employeeData;
        let employee;

        if (role === 'Engineer') {
            employee = new Engineer ( name, id, email, githubUser, addNewEmployee )
        } else if (role === 'Intern') [
            employee = new Intern ( name, id, email, school, addNewEmployee )
        ]

        employees.push(employee);

        if (addNewEmployee) {
            return addNewEmployee(employees)
        } else {
            return employees
        }
    })
}

