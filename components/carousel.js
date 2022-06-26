import Image from 'next/image'
import { useState, useCallback, useEffect } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import styled from '@emotion/styled'
import { PrevButton, NextButton, DotButton } from './carousel-buttons'

const Viewport = styled.div`
  position: relative;
  max-width: min(900px, 100%)
  heigh: auto;
  overflow: hidden;
`

const Container = styled.div`
  display: flex;
`

const Slide = styled.div`
  flex: 0 0 100%;
`

const Dots = styled.div`
  display: flex;
  list-style: none;
  justify-content: center;
  padding-top: 10px;
`

const Carousel = ({ media, alt }) => {
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
      <Viewport ref={emblaRef}>
        <Container>
          {media.map((m, i) => (
            <Slide key={i}>
              <Image src={m} alt={alt} />
            </Slide>
          ))}
        </Container>
        <PrevButton enabled={prevBtnEnabled} onClick={scrollPrev} />
        <NextButton enabled={nextBtnEnabled} onClick={scrollNext} />
      </Viewport>
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
