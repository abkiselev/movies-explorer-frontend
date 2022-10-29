import './InputField.css'

function InputField({ type, name, placeholder, onChange, required, minLength, maxLength, error, disabled }) {
  return (
    <>
      <div className="input">
        <input
          className="input__field"
          type={type}
          name={name}
          onChange={onChange}
          required={required}
          placeholder=" "
          minLength={minLength}
          maxLength={maxLength}
          disabled={disabled}
        />
        <label className="input__label" htmlFor={name}>
          {placeholder}
        </label>
        <span className="input__error">{error}</span>
      </div>
    </>
  )
}

export default InputField
