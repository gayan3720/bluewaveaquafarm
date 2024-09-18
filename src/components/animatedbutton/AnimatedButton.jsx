import React from "react";
import { useSpring, animated } from "@react-spring/web";

const AnimatedButton = ({ children, onClick }) => {
  const [props, set] = useSpring(() => ({
    scale: 1,
    shadow: "0px 5px 15px rgba(0, 0, 0, 0.1)",
  }));

  return (
    <animated.button
      style={{
        transform: props.scale.to((s) => `scale(${s})`),
        boxShadow: props.shadow,
        border: "none",
        padding: "10px 20px",
        borderRadius: "5px",
        backgroundColor: "#00a8ff",
        color: "white",
        cursor: "pointer",
      }}
      onMouseEnter={() =>
        set({ scale: 1.1, shadow: "0px 10px 25px rgba(0, 0, 0, 0.2)" })
      }
      onMouseLeave={() =>
        set({ scale: 1, shadow: "0px 5px 15px rgba(0, 0, 0, 0.1)" })
      }
      onClick={onClick}
    >
      {children}
    </animated.button>
  );
};

export default AnimatedButton;
