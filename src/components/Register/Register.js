import './Register.css'
import Form from '../Form/Form'
import Links from '../UI/Link/Link'
import InputField from '../UI/InputField/InputField'
import logo from '../../images/logo.png'

function Register() {
  const onChange = () => {}
  return (
    <section className="register">
      <img className="register__logo" src={logo} alt="Поиск фильмов" />
      <h1 className="register__title">Добро пожаловать!</h1>
      <Form buttonText="Зарегистрироваться">
        <InputField type="text" name="name" placeholder="Имя" onChange={onChange} required={true} />
        <InputField type="email" name="email" placeholder="E-mail" onChange={onChange} required={true} />
        <InputField type="password" name="password" placeholder="Пароль" onChange={onChange} required={true} />
      </Form>
      <p className="register__text">
        Уже зарегистрированы? <Links text="Войти" color="green" to="/signin" />
      </p>
    </section>
  )
}

export default Register
