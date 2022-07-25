import React, { Component } from 'react';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';

import MainPage from '../Main/Main';
import LoginPage from '../Login/Login';
import CCTVPage from '../CCTV/CCTV';
import GPSPage from '../GPS/GPS';

import './PageTemplate.css';


// 메인 화면을 그려주는 묶음
//_header : 상단 레이아웃 그룹 (현재 사용되지 않음)
//_body : App.js에서 조작되는 데이터
//_footer : 하단 레이아웃 그룹 (현재 사용되지 않음)
class PageTemplate extends Component {
    render(){
        var page;

        // 초기에는 Header와 Footer도 App에서 관리하여 보내주려 했으나,
        // 모든 페이지에서 공통으로 사용중인 이유로 불필요하다고 판단.
        // const {_header, _body, _footer} = this.props;
        const { _body } = this.props;

        // 전달받은 props 값에 따라 구분.
        switch( _body ){
            case 'Main':
                page = <MainPage />
                break;
            case 'Login':
                page = <LoginPage />
                break;
            case 'GPS':
                page = <GPSPage />
                break;
            case 'CCTV':
                page = <CCTVPage />
                break;
            default:
                page = <MainPage />
                break;
        }

        return(
            // js의 JSX 버전 표기
            // <div>
            //     <Header />
            //     {page}
            //     <Footer />
            // </div>

            React.createElement("div", null,
                React.createElement(Header, null),
                page,
                React.createElement(Footer, null)
            )
        )
    }
} 

export default PageTemplate;
