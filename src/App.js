import React from 'react'
import { ChakraProvider } from '@chakra-ui/react'

import theme from './styles/theme'

import AppRoute from './routes'

function App() {
  return (
    <ChakraProvider theme={theme} resetCSS>
      <AppRoute />
    </ChakraProvider>
  )
}

export default App
