import React, {Component} from 'react';
import { Row } from 'reactstrap';
import { Col } from 'reactstrap';

import './Main.css';


class CctvBox extends Component{
    render(){

        const {_cctvName, _cctvData, _cctvButton} = this.props;

        return (
            <div className='main-r-box-cctv bg-cctv1'>
                <a>{_cctvName}</a>
            </div>
        )    
    }
}

export default CctvBox;