import React from "react";
import { Link } from "react-router-dom";
import { useSpring, animated } from "@react-spring/web";
import "./footer.css";

const Footer = () => {
  const fadeIn = useSpring({
    from: { opacity: 0, transform: "translateY(20px)" },
    to: { opacity: 1, transform: "translateY(0)" },
    config: { duration: 1000 },
  });

  const socialIcons = [
    {
      name: "Facebook",
      link: "https://www.facebook.com/profile.php?id=61562483172461&mibextid=ZbWKwL",
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M12 2.04c-5.497 0-9.96 4.463-9.96 9.96 0 5.497 4.463 9.96 9.96 9.96 5.497 0 9.96-4.463 9.96-9.96 0-5.497-4.463-9.96-9.96-9.96zm2.72 6.446h-1.688c-.53 0-.75.378-.75.822v1.45h2.438l-.318 2.46h-2.12v6.31h-2.563v-6.31h-2.12v-2.46h2.12v-1.69c0-2.088 1.268-3.224 3.12-3.224.89 0 1.656.066 1.88.096v2.247z" />
        </svg>
      ),
    },
    {
      name: "Instagram",
      link: "https://www.instagram.com/bluewave_aqua_farm?igsh=NmIyZTR4ZzI0bG5t",
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      ),
    },
  ];

  return (
    <animated.footer style={fadeIn} className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/products">Our Products</Link>
            </li>
            <li>
              <Link to="/gallery">Gallery</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Contact Us</h3>

          <p>Location: Andiyagala,Kekirawa,Sri Lanka</p>
          <br />
          <p>Phone: +94 71 157 53 56 / +94 71 412 31 16</p>
          <br />
          <p>Email: bluewaveaquafarm@gmail.com</p>
          <br />
          <p>Owner: Mr. Chanuka Marasinghe</p>
        </div>
        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="social-icons">
            {socialIcons.map((social, index) => (
              <a
                key={index}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                {social.svg}
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>
          &copy; 2020 by Bluewave Aqua Farm. All rights reserved.Web Design by
          GS Solutions
        </p>
      </div>
    </animated.footer>
  );
};

export default Footer;
