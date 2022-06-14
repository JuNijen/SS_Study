/* 3가지의 Props를 받게 될 예정.
1. todos: todo 객체들이 들어있는 배열
2. onToggle: 체크박스를 키고 끄는 함수
 * 3. onRemove: 아이템을 삭제시키는 함수
 */
import React, {Component} from 'react';
import TodoItem from './TodoItem';

class TodoItemList extends Component {
    render() {
        const {todos, onToggle, onRemove} = this.props;

        const todoList = todos.map(({id, text, checked}) => (
            <TodoItem
                id={id}
                text={text}
                checked={checked}
                onToggle={onToggle}
                onRemove={onRemove}
                key={id}/>
        ))

        return (<div>
            {todoList}
        </div>);
    }
}

export default TodoItemList;