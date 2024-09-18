import React from "react";
import { Link } from "react-router-dom";
import AnimatedPage from "../animatedpage/AnimatedPage";
import AnimatedButton from "../animatedbutton/AnimatedButton";

const NotFound = () => {
  return (
    <AnimatedPage>
      <div className="not-found">
        <h1>404 - Page Not Found</h1>
        <p>Oops! The page you're looking for doesn't exist.</p>
        <Link to="/">
          <AnimatedButton>Go to Home</AnimatedButton>
        </Link>
      </div>
    </AnimatedPage>
  );
};

export default NotFound;
