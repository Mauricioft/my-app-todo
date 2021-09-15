import { useEffect, useState, useContext } from 'react'
import { taskListService } from '../services/task'
import { TasksContext } from '../context/TasksContext'

const useTasks = () => {
  const [state, setState] = useState({ loading: false, error: false })
  const { tasks, taskList } = useContext(TasksContext)

  useEffect(() => {
    setState({ loading: true, error: false })
    taskListService()
      .then(response => {
        setState({ loading: false, error: false })
        taskList(response.data)
      })
      .catch(() => {
        setState({ loading: false, error: true })
      })
  }, [])

  return {
    tasks,
    hasLoading: state.loading,
    hasError: state.error
  }
}

export default useTasks
