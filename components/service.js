import NextLink from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import {
  Box,
  LinkBox,
  LinkOverlay,
  Badge,
  SimpleGrid,
  Text,
  Heading,
  Flex,
  Link,
  Icon,
  useColorModeValue,
  chakra
} from '@chakra-ui/react'
import { FaMoneyBill } from 'react-icons/fa'
import { BiPhotoAlbum } from 'react-icons/bi'
import { BsPeopleFill } from 'react-icons/bs'

const ServiceImage = chakra(Image, {
  shouldForwardProp: prop => ['src', 'alt'].includes(prop)
})

export const ServiceItem = ({ title, tag, price, capacity, src, href }) => {
  return (
    <motion.div whileHover={{ scale: 1.1 }}>
      <LinkBox
        p={3}
        my="auto"
        boxShadow={useColorModeValue('lg', 'dark-lg')}
        borderWidth={1}
        borderRadius="lg"
      >
        <NextLink href={href} scroll={false} passHref>
          <LinkOverlay>
            <ServiceImage borderRadius="sm" src={src} alt={title} />
          </LinkOverlay>
        </NextLink>
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
          <Text>{capacity}</Text>
        </Flex>
        <Flex align="center">
          <Icon as={FaMoneyBill} mr={2} />
          <Text>{price}</Text>
        </Flex>
        <Flex align="center">
          <Icon as={BiPhotoAlbum} mr={2} />
          <NextLink href={href} passHref scroll={false}>
            <Link>View gallery</Link>
          </NextLink>
        </Flex>
      </LinkBox>
    </motion.div>
  )
}

export const Service = ({ children }) => {
  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6} mt={8}>
      {children}
    </SimpleGrid>
  )
}
