import './Movies.css'
import { useEffect, useState } from 'react'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import MoviesCardList from '../MoviesCardList/MoviesCardList'
import Preloader from '../Preloader/Preloader'
import SearchForm from '../SearchForm/SearchForm'
import ButtonOutlined from '../UI/ButtonOutlined/ButtonOutlined'

function Movies({ setLockScroll }) {
  const [list, setList] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setList(Array(12).fill())
    setTimeout(() => setLoading(true), 1000)
  }, [])

  return (
    <section className='movies'>
      <Header setLockScroll={setLockScroll} />
      <main>
        <SearchForm />
        {loading ? (
          <>
            <MoviesCardList list={list} />
            {list.length > 0 && (
              <section className='movies__button'>
                <ButtonOutlined text='Еще' />
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
