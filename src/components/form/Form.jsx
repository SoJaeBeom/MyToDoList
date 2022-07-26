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
      <div className="input_group">
        <label className="title_label">제목</label>
        <input
          type="text"
          id="title"
          onChange={onChangeHandler}
          value={title}
        />
        <label className="body_label">내용</label>
        <input type="text" id="body" onChange={onChangeHandler} value={body} />
      </div>

      <button id="add_btn" onClick={onSubmitHandler}>
        추가하기
      </button>
    </div>
  )
}
