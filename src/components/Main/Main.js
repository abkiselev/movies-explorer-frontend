import Header from '../Header/Header'
import Heading from '../Heading/Heading'
import { useNavigate, useLocation } from 'react-router-dom'
import './Main.css'

function Main() {
  const location = useLocation()
  const navigate = useNavigate()
  console.log(location.pathname)

  const onLoginClick = () => {
    navigate('/sign-in')
  }

  return (
    <section className="main">
      <Header onLoginClick={onLoginClick} />
      <Heading />
    </section>
  )
}

export default Main
