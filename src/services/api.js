import { useContext } from 'react'
import { API_URL } from '../constants/settings'
import AuthContext from '../context/AuthContext'
import axios from 'axios'

const getHeader = () => {
  const { user } = useContext(AuthContext)

  if(!user.logged) return {}

  return {
    Authorization: `Bearer ${user.token}`
  }
}

export default axios.create({
  baseURL: `${API_URL}/`,
  headers: getHeader()
})
