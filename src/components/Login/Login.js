import './Login.css'
import { useEffect, useState } from 'react'
import UseValidation from '../../hooks/useValidation'
import { login } from '../../utils/MainApi'
import { Link, useNavigate } from 'react-router-dom'
import Form from '../Form/Form'
import Links from '../UI/Link/Link'
import InputField from '../UI/InputField/InputField'
import logo from '../../images/logo.svg'

function Login({ setLoggedIn, setIsTooltipVisible, setTooltipMessage }) {
  const [submitButtonText, setSubmitButtonText] = useState('Войти')
  const [loading, setLoading] = useState(false)
  const { isFormValid, values, handleValues, errors, setInitialValues } = UseValidation()
  const navigate = useNavigate()

  useEffect(() => {
    setInitialValues({ email: '', password: '' })
  }, [])

  function handleLogin(e) {
    e.preventDefault()
    setSubmitButtonText('Вход...')
    setLoading(true)

    const { email, password } = values

    login({ email, password })
      .then((user) => {
        setTooltipMessage({ message: 'Вы вошли, хорошего поиска фильмов', status: 'ok' })
        setIsTooltipVisible(true)
        setLoggedIn(true)
        navigate('/movies')
      })
      .catch((err) => {
        setTooltipMessage({
          message: err.message || 'Попробуйте еще раз, что-то не так...',
          status: 'error',
        })
        setIsTooltipVisible(true)
        console.log(err)
      })
      .finally(() => {
        setSubmitButtonText('Войти')
        setLoading(false)
      })
  }

  return (
    <section className='login'>
      <Link className='login__logo' to='/'>
        <img src={logo} alt='Поиск фильмов' />
      </Link>
      <h1 className='login__title'>Рады видеть!</h1>
      <Form onSubmit={handleLogin} isFormValid={isFormValid} buttonText={submitButtonText} loading={loading}>
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
      <p className='login__text'>
        Еще не зарегистрированы? <Links text='Регистрация' color='green' to='/signup' />
      </p>
    </section>
  )
}

export default Login
