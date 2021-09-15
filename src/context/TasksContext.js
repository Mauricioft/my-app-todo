import { createContext, useReducer } from 'react'
import appReducer from '../reducers/AppReducer'
import { TASK_LIST, DELETE_TASK } from '../types'
import PropTypes from 'prop-types'

const INITAL_STATE = {
  tasks: []
}

const TasksContext = createContext(INITAL_STATE)

const TasksContextProvider = ({ children }) => {
  const [tasks, dispatch] = useReducer(appReducer, INITAL_STATE)

  const taskList = tasks => {
    dispatch({
      type: TASK_LIST,
      payload: {
        tasks
      }
    })
  }

  const deleteTask = taskId => {
    dispatch({
      type: DELETE_TASK,
      payload: {
        taskId
      }
    })
  }

  return (
    <TasksContext.Provider value={{ ...tasks, taskList, dispatch, deleteTask }}>
      { children }
    </TasksContext.Provider>
  )
}

TasksContextProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.string
  ]).isRequired
}

export {
  TasksContext,
  TasksContextProvider
}
