import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { RootState, store } from '../store/store'
import Todo from './Todo'
import {
  todoSlice
} from '../store/todoSlice'
import styles from './Todos.module.css'
import { TodoForm } from './TodoForm'

export function Todos() {
  const todos = useSelector((state: RootState) => state.todos).todos
  // const todos = [
  //   { complete: false, label: 'Example', id: 1 },
  //   { complete: true, label: 'Another Example', id: 2 },
  // ]
  const [formOpen, setFormOpen] = useState(false)
  
  const toggleChecked = (id: string) => {
    store.dispatch(todoSlice.actions.toggleTodo(id))
    console.log('Click')
  }

  const onTodoSubmit = (todo: string) => {
    store.dispatch(todoSlice.actions.addTodo(todo))
    setFormOpen(false)
  }

  return (
    <div>
      <h1 className={styles.value}>Todos</h1>
      {
        formOpen ?
          <TodoForm
            onSubmit={onTodoSubmit}
          /> :
          <button
            className={styles.button}
            onClick={() => {setFormOpen(true)}} 
          >
            Add Todo
          </button> 
      }
      {todos.map(todo => (
        <Todo
          key={todo.id}
          toggleChecked={toggleChecked}
          label={todo.label}
          complete={todo.complete}
          id={todo.id}
        />
      ))}
    </div>
  )
}
