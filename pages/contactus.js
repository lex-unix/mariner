import Link from 'next/link'
import {
  Box,
  Heading,
  Button,
  Text,
  Stack,
  Container,
  useColorModeValue
} from '@chakra-ui/react'
import { FaInstagram, FaFacebook } from 'react-icons/fa'
import ContactForm from '../components/form'
import Layout from '../components/layouts/article'

const ContactUs = () => {
  return (
    <Layout>
      <Box mt={8} align="center">
        <Heading>Contact Us</Heading>
        <Container align="center" maxW="container.sm">
          <Box
            mt={8}
            borderWidth={2}
            p={5}
            borderRadius="xl"
            boxShadow={useColorModeValue('lg', 'dark-lg')}
          >
            <ContactForm />
          </Box>
          <Box mt={10}>
            <Text fontWeight="bold" fontSize={20}>
              Find us on social media!
            </Text>
            <Stack mt={4} direction="row" justify="center" spacing={4}>
              <Link href="https://www.instagram.com/_m_a_r_i_n_e_r_/" passHref>
                <a target="_blank">
                  <Button
                    colorScheme="pink"
                    variant="solid"
                    leftIcon={<FaInstagram />}
                  >
                    Instagram
                  </Button>
                </a>
              </Link>
              <Link href="https://www.facebook.com/MarinerCroatia/" passHref>
                <a target="_blank">
                  <Button
                    colorScheme="facebook"
                    variant="solid"
                    leftIcon={<FaFacebook />}
                  >
                    Facebook
                  </Button>
                </a>
              </Link>
            </Stack>
          </Box>
        </Container>
      </Box>
    </Layout>
  )
}

export default ContactUs
export { getServerSideProps } from '../components/chakra'
