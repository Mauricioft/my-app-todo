import { useReducer, useEffect } from 'react'
import AuthReducer from '../reducers/AuthReducer'

const useAuth = () => {
  const loadUser = () => JSON.parse(localStorage.getItem('user')) || { logged: false }
  const [user, dispatch] = useReducer(AuthReducer, {}, loadUser)

  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(user))
  }, [user])

  return { user, dispatch }
}

export default useAuth
