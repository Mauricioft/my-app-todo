import { SignInSchema } from '../../constants/YupSchemas'
import { Formik, Form, Field, ErrorMessage } from 'formik'

const SignIn = ({ onSubmit, onClick }) => {
  const initialValues = {
    email: '',
    password: ''
  }

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={SignInSchema}
      onSubmit={onSubmit}
    >
      <Form className='form'>
        <div className="input-group mb-3">
          <span class="input-group-text" id="basic-addon1">@</span>
          <Field
            type='text'
            id='email'
            name='email'
            className='form-control'
            placeholder='Email'
          />
          <ErrorMessage component="span" name='email' />
        </div>
        <div className="input-group mb-3">
          <span class="input-group-text" id="basic-addon1">*</span>
          <Field
            type='password'
            id='password'
            name='password'
            className='form-control'
            placeholder='Password'
          />
          <ErrorMessage component="span" name='password' />
        </div>
        <div className="d-flex justify-content-between">
          <button
            type='submit'
            className='btn btn-success'
          >
            LOGIN
          </button>
          <button
            className='btn btn-success'
            onclick={onClick}
          >
            SIGN UP
          </button>
        </div>
      </Form>
    </Formik>
  )
}

export default SignIn