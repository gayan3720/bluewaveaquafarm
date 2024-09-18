import React from "react";
import { useSearch } from "../../utilities/SearchContext";
import { useSpring, animated } from "@react-spring/web";
import "./searchresults.css";

const SearchResults = ({ data }) => {
  const { searchTerm } = useSearch();

  const filteredData = data.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const animation = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 500 },
  });

  const fadeIn = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 1000 },
  });

  return (
    <animated.div style={animation} className="search-results">
      <animated.div style={fadeIn} className="colorful-bar">
        <h1 className="search-results-title">Search Results</h1>
      </animated.div>
      {filteredData.length > 0 ? (
        <div className="search-results-grid">
          {filteredData.map((item) => (
            <div key={item.id} className="search-result-item">
              <div className="search-result-image">
                <img src={item.image} alt={item.title} />
              </div>
              <div className="search-result-info">
                <h2>{item.title}</h2>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="no-results">No results found</p>
      )}
    </animated.div>
  );
};

export default SearchResults;
