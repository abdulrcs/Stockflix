import React from 'react'
import { Image } from '@chakra-ui/image'
import { Box, Text, Link } from '@chakra-ui/layout'
import { Link as RouterLink } from 'react-router-dom'
import { useDisclosure } from '@chakra-ui/hooks'

import PosterModal from './PosterModal'

export default function MovieCard({ movie }) {
  const { Title, Poster, Year, Type } = movie
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
      <PosterModal poster={movie.Poster} isOpen={isOpen} onClose={onClose} />

      <Box width="200px" position="relative">
        <Image
          onClick={onOpen}
          src={Poster}
          width={200}
          height={300}
          objectFit="cover"
          cursor="sw-resize"
        />
        <RouterLink to={`/detail/${movie.imdbID}`}>
          <Text variant="link" mt={2} w="90%" isTruncated>
            {Title} ({Year})
          </Text>
        </RouterLink>
        <Text variant="secondary">{Year}</Text>
        <Box
          px={2}
          bg="primary"
          borderRadius="5px"
          position="absolute"
          top="1"
          left="1"
        >
          <Text variant="primary" fontSize="xs">
            {Type?.toUpperCase()}
          </Text>
        </Box>
      </Box>
    </>
  )
}
