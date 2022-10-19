import { Link } from 'react-router-dom'
import './Link.css'

function Links({ to, color, text }) {
  return (
    <Link className={`link ${color && `link_${color}`}`} to={to}>
      {text}
    </Link>
  )
}

export default Links
