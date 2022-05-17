import React, { useState } from 'react'
import styles from './Todos.module.css'

type Props = {
  onSubmit: (todo:string) => void
}

export function TodoForm({ onSubmit }: Props) {
  const [todo, setTodo] =  useState('')
  return (
    <div>
      <input
        className={styles.textbox}
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        type="text"
      />
      <button 
        onClick={() => onSubmit(todo)}
        className={styles.button}
      >
        Add Todo
      </button>
    </div>
  )
}
