import React, {Component} from 'react';
import { Row, Col } from 'reactstrap';


import './Main.css';

// 메인 페이지의 GPS 관리 박스
//_gpsCheckButton : 우측 + 버튼 이미지
class GPSCheckBox extends Component{
    render(){

        const {_gpsCheckButton} = this.props;

        return (
            <div className='main-r-box-gps-check'>
                <Row>
                    <a>GPS 확인</a>
                    <button>
                        <img alt='' src={_gpsCheckButton}/>
                    </button>
                </Row>
            </div>
        )
    }
}

export default GPSCheckBox;