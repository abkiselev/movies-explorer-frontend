
import './MoviesCardList.css'
import MoviesCard from '../MoviesCard/MoviesCard'

function MoviesCardList({ list }) {
  return (
    <section className="movies-list">
      <div className="movies-list__wrapper">
        <ul className="movies-list__listing">
          

          {list.length > 0 
            ? list.map((el, i) => <MoviesCard key={i} />)
            : <h3 className="movies-list__empty">Ничего не найдено</h3>
          }
        
        </ul>

        
      </div>
    </section>
  )
}

export default MoviesCardList
