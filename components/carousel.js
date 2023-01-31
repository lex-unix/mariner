import { useState, useCallback, useEffect } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { PrevButton, NextButton, DotButton } from './carousel-buttons'
import { Box, Flex } from '@chakra-ui/react'
import CarouselItem from './carousel-item'

const Carousel = () => {
  const [emblaRef, embla] = useEmblaCarousel({ loop: false }, [
    Autoplay({ delay: 4000, stopOnInteraction: false })
  ])
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false)
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false)
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [scrollSnaps, setScrollSnaps] = useState([])

  const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla])
  const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla])
  const scrollTo = useCallback(index => embla && embla.scrollTo(index), [embla])

  const onSelect = useCallback(() => {
    if (!embla) return
    setSelectedIndex(embla.selectedScrollSnap())
    setPrevBtnEnabled(embla.canScrollPrev())
    setNextBtnEnabled(embla.canScrollNext())
  }, [embla, setSelectedIndex])

  useEffect(() => {
    if (!embla) return
    onSelect()
    setScrollSnaps(embla.scrollSnapList())
    embla.on('select', onSelect)
  }, [embla, setScrollSnaps, onSelect])

  return (
    <>
      <Box
        ref={emblaRef}
        pos="relative"
        width="100%"
        maxW={900}
        height="auto"
        overflow="hidden"
        borderRadius="md"
        willChange="transform"
      >
        <Box display="flex">
          <CarouselItem
            src="/images/home-1.jpg"
            alt="Catamaran on water, Croatia"
          />
          <CarouselItem
            src="/images/home-2.jpg"
            alt="View of Banjole, Croatia"
          />
          <CarouselItem
            src="/images/home-3.jpg"
            alt="View of Banjole, Croatia"
          />
          <CarouselItem
            src="/images/home-4.jpg"
            alt="View of Banjole, Croatia"
          />
        </Box>
        {selectedIndex > 0 && (
          <PrevButton enabled={prevBtnEnabled} onClick={scrollPrev} />
        )}
        {selectedIndex < scrollSnaps.length - 1 && (
          <NextButton enabled={nextBtnEnabled} onClick={scrollNext} />
        )}
        <Flex
          pos="absolute"
          pointerEvents="auto"
          bottom="0"
          height="40px"
          insetX="0"
          justify="center"
          alignItems="center"
        >
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              selected={selectedIndex === index}
              onClick={() => scrollTo(index)}
            />
          ))}
        </Flex>
      </Box>
    </>
  )
}

export default Carousel
