import { theme as chakraTheme } from '@chakra-ui/react'
import { extendTheme } from '@chakra-ui/react'

const colors = {
  background: '#0f0f0f',
  background2: '#282828',
  primary: '#e50914',
}

const fonts = {
  ...chakraTheme.fonts,
  body: `Quicksand,-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"`,
  heading: `Quicksand,-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"`,
}

const Link = {
  baseStyle: {
    color: 'white',
    fontWeight: 'medium',
    fontSize: 'sm',
    _hover: { color: '#e50914', textDecoration: 'none' },
  },
}

const Text = {
  variants: {
    link: {
      color: 'white',
      fontWeight: 'medium',
      fontSize: 'sm',
      _hover: { color: '#e50914', textDecoration: 'none' },
    },
    display: {
      fontSize: '2xl',
      fontWeight: 'medium',
    },
    primary: {
      color: '#fff',
      fontSize: 'sm',
      fontWeight: 'medium',
    },
    secondary: {
      color: '#7f7e7e',
      fontSize: 'xs',
      fontWeight: 'medium',
    },
  },
}

const overrides = {
  ...chakraTheme,
  components: {
    Link,
    Text,
  },
  colors,
  fonts,
  fontWeights: {
    normal: 300,
    medium: 600,
    bold: 700,
  },
}

const customTheme = extendTheme(overrides)

export default customTheme
