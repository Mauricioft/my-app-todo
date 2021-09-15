import { useState } from 'react'
import { addTaskService } from '../services/task'

const useSaveTask = () => {
  const [hasLoading, setHasLoading] = useState(false)

  const addTask = ({ description }) => {
    setHasLoading(true)
    addTaskService({ description })
      .then(response => {
        if (response.success) {
          setHasLoading(false)
          history.push('/home')
        }
      })
      .catch(() => {
        setHasLoading(false)
      })
  }

  return {
    addTask,
    hasLoading
  }
}

export default useSaveTask
