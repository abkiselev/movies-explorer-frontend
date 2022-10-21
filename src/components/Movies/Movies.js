import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import SearchForm from '../SearchForm/SearchForm'
import './Movies.css'

function Movies() {
  return (
    <section className="movies">
      <Header />
      <SearchForm />
      <Footer />
    </section>
  )
}

export default Movies
