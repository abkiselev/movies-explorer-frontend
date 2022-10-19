import './About.css'
import Title from '../Title/Title'
import React, { forwardRef } from 'react'

export default forwardRef((_, ref) => {
  return (
    <section ref={ref} id="about" className="about">
      <div className="about__wrapper">
        <Title title="O проекте" />
        <ul className="about__info">
          <li className="article">
            <article>
              <h3 className="article__title">Дипломный проект включал 5 этапов</h3>
              <p className="article__text">
                Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.
              </p>
            </article>
          </li>
          <li className="article">
            <article>
              <h3 className="article__title">На выполнение диплома ушло 5 недель</h3>
              <p className="article__text">
                У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.
              </p>
            </article>
          </li>
        </ul>

        <ul className="about__flow">
          <li className="flow">
            <h4 className="flow__title">1 неделя</h4>
            <p className="flow__text">Back-end</p>
          </li>
          <li className="flow">
            <h4 className="flow__title">4 недели</h4>
            <p className="flow__text">Front-end</p>
          </li>
        </ul>
      </div>
    </section>
  )
})

// export default About
