import './SearchForm.css'
import searchIcon from '../../images/icon_search.svg'
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox'
import { useState } from 'react'
import { getMovies } from '../../utils/MoviesApi'

function SearchForm({
  // setList,
  // setLoading,
  // setErrorText,
  // setIsTooltipVisible,
  // setTooltipMessage,
  currentUser,
  setCurrentUser,
  searchValue,
  setSearchValue,
  isCheckboxChecked,
  setIsCheckboxChecked,
  handleSumbit,
}) {
  // const [searchValue, setSearchValue] = useState(currentUser.searchValue || '')
  // const [isCheckboxChecked, setIsCheckboxChecked] = useState(currentUser.checkbox)

  const handleInput = (e) => {
    setSearchValue(e.target.value)
  }

  // const filterMovies = (movies) => {
  //   return movies.filter(
  //     (movie) =>
  //       (isCheckboxChecked ? movie.duration <= 40 : movie.duration > 0) &&
  //       (movie.nameRU.toLowerCase().includes(searchValue.toLowerCase()) ||
  //         movie.nameEN.toLowerCase().includes(searchValue.toLowerCase()))
  //   )
  // }

  // const handleSumbit = (e) => {
  //   e.preventDefault()

  //   if (!searchValue) {
  //     setTooltipMessage({ message: 'Нужно ввести ключевое слово', status: 'error' })
  //     setIsTooltipVisible(true)
  //     return
  //   }

  //   setLoading(true)
  //   setList([])

  //   getMovies()
  //     .then((movies) => {
  //       const filteredMovies = filterMovies(movies)
  //       console.log(filteredMovies)
  //       filteredMovies.length === 0 && setErrorText('Ничего не найдено')
  //       filteredMovies.length > 0 && setList(filteredMovies)
  //       setCurrentUser({
  //         ...currentUser,
  //         films: filteredMovies,
  //         searchValue,
  //         checkbox: isCheckboxChecked,
  //       })
  //     })
  //     .catch((err) => {
  //       console.log(err)
  //       setErrorText(
  //         err.message ||
  //           'Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз'
  //       )
  //     })
  //     .finally(() => {
  //       setLoading(false)
  //     })
  // }

  return (
    <section className='search-form'>
      <div className='search-form__wrapper'>
        <form onSubmit={handleSumbit} className='search-form__form'>
          <input
            value={searchValue}
            onChange={handleInput}
            className='search-form__input'
            type='text'
            placeholder='Фильм'
          />
          <button className='search-form__button' type='submit'>
            <img src={searchIcon} alt='Искать' />
          </button>
        </form>
        <FilterCheckbox
          isCheckboxChecked={isCheckboxChecked}
          setIsCheckboxChecked={setIsCheckboxChecked}
          setCurrentUser={setCurrentUser}
          currentUser={currentUser}
        />
      </div>
    </section>
  )
}

export default SearchForm
