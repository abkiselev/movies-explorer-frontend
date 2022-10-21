import { Link, useLocation } from 'react-router-dom'
import { useState } from 'react'
import logo from '../../images/logo.png'
import Links from '../UI/Link/Link'
import Button from '../UI/Button/Button'
import './Header.css'

function Header({ onLoginClick }) {
  const [user, setUser] = useState(true)
  const [isMenuChecked, setIsMenuChecked] = useState(false)

  const { pathname } = useLocation()
  console.log(pathname)

  return (
    <header className="header">
      <nav className="header__navbar">
        <Link to="/">
          <img className="header__logo" src={logo} alt="Поиск фильмов" />
        </Link>

        {user ? (
          <>
            <nav className={`header__nav ${isMenuChecked && 'header__nav_visible'}`}>
              <ul className="header__links header__links_main">
                <li
                  className={`header__link ${pathname === '/movies' && '_active'}`}
                  onClick={() => setIsMenuChecked(false)}
                >
                  <Links to="/movies" text="Фильмы" isActive={pathname === '/movies'} />
                </li>
                <li className="header__link" onClick={() => setIsMenuChecked(false)}>
                  <Links to="/saved-movies" text="Сохраненные фильмы" isActive={pathname === '/saved-movies'} />
                </li>
              </ul>
              <ul className="header__links header__links_profile">
                <li onClick={() => setIsMenuChecked(false)}>
                  <Link
                    to="/profile"
                    className={`header__link header__link_profile ${pathname === '/profile' && '_active'}`}
                  >
                    Аккаунт
                  </Link>
                </li>
              </ul>
            </nav>
            <div className="hamburger_menu">
              <input id="menu__toggle" type="checkbox" onChange={() => setIsMenuChecked(!isMenuChecked)} />
              <label className={`menu__btn ${isMenuChecked && `_checked`}`} htmlFor="menu__toggle">
                <span></span>
              </label>
            </div>
          </>
        ) : (
          <ul className="header__links">
            <li className="header__link">
              <Links to="/signup" text="Регистрация" />
            </li>
            <li className="header__link">
              <Button onClick={onLoginClick} text="Войти" status="small" />
            </li>
          </ul>
        )}
      </nav>
      <div className={`header__bg ${isMenuChecked && 'header__bg_visible'}`}></div>
    </header>
  )
}

export default Header
