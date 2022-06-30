import * as React from 'react';
import './login.css';

const Login = ({onCreate}) => {

    return (

        <div className='login-background'>
            <div className='login'>
                <div className='row-box'>
                    <a className='login-title'>로그인</a>
                </div>
                <input type={Text} name="login_id" placeholder='ID'></input>
                <input type={'password'} name="login_pw" placeholder='패스워드'></input>
                <div className='row-right-box'>
                    <button className='login-button'>로그인</button>
                </div>
            </div>
            
        </div>

        // React.createElement("div", { className: "login" }, React.createElement("div",
        // { className: "create-button", onClick: onCreate }))
    );
};

export default Login;