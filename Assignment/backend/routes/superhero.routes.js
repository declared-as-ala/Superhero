/**
 * routes/superhero.routes.js
 */
const { Router } = require("express");
const {
  superheroCreationRules,
  checkValidationResult,
} = require("../middlewares/validationRules");

// Import the ALREADY-INSTANTIATED controller:
const superheroController = require("../controllers/superhero.controller");

const router = Router();

/**
 * GET /superheroes
 */
router.get("/", (req, res, next) =>
  superheroController.getSuperheroes(req, res, next)
);

/**
 * POST /superheroes
 */
router.post(
  "/",
  superheroCreationRules,
  checkValidationResult,
  (req, res, next) => superheroController.createSuperhero(req, res, next)
);

module.exports = router; // Make sure we export the router
