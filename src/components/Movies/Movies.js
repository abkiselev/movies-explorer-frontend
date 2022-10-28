import './Movies.css'
import { useState, useContext } from 'react'
import { UserContext } from '../../contexts/UserContext'
import { likeMovie, dislikeMovie } from '../../utils/MainApi'
import { getMovies } from '../../utils/MoviesApi'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import MoviesCardList from '../MoviesCardList/MoviesCardList'
import Preloader from '../Preloader/Preloader'
import SearchForm from '../SearchForm/SearchForm'

function Movies({ setLockScroll, setIsTooltipVisible, setTooltipMessage, setCurrentUser }) {
  const currentUser = useContext(UserContext)
  const [list, setList] = useState(currentUser.films)
  const [loading, setLoading] = useState(false)
  const [errorText, setErrorText] = useState(
    currentUser.films.length === 0 && currentUser.searchValue ? 'Ничего не найдено' : ''
  )
  const [searchValue, setSearchValue] = useState(currentUser.searchValue || '')
  const [isCheckboxChecked, setIsCheckboxChecked] = useState(currentUser.checkbox)

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
        (isCheckboxChecked ? movie.duration <= 40 : movie.duration > 0) &&
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

    setLoading(true)
    setList([])

    getMovies()
      .then((movies) => {
        const filteredMovies = filterMovies(movies)
        filteredMovies.length === 0 && setErrorText('Ничего не найдено')
        filteredMovies.length > 0 && setList(filteredMovies)
        setCurrentUser({
          ...currentUser,
          films: filteredMovies,
          searchValue,
          checkbox: isCheckboxChecked,
        })
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
    <section className="movies">
      <Header setLockScroll={setLockScroll} />
      <main>
        <SearchForm
          setList={setList}
          setLoading={setLoading}
          setErrorText={setErrorText}
          setIsTooltipVisible={setIsTooltipVisible}
          setTooltipMessage={setTooltipMessage}
          currentUser={currentUser}
          setCurrentUser={setCurrentUser}
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          isCheckboxChecked={isCheckboxChecked}
          setIsCheckboxChecked={setIsCheckboxChecked}
          handleSumbit={handleSumbit}
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
