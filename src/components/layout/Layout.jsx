import Header from '../header/Header'
import Form from '../form/Form'
import List from '../list/List'
import React, { useState } from 'react'
import styled from 'styled-components'

export default function Layout() {
  const [todolist, setTodoList] = useState([])

  return (
    <LayoutContainer>
      <Header />
      <Form setTodoList={setTodoList} todolist={todolist} />
      <List setTodoList={setTodoList} todolist={todolist} />
    </LayoutContainer>
  )
}

const LayoutContainer = styled.div`
  margin: 0 auto;
  max-width: 1200px;
  min-width: 800px;
`
