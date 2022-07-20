import React from 'react';

import './PageTemplate.css';

import Header from '../Header/Header';
// import Body from '../Gps/Gps';
import Footer from '../Footer/Footer';
import MainPage from '../Main/Main';
import LoginPage from '../Login/Login';
import CctvPage from '../Cctv/Cctv';
import GpsPage from '../Gps/Gps';

const PageTemplate = (header, body, footer) => 
{
    return(
        React.createElement("div", null,
            React.createElement(Header, null),
            React.createElement(MainPage, null),
            React.createElement(Footer, null)
        )

        // 값을 넘겨주어 구현하려던 노력의 흔적
        // React.createElement("main", {className : "page-template" },
        //     React.createElement("section",  { className: "page-template-header" }, header,
        //     React.createElement("section",  { className: "page-template-body" }, body),
        //     React.createElement("section",  { className: "page-template-footer" }, footer))
        //)
    );
}

export default PageTemplate;
