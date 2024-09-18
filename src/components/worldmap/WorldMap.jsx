import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";
import { useSpring, animated } from "react-spring";

const geoUrl = "/world-countries.json";

const markers = [
  { markerOffset: -15, name: "New York", coordinates: [-74.006, 40.7128] },
  { markerOffset: -15, name: "London", coordinates: [-0.1276, 51.5074] },
  { markerOffset: 25, name: "Tokyo", coordinates: [139.6917, 35.6895] },
  // Add more markers for other business locations
];

const AnimatedMarker = ({ coordinates, name, markerOffset }) => {
  const props = useSpring({
    from: { opacity: 0, transform: "scale(0)" },
    to: { opacity: 1, transform: "scale(1)" },
    config: { tension: 120, friction: 14 },
    delay: 300,
  });

  return (
    <animated.g style={props}>
      <Marker coordinates={coordinates}>
        <circle r={8} fill="#00CED1" stroke="#ffffff" strokeWidth={2} />
        <text
          textAnchor="middle"
          y={markerOffset}
          style={{ fontFamily: "system-ui", fill: "#20B2AA", fontSize: "12px" }}
        >
          {name}
        </text>
      </Marker>
    </animated.g>
  );
};

const WorldMap = () => {
  return (
    <ComposableMap
      projection="geoMercator"
      style={{ width: "100%", height: "auto" }}
    >
      <Geographies geography={geoUrl}>
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography
              key={geo.rsmKey}
              geography={geo}
              fill="#00BFFF"
              stroke="#E0FFFF"
              style={{
                default: { outline: "none" },
                hover: { fill: "#20B2AA", outline: "none" },
                pressed: { fill: "#00CED1", outline: "none" },
              }}
            />
          ))
        }
      </Geographies>
      {markers.map(({ name, coordinates, markerOffset }) => (
        <AnimatedMarker
          key={name}
          name={name}
          coordinates={coordinates}
          markerOffset={markerOffset}
        />
      ))}
    </ComposableMap>
  );
};

export default WorldMap;
