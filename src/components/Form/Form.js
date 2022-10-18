// import { useNavigate, useLocation } from 'react-router-dom'
import Button from '../UI/Button/Button'
import './Form.css'

function Form({ onSubmit, children }) {
  return (
    <form className="form">
      <fieldset className="form__inputs">{children}</fieldset>
      <Button type="submit" text="Зарегистрироваться" status="main" onSubmit={onSubmit} />
    </form>
  )
}

export default Form
