// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'MIT') {
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]`
  } else if (license === 'Apache'){
    return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]'
  } else if (license === 'BSD'){
    return '[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)]'
  } else
   return ""
 
} 

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'MIT') {
    return `[Click here for more information](https://opensource.org/licenses/MIT)`
} else if (license === 'Apache'){
  return `[Click here for more information](https://opensource.org/licenses/Apache-2.0)`
} else if (license === 'BSD'){
  return  '[Click here for more information](https://opensource.org/licenses/BSD-2-Clause)'
} else
return ""
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'MIT') {
    return `This project is cover under the license type ${license}`
} else if (license === 'Apache'){
   return `This project is cover under the license type ${license}`
} else if (license ==='BSD') {
  return `This project is cover under the license type ${license}`
}
return ""
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ${renderLicenseBadge(data.license)}

  ## Description:
  ${data.description}

  ## Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contribution](#contribution)
  - [Testing](#testing)
  - [Questions](#questions)

  ## Installation:
  ${data.installation}

  ## Usage:
  ${data.usage}

  ## License:
  ${renderLicenseSection(data.license)}
  ${renderLicenseLink(data.license)}

  ## Contribution:
  ${data.contribution}

  ## Testing:
  ${data.testing}

  ## Questions:
  - Github: [${data.github}](https://github.com/${data.github})
  - Email: ${data.email} `;
}

module.exports = generateMarkdown;
