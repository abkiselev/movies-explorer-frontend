import './Movies.css'
import { useEffect, useState } from 'react'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import MoviesCardList from '../MoviesCardList/MoviesCardList'
import Preloader from '../Preloader/Preloader'
import SearchForm from '../SearchForm/SearchForm'
import ButtonOutlined from '../UI/ButtonOutlined/ButtonOutlined'

function Movies() {
  const [list, setList] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(()=> {
    setList(Array(12).fill())
    setTimeout(() => setLoading(true), 1000)
  }, [])

  return (
    <section className="movies">
      <Header />
      <SearchForm />
      {loading
        ? <>
          <MoviesCardList list={list} />
          {list.length > 0 && 
            <div className="movies__button">
              <ButtonOutlined text='Еще' />
            </div>
          }
          
          </>
        : <Preloader />
      }

      
      <Footer />
    </section>
  )
}

export default Movies
