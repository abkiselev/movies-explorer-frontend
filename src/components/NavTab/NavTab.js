import LinkTab from '../UI/LinkTab/LinkTab'
import './NavTab.css'

function NavTab() {
  return (
    <ul className="heading__tabs">
      <li className="heading__tab">
        <LinkTab to="#about" size="small" text="О проекте" />
      </li>
      <li className="heading__tab">
        <LinkTab to="#technologies" size="small" text="Технологии" />
      </li>
      <li className="heading__tab">
        <LinkTab to="#student" size="small" text="Студент" />
      </li>
    </ul>
  )
}

export default NavTab
