const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
    {
        type: 'input',
        name: 'name',
        message: 'What is your github username? (Required)',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter your username!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'profile',
        message: 'What is your github profile url? (Required)',
        validate: profileInput => {
            if (profileInput) {
                return true;
            } else {
                console.log('Please enter your url!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter the your email for others to contact you (Required)',
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log('Please enter your email address!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'title',
        message: 'What is the name of your project?',
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log('Please enter project title!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide a description of the project (Required)',
        validate: descriptionInput => {
            if (descriptionInput) {
                return true;
            } else {
                console.log('Please enter description!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'install',
        message: 'What are the steps required to install your project? (Required)',
        validate: installInput => {
            if (installInput) {
                return true;
            } else {
                console.log('Please enter installation steps!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide instructions and examples for use. (Required)',
        validate: usageInput => {
            if (usageInput) {
                return true;
            } else {
                console.log('Please enter how to use info!');
                return false;
            }
        }
    },
    {
        type: 'confirm',
        name: 'confirmContribute',
        message: 'Would you like others to contribute to your project?',
        default: false
    },
    {
        type: 'input',
        name: 'contribute',
        message: 'Please explain the steps for others to contribute',
        when: ({ confirmContribute }) => {
            if (confirmContribute) {
                return true;
            } else {
                return false;
            }
        }
    },
    {
        type: 'checkbox',
        name: 'license',
        message: 'Would you like to add a license?',
        choices: ['GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'MIT', 'Boost Software License 1.0', 'The Unlicense'],
    },
];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile('./README.md', data, (err) => {
        // if there's an error, throw the error
        if(err){
            throw err;
        }
        console.log("done")
    });
};

// function to initialize program
function init() {
    inquirer.prompt(questions)
        .then(readmeData => {
            return generateMarkdown(readmeData);
        })
        .then(readmePage => {
            return writeToFile('./README.md',readmePage);
        })
        .catch(err => {
            console.log(err);
        });
};

// function call to initialize program
init();
