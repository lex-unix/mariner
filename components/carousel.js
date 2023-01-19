import { useState, useCallback, useEffect } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import styled from '@emotion/styled'
import { PrevButton, NextButton, DotButton } from './carousel-buttons'
import { Box } from '@chakra-ui/react'
import CarouselItem from './carousel-item'

const Dots = styled.div`
  display: flex;
  list-style: none;
  justify-content: center;
  padding-top: 10px;
`

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
        <PrevButton enabled={prevBtnEnabled} onClick={scrollPrev} />
        <NextButton enabled={nextBtnEnabled} onClick={scrollNext} />
      </Box>
      <Dots>
        {scrollSnaps.map((_, index) => (
          <DotButton
            key={index}
            selected={selectedIndex === index}
            onClick={() => scrollTo(index)}
          />
        ))}
      </Dots>
    </>
  )
}

export default Carousel
