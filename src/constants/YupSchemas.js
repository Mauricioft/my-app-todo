import * as Yup from 'yup'

const SignInSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email address')
    .required('Required email'),
  password: Yup.string()
    .min(5)
    .max(16)
    .required('Required password')
})

export {
  SignInSchema
}
