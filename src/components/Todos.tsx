import React, { useState } from 'react'
import Todo from './Todo'
import {
  // something
} from '../store/todoSlice'
import styles from './Todos.module.css'
import { TodoForm } from './TodoForm'

export function Todos() {
  const todos = [
    { complete: false, label: 'Example', id: 1 },
    { complete: true, label: 'Another Example', id: 2 },
  ]
  const [formOpen, setFormOpen] = useState(false)
  
  const toggleChecked = () => {
    console.log('Click')
  }

  const onTodoSubmit = (todo: string) => {
    console.log(todo)
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
        />
      ))}
    </div>
  )
}
