const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        mongodb_username: "nestjs",
        mongodb_password: "",
        mongodb_clustername: "cluster0",
        mongobd_database: "my-site-dev",
      },
    };
  }
  return {
    env: {
      mongodb_username: "nestjs",
      mongodb_password: "",
      mongodb_clustername: "cluster0",
      mongobd_database: "my-site",
    },
  };
};
