import React, {Component} from 'react';
import { Row, Col } from 'reactstrap';

import './Main.css';

//현재는 Main에서 받아와서 이용중이나, Main에서 관리중인 이미지 파일이 많아
//센서 내부에만 쓰이는 이미지들은 내부적으로 구분하는 파트를 만들어줄지 고려중입니다.
import TemperatureSensor from '../../img/icon_temperature.svg'
import VibrationSensor from '../../img/icon_vibration.svg'
import SmokeSensor from '../../img/icon_smoke.svg'


// 메인 페이지의 센서 관리 박스
//_sensorName : 센서 이름
//_sensorData : 센서 데이터
//_sensorImage : 센서 이미지 (Main.js에서 받아와서 이용 중)
class SensorBox extends Component{
    render(){

        const {_sensorName, _sensorData, _sensorImage} = this.props;

        return (
            <div className='main-lb-box-sensor'>
                <Row>
                    <Col>
                        <Row>
                            <a className='text-sensor-name'>{_sensorName}</a>
                            <a className='text-sensor-data'>{_sensorData}</a>
                        </Row>
                    </Col>
                    <img className='' alt='' src={_sensorImage}/>
                </Row>
            </div>
        )    
    }
}

export default SensorBox;