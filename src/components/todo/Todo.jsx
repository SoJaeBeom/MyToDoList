import styled from 'styled-components'

export default function Todo({ todo, onDeleteHandler, onToggleHandler }) {
  function onDeleteBtn() {
    onDeleteHandler(todo)
  }

  function onToggleBtn() {
    onToggleHandler(todo)
  }
  return (
    <TodoContainer>
      <TodoTitle>{todo.title}</TodoTitle>
      <TodoBody>{todo.body}</TodoBody>
      <ButtonContainer>
        <Button className="delete_btn" onClick={onDeleteBtn}>
          삭제하기
        </Button>
        <Button className="toggle_btn" onClick={onToggleBtn}>
          {todo.isDone === false ? '완료' : '취소'}
        </Button>
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
