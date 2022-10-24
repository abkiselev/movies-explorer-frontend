import './Error.css'
import Links from '../UI/Link/Link'

function Error() {
  return (
    <section className="error">
      <h1 className="error__title">404</h1>
      <p className="error__subtitle">Страница не найдена</p>
      <Links text="Назад" color="green" to="/" />
    </section>
  )
}

export default Error
