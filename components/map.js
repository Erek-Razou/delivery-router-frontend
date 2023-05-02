import {MapContainer, TileLayer, Marker, Popup} from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css'
import "leaflet-defaulticon-compatibility";

const Map = () => {
    return (
        <div className="p-8">
            <MapContainer center={[39.0742, 21.8243]} zoom={6} scrollWheelZoom={false} className="w-[800px] h-[500px]">
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[41.0864, 23.5484]}>
                    <Popup>
                       This is.... <br/> my pin
                    </Popup>
                </Marker>
            </MapContainer>
        </div>
    )
}

export default Map