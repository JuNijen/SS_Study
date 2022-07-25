import './App.css';
import React, {Component} from 'react';
import PageTemplate from './components/PageTemplate/PageTemplate';


// 메인 화면. 전체적인 화면 구성의 관리는 PageTemplate에서 해 준다.
class App extends Component {

  render() {
    return (
      // <PageTemplate className='' _body="GPS" />
      React.createElement(PageTemplate, { className: "", _body: "Main" })
    );
  }
}

export default App;
