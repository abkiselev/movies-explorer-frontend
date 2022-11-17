import './ButtonOutlined.css'

function ButtonOutlined({ text, onClick }) {
  return (
    <button className="button-outlined" onClick={onClick} type="button">
      {text}
    </button>
  )
}

export default ButtonOutlined
