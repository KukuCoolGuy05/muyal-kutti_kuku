import React, { useState } from 'react';
import './styling/Navbar.css';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <div className="nav-left">
        <span className="logo">💖 Muyal-kutti & Kuku 💖</span>
        <button className="hamburger" onClick={toggleMenu}>
          ☰
        </button>
      </div>
      <div className={`nav-right ${menuOpen ? 'open' : ''}`}>
        <a href="#timeline" onClick={() => setMenuOpen(false)}>Timeline</a>
        <a href="#gallery" onClick={() => setMenuOpen(false)}>Gallery</a>
        <a href="#journal" onClick={() => setMenuOpen(false)}>Journal</a>
        <a href="#movies" onClick={() => setMenuOpen(false)}>Movie Nights</a>
      </div>
    </nav>
  );
}
