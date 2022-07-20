import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const center = {
  lat: 37.54,
  lng: 127.04,
};

type props = {
  mapLocation: any | Array<Object>;
  containerStyle: object;
  mapviewMarkerClickHandler : Function
};

const Googlemap = ({ mapLocation, containerStyle, mapviewMarkerClickHandler }: props) => {

  return (
    <LoadScript
      googleMapsApiKey="??"
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={4}
      >
        {!Array.isArray(mapLocation) ? (
          <Marker position={mapLocation} />
        ) : (
          mapLocation.map((location: google.maps.LatLng, index: number) => (
            <Marker position={location} key={index} onClick={(e) => mapviewMarkerClickHandler(e)} />
          ))
        )}
      </GoogleMap>
    </LoadScript>
  );
};

export default React.memo(Googlemap);