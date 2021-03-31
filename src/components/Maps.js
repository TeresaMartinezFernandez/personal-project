import React from "react";
import GoogleMaps from "simple-react-google-maps";
import "../stylesheets/Maps.css";

const mapStyles = {
  width: "100%",
  height: "100%",
};

const Maps = () => {
  return (
    <div className="container">
      <GoogleMaps
        apiKey={"AIzaSyC6NecCl_3tR_wOyB03oROMkSoKjK3hMz4"}
        style={mapStyles}
        zoom={9}
        center={{
          lat: 42.6036003,
          lng: -5.6124107,
        }}
        markers={[
          { lat: 43.1376667, lng: -5.0429275 },
          { lat: 43.2129435, lng: -4.9103572 },
        ]}
      />
    </div>
  );
};

export default Maps;
