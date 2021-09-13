import AuthContext from './context/AuthContext'
import useAuth from './hooks/useAuth'
import AppRouter from './routers/AppRouter'
// https://www.youtube.com/watch?v=jLpPc_J2_xo

const TodoApp = () => {
  const { user, dispatch } = useAuth()

  return (
    <AuthContext.Provider value={{ user, dispatch }}>
      <AppRouter />
    </AuthContext.Provider>
  )
}

export default TodoApp
