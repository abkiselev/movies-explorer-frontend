import './ToolTip.css'

function ToolTip({ isTooltipVisible, tooltipMessage }) {
  return (
    <section className={`tooltip ${isTooltipVisible && '_visible'}`}>
      <p
        className={`tooltip__message ${
          tooltipMessage.status === 'error' ? 'tooltip__message_error' : 'tooltip__message_ok'
        }`}
      >
        {tooltipMessage.message}
      </p>
    </section>
  )
}

export default ToolTip
