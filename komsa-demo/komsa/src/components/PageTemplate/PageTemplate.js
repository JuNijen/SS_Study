import React, { Component } from 'react';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';

import './PageTemplate.css';



class PageTemplate extends Component {
    render(){

        // Header와 Footer도 App에서 관리하여 보내주려 했으나,
        // 모든 페이지에서 공통으로 사용중인 이유로 불필요하다고 판단.
        // const {_header, _body, _footer} = this.this.props;
        const {_body} = this.this.props;

        return(
            React.createElement("div", null,
                React.createElement("div", Header),
                React.createElement("div", _body),
                React.createElement("div", Footer)
            )
        )
    }
} 

export default PageTemplate;
