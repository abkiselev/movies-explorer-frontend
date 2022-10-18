import LinkTab from '../UI/LinkTab/LinkTab'
import './Heading.css'

function Heading() {
  return (
    <section className="heading">

      <div className="heading__wrapper">
        <h1 className="heading__title">Учебный проект студента факультета Веб-разработки</h1>
        <ul className="heading__tabs">
          <li className="heading__tab">
            <LinkTab to="#about" size='small' text="О проекте"  />
          </li>
          <li className="heading__tab">
            <LinkTab to="#technologies" size='small' text="Технологии"  />
          </li>
          <li className="heading__tab">
            <LinkTab to="#student" size='small' text="Студент"  />
          </li>
        </ul>
      </div>
      
    </section>
  )
}

export default Heading
