/**
 * config/config.js
 *
 * Central location for reading environment variables
 * and exporting them as an easy-to-use config object.
 */

require("dotenv").config();

module.exports = {
  port: process.env.PORT || 3001,
  nodeEnv: process.env.NODE_ENV || "development",
  logLevel: process.env.LOG_LEVEL || "info",
};
