import React from "react";
import { useSpring, animated } from "@react-spring/web";
import "./aboutPage.css";
import { useCountUp } from "../../hooks/usecountup/useCountUp";
import AnimatedPage from "../../components/animatedpage/AnimatedPage";
import ScrollReveal from "../../components/scrollreveal/ScrollReveal";
import Logo from "../../assets/images/Logo.png";
import SriLankaMap from "../../components/srilankamap/SriLankaMap";

const AboutPage = () => {
  const pinnedLocations = [
    { name: "Colombo", coordinates: [6.9271, 79.8612] },
    { name: "Anuradhapura", coordinates: [8.3351434, 80.3209116] },
    { name: "Kurunegala", coordinates: [7.4806184, 80.3165805] },
    { name: "Kandy", coordinates: [7.2945434, 80.5845816] },
    { name: "Polonnaruwa", coordinates: [7.9341113, 80.9719787] },
    { name: "Dambulla", coordinates: [7.8811786, 80.5347448] },
    { name: "Chilaw", coordinates: [7.5719672, 79.7791312] },
    // Add more locations as needed
  ];

  const fadeIn = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 1000 },
  });

  const { number: employeesCount, ref: employeesRef } = useCountUp(5);
  const { number: facilitiesCount, ref: facilitiesRef } = useCountUp(100);
  const { number: breedsCount, ref: breedsRef } = useCountUp(50);

  return (
    <AnimatedPage>
      <div className="about">
        <animated.div style={fadeIn} className="colorful-bar">
          <img src={Logo} alt="AquaFarmLogo" className="logo" />
        </animated.div>

        <ScrollReveal>
          <section className="introduction">
            <h1>About Bluewave Aqua Farm</h1>
            <p>
              Bluewave Aqua Farm is the first ever ornamental fish and fresh
              water fish distributor in Sri Lanka which has been trading high
              quality freshwater and ornamental fish species, and aquatic plants
              to the market since 2020. The presence of Bluewave Aqua Farm in
              the local market for 4 years has enabled the company to acquire a
              plethora of experience, technical know-how and the mastery over
              the trade in order to deliver high grade live ornamental aquatic
              products to its customers all over the Sri Lanka. Strict quality
              assurance and trust have helped Bluewave Aqua Farm retain its
              existing customer base and expand its business to new vistas.
            </p>
            <p>
              Bluewave Aqua Farm has two farms that cultivate ornamental fish
              and freshwater fish, span across 3 hectares that is located in
              Andiyagala, Kekirawa, Sri Lanka Customer satisfaction is hundred
              percent guaranteed and the delivery is assured within seven days
              of placing of the order.
            </p>
            <br />
            <p>
              Our extensive range of products include ornamental fish species,
              freshwater fish and aquatic plants that live in freshwater.
            </p>
            <br />
            <p>
              <strong>FRESH-WATER FISH - </strong>
              <br />
              Provide rearing facilities for fry to fingerling stage of Indian
              carps (Catla, Rohu, Mirigal), Chinese carps (Silver carp, Grass
              carp, Big head carp) and Tilapia
            </p>
            <br />
            <p>
              <strong> ORNAMENTAL FISH -</strong>
              <br />
              Commercially produce and breed ornamental fish. The main product
              of our ornamental fish is Million fish or the Rainbow fish
              (Poecilia reticulata) which is widely and popularly known as
              “Guppy”. In addition to our extensive collection of Guppy, we also
              breed and produce species such as Swordtails, Platies, Molly,
              Barb, Tetra, Gourami, Rainbow, Danio, Oscar, Discus and Betta
              (Fighting fish).
            </p>
            <br />
            <p>
              <strong> AQUATIC PLANTS - </strong>
              <br />
              Aquatic plants are one of our widely popular products in the local
              market which are grown under optimum conditions in our nurseries
              at Bluewave Aqua Farm
            </p>
            <br />
            <p>
              <strong> ADDITIONAL SERVICES -</strong>
              <br />
              Processing and packaging, distribution to local and regional
              markets, and consultancy services for aquaculture practices
            </p>
            <br />
            <p>
              <strong> VALUE PROPOSITIONS -</strong>
              <br />
              Superior quality fish produced using sustainable practices, with a
              focus on minimal environmental impact and high efficiency Four
              years of industrial experience has enabled Bluewave Aqua Farm to
              maintain high quality standards and to provide efficient service
              to the customer. Upon the placement of order for any of our
              products, the delivery is made in less than a week time. The
              skilled, experienced and dedicated workforce of Bluewave Aqua Farm
              is committed to deliver the best service to the customers. The
              research and development team contributes immensely to the product
              development through new researches and experiments. The farm has
              managed to produce many new strains of fish such as Guppy, Platy
              and Sword fish which gives the farm a competitive advantage.
            </p>
          </section>
        </ScrollReveal>

        <ScrollReveal>
          <section className="stats">
            <div className="stat-item" ref={employeesRef}>
              <h3>Loyal Employees</h3>
              <animated.span>
                {employeesCount.to((n) => Math.floor(n))}
              </animated.span>
            </div>
            <div className="stat-item" ref={facilitiesRef}>
              <h3>Breeding Facilities</h3>
              <animated.span>
                {facilitiesCount.to((n) => Math.floor(n))}
              </animated.span>
            </div>
            <div className="stat-item" ref={breedsRef}>
              <h3>Fish Breeds</h3>
              <animated.span>
                {breedsCount.to((n) => Math.floor(n))}
              </animated.span>
            </div>
          </section>
        </ScrollReveal>

        <ScrollReveal>
          <section className="global-reach">
            <h2>Our Market Expansion</h2>
            <SriLankaMap locations={pinnedLocations} />
          </section>
        </ScrollReveal>
      </div>
    </AnimatedPage>
  );
};

export default AboutPage;
