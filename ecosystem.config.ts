import { resolve } from "path";

interface PM2App {
  name: string;
  script: string;
  args?: string;
  cwd?: string;
  env?: Record<string, string>;
  watch?: boolean;
}

const apps: PM2App[] = [
  {
    name: "admin-app",
    script: "npm",
    args: "start",
    cwd: resolve(__dirname, "./admin"),
    env: {
      NODE_ENV: "production",
      PORT: "3001"
    },
    watch: false
  }
];

export default { apps };
