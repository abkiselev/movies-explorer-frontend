import './App.css'
import { useRoutes } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { UserContext } from '../../contexts/UserContext'
import routes from '../../utils/routes'
import { checkUser } from '../../utils/MainApi'
import ToolTip from '../ToolTip/ToolTip'

function App() {
  const [currentUser, setCurrentUser] = useState({})
  const [loggedIn, setLoggedIn] = useState(false)
  const [lockScroll, setLockScroll] = useState(false)
  const [isTooltipVisible, setIsTooltipVisible] = useState(false)
  const [tooltipMessage, setTooltipMessage] = useState({ message: '', status: '' })

  // console.log(currentUser)
  // console.log(loggedIn)

  const routing = useRoutes(
    routes(loggedIn, setLoggedIn, setCurrentUser, setLockScroll, setIsTooltipVisible, setTooltipMessage)
  )

  useEffect(() => {
    checkUser()
      .then((userData) => {
        setCurrentUser(userData.data)
        setLoggedIn(true)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  useEffect(() => {
    if (isTooltipVisible) {
      setTimeout(() => {
        setIsTooltipVisible(false)
      }, 2500)
    }
  }, [isTooltipVisible])

  // useEffect(() => {
  //   if (loggedIn) {

  //   }
  // }, [loggedIn])

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
