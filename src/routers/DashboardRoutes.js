import {
  Switch,
  Route,
  Redirect
} from 'react-router-dom'
import { TasksContextProvider } from '../context/TasksContext'
import Menu from '../components/Menu'
import Footer from '../components/Footer'
import { TaskForm } from '../components/TaskForm'
import Home from '../pages/Home'

const DashboardRoutes = () => {
  return (
    <>
      <Menu />
      <main className='container pt-3'>
        <TasksContextProvider>
          <Switch>
            <Route
              exact
              path='/home'
              component={Home}
            />
            <Route
              exact
              path='/add'
              component={TaskForm}
            />
            <Route
              exact
              path='/edit'
              component={TaskForm}
            />
            <Redirect to='/home' />
          </Switch>
        </TasksContextProvider>
      </main>
      <Footer />
    </>
  )
}

export default DashboardRoutes
