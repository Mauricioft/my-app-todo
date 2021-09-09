import Api from './api'

const taskListService = async ({ limit = 4, page = 0 } = {}) => {
  const response = await Api.get(`task?limit=${limit}&skip=${page * limit}`)
  return response.data
}

const addTaskService = async (params) => {
  const response = await Api.post('task', params)
  return response.data
}

export {
  taskListService,
  addTaskService
}
