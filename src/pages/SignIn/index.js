import PropTypes from 'prop-types'
import Alert from 'react-bootstrap/Alert'
import SignInForm from 'components/SignIn'
import useUser from '../../hooks/useUser'

const SignInPage = ({ history }) => {
  const { login, isLoginLoading, hasLoginError } = useUser()

  const onClick = () => {
    history.push('/signup')
  }

  const onSubmit = params => {
    login(params)
  }

  return (
    <div className='d-flex flex-column justify-content-center align-items-center | vh-100'>
      {
        isLoginLoading && <strong>Checking credentials...</strong>
      }
      {
        !isLoginLoading && (
          <SignInForm
            onSubmit={onSubmit}
            onClick={onClick}
          />
        )
      }
      {
        hasLoginError && (
          <Alert variant='warning'>
            Credentials are invalid
          </Alert>
        )
      }
    </div>
  )
}

SignInPage.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
    replace: PropTypes.func.isRequired
  })
}

export default SignInPage
