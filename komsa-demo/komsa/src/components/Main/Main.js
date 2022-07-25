import React, { Component, state, useState } from 'react';
import { Row, Col } from 'reactstrap';

import './Main.css';
// import getServerData from './Server';
import SensorBox from './SensorBox';
import CCTVBox from './CCTVBox';
import GpsCheckBox from './GPSCheckBox';

import ShipImage from '../../img/ship.png'
import GpsCheckButton from '../../img/button_plus.svg'

import TemperatureSensor from '../../img/icon_temperature.svg'
import VibrationSensor from '../../img/icon_vibration.svg'
import SmokeSensor from '../../img/icon_smoke.svg'

import Line1 from '../../img/line_1.svg'
import Line2 from '../../img/line_2.svg'
import Line3 from '../../img/line_3.svg'


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

    console.log(event);
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
class MainPage extends Component {
    constructor(props) {
        super(props);
        // const [shipName, setShipName] = useState("선박1 (선박명)");
        // const [stateTest, setStateTest] = useState(0);
        this.state = {
            shipName : "선박1 (선박명, 서버연결안됨)",
            sensorName : ["온도센서", "진동센서", "연기센서"],
            sensorData : ["온도테스트", "진동테스트", "연기테스트"],
            cctvName : ["CCTV1", "CCTV2"],
            stateTest : 0
        };
        // 바인드가 불가능하다는 오류가 발생하여 주석처리.
        // 참고자료 : https://knight76.tistory.com/entry/react-Cannot-read-property-setState-of-undefined-%EC%97%90%EB%9F%AC-%ED%95%B4%EA%B2%B0
        // this.focusBox = this.focusBox.bind(this);
    }

    render(){

    function focusBox(id) {
        console.log(id);
        // const focusSensor = document.getElementById(id);
        // focusSensor.focus();
        // document.getElementById(id).focus();
        // this.state.sensorData[0] = this.state.sensorData[0]++;
        // this.setState({ stateTest: 1 })
        this.stateTest = 1;
    }

    function updateServerData(){
        //데이터가 있을 시 새로 셋팅 해 줌.
        //데이터가 없을 시 기존에 선언한 가데이터 활용.
        if(webSoketData != null){
            this.state.shipName = webSoketData[Object.keys(webSoketData)[0]];
            this.state.sensorData = [webSoketData[Object.keys(webSoketData)[1]], webSoketData[Object.keys(webSoketData)[2]], webSoketData[Object.keys(webSoketData)[3]]];
        }
    }

    return (
        <div className='main-box'>
            <div className='main-wrapper'>
                <Row className='main-left-group'>
                    <Col>
                        <div className='main-lt-box'>
                            <a>{this.state.shipName}</a>
                            <button>
                                <img className='sensor1-image' id="sensortest" alt='' onClick={()=>focusBox(this.state.sensorName[0])} src={TemperatureSensor}/>
                            </button>
                            <button>
                                <img className='sensor2-image' id={this.state.sensorName[1]} alt='' onClick={()=>focusBox(this.state.sensorName[1])} src={VibrationSensor}/>
                            </button>
                            <button>
                                <img className='sensor3-image' id={this.state.sensorName[2]} alt='' onClick={()=>focusBox(this.state.sensorName[2])} src={SmokeSensor}/>
                            </button>

                            <img className='ship-image' alt='' src={ShipImage}/>
                            <img className='line1-image' alt='' src={Line1}/>
                            <img className='line2-image' alt='' src={Line2}/>
                            <img className='line3-image' alt='' src={Line3}/>
                        </div>
                        <div className='main-lb-box-wrapper'>
                            <SensorBox className='' id="sensortest" _sensorName={this.state.sensorName[0]} _sensorData={this.state.stateTest} _sensorImage={TemperatureSensor}/>
                            <SensorBox className='' id={this.state.sensorName[1]} _sensorName={this.state.sensorName[1]} _sensorData={this.state.sensorData[1]} _sensorImage={VibrationSensor}/>
                            <SensorBox className='' id={this.state.sensorName[2]} _sensorName={this.state.sensorName[2]} _sensorData={this.state.sensorData[2]} _sensorImage={SmokeSensor}/>
                        </div>
                    </Col>
                    <Col>
                        {/* <div className='main-r-box-wrapper'> */}
                            <CCTVBox className='' _cctvName={this.state.cctvName[0]} _cctvData={""} _cctvButton={""}/>
                            <CCTVBox className='' _cctvName={this.state.cctvName[0]} _cctvData={""} _cctvButton={""}/>
                            <GpsCheckBox className='' _gpsCheckButton={GpsCheckButton}/>
                        {/* </div> */}
                    </Col>
                </Row>
            </div>
        </div> 
    )}
}
export default MainPage;