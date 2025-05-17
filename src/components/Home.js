import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
      <section className="hero">
        <h2>Make This Summer Epic!</h2>
        <p>Join our community and play games, compete in matches, and win big rewards this summer.</p>
        <Link to="/player-summary">
          <button>Start Playing</button>
        </Link>
      </section>

      <section className="section">
        <h3>🎮 Hot Summer Games</h3>
        <div className="cards">
          {/* Game cards can be added here */}
        </div>
      </section>

      <section className="section">
        <h3>🌐 Online Matches & Events</h3>
        <div className="cards">
          {/* Match cards can be added here */}
        </div>
      </section>
    </>
  );
}

export default Home; 