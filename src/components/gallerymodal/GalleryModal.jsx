import React from "react";
import { useSpring, animated } from "@react-spring/web";
import "./gallerymodal.css";

const GalleryModal = ({ item, onClose }) => {
  const animation = useSpring({
    opacity: 1,
    transform: "scale(1)",
    from: { opacity: 0, transform: "scale(0.9)" },
  });

  return (
    <div className="modal-overlay" onClick={onClose}>
      <animated.div
        style={animation}
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
      >
        <button className="close-button" onClick={onClose}>
          &times;
        </button>
        <img src={item.src} alt={item.title} />
        <h3>{item.title}</h3>
        <p>{item.description}</p>
      </animated.div>
    </div>
  );
};

export default GalleryModal;
