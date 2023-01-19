import Image from 'next/future/image'
import { AspectRatio } from '@chakra-ui/react'

const CarouselItem = ({ src, alt }) => {
  return (
    <AspectRatio
      minW="100%"
      ratio={3 / 2}
      cursor="grab"
      overflow="hidden"
      _active={{
        cursor: 'grabbing'
      }}
    >
      <Image src={src} alt={alt} width={900} height={600} />
    </AspectRatio>
  )
}

export default CarouselItem
