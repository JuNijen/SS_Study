import React from 'react';

import { Row, Col } from 'reactstrap';
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

import './GPS.css';


// GPS 기능을 사용하기 위한 구간.
function LoadMap() {
    const { isLoaded } = useLoadScript({
        // googleMapsApiKey : process.env.GOOGLE_MAPS_API_KEY
        googleMapsApiKey : "AIzaSyDj3gPwkRAI7Fwa7p8If8LlaAUEDkUnahE",
    });

    if (!isLoaded) return <div>Loading...</div>;
    return <Map />;
}

 function Map() {
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
        
        </Col>
        </Row>
    </div>
  )
}

export default GpsPage;