import PropTypes from 'prop-types'
import { Route, Redirect } from 'react-router-dom'

const PublicRoute = ({ isLogged, component: Component, ...rest }) => {
  const handleComponent = props => {
    return !isLogged
      ? <Component {...props}/>
      : <Redirect to='/' />
  }

  return (
    <Route
      {...rest}
      component={handleComponent}
    />
  )
}

PublicRoute.propTypes = {
  isLogged: PropTypes.bool.isRequired,
  component: PropTypes.func.isRequired
}

export default PublicRoute
