import Main from '../Main/Main'
import Movies from '../Movies/Movies'
import Register from '../Register/Register'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Login from '../Login/Login'
import Error from '../Error/Error'

function App() {
  return (
    <section className="app">
      <Routes>
        {/* <Route path="/" element={}>
          <Route path="messages" element={} />
          <Route path="tasks" element={} />
        </Route> */}
        <Route path="/" element={<Main />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/sign-up" element={<Register />} />
        <Route path="/sign-in" element={<Login />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </section>
  )
}

export default App
