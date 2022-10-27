import './Movies.css'
import { useEffect, useState, useContext } from 'react'
import { UserContext } from '../../contexts/UserContext'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import MoviesCardList from '../MoviesCardList/MoviesCardList'
import Preloader from '../Preloader/Preloader'
import SearchForm from '../SearchForm/SearchForm'
import ButtonOutlined from '../UI/ButtonOutlined/ButtonOutlined'

function Movies({ setLockScroll, setIsTooltipVisible, setTooltipMessage, setCurrentUser }) {
  const currentUser = useContext(UserContext)
  const [list, setList] = useState(currentUser.films)
  const [loading, setLoading] = useState(false)
  const [errorText, setErrorText] = useState(
    currentUser.films.length === 0 && currentUser.searchValue ? 'Ничего не найдено' : ''
  )

  return (
    <section className="movies">
      <Header setLockScroll={setLockScroll} />
      <main>
        <SearchForm
          setList={setList}
          setLoading={setLoading}
          setErrorText={setErrorText}
          setIsTooltipVisible={setIsTooltipVisible}
          setTooltipMessage={setTooltipMessage}
          currentUser={currentUser}
          setCurrentUser={setCurrentUser}
        />

        {!loading ? (
          <>
            <MoviesCardList
              list={list}
              errorText={errorText}
              currentUser={currentUser}
              setCurrentUser={setCurrentUser}
            />
            {list.length > 3 && (
              <section className="movies__button">
                <ButtonOutlined text="Еще" />
              </section>
            )}
          </>
        ) : (
          <Preloader />
        )}
      </main>
      <Footer />
    </section>
  )
}

export default Movies
