import Link from 'next/link'
import { Container, Button, Text, Heading, Divider } from '@chakra-ui/react'

const NotFound = () => {
  return (
    <Container align="center" mt={8}>
      <Heading>Not Found</Heading>
      <Text>The page you are looking for was not found</Text>
      <Divider my={6} />
      <Link href="/" passHref>
        <Button colorScheme="blue">Return home</Button>
      </Link>
    </Container>
  )
}

export default NotFound
