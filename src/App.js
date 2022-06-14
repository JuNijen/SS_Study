import React, {Component} from 'react';
import TodoListTemplate from './components/TodoListTemplate';
import Form from './components/Form';
import TodoItemList from './components/TodoItemList';


class App extends Component {

    id = 1

    state = {
        input: '',
        todos: [
            {
                id: 0,
                text: '할 일을 입력하세요.',
                checked: false
            },
        ],
        date: '220614',
    }

    // 변경되었을 경우
    handleChange = (e) => {
        this.setState({
            // input 의 다음 바뀔 값
            input: e.target.value
        });
    }

    handleCreate = () => {
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

    handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            this.handleCreate();
            this.getTodayDate();
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

    getTodayDate = () => {
      const {date} = this.state;
        var todayDate = new Date(),
            result = todayDate.getFullYear() + '-' + todayDate.getMonth() + 1 +
                    todayDate.getDate();
        console.log(date, result, todayDate.getDate());


        this.setState({
            date: result
        });
    }

    render() {
        const {date, input, todos} = this.state;
        const {
            handleChange,
            handleCreate,
            handleKeyPress,
            handleToggle,
            handleRemove,
            getTodayDate
        } = this;

        return (
            <TodoListTemplate
                date={getTodayDate}
                form={(
                    <Form
                        value={input}
                        onKeyPress={handleKeyPress}
                        onChange={handleChange}
                        onCreate={handleCreate}/>
                )}>
                <TodoItemList todos={todos} onToggle={handleToggle} onRemove={handleRemove}/>
            </TodoListTemplate>
        );
    }
}

export default App;