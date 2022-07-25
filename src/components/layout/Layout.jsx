import Header from '../header/Header'
import Form from '../form/Form'
import List from '../list/List'
import React, { useState } from 'react'

import './style.css'

export default function Layout() {
  const [todolist, setTodoList] = useState([])

  return (
    <div className="layout">
      <Header />
      <Form setTodoList={setTodoList} todolist={todolist} />
      <List todolist={todolist} />
    </div>
  )
}
