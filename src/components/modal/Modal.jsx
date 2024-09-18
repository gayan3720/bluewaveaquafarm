import React from "react";
import { useSpring, animated } from "@react-spring/web";
import "./modal.css";

const Modal = ({ isOpen, onClose, children }) => {
  const animation = useSpring({
    opacity: isOpen ? 1 : 0,
    transform: isOpen ? `translateY(0)` : `translateY(-100px)`,
  });

  return isOpen ? (
    <div className="modal-lay" onClick={onClose}>
      <animated.div
        className="modal-con"
        style={animation}
        onClick={(e) => e.stopPropagation()}
      >
        <button className="close-button" onClick={onClose}>
          &times;
        </button>
        {children}
      </animated.div>
    </div>
  ) : null;
};

export default Modal;
