import './Button.css'

function Links({ type, status, text, onClick, onSubmit }) {
  return (
    <button type={type} className={`button ${status && `button_${status}`}`} onClick={onClick} onSubmit={onSubmit}>
      {text}
    </button>
  )
}

export default Links
