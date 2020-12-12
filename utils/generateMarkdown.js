// function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title.toUpperCase()}

  ## Badges
  insert badges here
  ![badmath](https://img.shields.io/github/languages/top/nielsenjared/badmath)

  ## Description

  ${data.description} 


  ## Table of Contents

    * [Installation](#installation)
    * [Usage](#usage)
    * [Contributing](#contributing)
    * [Questions](#questions)
    * [License](#license)



    ## Installation

    ${data.install} 


    ## Usage 

    ${data.usage}


    ## Contributing


    ${data.contribute}
 

    ## Tests

    Go the extra mile and write tests for your application. Then provide examples on how to run them.

    
    ## Questions

    You can find more of my projects by clicking on this link --> [${data.name}](${data.profile})

    If you have any questions you  can reach out to me via emial at ${data.email}


    ## License

    Licensed under the ${data.license} license.
`;
}

module.exports = generateMarkdown;
