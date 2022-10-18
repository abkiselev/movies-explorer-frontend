// import { useNavigate, useLocation } from 'react-router-dom'
import Button from '../UI/Button/Button'
import './Form.css'

function Form({ onSubmit, children, buttonText }) {
  return (
    <form className="form">
      <fieldset className="form__inputs">{children}</fieldset>
      <Button type="submit" text={buttonText} status="main" onSubmit={onSubmit} buttonText={buttonText} />
    </form>
  )
}

export default Form
