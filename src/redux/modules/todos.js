export const ADD_TODO = 'todos/ADD_TODO'
export const DELETE_TODO = 'todos/DELETE_TODO'
export const TOGGLE_STATUS_TODO = 'todos/TOGGLE_STATUS_TODO'

let nextId = 1
export function addTodo(newTodo) {
  return {
    type: ADD_TODO,
    todo: {
      id: nextId++,
      title: newTodo.title,
      body: newTodo.body,
      isDone: false,
    },
  }
}

export function deleteTodo(targetId) {
  return {
    type: DELETE_TODO,
    targetId,
  }
}

export function toggleStatusTodo(targetId) {
  return {
    type: TOGGLE_STATUS_TODO,
    targetId,
  }
}

const initialState = []

export default function todos(previousState = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      return [...previousState, action.todo]

    case DELETE_TODO:
      return previousState.filter((todo) => todo.id !== action.targetId)

    case TOGGLE_STATUS_TODO:
      return previousState.map((todo) =>
        todo.id === action.targetId ? { ...todo, isDone: !todo.isDone } : todo,
      )

    default:
      return previousState
  }
}
