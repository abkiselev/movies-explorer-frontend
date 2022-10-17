import { Link } from "react-router-dom"
import logo from '../../images/logo.png'
import Links from "../UI/Link/Link";
import './Header.css'

function Header() {
  return (
    <header className="header">
      <nav className="header__navbar">
        <Link to='/'><img className="header__logo" src={logo} alt="Поиск фильмов" /></Link>
        <ul className="header__links">
          <li className="header__link">
            <Links to='/sign-up' text='Регистрация' />
            {/* <Link className="header__link" to='/sign-up'>Регистрация</Link> */}
          </li>
          <li className="header__link">
            <Link className="header__link" to='/sign-up'>Войти</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
