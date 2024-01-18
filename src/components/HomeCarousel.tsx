import Carousel from "./Carousel";
import CarouselSlide from "./CarouselSlide";

export default function HomeCarousel() {
  return (
    <Carousel>
      <CarouselSlide imgSrc="/images/home-1.jpg" />
      <CarouselSlide imgSrc="/images/home-2.jpg" />
      <CarouselSlide imgSrc="/images/home-3.jpg" />
      <CarouselSlide imgSrc="/images/home-4.jpg" />
    </Carousel>
  )
}
