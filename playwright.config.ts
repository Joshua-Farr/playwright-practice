import { PlaywrightTestConfig } from "@playwright/test";

const config: PlaywrightTestConfig = {
  testDir: "./tests",
  use: {
    headless: false,
    screenshot: "on",
    video: "retain-on-failure",
  },
  retries: 0, // If there is a failure, it will try X more times
  reporter: [
    ["dot"],
    [
      "json",
      {
        outputFile: "jsonReports/jsonReport.json",
      },
    ],
    [
      "html", //Creates webpage with html output describing test results
      {
        open: "always",
      },
    ],
  ],
};

export default config;
