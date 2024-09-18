import React, { useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./homepage.css";
import { animated } from "@react-spring/web";
import AnimatedPage from "../../components/animatedpage/AnimatedPage";
import ScrollReveal from "../../components/scrollreveal/ScrollReveal";
import slider1 from "../../assets/images/homepagesliderimages/slider1.jpg";
import slider2 from "../../assets/images/homepagesliderimages/slider2.jpg";
import slider3 from "../../assets/images/homepagesliderimages/slider3.jpg";
import slider4 from "../../assets/images/homepagesliderimages/slider4.jpg";
import slider5 from "../../assets/images/homepagesliderimages/slider5.jpg";
import slider6 from "../../assets/images/homepagesliderimages/slider6.jpg";
import { useCountUp } from "../../hooks/usecountup/useCountUp";
import fishline1 from "../../assets/images/fishes line/fishline1.jpg";
import fishline2 from "../../assets/images/fishes line/fishline2.jpg";
import fishline3 from "../../assets/images/fishes line/fishline3.jpg";
import fishline4 from "../../assets/images/fishes line/fishline4.jpg";
import fishline5 from "../../assets/images/fishes line/fishline5.jpg";
import fishline6 from "../../assets/images/fishes line/fishline6.jpg";
import { Helmet } from "react-helmet";

const HomePage = () => {
  const { number: customersServed, ref: customersRef } = useCountUp(5000);
  const { number: fishSold, ref: fishRef } = useCountUp(10000);
  const { number: countriesServiced, ref: countriesRef } = useCountUp(5);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const images = document.querySelectorAll(".animated-divider img");
      images.forEach((img) => {
        const rect = img.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        img.style.setProperty("--x", x);
        img.style.setProperty("--y", y);
      });
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const sliderImages = [
    { src: slider1, alt: "Slider 1" },
    { src: slider2, alt: "Slider 2" },
    { src: slider3, alt: "Slider 3" },
    { src: slider4, alt: "Slider 3" },
    { src: slider5, alt: "Slider 3" },
    { src: slider6, alt: "Slider 3" },
  ];

  return (
    <AnimatedPage>
      <Helmet>
        <title>Bluewave Aqua</title>
        <meta name="description" content=" Bluewave Aqua" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Your Open Graph Title" />
        <meta property="og:description" content="Your Open Graph Description" />
        <meta property="og:url" content="https://bluewaveaquafarm.com/#/" />
      </Helmet>
      <div className="home">
        <section className="hero">
          <Slider {...sliderSettings}>
            {sliderImages.map((img, index) => (
              <div key={index}>
                <img src={img.src} alt={img.alt} />
              </div>
            ))}
          </Slider>
        </section>

        <div className="colorful-divider">
          <p>Welcome To Bluewave Aqua Farm</p>
        </div>

        <ScrollReveal>
          <section className="mission-vision">
            <div className="mission">
              <h2>Our Mission</h2>
              <p>
                To sustainably produce high quality ornamental and freshwater
                fish and aquatic products through innovative and eco-friendly
                aquaculture practices
              </p>
            </div>
            <div className="vision">
              <h2>Our Vision</h2>
              <p>
                To be a leading provider of best live aquatic products,
                recognized for sustainability, quality and innovation in
                aquaculture.
              </p>
            </div>
          </section>
        </ScrollReveal>

        <div className="animated-divider">
          <img src={fishline1} alt="fishline1" />
          <img src={fishline2} alt="fishline2" />
          <img src={fishline3} alt="Icon 3" />
          <img src={fishline4} alt="Icon 3" />
          <img src={fishline5} alt="Icon 3" />
          <img src={fishline6} alt="Icon 3" />
        </div>

        <ScrollReveal>
          <section className="achievements">
            <div className="achievement-item" ref={customersRef}>
              <h3>Customers Served</h3>
              <p className="achievement-number">
                <animated.span>
                  {customersServed.to((n) => Math.floor(n).toLocaleString())}
                </animated.span>
                +
              </p>
            </div>
            <div className="achievement-item" ref={fishRef}>
              <h3>Fish Sold</h3>
              <p className="achievement-number">
                <animated.span>
                  {fishSold.to((n) => Math.floor(n).toLocaleString())}
                </animated.span>
                +
              </p>
            </div>
            <div className="achievement-item" ref={countriesRef}>
              <h3>Cities Serviced</h3>
              <p className="achievement-number">
                <animated.span>
                  {countriesServiced.to((n) => Math.floor(n))}
                </animated.span>
                +
              </p>
            </div>
          </section>
        </ScrollReveal>

        <ScrollReveal>
          <section className="about-preview">
            <h2>About Bluewave Aqua Farm</h2>
            <p>
              Bluewave Aqua Farm is the first ever ornamental fish and
              freshwater fish distributor in Sri Lanka which has been trading
              high quality freshwater and ornamental fish species, and aquatic
              plants to the market since 2020. The presence of Bluewave Aqua
              Farm in the local market for 4 years has enabled the company to
              acquire a plethora of experience, technical know-how and the
              mastery over the trade in order to deliver high grade live
              ornamental aquatic products to its customers all over the Sri
              Lanka. Strict quality assurance and trust have helped Bluewave
              Aqua Farm retain its existing customer base and expand its
              business to new vistas.
            </p>
            <br />
            <p>
              Bluewave Aqua Farm has two farms that cultivate ornamental fish
              and freshwater fish, span across 3 hectares that is located in
              Andiyagala, Kekirawa, Sri Lanka Customer satisfaction is hundred
              percent guaranteed and the delivery is assured within seven days
              of placing of the order.
            </p>
          </section>
        </ScrollReveal>
      </div>
    </AnimatedPage>
  );
};

export default HomePage;
