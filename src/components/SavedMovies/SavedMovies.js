import './SavedMovies.css'
import { useEffect, useState } from 'react'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import MoviesCardList from '../MoviesCardList/MoviesCardList'
import Preloader from '../Preloader/Preloader'
import SearchForm from '../SearchForm/SearchForm'

function SavedMovies() {
  const [list, setList] = useState([])
  const [loaded, setLoaded] = useState(false)

  useEffect(()=> {
    setList(Array(3).fill())
    setTimeout(() => setLoaded(true), 1000)
  }, [])

  return (
    <section className="movies">
      <Header />
      <SearchForm />
      {loaded
        ? <MoviesCardList list={list} />
        : <Preloader />
      }
      <Footer />
    </section>
  )
}

export default SavedMovies
