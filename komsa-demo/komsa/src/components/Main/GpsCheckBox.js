import React, {Component} from 'react';
import { Row, Col } from 'reactstrap';


import './Main.css';

// 메인 페이지의 GPS 관리 박스
//_gpsCheckButton : 우측 + 버튼 이미지
class GpsCheckBox extends Component{
    render(){

        const {_gpsCheckButton} = this.props;

        return (
            <div className='main-r-box-gps-check'>
                <Row>
                    <a>GPS 확인</a>
                    <img className='main-r-box-gps-check-button' alt='' src={_gpsCheckButton}/>
                </Row>
            </div>
        )
    }
}

export default GpsCheckBox;