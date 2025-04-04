import { useState } from "react";

import { FaEnvelope, FaBars, FaTimes } from "react-icons/fa";
import { FaInstagram, FaGithub, FaTwitter, FaPinterest } from "react-icons/fa";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Sticky Navbar */}
      <nav className="navbar">
        {/* Logo Section */}
        <div className="logo-container">
          <div className="logo-box">📦</div>
          <span className="logo-text">PIXY</span>
        </div>

        {/* Menu & Contact Button */}
        <div className="menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
          <FaEnvelope className="icon" />
          {menuOpen ? <FaTimes className="icon" /> : <FaBars className="icon" />}
        </div>
      </nav>

      {/* Sidebar Menu */}
      <div className={`sidebar ${menuOpen ? "show" : ""}`}>
        {/* Navigation Links */}
        <ul>
          <li>TEMPLATE STYLE</li>
          <li>HOME TYPE</li>
          <li>PORTFOLIO</li>
          <li>PAGES</li>
        </ul>

        {/* Social Media Icons */}
        <div className="sidebar-footer">
          <FaInstagram className="social-icon" />
          <FaGithub className="social-icon" />
          <FaTwitter className="social-icon" />
          <FaPinterest className="social-icon" />
        </div>
      </div>
    </>
  );
}
