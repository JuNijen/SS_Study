import React from 'react';
import { Row } from 'reactstrap';
import { Col } from 'reactstrap';

import getServerData from './Server';
import './Main.css';

import ShipImage from '../../img/ship.png'
import GpsCheckButton from '../../img/button_plus.svg'

import TemperatureSensor from '../../img/icon_temperature.svg'
import VibrationSensor from '../../img/icon_vibration.svg'
import SmokeSensor from '../../img/icon_smoke.svg'

import Line1 from '../../img/line_1.svg'
import Line2 from '../../img/line_2.svg'
import Line3 from '../../img/line_3.svg'
import { getDefaultNormalizer } from '@testing-library/react';


// 서버 설정 구간. Server.js 참고
// 1. 웹소켓 클라이언트 객체 생성
// const webSocket = new WebSocket(process.env.WEBSOKET_IP);
const webSocket = new WebSocket("ws://211.180.78.170:58085");
var webSoketData;

// 2. 웹소켓 이벤트 처리
// 2-1) 연결 이벤트 처리
webSocket.onopen = () => {
    console.log("\n\rwebsocket connection succeed!");
};

// 2-2) 메세지 수신 이벤트 처리
webSocket.onmessage = function (event) {
    console.log("\n\r서버 웹소켓에게 받은 데이터: " + event.data);

    webSoketData = JSON.parse(event.data);

    for ( var i in webSoketData ) {
        console.log(webSoketData[i]);
    }
}

// 2-3) 연결 종료 이벤트 처리
webSocket.onclose = function () {
    console.log("\n\r서버 웹소켓 연결 종료");
}

// 2-4) 에러 발생 이벤트 처리
webSocket.onerror = function (event) {
    console.log("\n\r" + event);
}


// 메인 화면
function MainPage() {
    const sensorName = ["온도센서", "진동센서", "연기센서"];
    var sensorData = ["온도테스트", "진동테스트", "연기테스트(서버연결안됨)"];
    var shipName = "선박1 (선박명)";

    //데이터가 있을 시 새로 셋팅 해 줌.
    //데이터가 없을 시 기존에 선언한 가데이터 활용.
    if(webSoketData != null){
        shipName = webSoketData[Object.keys(webSoketData)[0]];
        sensorData = [webSoketData[Object.keys(webSoketData)[1]], webSoketData[Object.keys(webSoketData)[2]], webSoketData[Object.keys(webSoketData)[3]]];
    }

  return (
    <div className='main-box'>
        <div className='main-wrapper'>
            <Row className='main-left-group'>
                <Col>
                    <div className='main-lt-box'>
                        <a>{shipName}</a>
                        <img className='' alt='' src={TemperatureSensor}/>
                        <img className='' alt='' src={VibrationSensor}/>
                        <img className='' alt='' src={SmokeSensor}/>
                        <img className='' alt='' src={ShipImage}/>
                        <img className='' alt='' src={Line1}/>
                        <img className='' alt='' src={Line2}/>
                        <img className='' alt='' src={Line3}/>
                    </div>
                    <div className='main-lb-box-wrapper'>
                        <div className='main-lb-box-sensor'>
                            <Col>
                                <a className='text-sensor-name'>{sensorName[0]}</a>
                                <a className='text-sensor-data'>{sensorData[0]}</a>
                            </Col>
                            <Col>
                                <img className='' alt='' src={TemperatureSensor}/>
                            </Col>
                        </div>
                        <div className='main-lb-box-sensor'>
                            <a className='text-sensor-name'>{sensorName[1]}</a>
                            <a className='text-sensor-data'>{sensorData[1]}</a>
                            <img className='' alt='' src={VibrationSensor}/>
                        </div>
                        <div className='main-lb-box-sensor'>
                            <a className='text-sensor-name'>{sensorName[2]}</a>
                            <a className='text-sensor-data'>{sensorData[2]}</a>
                            <img className='' alt='' src={SmokeSensor}/>
                        </div>
                    </div>
                </Col>
                <Col>
                    <div className='main-r-box-cctv bg-cctv1'>
                        <a>CCTV1</a>
                    </div>
                    <div className='main-r-box-cctv bg-cctv2'>
                        <a>CCTV2</a>
                    </div>
                    <div className='main-r-box-gps-check'>
                        <a>GPS 확인</a>
                        <img className='main-r-box-gps-check-button' alt='' src={GpsCheckButton}/>
                    </div>
                </Col>
            </Row>
        </div>
    </div> 
  )
}

export default MainPage;