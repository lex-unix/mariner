import { Container, Heading, Text, Box } from '@chakra-ui/react'
import Carousel from '../components/carousel'
import Layout from '../components/layouts/article'

const Page = () => {
  return (
    <Layout>
      <Container maxW="container.md" align="center" pt={8}>
        <Heading>Mariner</Heading>
        <Text fontFamily="Cinzel">Banjole / Istria / Croatia</Text>
        <Box py={5}>
          <Carousel />
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
