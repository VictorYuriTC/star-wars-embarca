# About Embarca Wars

- Deployed version is available [here](https://embarca-wars.netlify.app/).

- [Embarca Wars](https://embarca-wars.netlify.app/) is a project developed by [Victor Camargo](https://victorcamargodev.com) and it is part of [Embarca](https://embarca.ai) recruitment process.

- Here, you can learn details related to Star Wars characters.

- Join [Embarca](https://embarca.ai) and embark with us on this space trip! 🚌

# Technologies

- Following technologies, libraries, and tools were used to develop this project:
  - HTML & CSS
  - TypeScript
  - Next.js
  - Tailwind
  - Redux
  - Cypress
  - Schema.org
  - Netlify
  - Git
  - GitHub

# Setup

- Requirements:
  - [Node](https://nodejs.org/en) installed
  - [npm](https://www.npmjs.com/) (or a different package manager) installed
- If you want to run and/or test this project locally, please:
  - clone this repo
  - run `npm install` on root folder to install all dependencies
  - run `npm run dev` on root folder to run the project
  - open a new browser tab and navigate to `http://localhost:3000`
  - enjoy it! 😃
  - (**optional**) in a new terminal tab and with the project still running, run `npm run test:all` on root folder to execute all E2E tests

# Testing

- **IMPORTANT**: project **must** be running in order to successfully run tests suites. Before executing any command related to `npm run test`, please:
  - ensure you have installed all packages running `npm install`
  - ensure the project is up and running on `localhost:3000` by running `npm run dev`
- E2E tests were added using [Cypress](https://www.cypress.io/)
- Run `npm run test:all` to run all tests
- Run `npm run test:home` to test `/` page
- Run `npm run test:characters` to test `/characters` page
- Run `npm run test:characters-id` to test `/characters/[id]` pages
- Check `package.json` file to see more about testing
