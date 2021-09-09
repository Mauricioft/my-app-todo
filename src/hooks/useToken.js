const useToken = ({ keyword }) => {
  const user = JSON.parse(localStorage.getItem(keyword)) || ''

  if (!user) return {}

  return {
    Authorization: `Bearer ${user.token}`
  }
}

export default useToken
