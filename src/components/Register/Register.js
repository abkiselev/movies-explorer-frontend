import './Register.css'
import { useEffect, useState } from 'react'
import UseValidation from '../../hooks/useValidation'
import { register } from '../../utils/MainApi'
import { useNavigate } from 'react-router-dom'
import Form from '../Form/Form'
import Links from '../UI/Link/Link'
import InputField from '../UI/InputField/InputField'
import logo from '../../images/logo.svg'

function Register({ setIsTooltipVisible, setTooltipMessage }) {
  const [submitButtonText, setSubmitButtonText] = useState('Зарегистрироваться')
  const { isFormValid, values, handleValues, errors, setInitialValues } = UseValidation()
  const navigate = useNavigate()

  useEffect(() => {
    setInitialValues({ name: '', email: '', password: '' })
  }, [])

  function handleSubmit(e) {
    e.preventDefault()
    setSubmitButtonText('Регистрируем...')

    const { email, name, password } = values

    register({ email, name, password })
      .then((status) => {
        setIsTooltipVisible(true)
        setTooltipMessage({ message: 'Успешная регистрация, теперь войдите', status: 'ok' })
        navigate('/signin')
      })
      .catch((err) => {
        setIsTooltipVisible(true)
        setTooltipMessage({ message: err.message || 'Попробуйте еще раз, что-то не так...', status: 'error' })
        console.log(err)
      })
      .finally(() => {
        setSubmitButtonText('Зарегистрироваться')
      })
  }

  return (
    <section className="register">
      <img className="register__logo" src={logo} alt="Поиск фильмов" />
      <h1 className="register__title">Добро пожаловать!</h1>
      <Form onSubmit={handleSubmit} isFormValid={isFormValid} buttonText={submitButtonText}>
        <InputField
          minLength="2"
          maxLength="30"
          value={values.name || ''}
          error={errors.name}
          onChange={handleValues}
          type="text"
          name="name"
          placeholder="Имя"
          required={true}
        />
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
      <p className="register__text">
        Уже зарегистрированы? <Links text="Войти" color="green" to="/signin" />
      </p>
    </section>
  )
}

export default Register
