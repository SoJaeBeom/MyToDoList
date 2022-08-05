import Todo from "../todo/Todo";
import styled from "styled-components";
import { useSelector } from "react-redux";

export default function List() {
  const newTodo = useSelector((state) => state.todoSlice);

  let array_false = newTodo
    .filter((todos) => todos.isDone === false)
    .map((todo) => {
      return <Todo todo={todo} key={todo.id} />;
    });

  let array_true = newTodo
    .filter((todos) => todos.isDone === true)
    .map((todo) => {
      return <Todo todo={todo} key={todo.id} />;
    });

  return (
    <ListContainer>
      <ListTitle>Working...🔥🔥🔥</ListTitle>
      <ListWrapper>{array_false}</ListWrapper>

      <ListTitle>Done...🎉🎉🎉</ListTitle>
      <ListWrapper>{array_true}</ListWrapper>
    </ListContainer>
  );
}

const ListContainer = styled.div``;

const ListTitle = styled.h1``;

const ListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
`;
