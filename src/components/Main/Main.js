import Header from '../Header/Header'
import Promo from '../Promo/Promo'
import AboutProject from '../AboutProject/AboutProject'
import Techs from '../Techs/Techs'
import AboutMe from '../AboutMe/AboutMe'
import Portfolio from '../Portfolio/Portfolio'
import Footer from '../Footer/Footer'
import { useNavigate } from 'react-router-dom'
import './Main.css'
import { useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'

function Main() {
  const { hash } = useLocation()
  const about = useRef()
  const technologies = useRef()
  const student = useRef()
  const navigate = useNavigate()

  console.log(hash)

  useEffect(() => {
    if (hash) {
      hash === '#about' && about.current.scrollIntoView({ behavior: 'smooth' })
      hash === '#technologies' && technologies.current.scrollIntoView({ behavior: 'smooth' })
      hash === '#student' && student.current.scrollIntoView({ behavior: 'smooth' })
    }
  }, [hash])

  const onLoginClick = () => {
    navigate('/signin')
  }

  return (
    <section className="main">
      <Header onLoginClick={onLoginClick} />
      <Promo />
      <AboutProject ref={about} />
      <Techs ref={technologies} />
      <AboutMe ref={student} />
      <Portfolio />
      <Footer />
    </section>
  )
}

export default Main
