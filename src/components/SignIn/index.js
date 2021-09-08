import PropTypes from 'prop-types'
import { FaRegEnvelope } from 'react-icons/fa'
import { SignInSchema } from '../../constants/YupSchemas'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import './style.css'

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
      <Form className='form form__signin'>
        <div className='input-group mb-3'>
          <span
            className='input-group-text'
            id='basic-addon1'
          >
            <FaRegEnvelope />
          </span>
          <Field
            type='text'
            id='email'
            name='email'
            className='form-control'
            placeholder='Email'
          />
        </div>

        <ErrorMessage
          name='email'
          render={msg => <div className='d-block text-danger my-3'>{ msg }</div>}
        />

        <div className='input-group mb-3'>
          <span className='input-group-text' id='basic-addon1'>*</span>
          <Field
            type='password'
            id='password'
            name='password'
            className='form-control'
            placeholder='Password'
          />
        </div>

        <ErrorMessage
          name='password'
          render={msg => <div className='d-block text-danger my-3'>{ msg }</div>}
        />

        <div className='d-flex justify-content-between'>
          <button
            type='submit'
            className='btn btn-success'
          >
            LOGIN
          </button>
          <button
            className='btn btn-success'
            onClick={onClick}
          >
            SIGN UP
          </button>
        </div>
      </Form>
    </Formik>
  )
}

SignIn.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired
}

export default SignIn
