import axios from 'axios'

export const FETCH_MOVIES_PENDING = 'FETCH_MOVIES'
export const FETCH_MOVIES_SUCCESS = 'FETCH_MOVIES_SUCCESS'
export const FETCH_MOVIES_ERROR = 'FETCH_MOVIES_ERROR'
export const NEXT_PAGE = 'NEXT_PAGE'

function fetchMoviesPending() {
  return {
    type: FETCH_MOVIES_PENDING,
  }
}

function fetchMoviesSuccess(movies) {
  return {
    type: FETCH_MOVIES_SUCCESS,
    payload: movies,
  }
}

function fetchMoviesError(error) {
  return {
    type: FETCH_MOVIES_ERROR,
    payload: error,
  }
}

export function nextPage() {
  return {
    type: NEXT_PAGE,
  }
}

export function fetchMovies(title) {
  return (dispatch, getState) => {
    const { movies } = getState()
    dispatch(fetchMoviesPending())
    return axios
      .get(
        `https://www.omdbapi.com/?i=tt0848228&apikey=cadc1a65&s=${
          title || 'Avengers'
        }&page=${movies.page}`
      )
      .then(res =>
        dispatch(fetchMoviesSuccess([...movies.movies, ...res.data.Search]))
      )
      .catch(error => dispatch(fetchMoviesError(error)))
  }
}
