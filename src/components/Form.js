import React from 'react';
import './Form.css';

/*
value: 인풋의 내용
onKeyPress: 인풋에서 Enter 가 눌렸을 때 onCreate 를 한 것과 동일한 작업을 하기 위해서 사용
*/

const Form = ({value, onChange, onCreate, onKeyPress}) => {
    return (
        <div className="form">
            <input value={value} onChange={onChange} onKeyPress={onKeyPress}/>
            <div className="create-button" onClick={onCreate}>
                추가
            </div>
        </div>
    );
};

export default Form;