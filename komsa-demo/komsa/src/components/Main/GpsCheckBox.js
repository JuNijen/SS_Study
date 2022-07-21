import React, {Component} from 'react';
import { Row } from 'reactstrap';
import { Col } from 'reactstrap';

import './Main.css';


class GpsCheckBox extends Component{
    render(){

        const {_gpsCheckButton} = this.props;

        return (
            <div className='main-r-box-gps-check'>
                <a>GPS 확인</a>
                <img className='main-r-box-gps-check-button' alt='' src={_gpsCheckButton}/>
            </div>
        )
    }
}

export default GpsCheckBox;