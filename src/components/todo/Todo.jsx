import './style.css'

export default function Todo({ todolist }) {
  function deleteTodo(event) {
    event.currentTarget.parentElement.remove()
  }

  if (todolist.length === 0) {
    return
  } else {
    return todolist.map((todo) => (
      <div className="todo" key={todo.id}>
        <h1>{todo.title}</h1>
        <h1>{todo.body}</h1>
        <button onClick={deleteTodo}>삭제하기</button>
        <button>{todo.isDone === false ? '완료' : '취소'}</button>
      </div>
    ))
  }
}
