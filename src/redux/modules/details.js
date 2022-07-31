export const GET_TODO_BY_ID = 'details/GET_TODO_BY_ID'

export function getTodoById(targetId, todos) {
  return {
    type: GET_TODO_BY_ID,
    targetId,
    todos,
  }
}

const initialState = {}
export default function details(previousState = initialState, action) {
  switch (action.type) {
    case GET_TODO_BY_ID:
      return action.todos
        .filter((target) => target.id === action.targetId)
        .reduce((prevObj, curObj) => prevObj + curObj)

    default:
      return previousState
  }
}
