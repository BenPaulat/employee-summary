const inquirer = require('inquirer');

const managerQuestions = [
    {
        type: 'input',
        name: 'mgrName',
        message: "What is the team manager's name?"
    },
    {
        type: 'input',
        name: 'mgrId',
        message: "What is the team manager's emplyee ID?"
    },
    {
        type: 'input',
        name: 'mgrEmail',
        message: "What is the team manager's Email address?"
    },
    {
        type: 'input',
        name: 'mgrPhone',
        message: "What is the team manager's office phone number?"
    }]

function Manager(name, id, email, phone) {
    inquirer.prompt(managerQuestions)
}

module.exports = Manager;