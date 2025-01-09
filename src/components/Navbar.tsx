import { useState, useEffect, useRef, useCallback } from "react";
import { useTheme } from "./ThemeContext"; // Import the useTheme hook
import { Link, useLocation } from "react-router-dom"; // Import useLocation
import SocialMedia from "./SocialMedia"; // Import your SocialMedia component
import "./Navbar.css";

const Navbar = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to toggle the dropdown menu
  const menuRef = useRef<HTMLDivElement | null>(null); // Reference to the dropdown menu
  const hamburgerRef = useRef<HTMLDivElement | null>(null); // Reference to the hamburger menu
  const location = useLocation(); // Get the current route
  const isContactPage = location.pathname === "/contact"; // Check if on Contact page

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev); // Toggle the dropdown menu visibility
  };

  // Callback to handle clicks outside the dropdown menu and hamburger icon
  const handleClickOutside = useCallback((event: MouseEvent) => {
    if (
      menuRef.current &&
      !menuRef.current.contains(event.target as Node) &&
      hamburgerRef.current &&
      !hamburgerRef.current.contains(event.target as Node)
    ) {
      setIsMenuOpen(false); // Close the menu if click is outside
    }
  }, []);

  // UseEffect hook to attach and clean up the click event listener
  useEffect(() => {
    // Attach event listener when component mounts
    document.addEventListener("click", handleClickOutside);

    // Clean up event listener when component unmounts or isMenuOpen changes
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [handleClickOutside]);

  return (
    <div className={`navbar ${isDarkMode ? "dark" : "light"}`}>
      <h1 className="navbar-title">Bill's Portfolio</h1>
      {/* Desktop Navigation */}
      <nav className="nav-links">
        <ul>
          <li>
            <Link to="/" className="nav-link">
              About Me
            </Link>
          </li>
          <li>
            <Link to="/projects" className="nav-link">
              Projects
            </Link>
          </li>
          <li>
            <Link to="/contact" className="nav-link">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
      {/* Theme Toggle for Desktop */}
      <div className="icon-and-theme-toggle" onClick={toggleTheme}>
        <div
          className={`theme-icon ${isDarkMode ? "moon-icon" : "bulb-icon"}`}
        ></div>
      </div>
      {/* Social Media Icons (Visible unless on Contact page) */}
      {!isContactPage && <SocialMedia />}{" "}
      {/* Conditionally render SocialMedia */}
      {/* Burger Menu for Mobile */}
      <div ref={hamburgerRef} className="hamburger-icon" onClick={toggleMenu}>
        <span className={`bar ${isMenuOpen ? "open" : ""}`}></span>
        <span className={`bar ${isMenuOpen ? "open" : ""}`}></span>
        <span className={`bar ${isMenuOpen ? "open" : ""}`}></span>
      </div>
      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <nav
          ref={menuRef}
          className={`dropdown-menu ${isMenuOpen ? "show" : ""}`}
        >
          <ul>
            <li>
              <Link to="/" className="nav-link" onClick={toggleMenu}>
                About Me
              </Link>
            </li>
            <li>
              <Link to="/projects" className="nav-link" onClick={toggleMenu}>
                Projects
              </Link>
            </li>
            <li>
              <Link to="/contact" className="nav-link" onClick={toggleMenu}>
                Contact
              </Link>
            </li>
            <li>
              <div className="nav-link theme-toggle" onClick={toggleTheme}>
                {isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
              </div>
            </li>
            <li></li>
          </ul>
        </nav>
      )}
    </div>
  );
};

export default Navbar;
