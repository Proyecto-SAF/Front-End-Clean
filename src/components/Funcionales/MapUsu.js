import React, { useState, useEffect, useRef } from "react";
import L from "leaflet";

import axios from "axios";
import {
  MapContainer,
  TileLayer,
  FeatureGroup,
  Popup,
  Marker,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-draw/dist/leaflet.draw.css";

const MapView = () => {
  L.Icon.Default.mergeOptions({
    iconRetinaUrl:
      "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/marker-icon.png",
    iconUrl:
      "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/marker-icon.png",
    shadowUrl:
      "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/marker-shadow.png",
  });
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);
  const [location, setLocation] = useState([
    -26.18064675300086, -58.188628961794805,
  ]);
  const [center, setCenter] = useState({
    lat: "-26.18064675300086",
    lng: "-58.188628961794805",
  });
  const mapRef = useRef();

  const [puntos, setPuntos] = useState([]);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLocation([position.coords.latitude, position.coords.longitude]);
    });

    const handleResize = () => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:4000/puntos");
        setPuntos(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="row">
      <div className="col text-center">
        <MapContainer
          center={center}
          zoom={12}
          ref={mapRef}
          style={{ width, height: height - 50 }}
        >
          <FeatureGroup>
            {puntos.map((punto) => (
              <Marker key={punto.id} position={[punto.lat, punto.lng]}>
                <Popup>
                  Aqui se realiza el programa SAF.
                  <br></br>
                  <span>Los jueves y sabados unicamente</span>
                  <br></br>
                  <span>desde las 7:30hs a 12:30hs</span>
                </Popup>
              </Marker>
            ))}
            <Marker position={location}>
              <Popup>Esta es tu ubicación actual</Popup>
            </Marker>
          </FeatureGroup>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
        </MapContainer>
      </div>
    </div>
  );
};

export default MapView;
