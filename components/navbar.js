import Logo from './logo'
import NextLink from 'next/link'
import {
  Box,
  Container,
  Flex,
  Stack,
  Menu,
  MenuItem,
  MenuList,
  MenuButton,
  IconButton,
  Heading,
  Link,
  useColorModeValue
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import ThemeToggleButton from './theme-toggle-button'

const LinkItem = ({ href, path, children }) => {
  const active = href === path
  const activeColor = useColorModeValue('marineLight', 'marineDark')

  return (
    <NextLink href={href} scroll={false} passHref>
      <Link p={2} bg={active ? activeColor : undefined}>
        {children}
      </Link>
    </NextLink>
  )
}

const Navbar = props => {
  const { path } = props

  return (
    <Box
      position="fixed"
      as="nav"
      bg={useColorModeValue('#ffffff40', '#02040520')}
      css={{ backdropFilter: 'blur(10px)' }}
      w="100%"
      zIndex={2}
      {...props}
    >
      <Container
        p={2}
        display="flex"
        maxW="container.md"
        wrap="wrap"
        align="center"
        justify="space-between"
      >
        <Flex align="center" mr={5}>
          <Heading as="h1" size="lg" letterSpacing="tighter">
            <Logo />
          </Heading>
        </Flex>
        <Stack
          direction={{ base: 'none', md: 'row' }}
          display={{ base: 'none', md: 'flex' }}
          width={{ base: 'full', md: 'auto' }}
          alignItems="center"
          flexGrow={1}
          mt={{ base: 4, md: 0 }}
        >
          <LinkItem href="/marina" path={path}>
            Marina
          </LinkItem>
          <LinkItem href="/apartments" path={path}>
            Apartments
          </LinkItem>
          <LinkItem href="/tour" path={path}>
            Tour
          </LinkItem>
          <LinkItem href="/contactus" path={path}>
            Contact Us
          </LinkItem>
        </Stack>
        <Box flex={1} align="right">
          <ThemeToggleButton />
          <Box ml={2} display={{ base: 'inline-block', md: 'none' }}>
            <Menu isLazy id="navbr-menu">
              <MenuButton
                as={IconButton}
                icon={<HamburgerIcon />}
                variant="outline"
                aria-label="Options"
              />
              <MenuList>
                <NextLink scroll={false} href="/" passHref>
                  <MenuItem scroll={false} as={Link}>
                    Home
                  </MenuItem>
                </NextLink>
                <NextLink scroll={false} href="/marina" passHref>
                  <MenuItem scroll={false} as={Link}>
                    Marina
                  </MenuItem>
                </NextLink>
                <NextLink scroll={false} href="/apartments" passHref>
                  <MenuItem scroll={false} as={Link}>
                    Apartments
                  </MenuItem>
                </NextLink>
                <NextLink scroll={false} href="/tour" passHref>
                  <MenuItem scroll={false} as={Link}>
                    Tour
                  </MenuItem>
                </NextLink>
                <NextLink scroll={false} href="/contactus" passHref>
                  <MenuItem as={Link}>Contact Us</MenuItem>
                </NextLink>
              </MenuList>
            </Menu>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default Navbar
