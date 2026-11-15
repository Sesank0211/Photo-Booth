import React from 'react';
import './Navbar.css';

export default function Navbar() {
  return (
    <header className="navbar">
      <a className="brand" href="#top" aria-label="Photo Gallery home">
        <span className="brand-mark" aria-hidden="true"><span /></span>
        <span>Photo Gallery</span>
      </a>
      <span className="navbar-note">A collection of moments</span>
    </header>
  );
}
