// function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title.toUpperCase()}

  ![badge](https://img.shields.io/badge/license-${data.license}-brightgreen)<br>

  ## Description

  ${data.description} 


  ## Table of Contents

  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  * [License](#license)



  ## Installation

  ${data.install} 


  ## Usage 

  ${data.usage}


  ## Contributing


  ${data.contribute}
 

  ## Tests

  ${data.test}
    
  ## Questions

  You can find more of my projects by clicking on this link --> [${data.name}](${data.profile})

  If you have any questions you  can reach out to me via email at ${data.email}


  ## License

  ![badge](https://img.shields.io/badge/license-${data.license}-brightgreen.svg)<br>
  Licensed under the ${data.license} license.
`;
}

module.exports = generateMarkdown;
