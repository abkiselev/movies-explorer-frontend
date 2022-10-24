import './App.css'
import { Routes, Route } from 'react-router-dom'
import Main from '../Main/Main'
import Movies from '../Movies/Movies'
import Register from '../Register/Register'
import Login from '../Login/Login'
import Error from '../Error/Error'
import Profile from '../Profile/Profile'
import SavedMovies from '../SavedMovies/SavedMovies'
import { useState } from 'react'

function App() {
  const [lockScroll, setLockScroll] = useState(false)
  console.log(lockScroll)

  return (
    <section className={`app ${lockScroll && 'app_locked'}`}>
      <Routes>
        <Route path='/' element={<Main setLockScroll={setLockScroll} />} />
        <Route path='/movies' element={<Movies setLockScroll={setLockScroll} />} />
        <Route path='/saved-movies' element={<SavedMovies setLockScroll={setLockScroll} />} />
        <Route path='/signup' element={<Register />} />
        <Route path='/signin' element={<Login />} />
        <Route path='/profile' element={<Profile setLockScroll={setLockScroll} />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </section>
  )
}

export default App
