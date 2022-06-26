import { Box, Heading } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import { Grid, TourItem } from '../components/tour-items'

import tourOne from '../public/images/tour-1.png'
import tourTwo from '../public/images/tour-2.png'
import tourThree from '../public/images/tour-3.png'

const Tours = () => {
  return (
    <Layout title="Tours">
      <Box pt={8}>
        <Heading mb={4} textAlign="center">
          Experience Croatia
        </Heading>
        <Grid>
          <TourItem
            title="Kids Tour"
            age="10-16 years"
            tag="tour"
            src={tourOne}
          />
          <TourItem
            title="Youth Tour"
            age="18-27 years"
            tag="tour"
            src={tourTwo}
          />
          <TourItem
            title="Yoga Tour"
            age="Everyone"
            tag="tour"
            src={tourThree}
          />
        </Grid>
      </Box>
    </Layout>
  )
}

export default Tours
export { getServerSideProps } from '../components/chakra'
