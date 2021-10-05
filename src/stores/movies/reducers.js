import {
  FETCH_MOVIES_PENDING,
  FETCH_MOVIES_SUCCESS,
  FETCH_MOVIES_ERROR,
  NEXT_PAGE,
} from './actions'

const initialState = {
  pending: false,
  movies: [],
  error: null,
  page: 1,
  title: 'Avengers',
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_MOVIES_PENDING:
      return {
        ...state,
        pending: true,
      }
    case FETCH_MOVIES_SUCCESS:
      return {
        ...state,
        pending: false,
        movies: action.payload,
      }
    case FETCH_MOVIES_ERROR:
      return {
        ...state,
        pending: false,
        error: action.payload,
      }
    case NEXT_PAGE:
      return {
        ...state,
        page: state.page + 1,
      }
    default:
      return state
  }
}
