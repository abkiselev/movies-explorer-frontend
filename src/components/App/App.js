import './App.css'
import { Routes, Route, useRoutes } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { UserContext } from '../../contexts/UserContext'
import routes from '../../utils/routes'
import Main from '../Main/Main'
import Movies from '../Movies/Movies'
import Register from '../Register/Register'
import Login from '../Login/Login'
import Error from '../Error/Error'
import Profile from '../Profile/Profile'
import SavedMovies from '../SavedMovies/SavedMovies'
import { checkUser } from '../../utils/MainApi'

function App() {
  const [currentUser, setCurrentUser] = useState({})
  const [loggedIn, setLoggedIn] = useState(false)
  const [lockScroll, setLockScroll] = useState(false)
  console.log(currentUser)
  console.log(loggedIn)

  const routing = useRoutes(routes(loggedIn, setCurrentUser, setLockScroll))

  useEffect(() => {
    checkUser()
      .then((userData) => {
        setCurrentUser(userData)
        setLoggedIn(true)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  // useEffect(() => {
  //   if (loggedIn) {

  //   }
  // }, [loggedIn])

  return (
    <section className={`app ${lockScroll && 'app_locked'}`}>
      <UserContext.Provider value={currentUser}>
        {routing}
        {/* <Routes>
          <Route path='/' element={<Main setLockScroll={setLockScroll} />} />
          <Route path='/movies' element={<Movies setLockScroll={setLockScroll} />} />
          <Route path='/saved-movies' element={<SavedMovies setLockScroll={setLockScroll} />} />
          <Route path='/signup' element={<Register />} />
          <Route path='/signin' element={<Login />} />
          <Route path='/profile' element={<Profile setLockScroll={setLockScroll} />} />
          <Route path='*' element={<Error />} />
        </Routes> */}
      </UserContext.Provider>
    </section>
  )
}

export default App
