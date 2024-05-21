import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-control-geocoder/dist/Control.Geocoder.js";
import { Icon } from "leaflet";
import L from "leaflet";
import useGeoLocation from "../hooks/useGeoLocation";
// import GeoCoder from "./GeoCoder";
import Routing from "./Routing";

function GeoMap(props) {
  let defaultIcon = L.icon({
    iconUrl: "https://cdn-icons-png.flaticon.com/128/727/727606.png",
    iconSize: [40, 40],
    popupAnchor: [2, -15],
  });
  L.Marker.prototype.options.icon = defaultIcon;

  const userIcon = new Icon({
    iconUrl: "https://cdn-icons-png.flaticon.com/128/3710/3710297.png",
    iconSize: [40, 40],
  });

  const ambulanceIcon = new Icon({
    iconUrl: "https://img.icons8.com/?size=48&id=rBh1fuOC6Bjx&format=png",
    iconSize: [40, 40],
  });

  const policeIcon = new Icon({
    iconUrl: "https://img.icons8.com/?size=80&id=KC6AUAgtRrEN&format=png",
    iconSize: [40, 40],
  });

  const roadSafetyIcon = new Icon({
    iconUrl: "https://cdn-icons-png.flaticon.com/128/10275/10275975.png",
    iconSize: [40, 40],
  });

  const fireServiceIcon = new Icon({
    iconUrl: "https://img.icons8.com/?size=48&id=15149&format=png",
    iconSize: [40, 40],
  });

  //   const position = [6.4852, 7.5193];

  const location = useGeoLocation();

  return (
    <div>
      <MapContainer center={props.location} zoom={props.zoom}>
        <TileLayer
          attribution=""
          url="https://api.maptiler.com/maps/basic-v2/256/{z}/{x}/{y}@2x.png?key=l2IUqASnkZluj7UFjpyh"
        />
        <TileLayer url="https://tiles.stadiamaps.com/tiles/alidade_satellite/{z}/{x}/{y}{r}.jpg" />

        {/* Ambulance Services */}
        {props.ambulanceMarkers &&
          props.ambulanceMarkers.map((marker) => (
            <Marker position={marker.geocode} icon={ambulanceIcon}>
              <Popup>
                <p className="font-bold">{marker.popUp}</p>
              </Popup>
            </Marker>
          ))}

        {/* Police Services */}
        {props.policeMarkers &&
          props.policeMarkers.map((marker) => (
            <Marker position={marker.geocode} icon={policeIcon}>
              <Popup>
                <p className="font-bold">{marker.popUp}</p>
              </Popup>
            </Marker>
          ))}

        {/* Road Safety */}
        {props.roadSafetyMarkers &&
          props.roadSafetyMarkers.map((marker) => (
            <Marker position={marker.geocode} icon={roadSafetyIcon}>
              <Popup>
                <p className="font-bold">{marker.popUp}</p>
              </Popup>
            </Marker>
          ))}

        {/* Fire Service */}
        {props.fireServiceMarkers &&
          props.fireServiceMarkers.map((marker) => (
            <Marker position={marker.geocode} icon={fireServiceIcon}>
              <Popup>
                <p className="font-bold">{marker.popUp}</p>
              </Popup>
            </Marker>
          ))}

        {/* User location */}
        {location.loaded && !location.error && (
          <Marker
            position={[location.coordinates.lat, location.coordinates.lng]}
            icon={userIcon}
          >
            <Popup>
              <p className="font-bold">Current location</p>
            </Popup>
          </Marker>
        )}

        {/* <GeoCoder /> */}
        <Routing />
      </MapContainer>
    </div>
  );
}

export default GeoMap;
