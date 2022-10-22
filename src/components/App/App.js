import './App.css'
import { Routes, Route } from 'react-router-dom'
import Main from '../Main/Main'
import Movies from '../Movies/Movies'
import Register from '../Register/Register'
import Login from '../Login/Login'
import Error from '../Error/Error'
import Profile from '../Profile/Profile'
import SavedMovies from '../SavedMovies/SavedMovies'

function App() {
  return (
    <section className="app">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/saved-movies" element={<SavedMovies />} />
        <Route path="/signup" element={<Register />} />
        <Route path="/signin" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </section>
  )
}

export default App
