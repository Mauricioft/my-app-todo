import { useEffect, useState } from 'react'
import { taskListService } from '../services/task'

const useTask = () => {
  const [state, setState] = useState({ loading: false, error: false })
  const [taskList, setTaskList] = useState([])

  useEffect(() => {
    setState({ loading: true, error: false })
    taskListService()
      .then(response => {
        console.log('root.useTask@response', response)
        setState({ loading: false, error: false })
        setTaskList(response.data)
      })
      .catch(() => {
        setState({ loading: false, error: true })
      })
  }, [])

  return {
    taskList,
    hasLoading: state.loading,
    hasError: state.error
  }
}

export default useTask
