import React, { useState } from "react";
import { animated, useTrail } from "@react-spring/web";
import GalleryModal from "../../components/gallerymodal/GalleryModal";
import "./gallerypage.css";
import fish1 from "../../assets/images/fish1.jpg";
import sustainable from "../../assets/images/gallerypage/4.jpg";
import Slider from "react-slick";
import slider1 from "../../assets/images/gallerypage/1.jpg";
import slider2 from "../../assets/images/gallerypage/2.jpeg";
import slider3 from "../../assets/images/gallerypage/3.jpg";
import slider6 from "../../assets/images/gallerypage/6.jpg";
import { Helmet } from "react-helmet";

const galleryItems = [
  {
    id: 1,
    src: fish1,
    title: "Aquatic Life",
    description: "Stunning aquatic life at our farms.",
  },
  {
    id: 2,
    src: sustainable,
    title: "Sustainable Practices",
    description: "Our sustainable farming methods.",
  },
  {
    id: 3,
    src: fish1,
    title: "State-of-the-Art Facilities",
    description: "Our advanced aquaculture facilities.",
  },
  // Add more images as needed
];

const GalleryPage = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  const openModal = (item) => setSelectedItem(item);
  const closeModal = () => setSelectedItem(null);

  const trail = useTrail(galleryItems.length, {
    opacity: 1,
    transform: "translate3d(0,0,0)",
    from: { opacity: 0, transform: "translate3d(0,40px,0)" },
    delay: 300,
  });

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
    { src: sustainable, alt: "Slider 2" },
    { src: slider3, alt: "Slider 4" },
    { src: slider2, alt: "Slider 3" },
    { src: slider6, alt: "Slider 6" },
  ];

  return (
    <div className="gallery-page">
      <Helmet>
        <title>Gallery</title>
        <meta name="description" content="Gallery page" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Your Open Graph Title" />
        <meta property="og:description" content="Your Open Graph Description" />
        <meta
          property="og:url"
          content="https://bluewaveaquafarm.com/#/gallery"
        />
      </Helmet>
      <section className="section_hero">
        <h1>Discover Our Aquatic World</h1>
        <p>
          Explore the beauty and innovation behind our aquaculture practices.
        </p>
      </section>

      <section className="gallery-grid">
        {trail.map((animation, index) => (
          <animated.div
            key={galleryItems[index].id}
            style={animation}
            className="gallery-item"
            onClick={() => openModal(galleryItems[index])}
          >
            <img
              src={galleryItems[index].src}
              alt={galleryItems[index].title}
            />
            <div className="overlay">
              <h3>{galleryItems[index].title}</h3>
            </div>
          </animated.div>
        ))}
      </section>
      <section className="hero">
        <Slider {...sliderSettings}>
          {sliderImages.map((img, index) => (
            <div key={index}>
              <img src={img.src} alt={img.alt} />
            </div>
          ))}
        </Slider>
      </section>
      <section className="company-overview">
        <h2>Bluewave Aqua Farm</h2>
        <br />
        <p>
          <strong>Industry Overview:</strong>
          <br />
          The global fresh water aquaculture market is growing, driven by
          increasing demand for fish protein and sustainable farming practices.
        </p>
        <p>
          <strong>Target Market:</strong>
          <br />
          We distribute our live aquatic products chiefly to Local and regional
          customers. Trade experience of 4 years have endowed us with the
          capability of delivering a superior and excellent service to our
          valued customers who remained with us for over four years with trust.
        </p>
        <p>
          <strong>Competitive Landscape:</strong>
          <br />
          Competitors include other freshwater aqua farms and traditional
          fisheries. Our edge lies in our advanced technology, sustainable
          practices, and high quality product offerings.
        </p>
        <p>
          <strong>Facilities:</strong>
          <br />
          <p>
            Fish tanks - State-of-the-art RAS tanks for optimal fish growth and
            water quality.
          </p>
          <p>
            {" "}
            Water filtration systems - Advanced filtration to maintain water
            quality and reduce waste.
          </p>
          <p>
            {" "}
            Feed systems - Automated feeding systems for efficient and
            consistent fish nutrition.
          </p>
        </p>

        <p>
          <strong>Sustainability Practices:</strong>
          <br />
          <p>Closed-loop water systems to minimize water usage.</p>
          <p>
            Environmentally friendly waste management solutions and recycling
            programs.
          </p>
        </p>
      </section>

      {selectedItem && (
        <GalleryModal item={selectedItem} onClose={closeModal} />
      )}
    </div>
  );
};

export default GalleryPage;
