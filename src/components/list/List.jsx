import { useState } from 'react'
import Todo from '../todo/Todo'
import './style.css'

export default function List({ todolist }) {
  let array_false = todolist.filter((todolist) => todolist.isDone === false)
  let array_true = todolist.filter((todolist) => todolist.isDone === true)

  return (
    <div className="list">
      <h1>Working...!</h1>
      <div className="list_wrapper">
        <Todo todolist={array_false} />
      </div>

      <h1>Done...!</h1>
      <div className="list_wrapper">
        <Todo todolist={array_true} />
      </div>
    </div>
  )
}
