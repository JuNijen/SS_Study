import React, {Component} from 'react';
import { Row, Col } from 'reactstrap';

import './Main.css';
import ButtonBlue from '../../img/button_whiteblue.svg'
import ButtonDeepBlue from '../../img/button_whitedeepblue.svg'

// 메인 페이지의 CCTV 박스
//_cctvName : CCTV 이름
//_cctvData : CCTV 데이터 (영상)
//_cctvButton : CCTV 이미지 (영상만 사용하게 될 경우 폐기될 예정)
class CCTVBox extends Component{
    render(){

        const {_cctvName, _cctvData, _cctvButton} = this.props;

        return (
            <div className='main-r-box-cctv bg-cctv1'>
                <Col>
                    <a>{_cctvName}</a>
                    <img className='' alt='' src={ButtonBlue}/>
                </Col>
            </div>
        )    
    }
}

export default CCTVBox;