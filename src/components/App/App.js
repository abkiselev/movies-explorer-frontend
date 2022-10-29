import './App.css'
import { useRoutes } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { UserContext } from '../../contexts/UserContext'
import routes from '../../utils/routes'
import { checkUser, getLikedMovies } from '../../utils/MainApi'
import ToolTip from '../ToolTip/ToolTip'

function App() {
  const [currentUser, setCurrentUser] = useState({
    user: {},
    // films: [],
    likedFilms: [],
    // searchValue: '',
    // checkbox: false,
  })
  const [loggedIn, setLoggedIn] = useState(false)
  const [lockScroll, setLockScroll] = useState(false)
  const [isTooltipVisible, setIsTooltipVisible] = useState(false)
  const [tooltipMessage, setTooltipMessage] = useState({ message: '', status: '' })

  console.log(currentUser)

  const routing = useRoutes(
    routes(loggedIn, setLoggedIn, currentUser, setCurrentUser, setLockScroll, setIsTooltipVisible, setTooltipMessage)
  )

  useEffect(() => {
    Promise.all([checkUser(), getLikedMovies()])
      .then(([user, movies]) => {
        setCurrentUser({ ...currentUser, user: user.data, likedFilms: movies.data })
        setLoggedIn(true)
      })
      .catch((err) => {
        console.log(err)
        setCurrentUser({})
        localStorage.reset()
        setLoggedIn(false)
      })
  }, [loggedIn])

  useEffect(() => {
    if (isTooltipVisible) {
      setTimeout(() => {
        setIsTooltipVisible(false)
      }, 2500)
    }
  }, [isTooltipVisible])

  return (
    <section className={`app ${lockScroll && 'app_locked'}`}>
      <UserContext.Provider value={currentUser}>
        {routing}
        <ToolTip isTooltipVisible={isTooltipVisible} tooltipMessage={tooltipMessage} />
      </UserContext.Provider>
    </section>
  )
}

export default App
