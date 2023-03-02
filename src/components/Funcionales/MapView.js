import React, { useState, useEffect, useRef} from 'react'
import L from "leaflet";
import { MapContainer, TileLayer, FeatureGroup, Popup, Marker } from 'react-leaflet';
import { EditControl} from 'react-leaflet-draw';
import 'leaflet/dist/leaflet.css';
import 'leaflet-draw/dist/leaflet.draw.css'

const MapView = () => {
  L.Icon.Default.mergeOptions({
    iconRetinaUrl:
      "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/marker-icon.png",
    iconUrl:
      "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/marker-icon.png",
    shadowUrl:
      "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/marker-shadow.png",
  });

    const [center] = useState({ lat: '-26.18064675300086', lng: '-58.188628961794805' });
    const [ setMapLayers] = useState([]);
    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);
    const [location, setLocation] = useState([51.505, -0.09]);
    const mapRef = useRef();

    const _onCreate = (e) => {
        console.log(e);
    
        const { layerType, layer } = e;
        if (layerType === "marker") {
          const { _leaflet_id } = layer;
    
          setMapLayers((layers) => [
            ...layers,
            { id: _leaflet_id, latlngs: layer.getLatLngs()[0] },
          ]);
        }
      };
    
      const _onEdited = (e) => {
        console.log(e);
        const {
          layers: { _layers },
        } = e;
    
        Object.values(_layers).map(({ _leaflet_id, editing }) => {
          setMapLayers((layers) =>
            layers.map((l) =>
              l.id === _leaflet_id
                /* ? { ...l, latlngs: { ...editing.latlngs[0] } }
                : l */
            )
          );
        });
      };
    
      const _onDeleted = (e) => {
        console.log(e);
        const {
          layers: { _layers },
        } = e;
    
        Object.values(_layers).map(({ _leaflet_id }) => {
          setMapLayers((layers) => layers.filter((l) => l.id !== _leaflet_id));
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
    return (
        <div className='row'>
            <div className='col text-center'>
                    <div>
                    <MapContainer center={center} zoom={11} ref={mapRef} >
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
                            <Marker position={{ lat: '-26.136743613236106', lng: '-58.16033699937402' }}>
          <Popup>
            <span>  Aqui se realiza el programa SAF</span>
            <br></br>
            <span>
            desde las 7:30hs a 12:30hs
            </span>
          </Popup>
        </Marker>
        <Marker position={{ lat: '-26.180058876227015', lng: '-58.188880131680094' }}>
          <Popup>
            <span>  Aqui se realiza el programa SAF</span>
            <br></br>
            <span>
            desde las 7:30hs a 12:30hs
            </span>
          </Popup>
          </Marker>
        <Marker position={{ lat: '-26.192287685773195', lng: '-58.226972147021996' }}>
          <Popup>
            <span>Aqui se realiza el programa SAF.</span>
            <br></br>
            <span>
            desde las 7:30hs a 12:30hs
            </span>
          </Popup>
        </Marker>
                             <Popup>
                             <span>Aqui se realiza el programa SAF.</span>
            <br></br>
            <span>
            desde las 7:30hs a 12:30hs
            </span>
                            </Popup>
                            <Marker position={location} >
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
    )
}


export default MapView