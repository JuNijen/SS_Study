// import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";


//참고자료 : https://www.youtube.com/watch?v=9e-5QHpadi0&ab_channel=GoogleMapsPlatform
export default function SettingMap() {
    const { isLoaded } = useLoadScript({
      googleMapsApiKey: process.env.GOOGLE_MAPS_API_KEY
      });

    if (!isLoaded) return <div>Loading...</div>;
    return <LoadMap />;
  }
  
function LoadMap() {
  const mapPos = {lat:44, lng:-80}
  const markerPos = {lat:44, lng:-80}

  return (
    <GoogleMap
      zoom={10}
      center={mapPos}
      mapContainerClassNaame="map-container"
    >
      <Marker position={markerPos}></Marker>
    </GoogleMap>
)}