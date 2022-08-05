import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { addTodo } from "../../redux/modules/todoSlice";

export default function Form() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const dispatch = useDispatch();

  function onSubmitHandler() {
    if (title !== "" && body !== "") {
      dispatch(
        addTodo({
          title: title,
          body: body,
        })
      );

      setTitle("");
      setBody("");
    }
  }

  const onChangeHandler = (event) => {
    if (event.target.id === "title") {
      setTitle(event.target.value);
    } else if (event.target.id === "body") {
      setBody(event.target.value);
    }
  };

  return (
    <FormContainer>
      <InputContainer>
        <Label>제목</Label>
        <Input
          type="text"
          id="title"
          onChange={onChangeHandler}
          value={title}
        />
        <Label>내용</Label>
        <Input type="text" id="body" onChange={onChangeHandler} value={body} />
      </InputContainer>

      <Button onClick={onSubmitHandler}>추가하기</Button>
    </FormContainer>
  );
}

const FormContainer = styled.div`
  background-color: #eee;
  border-radius: 12px;
  justify-content: space-between;
  margin: 0 auto;
  padding: 30px;

  align-items: center;
  display: flex;
  gap: 20px;
`;

const InputContainer = styled.div`
  align-items: center;
  display: flex;
  gap: 20px;
`;

const Button = styled.button`
  background-color: royalblue;
  border: none;
  border-radius: 10px;
  color: #fff;
  font-weight: 700;
  height: 40px;
  width: 140px;
`;

const Input = styled.input`
  border: none;
  border-radius: 12px;
  height: 40px;
  padding: 0 12px;
  width: 240px;
`;

const Label = styled.label`
  font-size: 16px;
  font-weight: 700;
`;
