import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const Maps = () => {

    const terminals = [
        { name: 'ADU Veracruz', location: { lat: 19.178482, lng: -96.134481 }},
        { name: 'ADU Boca del Río', location: { lat: 19.141268, lng: -96.109402 }},
        { name: 'ADU Aeropuerto', location: { lat: 19.1422435, lng: -96.1837179 }},
        { name: 'ADU - Ciudad de México', location: { lat: 19.417125, lng: -99.080298 }},
        { name: 'ADU Norte - Ciudad de México', location: { lat: 19.451769, lng: -99.096554 }},
        { name: 'Terminal de Autobuses del Norte - Ciudad de México', location: { lat: 19.456153, lng: -99.146155 }},
        { name: 'ADU Guadalajara - Jalisco', location: { lat: 20.658735, lng: -103.328375 }},
        { name: 'ADU Cancún - Quintana Roo', location: { lat: 21.160895, lng: -86.847641 }},
        { name: 'ADU Mérida - Yucatán', location: { lat: 20.983702, lng: -89.618767 }},
        { name: 'ADU Puebla - Puebla', location: { lat: 19.055842, lng: -98.216698 }},
        { name: 'ADU Oaxaca - Oaxaca', location: { lat: 17.067499, lng: -96.724551 }},
        { name: 'ADU San Cristóbal - Chiapas', location: { lat: 16.741422, lng: -92.633486 }},
        { name: 'ADU Tampico - Tamaulipas', location: { lat: 22.246759, lng: -97.861381 }},
        { name: 'ADU Villahermosa - Tabasco', location: { lat: 17.981092, lng: -92.932459 }}
    ];

    return(
        <>
            <MapContainer 
                center={{lat: "25.7530096", lng: "-106.1030617"}} 
                zoom={4}
                style={{width: "500px", height:"500px"}}
            >
                <TileLayer 
                    url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                {terminals.map(terminal => (
                <Marker key={terminal.name} position={terminal.location}>
                    <Popup>{terminal.name}</Popup>
                </Marker>
                ))}
            </MapContainer>
        </>
    );
};

export default Maps;