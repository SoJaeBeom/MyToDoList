import './style.css'

export default function Todo({ todolist, setStatusToggle }) {
  function onToggleHandler(event) {
    let data_key = Number(
      event.currentTarget.parentElement.getAttribute('data-key'),
    )

    let targetTodo = todolist.filter((todo) => todo.id === data_key)

    targetTodo[0].isDone === false
      ? (targetTodo[0].isDone = true)
      : (targetTodo[0].isDone = false)

    setStatusToggle([
      ...todolist,
      {
        id: targetTodo[0].id,
        title: targetTodo[0].title,
        body: targetTodo[0].body,
        isDone: targetTodo[0].isDone,
      },
    ])
  }

  function onDeleteHandler(event) {
    event.currentTarget.parentElement.remove()
  }

  if (todolist.length === 0) {
    return
  } else {
    return todolist.map((todo, index) => (
      <div className="todo" key={index} data-key={todo.id}>
        <h2>{todo.title}</h2>
        <div>{todo.body}</div>
        <button className="delete_btn" onClick={onDeleteHandler}>
          삭제하기
        </button>
        <button className="toggle_btn" onClick={onToggleHandler}>
          {todo.isDone === false ? '완료' : '취소'}
        </button>
      </div>
    ))
  }
}
