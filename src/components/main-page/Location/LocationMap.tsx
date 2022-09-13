import { MapContainer, Marker, TileLayer } from "react-leaflet";
import { LatLngExpression, Icon } from "leaflet";
import markerIconPng from "leaflet/dist/images/marker-icon.png";
import styles from "./LocationMap.module.scss";
import "leaflet/dist/leaflet.css";

const position: LatLngExpression = [52.404556560532235, 16.949742396468974];

const LocationMap = () => {
  return (
    <MapContainer
      center={position}
      zoom={15}
      scrollWheelZoom={false}
      className={styles.map}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}"
      />
      <Marker
        position={position}
        icon={
          new Icon({
            iconUrl: markerIconPng.src,
          })
        }
      />
    </MapContainer>
  );
};

export { LocationMap };
