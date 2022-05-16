import React from 'react'

type Props = {
  label: string
  complete: boolean
  toggleChecked: () => void
}

const Todo = ({ label, complete, toggleChecked }: Props) => {
  return (
    <div>
      <input checked={complete} onChange={toggleChecked} type="checkbox"></input>
      {label}
    </div>
  )
}

export default Todo