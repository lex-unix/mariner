import Image from 'next/image'
import { motion } from 'framer-motion'
import {
  Box,
  Text,
  Heading,
  Link,
  Flex,
  Icon,
  Badge,
  SimpleGrid,
  chakra,
  useColorModeValue
} from '@chakra-ui/react'
import { PhoneIcon } from '@chakra-ui/icons'
import { BsPeopleFill } from 'react-icons/bs'

const TourImage = chakra(Image, {
  shouldForwardProp: prop => ['src', 'alt', 'width', 'height'].includes(prop)
})

export const TourItem = ({ title, tag, age, src }) => {
  return (
    <motion.div whileHover={{ scale: 1.02 }}>
      <Box
        p={3}
        my="auto"
        boxShadow={useColorModeValue('lg', 'dark-lg')}
        borderWidth={1}
        borderRadius="lg"
      >
        <TourImage borderRadius="sm" src={src} alt={title} />
        <Box my={3}>
          <Heading fontSize={19}>
            {title}
            <span> </span>
            <Badge fontFamily="body" colorScheme="blue">
              {tag}
            </Badge>
          </Heading>
        </Box>
        <Flex align="center">
          <Icon as={BsPeopleFill} mr={2} />
          <Text>{age}</Text>
        </Flex>
        <Flex align="center" as={Link} href="tel:380503112695">
          <Icon as={PhoneIcon} mr={2} />
          Call for more info
        </Flex>
      </Box>
    </motion.div>
  )
}
export const Grid = ({ children }) => {
  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6} mt={8}>
      {children}
    </SimpleGrid>
  )
}
