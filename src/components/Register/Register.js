import './Register.css'
import { useEffect, useState } from 'react'
import UseValidation from '../../hooks/useValidation'
import { login, register } from '../../utils/MainApi'
import { Link, useNavigate } from 'react-router-dom'
import Form from '../Form/Form'
import Links from '../UI/Link/Link'
import InputField from '../UI/InputField/InputField'
import logo from '../../images/logo.svg'

function Register({ setLoggedIn, setIsTooltipVisible, setTooltipMessage }) {
  const [submitButtonText, setSubmitButtonText] = useState('Зарегистрироваться')
  const [loading, setLoading] = useState(false)
  const { isFormValid, values, handleValues, errors, setInitialValues } = UseValidation()
  const navigate = useNavigate()

  useEffect(() => {
    setInitialValues({ name: '', email: '', password: '' })
  }, [])

  function handleSubmit(e) {
    e.preventDefault()
    setSubmitButtonText('Регистрируем...')
    setLoading(true)

    const { email, name, password } = values

    register({ email, name, password })
      .then(() => {
        login({ email, password }).then((user) => {
          setIsTooltipVisible(true)
          setTooltipMessage({
            message: 'Успешная регистрация, хорошего поиска фильмов!',
            status: 'ok',
          })
          setLoggedIn(true)
          navigate('/movies')
        })
      })
      .catch((err) => {
        setIsTooltipVisible(true)
        setTooltipMessage({
          message: err.message || 'Попробуйте еще раз, что-то не так...',
          status: 'error',
        })
        console.log(err)
      })
      .finally(() => {
        setSubmitButtonText('Зарегистрироваться')
        setLoading(false)
      })
  }

  return (
    <section className='register'>
      <Link className='register__logo' to='/'>
        <img src={logo} alt='Поиск фильмов' />
      </Link>
      <h1 className='register__title'>Добро пожаловать!</h1>
      <Form onSubmit={handleSubmit} isFormValid={isFormValid} buttonText={submitButtonText} loading={loading}>
        <InputField
          minLength='2'
          maxLength='30'
          value={values.name || ''}
          error={errors.name}
          onChange={handleValues}
          type='text'
          name='name'
          placeholder='Имя'
          required={true}
          disabled={loading}
        />
        <InputField
          value={values.email || ''}
          error={errors.email}
          onChange={handleValues}
          type='email'
          name='email'
          placeholder='E-mail'
          required={true}
          disabled={loading}
        />
        <InputField
          minLength='6'
          maxLength='30'
          value={values.password || ''}
          error={errors.password}
          onChange={handleValues}
          type='password'
          name='password'
          placeholder='Пароль'
          required={true}
          disabled={loading}
        />
      </Form>
      <p className='register__text'>
        Уже зарегистрированы? <Links text='Войти' color='green' to='/signin' />
      </p>
    </section>
  )
}

export default Register
