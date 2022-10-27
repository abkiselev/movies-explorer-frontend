import './MoviesCardList.css'
import MoviesCard from '../MoviesCard/MoviesCard'

function MoviesCardList({ list, errorText, currentUser, setCurrentUser, handleDislike, handleLike }) {
  return (
    <section className='movies-list'>
      <section className='movies-list__wrapper'>
        <ul className='movies-list__listing'>
          {list.length > 0 ? (
            list.map((movie) => (
              <MoviesCard
                movie={movie}
                key={movie.nameRU}
                currentUser={currentUser}
                setCurrentUser={setCurrentUser}
                handleLike={handleLike}
                handleDislike={handleDislike}
              />
            ))
          ) : (
            <h3 className='movies-list__empty'>{errorText}</h3>
          )}
        </ul>
      </section>
    </section>
  )
}

export default MoviesCardList
