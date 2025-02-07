import React from "react";

function SuperheroList({ heroes }) {
  return (
    <>
      <h2>Superhero List</h2>
      <ul>
        {heroes.map((hero, idx) => (
          <li key={idx} className="hero-item">
            <strong>{hero.name}</strong> — {hero.superpower} (Humility:{" "}
            {hero.humilityScore})
          </li>
        ))}
      </ul>
    </>
  );
}

export default SuperheroList;
