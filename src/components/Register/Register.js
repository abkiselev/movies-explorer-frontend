import Form from '../Form/Form'
import Links from '../UI/Link/Link'
import InputField from '../UI/InputField/InputField'
import './Register.css'
import logo from '../../images/logo.png'

function Register() {
  const onChange = () => {}
  return (
    <section className="register">
      <img className="register__logo" src={logo} alt="Поиск фильмов" />
      <h1 className="register__title">Добро пожаловать!</h1>
      <Form>
        <InputField type="text" name="name" placeholder="Имя" onChange={onChange} required={true} />
        <InputField type="email" name="email" placeholder="E-mail" onChange={onChange} required={true} />
        <InputField type="password" name="password" placeholder="Пароль" onChange={onChange} required={true} />
      </Form>
      <p className="register__text">
        Уже зарегистрированы? <Links text="Войти" color="green" to="/sign-in" />{' '}
      </p>
    </section>
  )
}

export default Register
