import React, { useState, useCallback, useEffect } from "react";
import {
  HashRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import { useTransition, animated } from "@react-spring/web";
import HomePage from "./pages/homepage/HomePage";
import AboutPage from "./pages/aboutpage/AboutPage";
import ProductsPage from "./pages/productspage/ProductsPage";
import GalleryPage from "./pages/gallerypage/GalleryPage";
import ContactPage from "./pages/contactpage/ContactPage";
import Header from "./components/header/Header";
import "./App.css";
import NotFound from "./components/notfound/NotFound";
import Footer from "./components/footer/Footer";
import ScrollToTopButton from "./components/scrolltotopbutton/ScrollToTopButton";
import SearchResults from "./components/searchresultpage/SearchResults";
import { data } from "./assets/data/data";

const AnimatedRoutes = () => {
  const location = useLocation();
  const transitions = useTransition(location, {
    from: { opacity: 0, transform: "translate3d(100%,0,0)" },
    enter: { opacity: 1, transform: "translate3d(0%,0,0)" },
    leave: { opacity: 0, transform: "translate3d(-50%,0,0)" },
  });

  return transitions((props, item) => (
    <animated.div style={props}>
      <Routes location={item}>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/search" element={<SearchResults data={data} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </animated.div>
  ));
};
const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 769);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 769);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (!isMobile) {
      setIsMenuOpen(true);
    }
  }, [isMobile]);

  const toggleMenu = useCallback(() => {
    setIsMenuOpen((prev) => !prev);
  }, []);

  return (
    <Router>
      <div className="App">
        <Header isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
        <main>
          <AnimatedRoutes />
        </main>
        <ScrollToTopButton />
        <Footer />
      </div>
    </Router>
  );
};

export default App;
