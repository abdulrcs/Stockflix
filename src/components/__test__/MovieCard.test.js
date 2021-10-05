import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router'
import MovieCard from '../MovieCard'

test('Render Movie Card', () => {
  render(
    <MemoryRouter initialEntries={['/']}>
      <MovieCard
        movie={{
          Title: 'The Avengers',
          Year: '2012',
          imdbID: 'tt0848228',
          Type: 'movie',
          Poster:
            'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
        }}
      />
    </MemoryRouter>
  )
  expect(screen.getByText('The Avengers (2012)')).toBeInTheDocument()
})
