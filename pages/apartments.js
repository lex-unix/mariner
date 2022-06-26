import { Box, Heading } from '@chakra-ui/react'
import { Service, ServiceItem } from '../components/service'
import Layout from '../components/layouts/article'

import {
  apartOneMedia,
  apartTwoMedia,
  apartThreeMedia
} from '../lib/apartment-media'

const Apartment = () => {
  return (
    <Layout title="Apartments">
      <Box mt={8}>
        <Heading mb={2} textAlign="center">
          Enjoy Comfort
        </Heading>
        <Service>
          <ServiceItem
            title="La Casa"
            tag="Housing"
            capacity="4-5 people"
            price="90&euro; per night"
            href="/apartments/la-casa"
            src={apartOneMedia[0]}
          />
          <ServiceItem
            title="Metro Marina"
            tag="Housing"
            capacity="4-5 people"
            price="90&euro; per night"
            href="/apartments/metro-marina"
            src={apartTwoMedia[0]}
          />
          <ServiceItem
            title="La Grande Maison"
            tag="Housing"
            capacity="5-6 people"
            price="100&euro; per night"
            href="/apartments/la-grande-maison"
            src={apartThreeMedia[0]}
          />
        </Service>
      </Box>
    </Layout>
  )
}

export default Apartment
export { getServerSideProps } from '../components/chakra'
