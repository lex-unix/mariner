import { Container, Heading, Text, Box } from '@chakra-ui/react'
import Carousel from '../components/carousel'
import { media } from '../lib/home-media'
import Layout from '../components/layouts/article'

const Page = () => {
  return (
    <Layout>
      <Container maxW="container.md" align="center" pt={8}>
        <Heading>Mariner</Heading>
        <Text fontFamily="Cinzel">Banjole / Istra / Croatia</Text>
        <Box py={5}>
          <Carousel media={media} alt="Home page images" />
        </Box>
        <Text>
          Explore, experience and enjoy Croatia with Mariner. We provide
          exclusive services for everyone. <br /> Discover yachts, catamarans,
          apartments and more.
        </Text>
      </Container>
    </Layout>
  )
}

export default Page
export { getServerSideProps } from '../components/chakra'
