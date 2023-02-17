import Image from 'next/image'
import Link from 'next/link'
import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  chakra
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'

const GalleryImage = chakra(Image, {
  shouldForwardProp: prop => ['loading', 'src', 'alt'].includes(prop)
})

export const Bread = ({ title, isMarina }) => {
  const href = isMarina ? '/marina' : '/apartments'
  const category = isMarina ? 'Marina' : 'Apartments'
  return (
    <Breadcrumb my={4} separator={<ChevronRightIcon />}>
      <BreadcrumbItem>
        <Link href={href}>
          <BreadcrumbLink>{category}</BreadcrumbLink>
        </Link>
      </BreadcrumbItem>

      <BreadcrumbItem>
        <BreadcrumbLink isCurrentPage>{title}</BreadcrumbLink>
      </BreadcrumbItem>
    </Breadcrumb>
  )
}

export const Gallery = ({ media }) => {
  return (
    <Box align="center">
      {media.map((m, i) => (
        <Box key={i} mb={4}>
          <GalleryImage borderRadius="md" src={m} />
        </Box>
      ))}
    </Box>
  )
}
