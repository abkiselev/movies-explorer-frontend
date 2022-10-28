import './MoviesCardList.css'
import { useEffect, useState } from 'react'
import MoviesCard from '../MoviesCard/MoviesCard'
import ButtonOutlined from '../UI/ButtonOutlined/ButtonOutlined'

function MoviesCardList({ list, errorText, currentUser, setCurrentUser, handleDislike, handleLike }) {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)
  const [cardsSetup, setCardsSetup] = useState({ cards: 0, toAdd: 0 })

  const detectSize = () => {
    setTimeout(() => {
      setWindowWidth(window.innerWidth)
    }, 1000)
  }

  const setCards = () => {
    if (windowWidth > 320 && windowWidth < 480) {
      setCardsSetup({ cards: 5, toAdd: 1 })
    } else if (windowWidth > 480 && windowWidth < 925) {
      setCardsSetup({ cards: 8, toAdd: 2 })
    } else {
      setCardsSetup({ cards: 12, toAdd: 3 })
    }
  }

  const onAdd = () => {
    setCardsSetup({ ...cardsSetup, cards: cardsSetup.cards + cardsSetup.toAdd })
  }

  useEffect(() => {
    window.addEventListener('resize', detectSize)
    setCards()
    return () => {
      window.removeEventListener('resize', detectSize)
    }
  }, [windowWidth])

  return (
    <section className="movies-list">
      <section className="movies-list__wrapper">
        <ul className="movies-list__listing">
          {list.length > 0 ? (
            list
              .slice(0, cardsSetup.cards)
              .map((movie) => (
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
            <h3 className="movies-list__empty">{errorText}</h3>
          )}
        </ul>
        {list.length > 3 && list.length >= cardsSetup.cards && (
          <section className="movies-list__button">
            <ButtonOutlined onClick={onAdd} text="Еще" />
          </section>
        )}
      </section>
    </section>
  )
}

export default MoviesCardList
