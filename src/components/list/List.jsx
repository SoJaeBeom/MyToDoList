import Todo from '../todo/Todo'
import './style.css'

export default function List({ setTodoList, todolist }) {
  let array_false = todolist
    .filter((todolist) => todolist.isDone === false)
    .map((todo, index) => {
      return (
        <Todo
          todo={todo}
          key={index}
          onToggleHandler={onToggleHandler}
          onDeleteHandler={onDeleteHandler}
        />
      )
    })

  let array_true = todolist
    .filter((todolist) => todolist.isDone === true)
    .map((todo, index) => {
      return (
        <Todo
          todo={todo}
          key={index}
          onToggleHandler={onToggleHandler}
          onDeleteHandler={onDeleteHandler}
        />
      )
    })

  function onToggleHandler(todo) {
    todo.isDone === false ? (todo.isDone = true) : (todo.isDone = false)
    setTodoList([...todolist])
  }

  function onDeleteHandler(todo) {
    let deleteArray = todolist.filter((delTodo) => delTodo.id !== todo.id)
    setTodoList([...deleteArray])
  }

  return (
    <div className="list">
      <h1>Working...🔥🔥🔥</h1>
      <div className="list_wrapper">{array_false}</div>

      <h1>Done...🎉🎉🎉</h1>
      <div className="list_wrapper">{array_true}</div>
    </div>
  )
}
