import styles from './DetailMapa.module.css';

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

export default function DetailMapa() {
    return (
      <div className={styles.containerMapa}>
        <h1 className={styles.titleMapa}> Localização </h1>
        
        <div className={styles.mapaArea}>
          <MapContainer className={styles.mapa} center={[-22.9031, -43.255]} zoom={15}>
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              
            />
            <Marker position={[-22.9031, -43.255]}>
              <Popup> Sua Localização </Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
    );
}