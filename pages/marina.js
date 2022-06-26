import Link from 'next/link'
import { Box, Heading, Button } from '@chakra-ui/react'
import { Service, ServiceItem } from '../components/service'
import Layout from '../components/layouts/article'
import { yachtMedia, catOneMedia, catTwoMedia } from '../lib/marine-media'

const Marine = () => {
  return (
    <Layout title="Marina">
      <Box mt={8}>
        <Heading mb={2} textAlign="center">
          Explore Marine
        </Heading>
        <Service>
          <ServiceItem
            title="Defour 430 Grand Large"
            tag="Yacht"
            capacity="4-5 people"
            price="Contact for price information"
            href="/marina/dufour-430"
            src={yachtMedia[0]}
          />
          <ServiceItem
            title="Lipari 41"
            tag="Catamaran"
            capacity="4-5 people"
            price="Contact for price information"
            href="/marina/lipari-41"
            src={catTwoMedia[1]}
          />
          <ServiceItem
            title="Lagoon 57"
            tag="Catamaran"
            capacity="8-10 people"
            price="Contact for price information"
            href="/marina/lagoon-57"
            src={catOneMedia[0]}
          />
        </Service>
        <Box align="center" mt={8}>
          <Link href="marina/itinerary" passHref scroll={false}>
            <Button colorScheme="blue">View Itinerary</Button>
          </Link>
        </Box>
      </Box>
    </Layout>
  )
}

export default Marine
export { getServerSideProps } from '../components/chakra'
