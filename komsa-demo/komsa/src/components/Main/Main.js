import React from 'react';
import { Row } from 'reactstrap';
import { Col } from 'reactstrap';

import './Main.css';

import ShipImage from '../../img/ship.png'
import GpsCheckButton from '../../img/button_plus.svg'

import TemperatureSensor from '../../img/icon_temperature.svg'
import VibrationSensor from '../../img/icon_vibration.svg'
import SmokeSensor from '../../img/icon_smoke.svg'

import Line1 from '../../img/line_1.svg'
import Line2 from '../../img/line_2.svg'
import Line3 from '../../img/line_3.svg'



function MainPage() {

  return (
    <div className='main-box'>
        <div className='main-wrapper'>
            <Row className='main-left-group'>
                <Col>
                    <div className='main-lt-box'>
                        <a>선박1 (선박명)</a>
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
                            <a className='text-sensor-name'>온도센서</a>
                            <a className='text-sensor-data'>측정값</a>
                            <img className='' alt='' src={TemperatureSensor}/>
                        </div>
                        <div className='main-lb-box-sensor'>
                            <a className='text-sensor-name'>진동센서</a>
                            <a className='text-sensor-data'>12345</a>
                            <img className='' alt='' src={VibrationSensor}/>
                        </div>
                        <div className='main-lb-box-sensor'>
                            <a className='text-sensor-name'>연기센서</a>
                            <a className='text-sensor-data'>12345</a>
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