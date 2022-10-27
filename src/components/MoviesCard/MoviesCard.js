import './MoviesCard.css'
import saveIcon from '../../images/icon_save.svg'
import savedIcon from '../../images/icon_saved.svg'
import { useState } from 'react'
import { likeMovie } from '../../utils/MainApi'

function MoviesCard({ movie, currentUser, setCurrentUser }) {
  const [liked, setLiked] = useState(false)

  const transformDuration = (duration) => {
    if (duration <= 60) {
      return `${duration}м`
    }

    const hours = Math.floor(duration / 60)
    const minutes = duration - hours * 60

    return `${hours}ч ${minutes}м`
  }

  const handleLike = () => {
    console.log(movie)
    const image = `https://api.nomoreparties.co/${movie.image.url}`
    const thumbnail = `https://api.nomoreparties.co/${movie.image.formats.thumbnail.url}`
    const movieId = movie.id
    const { country, director, duration, year, description, trailerLink, nameRU, nameEN } = movie

    likeMovie({
      country,
      director,
      duration,
      year,
      description,
      trailerLink,
      nameRU,
      nameEN,
      image,
      thumbnail,
      movieId,
    })
      .then((mov) => {
        console.log(mov)
        setCurrentUser({ ...currentUser, likedFilms: currentUser.likedFilms.push(mov) })
        setLiked(!liked)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    <li className="movies-card">
      <a href={movie.trailerLink} target="_blank" rel="noopener noreferrer" className="movies-card">
        <div className="movies-card__heading">
          <div className="movies-card__title">
            <h3 className="movies-card__name">{movie.nameRU}</h3>
            <p className="movies-card__time">{transformDuration(movie.duration)}</p>
          </div>
        </div>

        <img className="movies-card__img" src={`https://api.nomoreparties.co/${movie.image.url}`} alt={movie.nameRU} />
      </a>
      <button type="button" className="movies-card__like" onClick={handleLike}>
        <img src={liked ? savedIcon : saveIcon} alt="Сохранить" />
      </button>
    </li>
  )
}

export default MoviesCard
