import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <h1>🏖️ SummerPlay</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="#">Games</Link>
        <Link to="#">Matches</Link>
        <Link to="#">Join</Link>
        <Link to="/player-summary">Player Summary</Link>
        <Link to="/leaderboard">Leaderboard</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/logout">Logout</Link>
      </nav>
    </header>
  );
}

export default Header; 