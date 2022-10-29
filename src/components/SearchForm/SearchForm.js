import './SearchForm.css'
import searchIcon from '../../images/icon_search.svg'
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox'

function SearchForm({
  searchValue,
  setSearchValue,
  isCheckboxChecked,
  setIsCheckboxChecked,
  handleSumbit,
  loading,
}) {
  const handleInput = (e) => {
    setSearchValue(e.target.value)
  }

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
            disabled={loading}
          />
          <button disabled={loading} className='search-form__button' type='submit'>
            <img src={searchIcon} alt='Искать' />
          </button>
        </form>
        <FilterCheckbox
          isCheckboxChecked={isCheckboxChecked}
          setIsCheckboxChecked={setIsCheckboxChecked}
        />
      </div>
    </section>
  )
}

export default SearchForm
