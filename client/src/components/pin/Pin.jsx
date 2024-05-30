import { Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "./pin.scss";
import { Link } from "react-router-dom";

import iconUrl from "./images/marker-icon.png";
import shadowUrl from "./images/marker-shadow.png";

const customIcon = L.icon({
  iconUrl: iconUrl,
  iconSize: [25, 41], // size of the icon
  iconAnchor: [12, 41], // point of the icon which will correspond to marker's location
  popupAnchor: [1, -34], // point from which the popup should open relative to the iconAnchor
  shadowUrl: shadowUrl,
  shadowSize: [41, 41],
  shadowAnchor: [12, 41],
});

function Pin({ item }) {
  return (
    <Marker position={[item.latitude, item.longitude]} icon={customIcon}>
      <Popup>
        <div className="popupContainer">
          <img src={item.images[0]} alt={item.title} />
          <div className="textContainer">
            <Link to={`/${item.id}`}>{item.title}</Link>
            <span>{item.bedroom} bedroom</span>
            <b>€ {item.price}</b>
          </div>
        </div>
      </Popup>
    </Marker>
  );
}

export default Pin;
