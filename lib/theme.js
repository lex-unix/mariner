import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

const styles = {
  global: props => ({
    body: {
      bg: mode('#E9F7FA', '#0a131d')(props)
    }
  })
}

const colors = {
  marineLight: '#DBEDF1',
  marineDark: '#12283b',
  seaBreeze: '#00C1C9'
}

const components = {
  Heading: {
    variants: {
      'trip-day': {
        textDecoration: 'underline',
        fontSize: 20,
        textUnderlineOffset: 6,
        textDecorationColor: '#525252',
        textDecorationThickness: 3,
        marginBottom: 4,
        marginTop: 8
      }
    }
  }
}

const fonts = {
  heading: 'Cinzel'
}

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: true
}

const theme = extendTheme({
  styles,
  fonts,
  components,
  colors,
  config
})

export default theme
