import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import SearchMovies from '../SearchMovies'

test('Rendered search movies', () => {
  render(<SearchMovies />)
})
