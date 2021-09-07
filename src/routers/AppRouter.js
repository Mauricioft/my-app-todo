import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import SignIn from '../pages/SignIn'
import SignUp from '../pages/SignUp'
import PrivateRoute from './PrivateRoute'
import DashboardRoutes from './DashboardRoutes'

const AppRouter = () => {
  return (
    <Router>
      <>
        <Switch>
          <Route
            exact
            path='/login'
            component={SignIn}
          />
          <Route
            exact
            path='/signup'
            component={SignUp}
          />
          <PrivateRoute
            path='/'
            component={DashboardRoutes}
          />
        </Switch>
      </>
    </Router>
  )
}

export default AppRouter
