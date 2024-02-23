import { useCallback, useEffect, useRef, useState } from "react";
import { Pack } from "./components/Pack";
import { PacksContainer } from "./styles";
import { packsData } from "../../constants/packsData";
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'

import { EmblaCarouselType } from 'embla-carousel'
import { CaretDoubleLeft, CaretDoubleRight } from "@phosphor-icons/react";


export function Packs() {
  // Embla Carousel
  const carouselRef = useRef(null)

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { containScroll: false },
    [Autoplay({
      stopOnInteraction: true,
      delay: 5000,
    })]
  )

  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(true);

  const scrollPrev = useCallback(() => {    
    if (emblaApi) emblaApi.scrollPrev()  
  }, [emblaApi])

  const scrollNext = useCallback(() => {    
    if (emblaApi) emblaApi.scrollNext()  
  }, [emblaApi])

  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {    
    setCanScrollPrev(emblaApi.canScrollPrev())
    setCanScrollNext(emblaApi.canScrollNext())
  }, [])

  useEffect(() => {    
    if (emblaApi) {
      emblaApi.on('select', onSelect)  
    } 
  }, [emblaApi, onSelect])

  return (
    <PacksContainer>
      <div className="embla">
        <div className="embla__viewport" ref={emblaRef}>
          <div className="embla__container">
            {
              packsData.map((pack, index) => (
                <div className="embla__slide" key={index} ref={carouselRef}>
                  <Pack data={pack} />
                </div>
              ))
            }
          </div>
        </div>
        {
          canScrollPrev && (
            <div className="carousel-btn left-btn">
              <CaretDoubleLeft 
                size={36} 
                weight="bold" 
                onClick={scrollPrev} 
              />
            </div>
          )
        }
        {
          canScrollNext && (
            <div className="carousel-btn right-btn">
              <CaretDoubleRight 
                size={36} 
                weight="bold" 
                onClick={scrollNext} 
              />
            </div>
          )
        }
        {/* <span 
          className={`${!canScrollPrev ? 'carousel-btn left-btn scroll-button-off' : 'carousel-btn left-btn'}`}
          onClick={scrollPrev}
        >
          &lt;
        </span>
        <span 
          className={`${!canScrollNext ? 'carousel-btn right-btn scroll-button-off' : 'carousel-btn right-btn'}`}
          onClick={scrollNext}
        >
          &gt;
        </span> */}
      </div>
    </PacksContainer>
  )
}