import { directive } from '@babel/types';
import * as React from 'react';
import TodoItem from './TodoItem';

// TotoItem을 받는 List
// todos : todo 객체들이 들어있는 배열
// onToggle : 체크박스를 on off 하는 함수
// onRemove : 아이템을 삭제시키는 함수
class TodoItemList extends Component {

    render() {
        const { todos, onToggle, onRemove } = this.props;

        // 각 todo객체에 데이터를 연결
        // 각 todo객체에 데이터를 연결
        const todoList = todos.map(({ id, text, checked }) => (
            React.createElement(TodoItem, { 
                id: id,
                text: text,
                checked: checked,
                onToggle: onToggle,
                onRemove: onRemove,
                key: id })));        

        // 생성된 todoList의 Item을 반환
        return (React.createElement("div", null, todoList));

        
    }
}

export default TodoItemList;