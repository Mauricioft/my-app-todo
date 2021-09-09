import axios from 'axios'
import { API_URL } from '../constants/settings'
import useToken from '../hooks/useToken'

const getHeaders = () => {
  const token = useToken({ keyword: 'user' })
  return token
}

export default axios.create({
  baseURL: `${API_URL}/`,
  headers: getHeaders()
})
