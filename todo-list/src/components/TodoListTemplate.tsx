import * as React from 'react';
import './TodoListTemplate.css';


// TodoList 화면을 구성하는 기본 형태.
// Title, Form, List(children) 파트로 나눠져있다.
const TodoListTemplate = ({form, children}) => {

    // 금일 날짜를 띄워주는 기능 추가
    // 추후 00.00.00 format으로 변경하는 것에 대한 구상중.
    var todayDate : Date;
    var dateResult : string;

    todayDate = new Date();
    dateResult = todayDate.getFullYear() + '-' + todayDate.getMonth() + '-'  +
                todayDate.getDate();

    return (
        React.createElement("main",     { className: "todo-list-template" },
        React.createElement("section",  { className: "title" }, dateResult," : 해야 할 일"),
        React.createElement("section",  { className: "form-wrapper" }, form),
        React.createElement("section",  { className: "todos-wrapper" }, children))        
    );    
};

export default TodoListTemplate;