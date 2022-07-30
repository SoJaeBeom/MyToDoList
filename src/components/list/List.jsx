import Todo from '../todo/Todo'
import styled from 'styled-components'

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
    <ListContainer className="list">
      <ListTitle>Working...🔥🔥🔥</ListTitle>
      <ListWrapper className="list_wrapper">{array_false}</ListWrapper>

      <ListTitle>Done...🎉🎉🎉</ListTitle>
      <ListWrapper className="list_wrapper">{array_true}</ListWrapper>
    </ListContainer>
  )
}

const ListContainer = styled.div``

const ListTitle = styled.h1``

const ListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
`
