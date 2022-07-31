import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import TodoList from './pages/TodoList'
import Detail from './pages/Detail'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<TodoList />} />
        <Route path="/:id" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
