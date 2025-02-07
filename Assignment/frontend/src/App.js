import React, { useState, useEffect } from "react";
import axios from "axios";
import "./styles/App.css";
import SuperheroForm from "./components/SuperheroForm";
import SuperheroList from "./components/SuperheroList";
import config from "./config";

function App() {
  const [heroes, setHeroes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Fetch heroes on mount
  useEffect(() => {
    fetchHeroes();
  }, []);

  async function fetchHeroes() {
    setLoading(true);
    setError("");
    try {
      const response = await axios.get(`${config.apiUrl}/superheroes`);
      setHeroes(response.data);
    } catch (err) {
      setError("Failed to fetch heroes. Please try again later.");
    } finally {
      setLoading(false);
    }
  }

  // Called by form to add a new hero
  async function handleAddHero({ name, superpower, humilityScore }) {
    try {
      const score = parseInt(humilityScore, 10);
      const newHero = { name, superpower, humilityScore: score };

      const response = await axios.post(
        `${config.apiUrl}/superheroes`,
        newHero
      );

      // Insert the newly created hero at the top of the list
      setHeroes((prev) => [response.data, ...prev]);
    } catch (err) {
      console.error("Failed to add hero:", err);
    }
  }

  return (
    <div className="app-container">
      <header className="header">
        <h1 className="title">Humble Superheroes</h1>
      </header>

      <main className="main-content">
        <section className="card form-section">
          <SuperheroForm onAddHero={handleAddHero} />
        </section>

        <section className="card list-section">
          {loading && <p>Loading...</p>}
          {error && <p className="error-message">{error}</p>}
          {!loading && !error && <SuperheroList heroes={heroes} />}
        </section>
      </main>
    </div>
  );
}

export default App;
