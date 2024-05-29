module.exports = {
  apps: [
    {
      name: "team1-vlc-api",
      script: "./api/app.js",
      watch: true,
      watch_delay: 1000,
      ignore_watch: ["node_modules"],
    },
    {
      name: "team1-vlc-socket",
      script: "./socket/app.js",
      watch: true,
      watch_delay: 1000,
      ignore_watch: ["node_modules"],
    },
  ],
};
