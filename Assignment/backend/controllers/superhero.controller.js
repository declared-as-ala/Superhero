/**
 * controllers/superhero.controller.js
 */
const superheroService = require("../services/superhero.service");
const logger = require("../utils/logger");

class SuperheroController {
  async getSuperheroes(req, res, next) {
    try {
      const heroes = superheroService.getAllSuperheroes();
      return res.status(200).json(heroes);
    } catch (error) {
      logger.error(`Error fetching heroes: ${error.message}`);
      return next(error);
    }
  }

  async createSuperhero(req, res, next) {
    try {
      const { name, superpower, humilityScore } = req.body;
      const newHero = superheroService.createSuperhero({
        name,
        superpower,
        humilityScore,
      });
      return res.status(201).json(newHero);
    } catch (error) {
      logger.error(`Error creating hero: ${error.message}`);
      return next(error);
    }
  }
}

module.exports = new SuperheroController();
// Exporting an instance (NOT the class)
