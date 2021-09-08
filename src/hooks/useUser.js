import { useState, useCallback, useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { signInService } from '../services/auth'
import AuthContext from '../context/AuthContext'
import { LOGIN, LOGOUT } from '../types'
// https://www.bezkoder.com/react-hooks-jwt-auth/

const useUser = () => {
  const history = useHistory()
  const [state, setState] = useState({ loading: false, error: false })
  const { dispatch } = useContext(AuthContext)

  const login = useCallback(params => {
    setState({ loading: true, error: false })
    signInService(params)
      .then(response => {
        setState({ loading: false, error: false })
        dispatch({
          type: LOGIN,
          payload: response
        })
        history.replace('/')
      })
      .catch((err) => {
        setState({ loading: false, error: true })
      })
  }, [])

  const logout = useCallback(() => {
    dispatch({ type: LOGOUT })
  }, [])

  return {
    login,
    logout,
    isLoginLoading: state.loading,
    hasLoginError: state.error
  }
}

export default useUser
