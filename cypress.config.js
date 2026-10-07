const { defineConfig } = require("cypress");

module.exports = defineConfig({
  env: {
    username: 'cyuser@qq.com',
    password: 'cyuserpassword',
    apiURL: 'https://conduit-api.bondaracademy.com/api'
  },

  reporter: 'cypress-multi-reporters',
  reporterOptions: {
    configFile: 'reporter-config.json',
  },

  e2e: {
    baseUrl: 'https://conduit.bondaracademy.com/',
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      const { plugin: cypressGrepPlugin } = require('@cypress/grep/plugin')
      cypressGrepPlugin(config)

      config.env.username = process.env.USER_NAME,
        config.env.password = process.env.USER_PASSWORD
      return config;
    },

    //retries: 2,
    retries: {
      openMode: 0,
      runMode: 1
    }
  },
  viewportWidth: 1280,
  viewportHeight: 720
});
