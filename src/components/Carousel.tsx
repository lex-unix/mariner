import { useCallback, useEffect, useState, type ReactNode } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight } from 'lucide-react';

type DotButtonProps = {
  selected: boolean
  onClick: () => void
}

function DotButton({ selected, onClick }: DotButtonProps) {
  return (
    <button className={`w-8 h-1 relative p-0 mx-1 hover:opacity-100 rounded-xl overflow-hidden bg-white ${selected ? 'opacity-100' : 'opacity-60'}`} onClick={onClick} />
  )
}


export default function Carousel({ children }: { children: ReactNode }) {
  const [emblaRef, embla] = useEmblaCarousel({ loop: false }, [
    Autoplay({ delay: 2000, stopOnInteraction: true })
  ]);

  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla]);
  const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla]);
  const scrollTo = useCallback((index: number) => embla && embla.scrollTo(index), [embla]);

  const onSelect = useCallback(() => {
    if (!embla) return;
    setSelectedIndex(embla.selectedScrollSnap());
    setPrevBtnEnabled(embla.canScrollPrev());
    setNextBtnEnabled(embla.canScrollNext());
  }, [embla, setSelectedIndex]);

  useEffect(() => {
    if (!embla) return;
    onSelect();
    setScrollSnaps(embla.scrollSnapList());
    embla.on('select', onSelect);
  }, [embla, setScrollSnaps, onSelect]);

  return (
    <div ref={emblaRef} className="relative max-w-[900px] w-full h-auto overflow-hidden rounded-md will-change-transform">
      <div className="flex">
        {children}
      </div>

      {nextBtnEnabled && (
        <button aria-label="Next Button" className="absolute text-white opacity-60 top-1/2 right-2 -translate-y-1/2 hover:opacity-100 transition-opacity" onClick={scrollNext}>
          <ChevronRight size={24} />
        </button>
      )}

      {prevBtnEnabled && (
        <button aria-label="Previous Button" className="absolute text-white opacity-60 top-1/2 left-2 -translate-y-1/2 hover:opacity-100 transition-opacity" onClick={scrollPrev}>
          <ChevronLeft size={24} />
        </button>
      )}

      <div className="flex absolute pointer-events-auto bottom-0 h-10 inset-x-0 justify-center items-center">
        {scrollSnaps.map((_, index) => (
          <DotButton key={index} selected={selectedIndex === index} onClick={() => scrollTo(index)} />
        ))}
      </div>
    </div>
  );
}
