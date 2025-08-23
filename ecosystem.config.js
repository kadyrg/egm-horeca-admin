const { resolve } = require("path");

module.exports = {
  apps: [
    {
      name: "admin-app",
      script: "npm",
      args: "start",
      cwd: resolve(__dirname, "."),
      env: {
        NODE_ENV: "production",
        PORT: "3001",
      },
      watch: false,
    },
  ],
};
