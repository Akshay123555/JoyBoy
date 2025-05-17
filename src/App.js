import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import PlayerSummary from './components/PlayerSummary';
import Leaderboard from './components/Leaderboard';
import Profile from './components/Profile';
import Logout from './components/Logout';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/player-summary" element={<PlayerSummary />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/logout" element={<Logout />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App; 