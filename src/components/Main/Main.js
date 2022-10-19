import Header from '../Header/Header'
import Heading from '../Heading/Heading'
import About from '../About/About'
import Technologies from '../Technologies/Technologies'
import Student from '../Student/Student'
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
    navigate('/sign-in')
  }

  return (
    <section className="main">
      <Header onLoginClick={onLoginClick} />
      <Heading />
      <About ref={about} />
      <Technologies ref={technologies} />
      <Student ref={student} />
      <Footer />
    </section>
  )
}

export default Main
