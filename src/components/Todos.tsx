import React, { useState } from 'react';
import Todo from './Todo';
import styles from './Todos.module.css';
import { TodoForm } from './TodoForm';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, toggleTodo, TodoInfo } from '../store/todoSlice';

export function Todos() {
  const todos: TodoInfo[] = useSelector((state: any) => state.todos);
  const [formOpen, setFormOpen] = useState(false);
  const dispatch = useDispatch();

  const toggleChecked = (id: string) => {
    dispatch(toggleTodo(id));
    console.log('Click');
  };

  const onTodoSubmit = (todo: string) => {
    dispatch(addTodo(todo));
    console.log(todo);
    setFormOpen(false);
  };

  return (
    <div>
      <h1 className={styles.value}>Todos</h1>
      {formOpen ? (
        <TodoForm onSubmit={onTodoSubmit} />
      ) : (
        <button
          className={styles.button}
          onClick={() => {
            setFormOpen(true);
          }}
        >
          Add Todo
        </button>
      )}
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          toggleChecked={toggleChecked.bind(null, todo.id)}
          label={todo.label}
          complete={todo.complete}
        />
      ))}
    </div>
  );
}
