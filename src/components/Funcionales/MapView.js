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
import { EditControl } from "react-leaflet-draw";
import "leaflet/dist/leaflet.css";
import "leaflet-draw/dist/leaflet.draw.css";

const MapView = () => {
  const initialLayers = [
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "&copy; OpenStreetMap contributors",
    }),
  ];

  /*   const customIcon =L.Icon.Default.mergeOptions({
    iconUrl: '../../assets/img/casita.png',
    iconSize: [25, 41], // Tamaño del icono
    iconAnchor: [12, 41], // Punto del icono que se ubicará en la posición del marker
    popupAnchor: [1, -34], // Punto donde se ubicará el popup con respecto al icono
  }); */
  L.Icon.Default.mergeOptions({
    iconRetinaUrl:
      "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/marker-icon.png",
    iconUrl:
      "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/marker-icon.png",
    shadowUrl:
      "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/marker-shadow.png",
  });

  const [center] = useState({
    lat: "-26.18064675300086",
    lng: "-58.188628961794805",
  });
  const [mapLayers, setMapLayers] = useState(initialLayers);
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);
  const [location, setLocation] = useState([51.505, -0.09]);
  const [puntos, setPuntos] = useState([]);

  //estado para la primera vez que se renderizan los productos en el catalogo
  const mapRef = useRef();

  const _onCreate = (e) => {
    console.log(e);

    const { layerType, layer } = e;
    if (layerType === "marker") {
      const { _leaflet_id } = layer;
      const latlngs = layer.getLatLng();

      fetch("http://localhost:4000/crearPunto", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: _leaflet_id,
          lat: latlngs.lat,
          lng: latlngs.lng,
        }),
      })
        .then((response) => response.json())
        .then((data) => console.log(data))
        .catch((error) => console.error(error));

      setMapLayers((layers) => [...layers, { id: _leaflet_id, latlngs }]);
    }
  };

  const _onEdited = (e) => {
    console.log(e);
    const {
      layers: { _layers },
    } = e;

    Object.values(_layers).map(({ _leaflet_id, editing }) => {
      setMapLayers((layers) =>
        layers.map(
          (l) => l.id === _leaflet_id
          /*  ? { ...l, latlngs: { ...editing.latlngs[0] } }
            : l */
        )
      );
    });
  };


  const _onDeleted = (e) => {
    const {
      layers: { _layers },
    } = e;
  
    Object.values(_layers).map(async ({ _latlng }) => {
      const { lat, lng } = _latlng;
      console.log("coords");
      console.log(_latlng);
      try {
        await axios.delete(`http://localhost:4000/eliminarPunto/${lat}/${lng}`);
        setMapLayers((layers) => layers.filter((l) => l.latlngs !== _latlng));
      } catch (error) {
        if (error.response.status === 404) {
          console.log('El recurso no se encontró en el servidor');
          // Agrega un mensaje para el usuario y una solución alternativa
        } else {
          console.log('Error en la solicitud:', error.message);
        }
      }
    });
  };
  
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
    <div className="row" id="map">
      <div className="col text-center">
        <div>
          <MapContainer center={center} zoom={11} ref={mapRef}>
            <FeatureGroup>
              <EditControl
                position="topright"
                onCreated={_onCreate}
                onEdited={_onEdited}
                onDeleted={_onDeleted}
                draw={{
                  rectangle: false,
                  package: false,
                  polygon: false,
                  polyline: false,
                  circle: false,
                  circlemarker: false,
                }}
              />

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
    </div>
  );
};

export default MapView;
