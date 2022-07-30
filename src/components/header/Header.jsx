import styled from 'styled-components'

export default function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>My Todo List</HeaderContent>
      <HeaderContent>React</HeaderContent>
    </HeaderContainer>
  )
}

const HeaderContainer = styled.div`
  align-items: center;
  border: 1px solid #ddd;
  display: flex;
  height: 50px;
  justify-content: space-between;
  padding: 0 20px;
`
const HeaderContent = styled.div``
