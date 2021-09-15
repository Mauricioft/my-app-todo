import { TASK_LIST, ADD_TASK, DELETE_TASK } from '../types'

const initialState = {
  tasks: []
}

const appReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case TASK_LIST:
      return {
        tasks: [...payload.tasks]
      }
    case ADD_TASK:
      return {
        tasks: [
          ...state.tasks,
          payload
        ]
      }
    case DELETE_TASK:
      return {
        tasks: []
      }
    default:
      break
  }
}

export default appReducer
