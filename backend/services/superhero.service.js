/**
 * services/superhero.service.js
 */
const superheroModel = require("../models/superhero.model");

class SuperheroService {
  getAllSuperheroes() {
    const heroes = superheroModel.findAll();
    // Sort by humilityScore (descending)
    return [...heroes].sort((a, b) => b.humilityScore - a.humilityScore);
  }

  createSuperhero({ name, superpower, humilityScore }) {
    // Model-level create
    const newHero = superheroModel.create({
      name,
      superpower,
      humilityScore: Number(humilityScore),
    });
    return newHero;
  }
}

module.exports = new SuperheroService();
