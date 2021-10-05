import React from 'react'
import { Box } from '@chakra-ui/layout'

import Navbar from './Navbar'

export default function PageContainer({ children }) {
  return (
    <Box maxW="100vw" minH="100vh" bg="background" color="white">
      <Navbar />
      {children}
    </Box>
  )
}
