import React, { useState } from "react";

function SuperheroForm({ onAddHero }) {
  const [name, setName] = useState("");
  const [superpower, setSuperpower] = useState("");
  const [humilityScore, setHumilityScore] = useState("");
  const [error, setError] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");

    if (!name || !superpower || !humilityScore) {
      setError("Please fill out all fields.");
      return;
    }

    // Let the parent handle the actual creation + state update
    try {
      await onAddHero({ name, superpower, humilityScore });
      // Clear form
      setName("");
      setSuperpower("");
      setHumilityScore("");
    } catch (err) {
      setError("Failed to add hero. Please try again.");
    }
  }

  return (
    <>
      <h2>Add a New Hero</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="heroName">Name</label>
        <input
          id="heroName"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="e.g., Iron Man"
        />

        <label htmlFor="superpower">Superpower</label>
        <input
          id="superpower"
          type="text"
          value={superpower}
          onChange={(e) => setSuperpower(e.target.value)}
          placeholder="e.g., Genius, Billionaire..."
        />

        <label htmlFor="humilityScore">Humility Score (1-10)</label>
        <input
          id="humilityScore"
          type="number"
          value={humilityScore}
          onChange={(e) => setHumilityScore(e.target.value)}
          placeholder="1-10"
        />

        {error && <p className="error-message">{error}</p>}

        <button type="submit">Add Superhero</button>
      </form>
    </>
  );
}

export default SuperheroForm;
