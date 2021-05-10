const inquirer = require("inquirer");
const questions = require('./src/questions');
const createHTML = require('./src/createHTML');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

//function to initialize program
async function init() {
    const employees = {};
    const manager = await getManager();
    const { engineers, interns } = await getEmployees();

    employees.manager = manager;
    employees.engineers = engineers;
    employees.interns = interns;

    console.log("These are the employees:", employees);

    createHTML(employees);
}

async function getManager() {
    const manager = await inquirer.prompt(questions.teamManager);
    return new Manager(manager.id, manager.name, manager.email, manager.officeNumber);
}

async function getEmployees() {
    const engineers = [];
    const interns = [];
    let finish;

    do {
        const { typeOfEmployee } = await inquirer.prompt(questions.typeOfEmployee);
    
        switch (typeOfEmployee) {
            case 'Engineer':
                const engineer = await inquirer.prompt(questions.engineer);
                engineers.push(new Engineer(engineer.id, engineer.name, engineer.email, engineer.github));
                break;
                
            case 'Intern':
                const intern = await inquirer.prompt(questions.intern);
                interns.push(new Intern(intern.id, intern.name, intern.email, intern.school));
                break;
    
            case 'Finish building team':
                finish = true;
                break;
        }
    } while (!finish);

    return { engineers, interns };
}

//function call to initialize program
init();
