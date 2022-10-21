import Form from '../Form/Form'
import Links from '../UI/Link/Link'
import InputField from '../UI/InputField/InputField'
import './Profile.css'
import Header from '../Header/Header'
import LinkButton from '../UI/LinkButton/LinkButton'

function Profile() {
  const onChange = () => {}
  return (
    <section className="profile">
      <Header />
      <div className="profile__wrapper">
        <h1 className="profile__title">Привет, Виталий</h1>
        <form className="profile__form">
          <fieldset className="profile__fieldset">
            <div className="profile__inputfield">
              <label className="profile__label" htmlFor="name">
                Имя
              </label>
              <input
                className="profile__input"
                id="name"
                type="text"
                name="name"
                value="Виталий"
                onChange={onChange}
                required
              />
            </div>
            <div className="profile__inputfield">
              <label className="profile__label" htmlFor="email">
                E-mail
              </label>
              <input
                className="profile__input"
                id="email"
                type="email"
                name="email"
                value="pochta@yandex.ru"
                onChange={onChange}
                required
              />
            </div>
            <p className="profile__error"></p>
          </fieldset>
          <div className="profile__button">
            <LinkButton type="submit" text="Редактировать" to="" />
          </div>
        </form>
        <LinkButton text="Выйти из аккаунта" color="red" />
      </div>
    </section>
  )
}

export default Profile
