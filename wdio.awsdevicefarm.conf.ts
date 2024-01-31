import { config as sharedConfig } from "./wdio.shared.conf.ts";
import "dotenv/config";
import { launcher } from "wdio-aws-device-farm-service";

export const config = {
  ...sharedConfig,
  ...{
    capabilities: [
      {
        browserName: "chrome",
        acceptInsecureCerts: true,
      },
    ],
  },
  /**
   * device farm service configurations
   */
  services: [
    [
      launcher,
      {
        projectArn:
          "arn:aws:devicefarm:us-west-2:840145911310:testgrid-project:bbf1b97c-912a-4540-94ee-3375abc668b6",
      },
    ],
  ],
};
