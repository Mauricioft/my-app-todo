import React, { useContext } from 'react'
import {
  BrowserRouter as Router,
  Switch
} from 'react-router-dom'
import AuthContext from '../context/AuthContext'
import PublicRoute from './PublicRoute'
import PrivateRoute from './PrivateRoute'
import SignIn from '../pages/SignIn'
import SignUp from '../pages/SignUp'
import DashboardRoutes from './DashboardRoutes'

const AppRouter = () => {
  const { user } = useContext(AuthContext)

  return (
    <Router>
      <>
        <Switch>
          <PublicRoute
            exact
            path='/login'
            isLogged={user.logged}
            component={SignIn}
          />
          <PublicRoute
            exact
            path='/signup'
            isLogged={user.logged}
            component={SignUp}
          />
          <PrivateRoute
            path='/'
            isLogged={user.logged}
            component={DashboardRoutes}
          />
        </Switch>
      </>
    </Router>
  )
}

export default AppRouter
