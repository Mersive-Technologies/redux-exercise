import React from 'react'
import styles from './Todos.module.css'

type Props = {
  label: string
  complete: boolean
  toggleChecked: () => void
}

const Todo = ({ label, complete, toggleChecked }: Props) => {
  return (
    <div className={styles.todo}>
      <input
        className={styles.todoCheckbox}
        checked={complete}
        onChange={toggleChecked} 
        type="checkbox"
      ></input>
      {label}
    </div>
  )
}

export default Todo