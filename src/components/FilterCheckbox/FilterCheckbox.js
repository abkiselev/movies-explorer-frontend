import './FilterCheckbox.css'

function FilterCheckbox() {
  return (
    <div className="checkbox">
      <label className="checkbox__wrapper">
        <input className="checkbox__input" type="checkbox" />
        <span className="checkbox__switch"></span>
        <p className="checkbox__title">Короткометражки</p>
      </label>
    </div>
  )
}

export default FilterCheckbox
