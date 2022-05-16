import React, { useState } from 'react'
import Todo from './Todo'
import {
  // something
} from '../../store/todoSlice'
import styles from './Counter.module.css'
import { TodoForm } from './TodoForm'

export function Todos() {
  const todos = [{ complete: false, label: 'example', id: 1 }]
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
      <h1>Todos</h1>
      {todos.map(todo => (
        <Todo
          key={todo.id}
          toggleChecked={toggleChecked}
          label={todo.label}
          complete={todo.complete}
        />
      ))}
      {
        formOpen ?
          <TodoForm
            onSubmit={onTodoSubmit}
          /> :
          <button onClick={() => {
            setFormOpen(true)
          }} >Add Stuff</button> 
      }
    </div>
  )
}
