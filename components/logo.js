import Link from 'next/link'
import Image from 'next/image'
import { Text, useColorModeValue } from '@chakra-ui/react'
import styled from '@emotion/styled'

const LogoBox = styled.span`
  font-weight: bold;
  font-size: 18px;
  display: inline-flex;
  align-items: center;
  line-height: 20px;
  padding: 10px;

  img {
    transition: 700ms ease;
  }

  &:hover img {
    transform: rotate(180deg);
  }
`

const Logo = () => {
  const logoImage = `/images/logo${useColorModeValue('', '-dark')}.png`

  return (
    <Link href="/" passHref scroll={false}>
      <LogoBox>
        <Image src={logoImage} width={20} height={20} alt="logo" />
        <Text fontWeight="bold" fontFamily="Cinzel" ml={2}>
          Mariner
        </Text>
      </LogoBox>
    </Link>
  )
}

export default Logo
