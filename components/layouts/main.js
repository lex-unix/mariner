import Head from 'next/head'
import { Box, Container } from '@chakra-ui/react'
import Navbar from '../navbar'
import Footer from '../footer'

const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <title>Mariner</title>
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <meta name="description" content="Yachting, apartments, and more" />
        <meta name="author" content="lexunix" />
        <meta
          property="og:url"
          content={`https://marinercroatia.net${router.asPath}`}
        />
        <meta
          property="og:image"
          content="https://marinercroatia.net/mariner-og.png"
        />
        <meta property="og:title" content="Mariner" />
        <meta property="og:site_name" content="marinercroatia.net" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Mariner" />
        <meta
          name="twitter:description"
          content="Yachting, apartments, and more"
        />
        <meta
          name="twitter:image"
          content="https://marinercroatia.net/mariner-og.png"
        />
        <link
          rel="canonical"
          href={`https://marinercroatia.net${router.asPath}`}
        />
      </Head>
      <Navbar path={router.asPath} />
      <Container maxW="container.md" pt={14}>
        {children}
      </Container>
      <Footer />
    </Box>
  )
}

export default Main
