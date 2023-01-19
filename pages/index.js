import { Heading, Text, Box } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Carousel from '../components/carousel'

const Page = () => {
  return (
    <Layout>
      <Box pt={8} align="center">
        <Heading>Mariner</Heading>
        <Text fontFamily="Cinzel">Banjole / Istria / Croatia</Text>
        <Box py={5}>
          <Carousel />
        </Box>
        <Text>
          Explore, experience and enjoy Croatia with Mariner. We provide
          exclusive services for everyone.
        </Text>
        <Text mt="2">Discover yachts, catamarans, apartments and more.</Text>
      </Box>
    </Layout>
  )
}

export default Page
export { getServerSideProps } from '../components/chakra'
