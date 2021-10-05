import React from 'react'
import { SimpleGrid, VStack } from '@chakra-ui/layout'

export default function MovieList({ children }) {
  return (
    <VStack py={8} w="100%">
      <SimpleGrid columns={{ sm: 2, md: 3, lg: 4, xl: 5 }} gap={5}>
        {children}
      </SimpleGrid>
    </VStack>
  )
}
