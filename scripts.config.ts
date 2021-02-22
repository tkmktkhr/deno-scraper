import { DenonConfig } from "https://deno.land/x/denon/mod.ts";
import { config as env } from "https://deno.land/x/dotenv/mod.ts";

const config: DenonConfig = {
  allow: {
    net: true,
    env: true,
    read: "./src/db",
    write: "./src/db"
  },
  scripts: {
    start: {
      cmd: "deno run -c tsconfig.json ./src/app.ts",
      desc: "Run the main server",
      env: env(),
      watch: true
    },
    debug: {
      cmd: "deno run --inspect -c tsconfig.json ./src/app.ts",
      desc: "Run the main server in debug mode",
      env: env(),
      watch: true
    }
  },
  watcher: {
    interval: 350,
    exts: [
      "ts",
      "json"
    ],
    match: ["*.*"],
    skip: ["*/.git/*", "./db/*"]
  },
};

export default config;