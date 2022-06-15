import React, {Component} from 'react';
import './TodoItem.css';

// TodoItemList에 들어가는 Item요소
// text:     todo 내용
// checked:  체크박스의 상태
// id:       todo item의 고유 아이디
// onToggle: 체크박스를 on off 하는 함수
// onRemove: 아이템을 삭제시키는 함수
class TodoItem extends Component {
    render() {

        const {text, checked, id, onToggle, onRemove} = this.props;

        return (
            React.createElement("div", { className: "todo-item", onClick: () => onToggle(id) },
            React.createElement("div", { className: "remove", onClick: (e) => {
                    // onToggle 이 실행되지 않도록 함
                    e.stopPropagation();
                    onRemove(id);
                } }, "\u00D7"), // x 표기
            React.createElement("div", { className: `todo-text ${checked && 'checked'}` },
            React.createElement("div", null, text)),
                checked && (React.createElement("div", { className: "check-mark" }, "\u2713"))) // 체크박스
        );
    }
}

export default TodoItem;