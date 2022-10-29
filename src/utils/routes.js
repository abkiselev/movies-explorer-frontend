import { Navigate } from 'react-router-dom'
import Main from '../components/Main/Main'
import Movies from '../components/Movies/Movies'
import Register from '../components/Register/Register'
import Login from '../components/Login/Login'
import Error from '../components/Error/Error'
import Profile from '../components/Profile/Profile'
import SavedMovies from '../components/SavedMovies/SavedMovies'

const routes = (
  loggedIn,
  setLoggedIn,
  currentUser,
  setCurrentUser,
  setLockScroll,
  setIsTooltipVisible,
  setTooltipMessage
) => [
  {
    path: '/',
    element: <Main setLockScroll={setLockScroll} />,
  },
  {
    path: '/signup',
    element: loggedIn ? (
      <Navigate to='/movies' />
    ) : (
      <Register
        setLoggedIn={setLoggedIn}
        setCurrentUser={setCurrentUser}
        setIsTooltipVisible={setIsTooltipVisible}
        setTooltipMessage={setTooltipMessage}
      />
    ),
  },
  {
    path: '/signin',
    element: loggedIn ? (
      <Navigate to='/movies' />
    ) : (
      <Login
        setLoggedIn={setLoggedIn}
        setCurrentUser={setCurrentUser}
        setIsTooltipVisible={setIsTooltipVisible}
        setTooltipMessage={setTooltipMessage}
      />
    ),
  },
  {
    path: '/movies',
    element: loggedIn ? (
      <Movies
        setLockScroll={setLockScroll}
        setIsTooltipVisible={setIsTooltipVisible}
        setTooltipMessage={setTooltipMessage}
        setCurrentUser={setCurrentUser}
      />
    ) : (
      <Navigate to='/' />
    ),
  },
  {
    path: '/saved-movies',
    element: loggedIn ? (
      <SavedMovies
        setLockScroll={setLockScroll}
        setIsTooltipVisible={setIsTooltipVisible}
        setTooltipMessage={setTooltipMessage}
        setCurrentUser={setCurrentUser}
      />
    ) : (
      <Navigate to='/' />
    ),
  },
  {
    path: '/profile',
    element: loggedIn ? (
      <Profile
        setLoggedIn={setLoggedIn}
        setCurrentUser={setCurrentUser}
        setLockScroll={setLockScroll}
        setIsTooltipVisible={setIsTooltipVisible}
        setTooltipMessage={setTooltipMessage}
      />
    ) : (
      <Navigate to='/' />
    ),
  },
  {
    path: '*',
    element: <Error />,
  },
]

export default routes
