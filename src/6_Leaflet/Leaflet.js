import {
  MapContainer,
  TileLayer,
  Marker,
  FeatureGroup,
  useMap,
  Polygon,
} from "react-leaflet";
import L from "leaflet";
import iconMarker from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";
import "leaflet-draw/dist/leaflet.draw.css";
import { useState } from "react";
import { EditControl } from "react-leaflet-draw";
import polygon from "./first_polygon.json";

const icon = new L.Icon({
  iconUrl: iconMarker,
  shadowUrl: iconShadow,
  iconAnchor: [17, 46],
  // popupAnchor: [0, -46]
});
const defaultCordinate = { lat: 50.4536, lng: 30.5164 };
const defaultCordinateCenter = [50.494887, 30.588661]
const Leaflet = () => {
  const [_, setMapLayer] = useState([]);
  const ATTRIBUTE =
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';
  const ZOOM = 10;
  const URL = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";

  const create = (e) => {
    console.log(e);
    if (e.layerType === "polygon") {
      setMapLayer((prev) => [
        ...prev,
        { id: e.layer._leaflet_id, lat: e.layer.getLatLngs()[0] },
      ]);
      console.log(e.layer.getLatLngs()[0]);
    }
  };
  const edit = () => {};
  const del = () => {};

  return (
    <>
      <MapContainer
        center={defaultCordinateCenter}
        scrollWheelZoom={true}
        zoom={ZOOM}
      >
        <TileLayer attribution={ATTRIBUTE} url={URL} />
        <FeatureGroup>
          <EditControl
            position="bottomleft"
            onCreated={create}
            onEdited={edit}
            onDeleted={del}
            draw={{
              circle: false,
              circlemarker: false,
              rectangle: false,
              marker: false
            }}
          />
        </FeatureGroup>
        <PolygonOnClick />
        <MarkerOnclick />
      </MapContainer>
    </>
  );
};

export default Leaflet;

const MarkerOnclick = () => {
  const map = useMap();
  return (
    <>
      <Marker
        position={defaultCordinate}
        icon={icon}
        eventHandlers={{
          click: (e) => {
            map.flyTo(e.latlng, 12);
          },
        }}
      />
    </>
  );
};

const PolygonOnClick = () => {
  const map = useMap();
  return (
    <Polygon
      positions={polygon}
      eventHandlers={{
        click: (e) => {
          map.flyTo(e.latlng, 12);
        },
      }}
    />
  );
};
