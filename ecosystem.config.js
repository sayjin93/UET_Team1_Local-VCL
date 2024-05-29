module.exports = {
  apps: [
    {
      name: "team1-vcl-api",
      script: "./api/app.js",
      watch: true,
      watch_delay: 1000,
      ignore_watch: ["node_modules"],
    },
    {
      name: "team1-vcl-socket",
      script: "./socket/app.js",
      watch: true,
      watch_delay: 1000,
      ignore_watch: ["node_modules"],
    },
  ],
};
