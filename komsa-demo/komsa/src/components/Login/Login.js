import React from 'react';

import './Login.css';


function LoginPage() {

  return (
    // <div className='login-box'>
    //     <div className='login-wrapper'>
    //         <p className='login-title'>로그인</p>
    //         <input type="text" name="id" placeholder='아이디를 입력해주세요.'/>
    //         <input type="password" name="pw" placeholder='비밀번호를 입력해주세요.'/>
    //         <button>로그인</button>
    //     </div>
    // </div> 

    React.createElement('div', { className: 'login-box' },
        React.createElement('div', { className: 'login-wrapper' },
            React.createElement('p', { className: 'login-title' }, '로그인'),
            React.createElement('input', { type: 'text', name: 'id', placeholder: '아이디를 입력해주세요.' }),
            React.createElement('input', { type: 'password', name: 'pw', placeholder: '비밀번호를 입력해주세요.' }),
            React.createElement('button', null, '로그인')
        )
    )
  )
}

export default LoginPage;