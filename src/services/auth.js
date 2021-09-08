import Api from './api'

const signInService = async (params) => {
  return await Api.post('user/login', params)
}

export {
  signInService
}
