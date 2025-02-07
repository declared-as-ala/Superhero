/**
 * models/superhero.model.js
 *
 * Simulates a data model using an in-memory array.
 * In a production app, you'd use a DB (e.g., MongoDB, PostgreSQL).
 */

class SuperheroModel {
  constructor() {
    this.superheroes = [];
  }

  findAll() {
    return this.superheroes;
  }

  create(superheroData) {
    this.superheroes.push(superheroData);
    return superheroData;
  }
}

// Export a single instance to share state
module.exports = new SuperheroModel();
