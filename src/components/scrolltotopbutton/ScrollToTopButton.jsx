import React, { useState, useEffect } from "react";
import { useSpring, animated } from "@react-spring/web";
import "./scrolltotopbutton.css";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const scrollHandler = () => {
    if (window.scrollY > 200) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);
    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const buttonAnimation = useSpring({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? "translateY(0)" : "translateY(100px)",
    config: { tension: 300, friction: 20 },
  });

  return (
    <animated.button
      style={buttonAnimation}
      className="scroll-to-top-button"
      onClick={handleClick}
    >
      <span>↑</span>
    </animated.button>
  );
};

export default ScrollToTopButton;
