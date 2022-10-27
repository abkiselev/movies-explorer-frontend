import './SavedMovies.css'
import { useEffect, useState, useContext } from 'react'
import { UserContext } from '../../contexts/UserContext'
import { dislikeMovie } from '../../utils/MainApi'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import MoviesCardList from '../MoviesCardList/MoviesCardList'
import Preloader from '../Preloader/Preloader'
import SearchForm from '../SearchForm/SearchForm'

function SavedMovies({ setLockScroll, setIsTooltipVisible, setTooltipMessage, setCurrentUser }) {
  const currentUser = useContext(UserContext)
  const [list, setList] = useState(currentUser.likedFilms)
  const [loading, setLoading] = useState(false)
  const [errorText, setErrorText] = useState('')
  const [searchValue, setSearchValue] = useState('')
  const [isCheckboxChecked, setIsCheckboxChecked] = useState(false)

  const handleSumbit = (e) => {
    e.preventDefault()

    if (!searchValue && list.length !== currentUser.likedFilms.length) {
      setList(currentUser.likedFilms)
      return
    }

    if (!searchValue && list.length === currentUser.likedFilms.length) {
      setTooltipMessage({ message: 'Нужно ввести ключевое слово', status: 'error' })
      setIsTooltipVisible(true)
      return
    }

    const filteredMovies = currentUser.likedFilms.filter(
      (movie) =>
        (isCheckboxChecked ? movie.duration <= 40 : movie.duration > 0) &&
        (movie.nameRU.toLowerCase().includes(searchValue.toLowerCase()) ||
          movie.nameEN.toLowerCase().includes(searchValue.toLowerCase()))
    )

    setList(filteredMovies)
  }

  const handleDislike = (id) => {
    dislikeMovie(id)
      .then((mov) => {
        const updatedLikedFilms = currentUser.likedFilms.filter((film) => film._id !== id)
        setCurrentUser({ ...currentUser, likedFilms: updatedLikedFilms })
        setList(updatedLikedFilms)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    <section className='movies'>
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

export default SavedMovies
