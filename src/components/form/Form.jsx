import './style.css'
import React, { useState } from 'react'

export default function Form({ setTodoList, todolist }) {
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const [id, setId] = useState(1)

  function onSubmitHandler() {
    setId(id + 1)
    setTodoList([
      ...todolist,
      {
        id,
        title,
        body,
        isDone: false,
      },
    ])
    setTitle('')
    setBody('')
  }

  const onChangeHandler = (event) => {
    if (event.target.id === 'title') {
      setTitle(event.target.value)
    } else if (event.target.id === 'body') {
      setBody(event.target.value)
    }
  }

  return (
    <div className="form">
      <label>제목</label>
      <input type="text" id="title" onChange={onChangeHandler} value={title} />
      <label>내용</label>
      <input type="text" id="body" onChange={onChangeHandler} value={body} />
      <button onClick={onSubmitHandler}>추가하기</button>
    </div>
  )
}
