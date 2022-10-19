import './Student.css'
import Title from '../Title/Title'
import myPhoto from '../../images/me.jpg'
import React, { forwardRef } from 'react'

export default forwardRef((_, ref) => {
  return (
    <section ref={ref} id="student" className="student">
      <div className="student__wrapper">
        <Title title="Студент" />
        <article className="student__info">
          <div>
            <h3 className="student__name">Алексей</h3>
            <p className="student__about">Фронтенд-разработчик, 34 года</p>
            <p className="student__text">
              Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена и дочь. Я люблю слушать
              музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ Контур». После
              того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.
            </p>
            <ul className="student__links">
              <li>
                <a
                  className="student__link"
                  href="https://github.com/abkiselev?tab=repositories"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </li>
            </ul>
          </div>
          <img className="student__img" src={myPhoto} alt="Мое фото" />
        </article>

        <ul className="portfolio">
          <h3 className="portfolio__title">Портфолио</h3>
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
      </div>
    </section>
  )
})

// export default Student
