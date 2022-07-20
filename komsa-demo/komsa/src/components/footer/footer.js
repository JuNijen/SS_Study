import React from 'react';

import './Footer.css';


function Footer() {

  return (
    React.createElement(
        'div', {
            className: 'footer-box'
        },
        React.createElement('p', null,
            '주소 : (30100) 세종특별자치시 아름서길 27 (아름동)',
            React.createElement('br', null),
            'Fax : 044-330-2357 Tel : 044-330-2380'
        ),
        React.createElement('p', null,
            'Copyright \u24D2 2020 KOMSA. All rights Reserved.'
        )
    )    
  )
}

export default Footer;