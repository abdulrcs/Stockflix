import React from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { Box, Text, HStack, VStack, Square } from '@chakra-ui/layout'
import { Image } from '@chakra-ui/image'

import PageContainer from '../../components/PageContainer'

export default function MovieDetail() {
  const { id } = useParams()
  const [movie, setMovie] = React.useState({})

  React.useEffect(() => {
    axios.get(`https://www.omdbapi.com/?i=${id}&apikey=cadc1a65`).then(res => {
      setMovie(res.data)
    })
  }, [])

  return (
    <PageContainer>
      <HStack spacing={4} alignItems="flex-start" px={10} py={5}>
        <Image src={movie.Poster} alt={movie.Title} width={200} height={300} />

        <VStack spacing={1} alignItems="flex-start">
          <Text variant="display">
            {movie.Title} {movie.Year && `(${movie.Year})`}
          </Text>
          <Text variant="secondary">
            {movie.Released} &bull; {movie.Runtime}
          </Text>

          <HStack spacing={2} justifyContent="center">
            <Square borderRadius="8px" size="45px" bg="background2">
              <Text variant="display">{movie.imdbRating}</Text>
            </Square>
            <Text variant="secondary">Based on {movie.imdbVotes} votes.</Text>
          </HStack>
          <Text variant="primary">{movie.Genre}</Text>
          <Text variant="secondary">
            Director : {movie.Director}
            <br />
            Cast : {movie.Actors}
          </Text>
        </VStack>
      </HStack>

      <Box px={10}>
        <Text variant="display">Synopsis</Text>
        <Text variant="secondary" mt={2} fontSize="14px">
          {movie.Plot}
        </Text>
      </Box>
    </PageContainer>
  )
}
