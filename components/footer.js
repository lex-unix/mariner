import { Box } from '@chakra-ui/react'

const Footer = () => {
  return (
    <Box align="center" fontSize="sm" pt={10} opacity={0.4}>
      &copy; {new Date().getFullYear()} Mariner Croatia. All Right Reserved.
    </Box>
  )
}

export default Footer
