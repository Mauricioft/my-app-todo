import AuthContext from './context/AuthContext'
import useAuth from './hooks/useAuth'
import AppRouter from './routers/AppRouter'

const TodoApp = () => {
  const { user, dispatch } = useAuth()

  return (
    <AuthContext.Provider value={{ user, dispatch }}>
      <AppRouter />
    </AuthContext.Provider>
  )
}

export default TodoApp
