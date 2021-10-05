import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router'

import MovieCard from '../MovieCard'
import MovieList from '../MovieList'

test('Rendered Movie List', () => {
  render(
    <MemoryRouter initialEntries={['/']}>
      <MovieList>
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
        <MovieCard
          movie={{
            Title: 'Avengers: Endgame',
            Year: '2019',
            imdbID: 'tt4154796',
            Type: 'movie',
            Poster:
              'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg',
          }}
        />
      </MovieList>
    </MemoryRouter>
  )
  expect(screen.getByText('The Avengers (2012)')).toBeInTheDocument()
  expect(screen.getByText('Avengers: Endgame (2019)')).toBeInTheDocument()
})
