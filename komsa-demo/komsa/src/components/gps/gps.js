import React from 'react';
import { Wrapper } from "@googlemaps/react-wrapper";
import { GoogleMap } from '@react-google-maps/api';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './Gps.css';
import Map from "./Map";


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


function GpsPage() {

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
                <tr>
                    <td>2022.07.07 14:35</td>
                    <td>37.3885, 126.5077</td>
                </tr>
                <tr>
                    <td>2022.07.07 14:35</td>
                    <td>37.3885, 126.5077</td>
                </tr>
                <tr>
                    <td>2022.07.07 14:35</td>
                    <td>37.3885, 126.5077</td>
                </tr>
                <tr>
                    <td>2022.07.07 14:35</td>
                    <td>37.3885, 126.5077</td>
                </tr>
                <tr>
                    <td>2022.07.07 14:35</td>
                    <td>37.3885, 126.5077</td>
                </tr>
                <tr>
                    <td>2022.07.07 14:35</td>
                    <td>37.3885, 126.5077</td>
                </tr>
                <tr>
                    <td>2022.07.07 14:35</td>
                    <td>37.3885, 126.5077</td>
                </tr>
                <tr>
                    <td>2022.07.07 14:35</td>
                    <td>37.3885, 126.5077</td>
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
        </Col>
        </Row>
    </div>
  )
}

export default GpsPage;