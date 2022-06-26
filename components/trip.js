import { Text, Box, Image } from '@chakra-ui/react'

export const Paragraph = ({ children }) => {
  return (
    <Box>
      <Text>{children}</Text>
    </Box>
  )
}

export const Section = ({ children }) => {
  return (
    <Box display={{ base: 'inline-block', md: 'flex' }} mb={12}>
      {children}
    </Box>
  )
}

export const SectionImage = ({ id, alt }) => {
  return (
    <Image
      ml={{ base: 0, md: 4 }}
      mt={{ base: 4, md: 0 }}
      borderRadius="lg"
      src={`/images/itinerary/day-${id}.jpg`}
      alt={alt}
      width={{ base: 'full', md: 300 }}
      height={{ base: 'auto', md: 190 }}
    />
  )
}
