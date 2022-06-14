import React from 'react';
import './TodoListTemplate.css';

const TodoListTemplate = ({date, form, children}) => {
    return (
        <main className="todo-list-template">
            <section className="title">
                해야 할 일 {date}
            </section>
            <section className="form-wrapper">
                {form}
            </section>
            <section className="todos-wrapper">
                {children}
            </section>
        </main>
    );
};

export default TodoListTemplate;