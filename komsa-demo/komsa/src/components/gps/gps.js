import React from 'react';
// import { Wrapper } from "@googlemaps/react-wrapper";
// import { Wrapper, Status } from "@googlemaps/react-wrapper";
// import { GoogleMap } from '@react-google-maps/api';
// import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './Gps.css';
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import GoogleMapReact from 'google-map-react';
import Map from './Map';


// typescript 형태의 simple-map 예제
// 참고자료 : https://developers.google.com/maps/documentation/javascript/examples/map-simple
// let map: google.maps.Map;

// function initMap(): void {
//   map = new google.maps.Map(document.getElementById("map") as HTMLElement, {
//     center: { lat: -34.397, lng: 150.644 },
//     zoom: 8,
//   });
// }

// declare global {
//   interface Window {
//     initMap: () => void;
//   }
// }
// window.initMap = initMap;
// export {};

// javascript 형태의 simple-map 예제 (변환됨)
// let map;
// function initMap() {
//     map = new google.maps.Map(document.getElementById("map"), {
//         center: { lat: -34.397, lng: 150.644 },
//         zoom: 8,
//     });
// }
// window.initMap = initMap;

//참고자료 : https://codesandbox.io/s/google-map-react-z4emw?file=/src/index.js:61-152
// import {
//     withScriptjs,
//     withGoogleMap,
//     GoogleMap,
//     Marker
//   } from "react-google-maps";

//   const MyMapComponent = withScriptjs(
//     withGoogleMap(props => {
//       return (
//         <GoogleMap
//           defaultZoom={14}
//           defaultCenter={{ lat: 60.2517722, lng: 24.8989093 }}
//         >
//           <Marker position={{ lat: 60.2517722, lng: 24.8989093 }} />
//         </GoogleMap>
//       );
//     })
//   );


//   const render = (status) => {
//     switch (status) {
//       case Status.LOADING:
//         return <Spinner />;
//       case Status.FAILURE:
//         return <ErrorComponent />;
//       case Status.SUCCESS:
//         return <MyMapComponent />;
//     }
//   };

//   function MyMapComponent({
//     center,
//     zoom,
//   }: {
//     center: google.maps.LatLngLiteral;W
//     zoom: number;
//   }) {
//     const ref = useRef();
  
//     useEffect(() => {
//       new window.google.maps.Map(ref.current, {
//         center,
//         zoom,
//       });
//     });
  
//     return <div ref={ref} id="map" />;
//   }



//참고자료 : https://developers.google.com/maps/documentation/javascript/react-map#javascript
const render = (status) => {
    return <h1>{status}</h1>;
  };

//React Hooks must be called in a React function component or a custom React Hook function
// const ref = React.useRef(null);
// const [map, setMap] = React.useState();

// React.useEffect(() => {
//   if (ref.current && !map) {
//     setMap(new window.google.maps.Map(ref.current, {}));
//   }
// }, [ref, map]);

//참고자료 : https://tried.tistory.com/98
// const center = {
//     lat: 37.54,
//     lng: 127.04,
//   };
  
//   type props = {
//     mapLocation: any | Array<Object>;
//     containerStyle: object;
//     mapviewMarkerClickHandler : Function
//   };

// function LoadMap() {
//     const { isLoaded } = useLoadScript({
//       googleMapsApiKey: process.env.GOOGLE_MAPS_API_KEY
//       });

//     if (!isLoaded) return <div>Loading...</div>;
//     return <Map />;
//   }


//참고자료 : https://www.npmjs.com/package/google-map-react
const AnyReactComponent = ({ text }) => <div>{text}</div>;


//참고자료 : https://github.com/google-map-react/google-map-react
function SimpleMap(){
    const defaultProps = {
      center: {
        lat: 10.99835602,
        lng: 77.01502627
      },
      zoom: 11
    };
  
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyDj3gPwkRAI7Fwa7p8If8LlaAUEDkUnahE" }}
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
        >
          <AnyReactComponent
            lat={59.955413}
            lng={30.337844}
            text="My Marker"
          />
        </GoogleMapReact>
      </div>
    );
  }
//참고자료 : https://www.youtube.com/watch?v=9e-5QHpadi0&ab_channel=GoogleMapsPlatform
// function SettingMap() {
//     const { isLoaded } = useLoadScript({
//         googleMapsApiKey: "AIzaSyDj3gPwkRAI7Fwa7p8If8LlaAUEDkUnahE"
//     //   googleMapsApiKey: process.env.GOOGLE_MAPS_API_KEY
//       });

//     if (!isLoaded) return <div>Loading...</div>;
//     return <LoadMap />;
//   }
  
// function LoadMap() {
//   const mapPos = {lat:44, lng:-80}
//   const markerPos = {lat:44, lng:-80}

//   return (
//     <GoogleMap
//       zoom={10}
//       center={mapPos}
//       mapContainerClassNaame="map-container"
//     >
//       <Marker position={markerPos}></Marker>
//     </GoogleMap>
// )}


//gps와 관련된 Data(date, pos)를 관리하기 편하게 하기 위한 구조체
//...를 만들고 싶었는데 없다는 것 같아
//참고자료 : https://pcb4.tistory.com/1326
function GpsData(){
    var date, pos;
}

const GpsPage = ({ mapLocation, containerStyle, mapviewMarkerClickHandler }) => {

    //map으로 구성된 array를 사용하고 싶은데
    var gpsData = new GpsData();
    gpsData.date = "2022.07.07 14:35";
    gpsData.pos = "37.3885, 126.5077";
    
    var gpsDatas = new Array();
    for (var i = 0; i < 8; i++)
    {
        gpsDatas.push(gpsData);
    }


  return (
    <div className='gps-box'>
        <p className='gps-title'>GPS 정보</p>

        <Row>
        <Col className='gps-leftbox'>
            <table>
                <tr>
                    <th>위치</th>
                    <th>GPS 위치값</th>
                </tr>
                {/* 구현 이후 추후 js로 변환하여 for문 사용 할 예정 */}
                <tr>
                    <td>{gpsDatas[0].date}</td>
                    <td>{gpsDatas[0].pos}</td>
                </tr>
                <tr>
                    <td>{gpsDatas[1].date}</td>
                    <td>{gpsDatas[1].pos}</td>
                </tr>
                <tr>
                    <td>{gpsDatas[2].date}</td>
                    <td>{gpsDatas[2].pos}</td>
                </tr>
                <tr>
                    <td>{gpsDatas[3].date}</td>
                    <td>{gpsDatas[3].pos}</td>
                </tr>
                <tr>
                    <td>{gpsDatas[4].date}</td>
                    <td>{gpsDatas[4].pos}</td>
                </tr>
                <tr>
                    <td>{gpsDatas[5].date}</td>
                    <td>{gpsDatas[5].pos}</td>
                </tr>
                <tr>
                    <td>{gpsDatas[6].date}</td>
                    <td>{gpsDatas[6].pos}</td>
                </tr>
                <tr>
                    <td>{gpsDatas[7].date}</td>
                    <td>{gpsDatas[7].pos}</td>
                </tr>
            </table>
        </Col>
        <Col className='gps-rightbox'>
        {/* <Wrapper apiKey={"AIzaSyAx3usH0OxGDYgBSR0jzMe3H2DwJ3Ia8Rc"}/> */}
            {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3166.086281791838!2d126.75945061536441!3d37.48229023670594!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357b7cdde9bc37cf%3A0xb216d32b5e77e8de!2z64yA7ZWc66-86rWtIOqyveq4sOuPhCDrtoDsspzsi5wg7IaM7IKs6rWsIOyGoeuCtOuPmSDqsr3snbjroZw2MOuyiOq4uCA0MA!5e0!3m2!1sko!2sus!4v1576239927717!5m2!1sko!2sus"
             width="600" height="350" frameborder="0" style="border:0;"></iframe> */}

            {/* <Map google={this.props.google}
            center={{ lat: 40.7484, lng: -73.9857 }}
            height="300px" zoom={15} /> */}

            {/* 참고자료 : https://codesandbox.io/s/google-map-react-z4emw?file=/src/index.js */}
            {/* <MyMapComponent
                googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyALLEWvdI0oAzAPfEydwednIX6173KnBUQ&v=3.exp&libraries=geometry,drawing,places"
                loadingElement={<div style={{ height: `100%` }} />}
                containerElement={<div style={{ height: `100vh` }} />}
                mapElement={<div style={{ height: `100%` }} />}
            /> */}
            {/* <Wrapper apiKey={"AIzaSyB41DRUbKWJHPxaFjMAwdrzWzbVKartNGg"} render={render} />; */}

            {/* 참고자료 : https://tried.tistory.com/98 */}
            {/* <LoadScript
            googleMapsApiKey = {process.env.GOOGLE_MAPS_API_KEY}
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
            </LoadScript> */}

            <SimpleMap />

            {/* <SettingMap /> */}
        </Col>
        </Row>
    </div>
  )
}

export default GpsPage;