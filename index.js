const inquirer = require("inquirer");
const fs = require("fs");
const Employee = require('./lib/Employee');
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");


const { generateHtml, createManagerHtml, createEngineersHtml, createInternsHtml } = require("index.js");

const questions = {
    manager: [
        {
            type: "input",
            name: "managerName",
            message: " manager's name?",
            validate: answer => {
                if (answer !== "") {
                    return true
                } else {
                    return " the manager's name."
                }
            }
        },
        {
            type: "input",
            name: "managerId",
            message: " manager's ID number?",
            validate: answer => {
                if (answer !== "") {
                    return true
                } else {
                    return " the manager's ID number."
                }
            }
        },
        {
            type: "input",
            name: "managerEmail",
            message: "manager's email address?",
            validate: answer => {
                if (answer !== "") {
                    return true
                } else {
                    return " manager's email address."
                }
            }
        },
        {
            type: "input",
            name: "office Phone",
            message: " manager's office phone number?",
            validate: answer => {
                if (answer !== "") {
                    return true
                } else {
                    return " manager's office phone number."
                }
            }
        }
    ],

    engineer: [
        {
            type: "input",
            name: "engineerName",
            message: " engineer's name?",
            validate: answer => {
                if (answer !== "") {
                    return true
                } else {
                    return " the engineer's name."
                }
            }
        },
        {
            type: "input",
            name: "engineerId",
            message: " engineer's ID?",
            validate: answer => {
                if (answer !== "") {
                    return true
                } else {
                    return "engineer's ID."
                }
            }
        },
        {
            type: "input",
            name: "engineerEmail",
            message: "engineer's email?",
            validate: answer => {
                if (answer !== "") {
                    return true
                } else {
                    return " enter the engineer's email."
                }
            }
        },
        {
            type: "input",
            name: "github",
            message: " engineer's GitHub ?",
            validate: (answer) => {
                if (answer !== "") {
                    return true
                } else {
                    return "enter the engineer's GitHub."
                }
            }
        }
    ],

    intern: [
        {
            type: "input",
            name: "internName",
            message: "intern's name?",
            validate: answer => {
                if (answer !== "") {
                    return true
                } else {
                    return "enter the intern's name."
                }
            }
        },
        {
            type: "input",
            name: "internId",
            message: "intern's ID?",
            validate: answer => {
                if (answer !== "") {
                    return true
                } else {
                    return "enter the intern's ID."
                }
            }
        },
        {
            type: "input",
            name: "internEmail",
            message: "intern's email address?",
            validate: answer => {
                if (answer !== "") {
                    return true
                } else {
                    return "enter the intern's email."
                }
            }
        },
        {
            type: "input",
            name: "school",
            message: "What school does the intern attend?",
            validate: answer => {
                if (answer !== "") {
                    return true
                } else {
                    return " enter the intern's school."
                }
            }
        }
    ],

    addEmployee: [
        {
            name: "addEmployee",
            type: "list",
            message: "Do you want to add another employee?",
            choices: ["Add Engineer", "Add Intern", "Done creating team"]
        }
    ]
};


function createTeam() {
    inquirer.createPromptModule(questions.manager).then(data => {
        const manager = new Manager(data.managerName, data.managerID, data.managerID, data.officePhone);
        addMember(manager, [], []);
    });
}

function addMember(manager, engineers, interns) {
    inquirer.prompt(questions.addEmployee).then(data => {
        if (data.addEmployee === "Add Engineer") {
            inquirer.prompt(questions.engineer).then(data => {
                const engineer = new Engineer(data.engineerName, data.engineerId, data.engineerEmail, data.github);
                engineers.push(engineer);
                addMember(manager, engineers, interns);
            })
        } else if (data.addEmployee === "Add Intern") {
            inquirer.prompt(questions.intern).then(data => {
                const intern = new Intern(data.internName, data.internId, data.internEmail, data.school);
                interns.push(intern);
                addMember(manager, engineers, interns);
            })
        } else {

            const managerHtml = createManagerHtml(manager);
            const engineersHtml = createEngineersHtml(engineers);
            const internsHtml = createInternsHtml(interns);

            fs.writeFile("index.html", generateHtml(managerHtml, engineersHtml, internsHtml), (err) =>
                err ? console.error(err) : console.log("Team created!")
            );
        }
    })
}


createTeam();