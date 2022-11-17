import './MoviesCard.css'
import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { transformDuration } from '../../utils/transformDuration'
import saveIcon from '../../images/icon_save.svg'
import savedIcon from '../../images/icon_saved.svg'
import removeIcon from '../../images/icon_remove.svg'

function MoviesCard({ movie, currentUser, handleDislike, handleLike }) {
  const [liked, setLiked] = useState(currentUser.likedFilms.some((film) => film.movieId === movie.id))
  const { pathname } = useLocation()

  useEffect(() => {
    currentUser.likedFilms.some((film) => film.movieId === movie.id) ? setLiked(true) : setLiked(false)
  }, [currentUser.likedFilms])

  return (
    <li className="movies-card">
      <a href={movie.trailerLink} target="_blank" rel="noopener noreferrer" className="movies-card">
        <div className="movies-card__heading">
          <div className="movies-card__title">
            <h3 className="movies-card__name">{movie.nameRU}</h3>
            <p className="movies-card__time">{transformDuration(movie.duration)}</p>
          </div>
        </div>

        <img
          className="movies-card__img"
          src={movie.image.url ? `https://api.nomoreparties.co/${movie.image.url}` : movie.image}
          alt={movie.nameRU}
        />
      </a>

      {pathname === '/movies' && (
        <button
          type="button"
          className="movies-card__like"
          onClick={liked ? () => handleDislike(movie.id) : () => handleLike(movie)}
        >
          <img src={liked ? savedIcon : saveIcon} alt="Сохранить" />
        </button>
      )}

      {pathname === '/saved-movies' && (
        <button type="button" className="movies-card__like" onClick={() => handleDislike(movie._id)}>
          <img src={removeIcon} alt="Удалить" />
        </button>
      )}
    </li>
  )
}

export default MoviesCard
