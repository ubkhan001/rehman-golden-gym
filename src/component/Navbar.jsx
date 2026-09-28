import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">

      {/* LOGO */}
      <a href="/home" className="logo" onClick={closeMenu}>
        <div className="logo-icon">
          RG
        </div>

        <div className="logo-text">
          <strong>REHMAN</strong>
          <span>GOLDEN GYM</span>
        </div>
      </a>


      {/* NAVIGATION LINKS */}
      <div className={`nav-links ${menuOpen ? "active" : ""}`}>

        <a href="/home" onClick={closeMenu}>
          Home
        </a>

        <a href="/home#about" onClick={closeMenu}>
          About
        </a>

        <a href="/home#trainers" onClick={closeMenu}>
          Trainers
        </a>

        <a href="/home#programs" onClick={closeMenu}>
          Programs
        </a>

        <a href="/membership" onClick={closeMenu}>
          Membership
        </a>

        <a href="/home#contact" onClick={closeMenu}>
          Contact
        </a>

      </div>


      {/* RIGHT SIDE BUTTON */}
      <div className="navbar-actions">

        <a
          href="/home#contact"
          className="navbar-btn"
          onClick={closeMenu}
        >
          JOIN NOW
        </a>

      </div>


      {/* MOBILE MENU BUTTON */}
      <button
        className="menu-btn"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle Menu"
      >
        {menuOpen ? "✕" : "☰"}
      </button>

    </nav>
  );
}

export default Navbar;