const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown')
const fs = require('fs');
const { type } = require('os');
const { log } = require('console');

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
//description input
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
},
//instalation input
{
    type: 'input',
    name: 'installation',
    message: 'Provide an instalin guide for your project. (Required)',
    validate: installationInput => {
        if(installationInput){
            return true;
        } else{
            console.log('Please provide installation information about this project');
            return false;
        }
    }
},
//usage input 
{
    type:'input',
    name: 'usage',
    message:'How can the user use this project? (Required)',
    validate: usageInput => {
        if(usageInput){
            return true;
        } else {
            console.log('Provide information on how to use the project!');
            return false;
        }
    }
},
//contribution input
{
    type: 'input',
    name: 'contributiion',
    message: 'How and who can contribute on this project? (Required)',
    validate: contributionInput =>{
        if(contributionInput){
            return true;
        }else{
            console.log('Please provide information how users can contribute on this project');
            return false;
        }
    }

},
//licensing input
{
    type:'checkbox',
    name: 'license',
    message: 'Pick a license for this project(Required)',
    choices: ['MIT','Apache 2.0', 'BSD','GPL','None' ],
    validate: licenseInput =>{
        if (licenseInput){
            return true;
        }else{
            console.log('Pick a license for your project !');
            return false;
        }
    }
},
//github input
{
    type: 'input',
    name: 'github',
    message: 'Enter your github username (Required)',
    validate: githubInput =>{
        if(githubInput){
            return true;
        }else{
            console.log("A github username is required! ");
            return false;
        }
    }
},
//email input
{
    type:'input',
    name: 'email',
    message: 'Enter your email for updates and contact',

},
    


];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
