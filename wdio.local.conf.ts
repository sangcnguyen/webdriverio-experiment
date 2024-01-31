import { config as sharedConfig } from "./wdio.shared.conf.ts";

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
};
