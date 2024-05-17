import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

function GeoMap() {
  return (
    <div>
      <MapContainer center={[6.4852, 7.5193]} zoom={10}>
        <TileLayer
          attribution=""
          url="https://api.maptiler.com/maps/basic-v2/256/{z}/{x}/{y}@2x.png?key=l2IUqASnkZluj7UFjpyh"
        />
      </MapContainer>
    </div>
  );
}

export default GeoMap;
