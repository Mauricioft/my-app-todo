import Api from './api'

const signInService = async (params) => {
  const response = await Api.post('user/login', params)
  return response.data
}

export {
  signInService
}
