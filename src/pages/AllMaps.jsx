import React from "react";
import GeoMap from "../components/GeoMap";
import NavBar from "../components/NavBar";
// import useGeoLocation from "../hooks/useGeoLocation";
import ambulanceMarkers from "../ambulanceMarkers.json";
import fireServiceMarkers from "../fireServiceMarkers.json";
import roadSafetyMarkers from "../roadSafetyMarkers.json";
import policeMarkers from "../policeMarkers.json";

function AllMaps() {
  //   const userLocation = useGeoLocation();
  //   userLocation.coordinates.lat, userLocation.coordinates.lng
  const location = [6.4483, 7.5139];
  const zoom = 12;

  return (
    <div>
      <nav>
        <NavBar />
      </nav>
      <GeoMap
        location={location}
        zoom={zoom}
        fireServiceMarkers={fireServiceMarkers}
        roadSafetyMarkers={roadSafetyMarkers}
        ambulanceMarkers={ambulanceMarkers}
        policeMarkers={policeMarkers}
      />
    </div>
  );
}

export default AllMaps;
