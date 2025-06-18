import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import logo from "../assets/logo.svg";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Close menu on link click (for mobile UX)
  const handleLinkClick = () => setMenuOpen(false);

  return (
    <nav className="nav-root">
      <div className="nav-container">
        <NavLink to="/" className="nav-logo-link" onClick={handleLinkClick}>
          <img src={logo} alt="logo" className="nav-logo" />
        </NavLink>
        <button
          className="nav-toggle"
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span className="nav-toggle-bar"></span>
          <span className="nav-toggle-bar"></span>
          <span className="nav-toggle-bar"></span>
        </button>
        <div className={`nav-links ${menuOpen ? "nav-links-open" : ""}`}>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              "nav-link" + (isActive ? " active" : "")
            }
            onClick={handleLinkClick}
          >
            About
          </NavLink>
          <NavLink
            to="/products"
            className={({ isActive }) =>
              "nav-link" + (isActive ? " active" : "")
            }
            onClick={handleLinkClick}
          >
            Products
          </NavLink>
          <NavLink
            to="/pricing"
            className={({ isActive }) =>
              "nav-link" + (isActive ? " active" : "")
            }
            onClick={handleLinkClick}
          >
            Pricing
          </NavLink>
          <NavLink
            to="/support"
            className={({ isActive }) =>
              "nav-link" + (isActive ? " active" : "")
            }
            onClick={handleLinkClick}
          >
            Support
          </NavLink>
          <NavLink
            to="/signup"
            className={({ isActive }) =>
              "nav-link" + (isActive ? " active" : "")
            }
            onClick={handleLinkClick}
          >
            Sign Up
          </NavLink>
          <NavLink
            to="/signin"
            className={({ isActive }) =>
              "nav-link" + (isActive ? " active" : "")
            }
            onClick={handleLinkClick}
          >
            Sign In
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
