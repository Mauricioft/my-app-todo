import SignInForm from 'components/SignIn'

const SignInPage = ({ history }) => {
  const onClick = () => {
    history.push('/signup')
  }

  const onSubmit = () => {
    history.replace('/')
  }

  return (
    <div className='d-flex justify-content-center align-items-center | vh-100'>
      <SignInForm
        onSubmit={onSubmit}
        onClick={onClick}
      />
    </div>
  )
}

export default SignInPage
