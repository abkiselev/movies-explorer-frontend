import './LinkButton.css'

function LinkButton({ type, color, text, isActive, onClick, onSubmit, disabled }) {
  return (
    <button
      className={`link_button ${color && `link_button_${color}`} ${isActive && `_active`}`}
      onClick={onClick}
      onSubmit={onSubmit}
      type={type}
      disabled={disabled}
    >
      {text}
    </button>
  )
}

export default LinkButton
