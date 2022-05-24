import React from 'react'
import styles from './Todos.module.css'

type Props = {
  label: string
  complete: boolean
  id: string
  toggleChecked: (id: string) => void
}

const Todo = ({ label, complete, toggleChecked, id }: Props) => {
  return (
    <div className={styles.todo}>
      <input
        className={styles.todoCheckbox}
        checked={complete}
        onChange={() => toggleChecked(id)} 
        type="checkbox"
      ></input>
      {label}
    </div>
  )
}

export default Todo