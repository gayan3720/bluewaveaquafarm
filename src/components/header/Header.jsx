import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { useSpring, animated } from "@react-spring/web";
import "./header.css";
import Logo from "../../assets/images/Logo.png";
import { useSearch } from "../../utilities/SearchContext";

const Header = ({ isMenuOpen, toggleMenu }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(window.innerWidth < 769);
  const [activeLink, setActiveLink] = useState(location.pathname);
  const { searchTerm, setSearchTerm } = useSearch();

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
    if (e.target.value) {
      navigate("/search"); // Redirect to search results page
    } else {
      navigate("/");
    }
  };

  const menuAnimation = useSpring({
    transform: isMenuOpen ? "translateX(0%)" : "translateX(-100%)",
    opacity: isMenuOpen ? 1 : 0.99,
  });

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 769);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleLinkClick = (link) => {
    setActiveLink(link);
    if (isMobile) toggleMenu(); // Close the menu on mobile screens when a link is clicked
  };

  return (
    <header className="header">
      <div className="logo">
        <img src={Logo} alt="Logo" />
      </div>
      {/* Search Input */}
      {!isMobile && (
        <div className="search-container">
          <input
            type="text"
            value={searchTerm}
            onChange={handleChange}
            placeholder="Explore Aqua Life..."
            className="search-input"
          />
        </div>
      )}
      <animated.nav className="nav" style={menuAnimation}>
        <ul>
          <li>
            <Link
              to="/"
              onClick={() => handleLinkClick("/")}
              className={activeLink === "/" ? "highlighted" : ""}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              onClick={() => handleLinkClick("/about")}
              className={activeLink === "/about" ? "highlighted" : ""}
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              to="/products"
              onClick={() => handleLinkClick("/products")}
              className={activeLink === "/products" ? "highlighted" : ""}
            >
              Our Products
            </Link>
          </li>
          <li>
            <Link
              to="/gallery"
              onClick={() => handleLinkClick("/gallery")}
              className={activeLink === "/gallery" ? "highlighted" : ""}
            >
              Gallery
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              onClick={() => handleLinkClick("/contact")}
              className={activeLink === "/contact" ? "highlighted" : ""}
            >
              Contact
            </Link>
          </li>
        </ul>
      </animated.nav>
      <a
        href="https://wa.me/+94711575356"
        className="whatsapp-button"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faWhatsapp} />
      </a>
      <button className="menu-toggle" onClick={toggleMenu}>
        <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} />
      </button>
    </header>
  );
};

export default Header;
