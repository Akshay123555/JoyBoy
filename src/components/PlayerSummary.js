import React from 'react';

function PlayerSummary() {
  return (
    <section className="section">
      <h2>👤 Player Summary</h2>
      <div className="summary-card">
        <p><strong>Name:</strong> Alex Summers</p>
        <p><strong>Username:</strong> summer_champ23</p>
        <p><strong>Email:</strong> alex@example.com</p>
        <p><strong>Matches Played:</strong> 58</p>
        <p><strong>Wins:</strong> 34</p>
        <p><strong>Losses:</strong> 24</p>
        <p><strong>Points:</strong> 4320</p>
        <p><strong>Rank:</strong> #5</p>
      </div>
    </section>
  );
}

export default PlayerSummary; 