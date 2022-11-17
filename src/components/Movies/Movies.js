import './Movies.css'
import { useState, useContext, useEffect } from 'react'
import { UserContext } from '../../contexts/UserContext'
import { likeMovie, dislikeMovie } from '../../utils/MainApi'
import { getMovies } from '../../utils/MoviesApi'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import MoviesCardList from '../MoviesCardList/MoviesCardList'
import Preloader from '../Preloader/Preloader'
import SearchForm from '../SearchForm/SearchForm'
import { SHORT_FILM_DURATION } from '../../utils/Constants'

function Movies({ setLockScroll, setIsTooltipVisible, setTooltipMessage, setCurrentUser }) {
  const currentUser = useContext(UserContext)
  const [list, setList] = useState(JSON.parse(localStorage.getItem('list')) || [])
  const [allMovies, setAllMovies] = useState(JSON.parse(localStorage.getItem('allMovies')) || [])
  const [loading, setLoading] = useState(false)
  const [errorText, setErrorText] = useState('')
  const [searchValue, setSearchValue] = useState(localStorage.getItem('searchValue') || '')
  const [isCheckboxChecked, setIsCheckboxChecked] = useState(
    JSON.parse(localStorage.getItem('isCheckboxChecked')) || false
  )

  useEffect(() => {
    localStorage.setItem('list', JSON.stringify(list))
  }, [list])

  useEffect(() => {
    localStorage.setItem('searchValue', searchValue)
  }, [searchValue])

  useEffect(() => {
    localStorage.setItem('isCheckboxChecked', isCheckboxChecked)
  }, [isCheckboxChecked])

  useEffect(() => {
    localStorage.setItem('allMovies', JSON.stringify(allMovies))
  }, [allMovies])

  const handleLike = (movie) => {
    const image = `https://api.nomoreparties.co/${movie.image.url}`
    const thumbnail = `https://api.nomoreparties.co/${movie.image.formats.thumbnail.url}`
    const movieId = movie.id
    const { country, director, duration, year, description, trailerLink, nameRU, nameEN } = movie

    likeMovie({
      country,
      director,
      duration,
      year,
      description,
      trailerLink,
      nameRU,
      nameEN,
      image,
      thumbnail,
      movieId,
    })
      .then((mov) => {
        setCurrentUser({ ...currentUser, likedFilms: [...currentUser.likedFilms, mov.data] })
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const handleDislike = (id) => {
    const movie = currentUser.likedFilms.find((mov) => mov.movieId === id)

    dislikeMovie(movie._id)
      .then((mov) => {
        const updatedLikedFilms = currentUser.likedFilms.filter((film) => film._id !== movie._id)
        setCurrentUser({ ...currentUser, likedFilms: updatedLikedFilms })
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const filterMovies = (movies) => {
    return movies.filter(
      (movie) =>
        (isCheckboxChecked ? movie.duration <= SHORT_FILM_DURATION : movie.duration > 0) &&
        (movie.nameRU.toLowerCase().includes(searchValue.toLowerCase()) ||
          movie.nameEN.toLowerCase().includes(searchValue.toLowerCase()))
    )
  }

  const handleSumbit = (e) => {
    e.preventDefault()

    if (!searchValue) {
      setTooltipMessage({ message: 'Нужно ввести ключевое слово', status: 'error' })
      setIsTooltipVisible(true)
      return
    }

    if (allMovies.length > 0) {
      setLoading(true)
      setList([])
      const filteredMovies = filterMovies(allMovies)
      filteredMovies.length === 0 ? setErrorText('Ничего не найдено') : setList(filteredMovies)
      setLoading(false)
      return
    }

    setLoading(true)
    setList([])

    getMovies()
      .then((movies) => {
        setAllMovies(movies)
        const filteredMovies = filterMovies(movies)
        filteredMovies.length === 0 ? setErrorText('Ничего не найдено') : setList(filteredMovies)
      })
      .catch((err) => {
        console.log(err)
        setErrorText(
          err.message ||
            'Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз'
        )
      })
      .finally(() => {
        setLoading(false)
      })
  }

  return (
    <section className='movies'>
      <Header setLockScroll={setLockScroll} />
      <main>
        <SearchForm
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          isCheckboxChecked={isCheckboxChecked}
          setIsCheckboxChecked={setIsCheckboxChecked}
          handleSumbit={handleSumbit}
          loading={loading}
        />

        {!loading ? (
          <MoviesCardList
            list={list}
            errorText={errorText}
            currentUser={currentUser}
            setCurrentUser={setCurrentUser}
            handleLike={handleLike}
            handleDislike={handleDislike}
          />
        ) : (
          <Preloader />
        )}
      </main>
      <Footer />
    </section>
  )
}

export default Movies
