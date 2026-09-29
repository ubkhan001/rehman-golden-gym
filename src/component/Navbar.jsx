
import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">

      {/* LOGO */}
      <Link to="/home" className="logo" onClick={closeMenu}>
        <div className="logo-icon">
          RG
        </div>

        <div className="logo-text">
          <strong>REHMAN</strong>
          <span>GOLDEN GYM</span>
        </div>
      </Link>


      {/* NAVIGATION LINKS */}
      <div className={`nav-links ${menuOpen ? "active" : ""}`}>

        <Link to="/home" onClick={closeMenu}>
          Home
        </Link>

        <Link to="/home#about" onClick={closeMenu}>
          About
        </Link>

        <Link to="/home#trainers" onClick={closeMenu}>
          Trainers
        </Link>

        <Link to="/home#programs" onClick={closeMenu}>
          Programs
        </Link>

        <Link to="/membership" onClick={closeMenu}>
          Membership
        </Link>

        <Link to="/home#contact" onClick={closeMenu}>
          Contact
        </Link>

      </div>


      {/* RIGHT SIDE BUTTON */}
      <div className="navbar-actions">

        <Link
          to="/home#contact"
          className="navbar-btn"
          onClick={closeMenu}
        >
          JOIN NOW
        </Link>

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
