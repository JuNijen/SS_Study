import * as React from 'react';
import './topbar.css';

const Topbar = ({onCreate}) => {

    return (
        <div className='topbar'>
            <a href = {() => false}>topbar test text</a>
            <button className='topbar-button'>로그인</button>
        </div>
    );
};

export default Topbar;