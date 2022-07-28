import './style.css'

export default function Todo({ todo, onDeleteHandler, onToggleHandler }) {
  function onDeleteBtn() {
    onDeleteHandler(todo)
  }

  function onToggleBtn() {
    onToggleHandler(todo)
  }
  return (
    <div className="todo">
      <h2>{todo.title}</h2>
      <div>{todo.body}</div>
      <div className="btn_group">
        <button className="delete_btn" onClick={onDeleteBtn}>
          삭제하기
        </button>
        <button className="toggle_btn" onClick={onToggleBtn}>
          {todo.isDone === false ? '완료' : '취소'}
        </button>
      </div>
    </div>
  )
}
