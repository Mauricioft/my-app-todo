import Alert from 'react-bootstrap/Alert'
import useTask from '../../hooks/useTask'
import TodoList from '../../components/TodoList'

const Home = () => {
  const { taskList, hasLoading, hasError } = useTask()

  return (
    <>
      {
        hasLoading && <strong>Loading...</strong>
      }
      {
        !hasLoading && (
          <TodoList list={taskList} />
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
