const { defineConfig } = require("cypress");

module.exports = defineConfig({
    env: {
    username: 'cyuser@qq.com',
    password: 'cyuserpassword',
    apiURL: 'https://conduit-api.bondaracademy.com/api'
  },
  
  e2e: {
    baseUrl: 'https://conduit.bondaracademy.com/',
    setupNodeEvents(on, config) {
      // implement node event listeners here
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
