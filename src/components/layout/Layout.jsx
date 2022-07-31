import Header from '../header/Header'
import Form from '../form/Form'
import List from '../list/List'
import styled from 'styled-components'

export default function Layout() {
  return (
    <LayoutContainer>
      <Header />
      <Form />
      <List />
    </LayoutContainer>
  )
}

const LayoutContainer = styled.div`
  margin: 0 auto;
  max-width: 1200px;
  min-width: 800px;
`
