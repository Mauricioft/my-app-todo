import {
  Switch,
  Route,
  Redirect
} from 'react-router-dom'
import Menu from '../components/Menu'
import Footer from '../components/Footer'
import Home from '../pages/Home'

const DashboardRoutes = () => {
  return (
    <>
      <Menu />
      <main className='container pt-3'>
        <Switch>
          <Route
            exact
            path='/home'
            component={Home}
          />
          <Redirect to='/home' />
        </Switch>
      </main>
      <Footer />
    </>
  )
}

export default DashboardRoutes
