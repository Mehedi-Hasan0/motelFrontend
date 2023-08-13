/* eslint-disable react/prop-types */
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

import "leaflet/dist/leaflet.css";

const Map = ({ latAndLong }) => {
  const mapKey = latAndLong ? `${latAndLong[0]}-${latAndLong[1]}` : "default";

  const url = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";
  const attribution =
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';

  return (
    <MapContainer
      key={mapKey}
      center={latAndLong.length !== 0 ? latAndLong : [24, 90]}
      zoom={4}
      scrollWheelZoom={false}
      className="w-full rounded-lg"
    >
      <TileLayer url={url} attribution={attribution} />
      <Marker position={latAndLong.length !== 0 ? latAndLong : [24, 90]}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;
