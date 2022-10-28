import './Profile.css'
import { useEffect, useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../../contexts/UserContext'
import UseValidation from '../../hooks/useValidation'
import { logOut, updateUser } from '../../utils/MainApi'
import Header from '../Header/Header'
import LinkButton from '../UI/LinkButton/LinkButton'

function Profile({ setLockScroll, setIsTooltipVisible, setTooltipMessage, setCurrentUser, setLoggedIn }) {
  const currentUser = useContext(UserContext)
  const [submitButtonText, setSubmitButtonText] = useState('Редактировать')
  const { isFormValid, values, handleValues, errors, setValues } = UseValidation()
  const navigate = useNavigate()

  useEffect(() => {
    setValues({ email: currentUser.user.email, name: currentUser.user.name })
  }, [])

  function handleUpdate(e) {
    e.preventDefault()
    setSubmitButtonText('Обновляем...')

    const { email, name } = values

    updateUser({ email, name })
      .then((user) => {
        setIsTooltipVisible(true)
        setTooltipMessage({ message: 'Обновлено!', status: 'ok' })
        setCurrentUser({ ...currentUser, user: user.data })
      })
      .catch((err) => {
        setIsTooltipVisible(true)
        setTooltipMessage({ message: err.message || 'Попробуйте еще раз, что-то не так...', status: 'error' })
        console.log(err)
      })
      .finally(() => {
        setSubmitButtonText('Редактировать')
      })
  }

  function handleLogout() {
    logOut()
      .then(() => {
        setLoggedIn(false)
        setCurrentUser({})
        navigate('/signin')
      })
      .catch((err) => {
        setIsTooltipVisible(true)
        setTooltipMessage({ message: err.message || 'Попробуйте еще раз, что-то не так...', status: 'error' })
        console.log(err)
      })
  }

  return (
    <section className="profile">
      <Header setLockScroll={setLockScroll} />
      <main className="profile__wrapper">
        <h1 className="profile__title">Привет, {currentUser.user.name}</h1>
        <form onSubmit={handleUpdate} className="profile__form">
          <fieldset className="profile__fieldset">
            <div className="profile__inputfield">
              <label className="profile__label" htmlFor="name">
                Имя
              </label>
              <input
                minLength="2"
                maxLength="30"
                className="profile__input"
                id="name"
                type="text"
                name="name"
                value={values.name || ''}
                onChange={handleValues}
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
                value={values.email || ''}
                onChange={handleValues}
                required
              />
            </div>
            <p className="profile__error">{errors.name}</p>
            <p className="profile__error">{errors.email}</p>
          </fieldset>
          <div className="profile__button">
            <LinkButton disabled={!isFormValid} type="submit" text={submitButtonText} to="" />
          </div>
        </form>
        <LinkButton type="button" text="Выйти из аккаунта" color="red" onClick={handleLogout} />
      </main>
    </section>
  )
}

export default Profile
