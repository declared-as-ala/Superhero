/**
 * utils/logger.js
 *
 * Configures Winston for advanced logging.
 * We combine console logging with possible future transports
 * (e.g., to log files or external services).
 */

const winston = require("winston");
const { logLevel, nodeEnv } = require("../config/config");

const logger = winston.createLogger({
  level: logLevel,
  format: winston.format.combine(
    // Include timestamp and colorize only if in dev mode
    nodeEnv === "development"
      ? winston.format.colorize()
      : winston.format.uncolorize(),
    winston.format.timestamp(),
    winston.format.printf(({ timestamp, level, message }) => {
      return `[${timestamp}] [${level}]: ${message}`;
    })
  ),
  transports: [new winston.transports.Console()],
});

module.exports = logger;
