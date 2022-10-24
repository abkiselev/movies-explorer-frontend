import './LinkButton.css'

function LinkButton({ type, color, text, isActive, onClick, onSubmit }) {
  return (
    <button
      className={`link_button ${color && `link_button_${color}`} ${isActive && `_active`}`}
      onClick={onClick}
      onSubmit={onSubmit}
      type={type}
    >
      {text}
    </button>
  )
}

export default LinkButton
