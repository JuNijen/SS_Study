import React, {Component} from 'react';
import { Row } from 'reactstrap';
import { Col } from 'reactstrap';

import './Main.css';

import TemperatureSensor from '../../img/icon_temperature.svg'
import VibrationSensor from '../../img/icon_vibration.svg'
import SmokeSensor from '../../img/icon_smoke.svg'

class SensorBox extends Component{
    render(){

        const {_sensorName, _sensorData, _sensorImage} = this.props;

        return (
            <div className='main-lb-box-sensor'>
                <Col>
                    <Row>
                        <a className='text-sensor-name'>{_sensorName}</a>
                        <a className='text-sensor-data'>{_sensorData}</a>
                    </Row>
                </Col>
                <Col>
                    <img className='' alt='' src={_sensorImage}/>
                </Col>
            </div>
        )    
    }
}

export default SensorBox;