import Header from '../Header/Header'
import { useNavigate, useLocation } from 'react-router-dom'
import './Main.css'

function Main() {
  const location = useLocation()
  const navigate = useNavigate()
  console.log(location.pathname)

  const onLoginClick = () => {
    navigate('/session-timed-out')
  }

  return (
    <section className="app">
      <Header onLoginClick={onLoginClick} />
    </section>
  )
}

export default Main
