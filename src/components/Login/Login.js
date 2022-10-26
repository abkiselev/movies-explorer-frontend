import './Login.css'
import { useEffect, useState } from 'react'
import UseValidation from '../../hooks/useValidation'
import { login } from '../../utils/MainApi'
import { useNavigate } from 'react-router-dom'
import Form from '../Form/Form'
import Links from '../UI/Link/Link'
import InputField from '../UI/InputField/InputField'
import logo from '../../images/logo.svg'

function Login({ setLoggedIn, setIsTooltipVisible, setTooltipMessage }) {
  const [submitButtonText, setSubmitButtonText] = useState('Войти')
  const { isFormValid, values, handleValues, errors, setInitialValues } = UseValidation()
  const navigate = useNavigate()

  useEffect(() => {
    setInitialValues({ email: '', password: '' })
  }, [])

  function handleLogin(e) {
    e.preventDefault()
    setSubmitButtonText('Вход...')

    const { email, password } = values

    login({ email, password })
      .then((user) => {
        console.log(user)
        setIsTooltipVisible(true)
        setTooltipMessage({ message: 'Вы вошли, хорошего поиска фильмов', status: 'ok' })
        setLoggedIn(true)
        navigate('/')
      })
      .catch((err) => {
        setIsTooltipVisible(true)
        setTooltipMessage({ message: err.message || 'Попробуйте еще раз, что-то не так...', status: 'error' })
        console.log(err)
      })
      .finally(() => {
        setSubmitButtonText('Войти')
      })
  }

  return (
    <section className="login">
      <img className="login__logo" src={logo} alt="Поиск фильмов" />
      <h1 className="login__title">Рады видеть!</h1>
      <Form onSubmit={handleLogin} isFormValid={isFormValid} buttonText={submitButtonText}>
        <InputField
          value={values.email || ''}
          error={errors.email}
          onChange={handleValues}
          type="email"
          name="email"
          placeholder="E-mail"
          required={true}
        />
        <InputField
          minLength="6"
          maxLength="30"
          value={values.password || ''}
          error={errors.password}
          onChange={handleValues}
          type="password"
          name="password"
          placeholder="Пароль"
          required={true}
        />
      </Form>
      <p className="login__text">
        Еще не зарегистрированы? <Links text="Регистрация" color="green" to="/signup" />
      </p>
    </section>
  )
}

export default Login
