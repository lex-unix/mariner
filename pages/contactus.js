import {
  Box,
  Heading,
  Button,
  Text,
  Stack,
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
        <Box align="center">
          <Box
            mt={8}
            borderWidth="thin"
            p={5}
            borderRadius="xl"
            boxShadow={useColorModeValue('xl', 'dark-lg')}
            maxW="lg"
          >
            <ContactForm />
          </Box>
          <Box mt={10}>
            <Text fontWeight="bold" fontSize={20}>
              Find us on social media!
            </Text>
            <Stack mt={4} direction="row" justify="center" spacing={4}>
              <a
                href="https://www.instagram.com/_m_a_r_i_n_e_r_/"
                target="_blank"
                rel="noreferrer noopener"
              >
                <Button
                  colorScheme="pink"
                  variant="solid"
                  leftIcon={<FaInstagram />}
                >
                  Instagram
                </Button>
              </a>
              <a
                href="https://www.facebook.com/MarinerCroatia/"
                target="_blank"
                rel="noreferrer noopener"
              >
                <Button
                  colorScheme="facebook"
                  variant="solid"
                  leftIcon={<FaFacebook />}
                >
                  Facebook
                </Button>
              </a>
            </Stack>
          </Box>
        </Box>
      </Box>
    </Layout>
  )
}

export default ContactUs
export { getServerSideProps } from '../components/chakra'
