/**
 * index.js
 *
 * The main entry point: sets up and starts the server.
 */

const createApp = require("./app");
const config = require("./config/config");
const logger = require("./utils/logger");

const app = createApp();

// Start server
app.listen(config.port, () => {
  logger.info(
    `Humble Superheroes API running on http://localhost:${config.port}`
  );
});
