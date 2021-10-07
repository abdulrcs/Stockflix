import React from 'react'
import axios from 'axios'
import { Input, InputGroup, InputLeftElement } from '@chakra-ui/input'
import { Box, Text } from '@chakra-ui/layout'
import { FaSearch } from 'react-icons/fa'
import onClickOutside from 'react-onclickoutside'
import { useHistory } from 'react-router-dom'

function SearchMovie() {
  const [value, setValue] = React.useState('')
  const [movies, setMovies] = React.useState([])
  const [showAutoComplete, setShowAutoComplete] = React.useState(true)

  const history = useHistory()

  SearchMovie.handleClickOutside = () => {
    setShowAutoComplete(false)
  }

  React.useEffect(() => {
    axios
      .get(`https://www.omdbapi.com/?i=tt3896198&apikey=cadc1a65&s=${value}`)
      .then(res => {
        setMovies(res.data.Search)
      })
  }, [value])

  const handleKeyDown = e => {
    if (e.key === 'Enter') {
      history.push(`/search/${value}`)
      window.location.reload()
    }
  }

  return (
    <Box position="relative" width="30%" minW="200px">
      <InputGroup>
        <InputLeftElement children={<FaSearch color="gray" />} />
        <Input
          border="none"
          bg="background2"
          placeholder="Search"
          _placeholder={{ color: 'gray' }}
          color="white"
          value={value}
          onChange={e => setValue(e.target.value)}
          onClick={() => setShowAutoComplete(true)}
          onKeyDown={handleKeyDown}
        />
      </InputGroup>
      <Box
        display={showAutoComplete ? 'block' : 'none'}
        mt="-5px"
        bg="background2"
        width="100%"
        position="absolute"
        zIndex={100}
      >
        {movies?.map(({ Title, imdbID }) => (
          <Text
            tabIndex="0"
            p={1}
            color="white"
            cursor="pointer"
            _focus={{ bg: 'primary', color: 'white' }}
            _hover={{ bg: 'primary', color: 'white' }}
            onKeyDown={e => {
              if (e.key === 'Enter') {
                history.push(`/detail/${imdbID}`)
                window.location.reload()
              }
            }}
          >
            {Title}
          </Text>
        ))}
      </Box>
    </Box>
  )
}

const clickOutsideConfig = {
  handleClickOutside: () => SearchMovie.handleClickOutside,
}

export default onClickOutside(SearchMovie, clickOutsideConfig)
