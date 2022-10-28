import './Techs.css'
import Title from '../Title/Title'
import Tab from '../UI/Tab/Tab'
import React, { forwardRef } from 'react'

export default forwardRef((_, ref) => {
  return (
    <section ref={ref} id="technologies" className="technologies">
      <div className="technologies__wrapper">
        <div className="technologies__container">
          <Title title="Технологии" />
          <div className="technologies__content">
            <h3 className="technologies__title">7 Технологий</h3>
            <p className="technologies__text">
              На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.
            </p>
            <ul className="technologies__list">
              <li>
                <Tab text="HTML" />
              </li>
              <li>
                <Tab text="CSS" />
              </li>
              <li>
                <Tab text="JS" />
              </li>
              <li>
                <Tab text="React" />
              </li>
              <li>
                <Tab text="Git" />
              </li>
              <li>
                <Tab text="Express.js" />
              </li>
              <li>
                <Tab text="mongoDB" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
})
