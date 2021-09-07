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

export default PrivateRoute
