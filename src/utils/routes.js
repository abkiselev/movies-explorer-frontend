import { Navigate } from 'react-router-dom'
import Main from '../components/Main/Main'
import Movies from '../components/Movies/Movies'
import Register from '../components/Register/Register'
import Login from '../components/Login/Login'
import Error from '../components/Error/Error'
import Profile from '../components/Profile/Profile'
import SavedMovies from '../components/SavedMovies/SavedMovies'

const routes = (loggedIn, setCurrentUser, setLockScroll) => [
  {
    path: '/',
    element: <Main setLockScroll={setLockScroll} />,
  },
  {
    path: '/signup',
    element: <Register />,
  },
  {
    path: '/signin',
    element: <Login setCurrentUser={setCurrentUser} />,
  },
  {
    path: '/movies',
    element: loggedIn ? <Movies setLockScroll={setLockScroll} /> : <Navigate to='/signin' />,
  },
  {
    path: '/saved-movies',
    element: loggedIn ? <SavedMovies setLockScroll={setLockScroll} /> : <Navigate to='/signin' />,
  },
  {
    path: '/profile',
    element: loggedIn ? <Profile setCurrentUser={setCurrentUser} setLockScroll={setLockScroll} /> : <Navigate to='/signin' />,
  },
  {
    path: '*',
    element: <Error />,
  },
]

{
  /* <Routes>
          <Route path='/' element={<Main setLockScroll={setLockScroll} />} />
          <Route path='/movies' element={<Movies setLockScroll={setLockScroll} />} />
          <Route path='/saved-movies' element={<SavedMovies setLockScroll={setLockScroll} />} />
          <Route path='/signup' element={<Register />} />
          <Route path='/signin' element={<Login />} />
          <Route path='/profile' element={<Profile setLockScroll={setLockScroll} />} />
          <Route path='*' element={<Error />} />
        </Routes> */
}

export default routes
