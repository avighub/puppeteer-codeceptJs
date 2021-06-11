const { setHeadlessWhen } = require('@codeceptjs/configure');

// turn on headless mode when running with HEADLESS=true environment variable
// HEADLESS=true npx codecept run
setHeadlessWhen(process.env.HEADLESS);

exports.config = {
  tests: 'Testcases/**/*_test.js',
  output: './output',
  helpers: {
    Puppeteer: {
      url: 'http://todomvc.com/examples/angularjs',
      show: true,
      windowSize: '1536x700',
      chrome: {
        "args": [
          "--window-size=1530,810"
        ]
      }
    },
    REST: {
      // require: './helpers/rest_helper.js',
      endpoint: 'https://reqres.in/api/users?page=2',
      onRequest: (request) => {
        // request.headers.auth = '123';
      }
    },
    ChaiWrapper: {
      require: "codeceptjs-chai"
    }
  },
  include: {
    I: './steps_file.js',
    to_do_pageObjectPage: './pages/to_do_pageObjectPage.js'
  },
  bootstrap: null,
  mocha: {},
  name: 'CodeceptJS-puppeteer-framework',
  plugins: {
    retryFailedStep: {
      enabled: true
    },
    screenshotOnFail: {
      enabled: true
    }
  }
}