import * as React from 'react';
import './Form.css';

// Form 입력을 받는 구간
// value:       인풋의 내용
// onKeyPress:  인풋에서 Enter 가 눌렸을 때 onCreate 를 한 것과 동일한 작업을 하기 위해서 사용

const Form = ({value, onChange, onCreate, onKeyPress}) => {
    
    return (
        React.createElement("div", { className: "form" },
        React.createElement("input", { value: value, onChange: onChange, onKeyPress: onKeyPress }),
        React.createElement("div", { className: "create-button", onClick: onCreate }, "\uCD94\uAC00"))
    );
};

export default Form;