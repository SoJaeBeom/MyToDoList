import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getTodoById } from '../redux/modules/details'
import { Link } from 'react-router-dom'

export default function Detail() {
  let params = useParams()
  const dispatch = useDispatch()

  dispatch(
    getTodoById(
      parseInt(params.id),
      useSelector((state) => state.todos),
    ),
  )

  const details = useSelector((state) => state.details)

  return (
    <div>
      <h1>id : {details.id}</h1>
      <h1>title : {details.title}</h1>
      <h1>body : {details.body}</h1>
      <Link to="/">뒤로가기</Link>
    </div>
  )
}
