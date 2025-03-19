const { defineConfig } = require("cypress");
const { soaprequest } = require('./cypress/task/soap')

module.exports = defineConfig({
  e2e: {
    env:{
      grepFilterSpecs: true,
      baseUrl: 'http://localhost:3001/'
    },
    fixturesFolder: false,
    setupNodeEvents(on, config) {
      require('@cypress/grep/src/plugin')(config);
      on('task', {
        soaprequest
      })
      return config;
    },
  },
});
