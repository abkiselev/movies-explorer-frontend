import Main from '../Main/Main'
import Register from '../Register/Register'
import { Routes, Route } from 'react-router-dom'
import './App.css'

function App() {
  return (
    <section className="app">
      <Routes>
        {/* <Route path="/" element={}>
          <Route path="messages" element={} />
          <Route path="tasks" element={} />
        </Route> */}
        <Route path="/" element={<Main />} />
        <Route path="/sign-up" element={<Register />} />
      </Routes>
    </section>
  )
}

export default App
