import './App.css';
import React, {Component} from 'react';
import PageTemplate from './components/PageTemplate/PageTemplate';

// 값을 넘겨주어 구현하려던 노력의 흔적 (현재 사용하지 않음)
import MainPage from './/components/Main/Main';
import LoginPage from './/components/Login/Login';
import CctvPage from './/components/CCTV/CCTV';
import GpsPage from './/components/GPS/GPS';

class App extends Component {

  render() {
    return (
      // 페이지 전환을 시도하려다 일시 중단.
       <PageTemplate className='' _body="Main" />
      //React.createElement(PageTemplate, className='',_header={Header}, _body={MainPage}, _footer={Footer})
      //React.createElement(PageTemplate, _body="MainPage")
      

      // 값을 넘겨주어 구현하려던 노력의 흔적
      //header, body, footer
      // React.createElement(PageTemplate, 
      //     { header: (React.createElement(Header)) },
      //     { body: (React.createElement(Body)) },
      //     { footer: (React.createElement(Footer))}
      // )
    );
  }
}

export default App;
