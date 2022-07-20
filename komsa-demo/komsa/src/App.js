import './App.css';
import React, {Component} from 'react';
// import React, {Component} from 'react';
import PageTemplate from './components/PageTemplate/PageTemplate';

// 값을 넘겨주어 구현하려던 노력의 흔적 (현재 사용하지 않음)
import Header from './components/Header/Header';
import Body from './components/Gps/Gps';
import Footer from './components/Footer/Footer';

class App extends Component {

  render() {
    return (
      // <PageTemplate header={Header} body={Body} footer={Footer} />
       React.createElement(PageTemplate)

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
