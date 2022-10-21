import './SearchForm.css'
import searchIcon from '../../images/icon_search.svg'
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox'

function SearchForm() {
  return (
    <section className="search-form">
      <div className="search-form__wrapper">
        <form className="search-form__form">
          <input className="search-form__input" type="text" placeholder="Фильм" />
          <button className="search-form__button" type="submit">
            <img src={searchIcon} alt="Искать" />
          </button>
        </form>
        <FilterCheckbox />
      </div>
    </section>
  )
}

export default SearchForm
