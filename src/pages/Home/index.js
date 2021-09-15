import Alert from 'react-bootstrap/Alert'
import useTasks from '../../hooks/useTasks'
import TaskList from '../../components/TaskList'

const Home = () => {
  const { tasks, hasLoading, hasError } = useTasks()

  return (
    <>
      {
        hasLoading && <strong>Loading...</strong>
      }
      {
        !hasLoading && (
          <TaskList tasks={tasks} />
        )
      }
      {
        hasError && (
          <Alert variant='warning'>
            :( Failed to load all
          </Alert>
        )
      }
    </>
  )
}

export default Home
