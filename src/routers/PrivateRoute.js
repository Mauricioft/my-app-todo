import PropTypes from 'prop-types'
import { Route, Redirect } from 'react-router-dom'

const PrivateRoute = ({ isLogged, component: Component, ...rest }) => {
  const handleComponent = props => {
    return isLogged
      ? <Component {...props}/>
      : <Redirect to='/login' />
  }

  return (
    <Route
      {...rest}
      component={handleComponent}
    />
  )
}

PrivateRoute.propTypes = {
  isLogged: PropTypes.bool.isRequired,
  component: PropTypes.func.isRequired
}

export default PrivateRoute
