import React, {Component} from 'react';
import TodoListTemplate from './components/TodoListTemplate';
import Form from './components/Form';
import TodoItemList from './components/TodoItemList';


/*
 To Do list (React + Typescript)
  1. 해야할 일
  2. 금일 날짜 표기
  3. 데이터 저장
  4. 어제의 일
  5. 다음날로 미루기
  * 2번까지 마무리 해 보는 것이 금주 목표
*/
class App extends Component {

    // 사전에 기입되는 데이터
    state = {
        input: '',
        todos: [
            {
                id: 0,
                text: '할 일을 입력하세요.',
                checked: false
            },
        ],
    }
    
    // 사전 데이터 이후로 추가되게끔
    id = 1

    // 변경되었을 경우
    handleChange = (e) => {
        this.setState({
            // input 의 다음 바뀔 값
            input: e.target.value
        });
    }

    handleCreate = () => {
        //참고한 자료 :: https://velog.io/@bellecode20/%EB%A6%AC%EC%95%A1%ED%8A%B8%EC%97%90%EC%84%9C-%EB%8D%B0%EC%9D%B4%ED%84%B0-%EC%A0%80%EC%9E%A5%ED%95%98%EA%B8%B0
        //만들어주면서 날짜 데이터와 함께 세이빙 가능하게끔.

        const {input, todos} = this.state;
        this.setState({
            // input을 비우고, concat을 이용해서 배열에 추가한다.
            input: '',
            todos: todos.concat({
                id: this.id++,
                text: input,
                checked: false
            })
        });
    }

    // 키 입력이 감지되었을 경우
    handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            this.handleCreate();
        }
    }

    handleToggle = (id) => {
        const {todos} = this.state;

        // 파라미터로 받은 id 를 가지고 몇번째 아이템인지 찾습니다.
        const index = todos.findIndex(todo => todo.id === id);
        const selected = todos[index]; // 선택한 객체
        const nextTodos = [...todos];  // 배열을 복사

        // 기존의 값들을 복사하고, checked 값을 덮어쓰기
        nextTodos[index] = {
            ...selected,
            checked: !selected.checked
        };

        this.setState({todos: nextTodos});
    }

    handleRemove = (id) => {
        const {todos} = this.state;

        this.setState({
            todos: todos.filter(todo => todo.id !== id)
        });
    }

    render() {
        const {input, todos} = this.state;
        const {
            handleChange,
            handleCreate,
            handleKeyPress,
            handleToggle,
            handleRemove,
        } = this;
        
        return (
          React.createElement(TodoListTemplate, { form: (React.createElement(Form, { value: input, onKeyPress: handleKeyPress, onChange: handleChange, onCreate: handleCreate })) },
          React.createElement(TodoItemList, { todos: todos, onToggle: handleToggle, onRemove: handleRemove }))      
        );
    }
}

export default App;