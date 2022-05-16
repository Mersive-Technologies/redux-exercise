import React, { useState } from 'react'
import styles from './Counter.module.css'

type Props = {
  onSubmit: (todo:string) => void
}

export function TodoForm({ onSubmit }: Props) {
  const [todo, setTodo] =  useState('')
  return (
    <div>
      <input
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        type="text"
      />
      <button onClick={() => onSubmit(todo)}>Add Todo</button>
    </div>
  )
}
