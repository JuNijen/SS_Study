import * as React from 'react';
import Login from './login/login';
import Topbar from './topbar/topbar';
import Footer from './footer/footer'

function App() {
    return (
      React.createElement(App),
      React.createElement(Topbar),
      React.createElement(Login)
      // React.createElement(Footer)
      );
}

export default App;
