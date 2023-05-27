export const config: WebdriverIO.Config = {
  runner: "local",
  autoCompileOpts: {
    autoCompile: true,
    tsNodeOpts: {
      transpileOnly: true,
      project: "./tsconfig.json",
    },
  },
  specs: ["./src/tests/**/*.ts"],
  exclude: [],
  maxInstances: 10,
  capabilities: [
    {
      maxInstances: 5,
      //
      browserName: "chrome",
      acceptInsecureCerts: true,
    },
  ],
  logLevel: "info",
  bail: 0,
  baseUrl: "http://the-internet.herokuapp.com",
  waitforTimeout: 10000,
  connectionRetryTimeout: 120000,
  connectionRetryCount: 3,
  services: [
    [
      "selenium-standalone",
      {
        args: {
          seleniumArgs: ["--host", "127.0.0.1", "--port", "5555"],
        },
      },
    ],
  ],
  framework: "mocha",
  mochaOpts: {
    ui: "bdd",
    timeout: 90000,
  },
  reporters: [
    "spec",
    [
      "allure",
      {
        outputDir: "allure-results",
        disableWebdriverStepsReporting: true,
        disableWebdriverScreenshotsReporting: true,
      },
    ],
  ],
};
