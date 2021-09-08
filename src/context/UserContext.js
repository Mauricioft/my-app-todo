import { useState } from 'react'
import PropTypes from 'prop-types'

const Context = React.createContext({})

export const UserContextProvider = ({ children }) => {
  const [jwt, setJwt] = useState(() => localStorage.getItem('jwt'))

  return <Context.Provider value={{ jwt, setJwt }}>
    { children }
  </Context.Provider>
}

UserContextProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.string
  ]).isRequired
}

export default Context
