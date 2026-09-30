import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const goToSection = (section) => {
    closeMenu();

    if (window.location.pathname === "/") {
      const element = document.getElementById(section);

      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }

      return;
    }

    navigate("/");

    setTimeout(() => {
      const element = document.getElementById(section);

      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }, 500);
  };

  const goHome = () => {
    closeMenu();

    if (window.location.pathname === "/") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

      return;
    }

    navigate("/");

    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }, 500);
  };

  return (
    <nav className="navbar">
      <Link to="/" className="logo" onClick={goHome}>
        <div className="logo-icon">RG</div>

        <div className="logo-text">
          <strong>REHMAN</strong>
          <span>GOLDEN GYM</span>
        </div>
      </Link>

      <div className={`nav-links ${menuOpen ? "active" : ""}`}>
        <button type="button" onClick={goHome}>
          Home
        </button>

        <button type="button" onClick={() => goToSection("about")}>
          About
        </button>

        <button type="button" onClick={() => goToSection("trainers")}>
          Trainers
        </button>

        <button type="button" onClick={() => goToSection("programs")}>
          Programs
        </button>

        <Link to="/membership" onClick={closeMenu}>
          Membership
        </Link>

        <button type="button" onClick={() => goToSection("contact")}>
          Contact
        </button>
      </div>

      <div className="navbar-actions">
        <button
          type="button"
          className="navbar-btn"
          onClick={() => goToSection("contact")}
        >
          JOIN NOW
        </button>
      </div>

      <button
        type="button"
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
