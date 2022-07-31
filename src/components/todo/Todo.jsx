import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { deleteTodo, toggleStatusTodo } from '../../redux/modules/todos'

export default function Todo({ todo }) {
  const dispatch = useDispatch()

  function onToggleHandler(id) {
    dispatch(toggleStatusTodo(id))
  }

  function onDeleteHandler(id) {
    dispatch(deleteTodo(id))
  }

  return (
    <TodoContainer>
      <TodoTitle>{todo.title}</TodoTitle>
      <TodoBody>{todo.body}</TodoBody>
      <ButtonContainer>
        <Button className="delete_btn" onClick={() => onDeleteHandler(todo.id)}>
          삭제하기
        </Button>
        <Button className="toggle_btn" onClick={() => onToggleHandler(todo.id)}>
          {todo.isDone === false ? '완료' : '취소'}
        </Button>
        <StyledLink to={`/${todo.id}`} className="detail_btn">
          자세히
        </StyledLink>
      </ButtonContainer>
    </TodoContainer>
  )
}

const TodoContainer = styled.div`
  width: 300px;
  border: 5px solid royalblue;
  border-radius: 12px;
  padding: 12px 24px 24px;
`

const TodoTitle = styled.h2``

const TodoBody = styled.div``

const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 24px;
`

const Button = styled.button`
  border: none;
  border-radius: 8px;
  cursor: pointer;
  height: 40px;
  width: 50%;
  background-color: #fff;
  margin-top: 24px;
  border: ${(props) =>
    props.className === 'toggle_btn' ? '2px solid royalblue' : '2px solid red'};
`

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
  font-size: 14px;
  width: 40%;
  text-align: center;
  padding: 10px;
  margin-top: 24px;
  border: 2px solid green;
  border-radius: 8px;
`
