/**
 * app.js
 *
 * Configures and returns an Express application with:
 * - Logging (morgan)
 * - JSON parsing
 * - CORS
 * - Winston logger integration
 * - Routes
 * - Error handler
 */

const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const logger = require("./utils/logger");
const errorHandler = require("./middlewares/errorHandler");

// Routes
const superheroRoutes = require("./routes/superhero.routes");

function createApp() {
  const app = express();

  // Basic HTTP request logging with Morgan, integrated with Winston
  app.use(
    morgan("combined", {
      stream: {
        write: (message) => logger.info(message.trim()),
      },
    })
  );

  // Enable CORS if needed
  app.use(cors());

  // Parse JSON bodies
  app.use(express.json());

  // Mount routes
  app.use("/superheroes", superheroRoutes);

  // Fallback route (404)
  app.use((req, res) => {
    return res.status(404).json({ error: "Not Found" });
  });

  // Central error handler
  app.use(errorHandler);

  return app;
}

module.exports = createApp;
