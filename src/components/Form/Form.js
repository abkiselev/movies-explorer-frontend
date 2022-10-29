import './Form.css'
import Button from '../UI/Button/Button'

function Form({ onSubmit, children, buttonText, isFormValid, loading }) {
  return (
    <form className="form" onSubmit={onSubmit}>
      <fieldset className="form__inputs">{children}</fieldset>
      <Button type="submit" text={buttonText} status="main" buttonText={buttonText} disabled={!isFormValid || loading} />
    </form>
  )
}

export default Form
