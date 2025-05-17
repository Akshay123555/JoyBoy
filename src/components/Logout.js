import React from 'react';
import { Link } from 'react-router-dom';

function Logout() {
  return (
    <div style={{ textAlign: 'center', padding: '40px 20px' }}>
      <header style={{ fontSize: '30px', color: 'var(--primary)', marginBottom: '40px' }}>
        <h1>🏖️ SummerPlay</h1>
      </header>

      <section className="hero">
        <h2 style={{ fontSize: '36px', color: 'var(--primary)', marginBottom: '15px' }}>
          You've Logged Out
        </h2>
        <p style={{ fontSize: '20px', marginBottom: '30px' }}>
          We hope you had fun this summer! See you again soon. ☀️
        </p>
        <Link to="/">
          <button>Return to Home</button>
        </Link>
      </section>

      <footer style={{ fontSize: '14px', color: '#666', marginTop: '60px' }}>
        &copy; 2025 SummerPlay. Stay cool & come back soon! 🌊
      </footer>
    </div>
  );
}

export default Logout; 