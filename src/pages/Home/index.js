import React from 'react'
import { useParams } from 'react-router-dom'

import PageContainer from '../../components/PageContainer'
import MovieCard from '../../components/MovieCard'
import MovieList from '../../components/MovieList'

import { connect } from 'react-redux'
import { fetchMovies, nextPage } from '../../stores/movies/actions'

function Home({ movies, fetchMovies, page, nextPage }) {
  const { title } = useParams()

  const handleScroll = () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      nextPage()
    }
  }

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    fetchMovies(title)
  }, [page])

  return (
    <PageContainer>
      <MovieList>
        {movies?.map(movie => (
          <MovieCard movie={movie} />
        ))}
      </MovieList>
    </PageContainer>
  )
}

const mapStateToProps = state => ({
  movies: state.movies.movies,
  page: state.movies.page,
})

const mapDispatchToProps = dispatch => ({
  fetchMovies: params => dispatch(fetchMovies(params)),
  nextPage: () => dispatch(nextPage()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
