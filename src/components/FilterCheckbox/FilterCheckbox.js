import './FilterCheckbox.css'

function FilterCheckbox({ isCheckboxChecked, setIsCheckboxChecked, setCurrentUser, currentUser }) {
  const onChange = () => {
    setCurrentUser({ ...currentUser, checkbox: !isCheckboxChecked })
    setIsCheckboxChecked(!isCheckboxChecked)
  }

  return (
    <section className="checkbox">
      <label className="checkbox__wrapper">
        <input className="checkbox__input" type="checkbox" defaultChecked={isCheckboxChecked} onChange={onChange} />
        <span className="checkbox__switch"></span>
        <p className="checkbox__title">Короткометражки</p>
      </label>
    </section>
  )
}

export default FilterCheckbox
