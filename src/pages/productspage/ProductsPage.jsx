import React, { useState } from "react";
import "./productpage.css";
import { useSpring, animated } from "react-spring";
import AnimatedButton from "../../components/animatedbutton/AnimatedButton";
import AnimatedPage from "../../components/animatedpage/AnimatedPage";
import Modal from "../../components/modal/Modal";
import { productImages } from "../../product-images";

export const filterImage = (images, name) => {
  const result =
    images !== null &&
    images !== undefined &&
    Object.keys(images)
      .filter((key) => key.includes(name.replace(/\s+/g, "")))
      .reduce((cur, key) => {
        return Object.assign(cur, { [key]: images[key] });
      }, {});

  const keys = Object.keys(result);
  const value = result[keys[0]];

  return value;
};

const ProductsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedSubcategory, setSelectedSubcategory] = useState("");
  const [isFreshWaterFishModalOpen, setIsFreshWaterFishModalOpen] =
    useState(false);
  const [isOrnamentalFishModalOpen, setIsOrnamentalFishModalOpen] =
    useState(false);

  const categories = {
    freshWaterFish: [
      { name: "Indian Carps", description: "Fresh Water Fish" },
      { name: "Common Carps", description: "Fresh Water Fish" },
      { name: "Chinese Carps", description: "Fresh Water Fish" },
      { name: "Thilapi", description: "Fresh Water Fish" },
    ],
    ornamentalFish: [
      { name: "Guppy", description: "Ornamental Fish" },
      { name: "Sword-Tail", description: "Ornamental Fish" },
      { name: "Angel", description: "Ornamental Fish" },
      { name: "Molly", description: "Ornamental Fish" },
      { name: "Platy", description: "Ornamental Fish" },
      { name: "Tetra", description: "Ornamental Fish" },
    ],
    aquaticPlants: [
      { name: "Floating Plants", description: "Aquatic Plants" },
      { name: "Submerged Plants", description: "Aquatic Plants" },
      { name: "Emergent Plants", description: "Aquatic Plants" },
    ],
  };

  const products = [
    { id: 1, name: "Catla Fingerlings", category: "Indian Carps" },
    { id: 2, name: "Mirigal Fingerlings", category: "Indian Carps" },
    { id: 3, name: "Rohu Fingerlings", category: "Indian Carps" },

    { id: 4, name: "Big Head Carp Fingerlings", category: "Chinese Carps" },
    { id: 5, name: "Grass Carp Fingerlings", category: "Chinese Carps" },
    { id: 6, name: "Silver Carp Fingerlings", category: "Chinese Carps" },

    { id: 7, name: "Common Carp Fingerlings", category: "Common Carps" },

    { id: 8, name: "Thilapi", category: "Thilapi" },

    // { id: 9, name: "Angel Front Photo", category: "Angel" },
    { id: 10, name: "Black Angel", category: "Angel" },
    { id: 11, name: "Black Marbal Angel", category: "Angel" },
    { id: 12, name: "Blue Angel", category: "Angel" },
    { id: 13, name: "Panda Angel", category: "Angel" },
    { id: 14, name: "Platinum Angel", category: "Angel" },
    { id: 15, name: "Tri Color Angel", category: "Angel" },

    { id: 16, name: "Black Metal Cobra Guppy", category: "Guppy" },
    { id: 17, name: "Blue Grass Guppy", category: "Guppy" },
    { id: 18, name: "Blue Queen Guppy", category: "Guppy" },
    { id: 19, name: "Bumble Bee Guppy", category: "Guppy" },
    { id: 20, name: "Koi Tuxedo Guppy", category: "Guppy" },
    // { id: 21, name: "Koi Tuxedo Guppy Close", category: "Gappi" },
    { id: 22, name: "Moscow Blue Guppy", category: "Guppy" },
    { id: 23, name: "Pink Guppy", category: "Guppy" },

    { id: 24, name: "Black Baloon Lyretail Molly", category: "Molly" },
    { id: 25, name: "Black Lyretail Molly", category: "Molly" },
    { id: 26, name: "Dalmation Lyretail Molly", category: "Molly" },
    // { id: 27, name: "Molly Close View", category: "Molly" },
    { id: 28, name: "Orange Lyretail Baloon Molly", category: "Molly" },
    { id: 29, name: "Platinum Lyretail Molly", category: "Molly" },

    { id: 30, name: "Blue Mickey Mouse Platy", category: "Platy" },
    // { id: 31, name: "Platy Close View", category: "Platy" },
    { id: 32, name: "Red Mickey Mouse Platy", category: "Platy" },
    { id: 33, name: "Red Platy", category: "Platy" },
    { id: 34, name: "Red Speckeled Platy", category: "Platy" },
    { id: 35, name: "Red Tuxedo Platy", category: "Platy" },
    { id: 36, name: "Red Wag Platy", category: "Platy" },

    { id: 37, name: "Berlin Swordtail", category: "Sword-Tail" },
    { id: 38, name: "Black Swordtail", category: "Sword-Tail" },
    { id: 39, name: "Golden Tuxedo Swordtail", category: "Sword-Tail" },
    { id: 40, name: "Green Swordtail", category: "Sword-Tail" },
    { id: 41, name: "Kahaku Swordtail", category: "Sword-Tail" },
    { id: 42, name: "Red Cap Swordtail", category: "Sword-Tail" },
    { id: 43, name: "Red Swordtail", category: "Sword-Tail" },
    { id: 44, name: "Red Wag Swordtail", category: "Sword-Tail" },
    // { id: 45, name: "Swordtail Close View", category: "Sword-Tail" },

    { id: 46, name: "Assorted Glow Tetra", category: "Tetra" },
    { id: 47, name: "Dark Green Tetra", category: "Tetra" },
    { id: 48, name: "Electric Green Glow Tetra", category: "Tetra" },
    { id: 49, name: "Red Glow Tetra", category: "Tetra" },
    { id: 50, name: "Yellow Glow Tetra", category: "Tetra" },

    { id: 51, name: "Anubias Barteri", category: "Aquatic Plants" },
    { id: 52, name: "Rotella Aquatic Plant", category: "Aquatic Plants" },
    { id: 53, name: "Staurogyne Repense", category: "Aquatic Plants" },

    // More products here...
  ];

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    if (category === "freshWaterFish") {
      setIsFreshWaterFishModalOpen(true);
    } else {
      setSelectedSubcategory("");
      setIsFreshWaterFishModalOpen(false);
    }
    if (category === "ornamentalFish") {
      setIsOrnamentalFishModalOpen(true);
    } else {
      setSelectedSubcategory("");
      setIsOrnamentalFishModalOpen(false);
    }
  };

  const handleSubcategoryChange = (subcategory) => {
    setSelectedSubcategory(subcategory);
    setIsFreshWaterFishModalOpen(false); // Close modal after selection
    setIsOrnamentalFishModalOpen(false);
  };

  const filteredProducts = products.filter((product) => {
    if (selectedCategory === "all") return true;

    if (
      selectedCategory === "freshWaterFish" &&
      selectedSubcategory !== "all"
    ) {
      return product.category === selectedSubcategory;
    }

    if (
      selectedCategory === "ornamentalFish" &&
      selectedSubcategory !== "all"
    ) {
      return product.category === selectedSubcategory;
    }

    if (selectedCategory === "aquaticPlants" && selectedSubcategory !== "all") {
      return product.category === "Aquatic Plants";
    }

    return categories[selectedCategory]
      .map((sub) => sub.name)
      .includes(product.category);
  });

  const fadeIn = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 1000 },
  });

  // Spring animation for h2 headers
  const headerSpring = useSpring({
    to: { opacity: 1, transform: "translateY(0)" },
    from: { opacity: 0, transform: "translateY(-20px)" },
    config: { tension: 200, friction: 20 },
  });

  return (
    <AnimatedPage>
      <div className="product-page">
        <animated.div style={fadeIn} className="colorful-bar">
          <h1>Our Products</h1>
        </animated.div>
        <div className="category-filter">
          <AnimatedButton onClick={() => handleCategoryChange("all")}>
            All
          </AnimatedButton>
          <AnimatedButton
            onClick={() => handleCategoryChange("freshWaterFish")}
          >
            Fresh Water Fish
          </AnimatedButton>
          <AnimatedButton
            onClick={() => handleCategoryChange("ornamentalFish")}
          >
            Ornamental Fish
          </AnimatedButton>
          <AnimatedButton onClick={() => handleCategoryChange("aquaticPlants")}>
            Aquatic Plants
          </AnimatedButton>
        </div>

        <Modal
          isOpen={isFreshWaterFishModalOpen}
          onClose={() => setIsFreshWaterFishModalOpen(false)}
        >
          <h3>Select a Subcategory:</h3>
          <ul className="subcategory-list">
            {categories.freshWaterFish.map((sub, index) => (
              <li key={index}>
                <label>
                  <input
                    type="radio"
                    name="subcategory"
                    value={sub.name}
                    onChange={() => handleSubcategoryChange(sub.name)}
                  />
                  {sub.name}
                </label>
              </li>
            ))}
          </ul>
        </Modal>
        <Modal
          isOpen={isOrnamentalFishModalOpen}
          onClose={() => setIsOrnamentalFishModalOpen(false)}
        >
          <h3>Select a Subcategory:</h3>
          <ul className="subcategory-list">
            {categories.ornamentalFish.map((sub, index) => (
              <li key={index}>
                <label>
                  <input
                    type="radio"
                    name="subcategory"
                    value={sub.name}
                    onChange={() => handleSubcategoryChange(sub.name)}
                  />
                  {sub.name}
                </label>
              </li>
            ))}
          </ul>
        </Modal>

        <div className="category-details">
          <animated.h2 style={headerSpring}>
            {selectedCategory === "freshWaterFish"
              ? "Fresh Water Fish"
              : selectedCategory === "ornamentalFish"
              ? "Ornamental Fish"
              : selectedCategory === "aquaticPlants"
              ? "Aquatic Plants"
              : "All Products"}
          </animated.h2>
          {/* {selectedCategory !== "all" && (
              <ul>
                {categories[selectedCategory].map((sub, index) => (
                  <li key={index}>
                    <strong>{sub.name}:</strong> {sub.description}
                  </li>
                ))}
              </ul>
            )} */}
        </div>

        <div className="product-grid">
          {filteredProducts.map((product) => (
            <div key={product.id} className="product-card">
              <img
                src={filterImage(
                  productImages,
                  product.name.toLowerCase().trim()
                )}
                alt={product.name}
              />
              <h3>{product.name}</h3>
              <p>Category: {product.category}</p>
            </div>
          ))}
        </div>
      </div>
    </AnimatedPage>
  );
};

export default ProductsPage;
