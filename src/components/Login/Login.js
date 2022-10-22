import './Login.css'
import Form from '../Form/Form'
import Links from '../UI/Link/Link'
import InputField from '../UI/InputField/InputField'
import logo from '../../images/logo.png'

function Login() {
  const onChange = () => {}
  return (
    <section className="login">
      <img className="login__logo" src={logo} alt="Поиск фильмов" />
      <h1 className="login__title">Рады видеть!</h1>
      <Form buttonText="Войти">
        <InputField type="email" name="email" placeholder="E-mail" onChange={onChange} required={true} />
        <InputField type="password" name="password" placeholder="Пароль" onChange={onChange} required={true} />
      </Form>
      <p className="login__text">
        Еще не зарегистрированы? <Links text="Регистрация" color="green" to="/signup" />
      </p>
    </section>
  )
}

export default Login
