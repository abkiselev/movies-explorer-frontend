import { Link } from 'react-router-dom'
import './Link.css'

function Links({ to, color, text, isActive }) {
  return (
    <Link className={`link ${color && `link_${color}`} ${isActive && `_active`}`} to={to}>
      {text}
    </Link>
  )
}

export default Links
