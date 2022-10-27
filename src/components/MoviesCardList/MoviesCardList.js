import './MoviesCardList.css'
import MoviesCard from '../MoviesCard/MoviesCard'

function MoviesCardList({ list, errorText }) {
  console.log(list)
  return (
    <section className="movies-list">
      <section className="movies-list__wrapper">
        <ul className="movies-list__listing">
          {list.length > 0 ? (
            list.map((movie) => <MoviesCard movie={movie} key={movie.id} />)
          ) : (
            <h3 className="movies-list__empty">{errorText}</h3>
          )}
        </ul>
      </section>
    </section>
  )
}

export default MoviesCardList
