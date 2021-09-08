import PropTypes from 'prop-types'

const SignUpPage = ({ history }) => {
  const handleClick = () => {
    history.replace('/')
  }

  return (
    <div className='container mt-5'>
      <h1>SignUp</h1>
      <hr/>
      <button
        className='btn btn-primary'
        onClick={handleClick}
      >
        Login
      </button>
    </div>
  )
}

SignUpPage.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
    replace: PropTypes.func.isRequired
  })
}

export default SignUpPage
