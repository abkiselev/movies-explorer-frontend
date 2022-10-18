import './InputField.css'

function InputField({ type, name, placeholder, onChange, required }) {
  return (
    <>
      <div className="input">
        <input className="input__field" type={type} name={name} onChange={onChange} required={required} placeholder=' ' />
        <label className="input__label" htmlFor={name}>
          {placeholder}
        </label>
        <span className="input__error">Что-то пошло не так...</span>
      </div>
    </>
  )
}

export default InputField
