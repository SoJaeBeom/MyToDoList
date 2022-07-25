import Header from '../header/Header'
import Form from '../form/Form'
import List from '../list/List'

export default function Layout() {
  return (
    <div className="layout">
      <Header className="header" />
      <Form />
      <List />
    </div>
  )
}
