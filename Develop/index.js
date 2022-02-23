const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown')
const fs = require('fs');
const { type } = require('os');

// An array of questions for user input
const questions = [{
    type: 'input',
    name: 'title',
    message: 'Enter the title of the project : (Required)',
    validate: titleInput => {
        if (titleInput){
            return true;
        } else{
            console.log('Please enter a title to continue!');
            return false
        }
    } 
},
{
    type: 'input',
    name: 'description',
    message : 'Give a brief description of your project (Required)',
    validate: descriptionInput =>{
        if (descriptionInput){
            return true;
        } else {
            console.log('Please give a description for your project');
            return false ;
        }
    }
}

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
