# Javascript test automation framework: CodeceptJS  #

### This readme will guide you to setup and execute the framework

* [Learn Markdown](https://bitbucket.org/tutorials/markdowndemo)
* Learn about CodeceptJS https://codecept.io
* Please suggest improvements by adding it in issues tab.

### framework Setup 
1. Install node js
2. npm init -y (Creates node project)
3. Install codeceptJs<br/>
https://codecept.io/quickstart/
npm install codeceptjs puppeteer --save-dev (Installs codeceptjs with puppeteer in local project, adds it in package.json)
3. Initialize codeceptjs in current directory
npx codeceptjs init
- answer all the questions in the process
(use node node_modules/.bin/codeceptjs if you have issues with npx)

### Creating frmaework structure 
4. Create page objects<br/>
npx codeceptjs gpo
- This will create page object inside pages dir and print the instruction to include the pageobject in codecept.conf.js file
- Once page object is created ex : testpageObject.js , we need to add it in codecept.conf.js<br/>
include: {
    testpageObject: './pages/testpageObject.js'
  }
5. Create a new test or use existing test that was created during npx codeceptjs init and add below const to be able to use the page object from any tests:<br/>
const { I, testpageObject } = inject();
6. To create a new test<br/>
npx codeceptjs gt
7. Set window size : <br/>
windowSize: '1536x700' (close to the size of fullscreen)
8. Run a test from Root Dir with step by step verbose<br/>
npx codeceptjs run --steps
9. Run all tests from current dir<br/> 
npx codeceptjs run without step verbose
10. Run single test [path to codecept.js] [test filename]<br/>
npx codeceptjs run github_test.js
11. Run test with config path<br/>
npx codeceptjs run github_test.js -c path_to_config\customconfig.js
12. Generate page objects<br/>
npx codeceptjs gpo

### Adding REST API HELPER 
REST helper allows to send additional requests to the REST API during acceptance tests.<br/> Axios library is used to perform requests. <br/>
1. Add REST helper in codeceptjs.conf.js <br/>
helpers: {REST: {endpoint:'https://baseurl.com' } }
2. REST helper more info :<br/>
- https://codecept.io/helpers/REST/#access-from-helpers


### Install assertion module - chai-codeceptjs
- npm install codeceptjs-chai --save --dev
- Then follow instructions from here :<br/>
https://www.npmjs.com/package/codeceptjs-chai

### Install ESLint for codeceptjs
- npm i eslint --save-dev
- npm install eslint-plugin-codeceptjs --save-dev
- npx eslint --init
- setup  .eslintrc.js<br/>
  https://www.npmjs.com/package/eslint-plugin-codeceptjs
- to run eslint : npx eslint filename.js

To-Do:
- Implement Adapter design pattern
https://www.tutorialspoint.com/design_pattern/adapter_pattern.htm


Resources:<br/>
https://codecept.io/commands/#commands (Commands)<br/>
https://github.com/codecept-js/ui Example for CodeceptUI <br/>
https://codecept.io/examples/ (CcJS examples)<br/>
https://codecept.io/configuration/ ( config)<br/>
https://davertmik.github.io/locator/ (locator strength <br/>check)
