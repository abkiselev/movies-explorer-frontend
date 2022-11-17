import './Portfolio.css'

export default function Portfolio() {
  return (
    <section className="portfolio">
      <ul className="portfolio__wrapper">
        <li>
          <h3 className="portfolio__title">Портфолио</h3>
        </li>
        <li>
          <a
            className="portfolio__link"
            href="https://github.com/abkiselev?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>Статичный сайт</span>
            <span className="portfolio__arrow">&#8599;</span>
          </a>
        </li>
        <li>
          <a
            className="portfolio__link"
            href="https://github.com/abkiselev?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>Адаптивный сайт</span>
            <span className="portfolio__arrow">&#8599;</span>
          </a>
        </li>
        <li>
          <a
            className="portfolio__link"
            href="https://github.com/abkiselev?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>Одностраничное приложение</span>
            <span className="portfolio__arrow">&#8599;</span>
          </a>
        </li>
      </ul>
    </section>
  )
}
