/**
 * middlewares/errorHandler.js
 */
const logger = require("../utils/logger");

function errorHandler(err, req, res, next) {
  // Log the error
  logger.error(err.message);

  // If headers are already sent, just let Express handle it
  if (res.headersSent) {
    return next(err);
  }

  // We can choose a status code
  const statusCode = err.statusCode || 500;
  const message = statusCode < 500 ? err.message : "Internal Server Error";

  return res.status(statusCode).json({ error: message });
}

module.exports = errorHandler;
