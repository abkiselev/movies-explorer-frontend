import './Button.css'

function Links({ type, status, text, onClick, onSubmit, disabled }) {
  return (
    <button
      type={type}
      className={`button ${status && `button_${status}`}`}
      onClick={onClick}
      onSubmit={onSubmit}
      disabled={disabled}
    >
      {text}
    </button>
  )
}

export default Links
