const SignUp = ({ history }) => {
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

export default SignUp
