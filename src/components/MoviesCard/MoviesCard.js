import './MoviesCard.css'
import saveIcon from '../../images/icon_save.svg'
import savedIcon from '../../images/icon_saved.svg'
import filmPic from '../../images/film_pic.png'
import { useState } from 'react'

function MoviesCard() {
  const [liked, setLiked] = useState(false)

  return (
    <li className="movies-card">
      <div className="movies-card__heading">
        <div className="movies-card__title">
          <h3 className="movies-card__name">33 слова о дизайне</h3>
          <p className="movies-card__time">1ч 47м</p>
        </div>
        <img className="movies-card__like" src={liked ? savedIcon : saveIcon} alt="Сохранить" onClick={() => setLiked(!liked)} />
      </div>
      
        <img className="movies-card__img" src={filmPic} alt="Фильм" />
    </li>
  )
}

export default MoviesCard
