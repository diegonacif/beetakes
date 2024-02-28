import { useCallback, useContext, useEffect, useRef, useState } from "react";
import { Pack } from "./components/Pack";
import { PacksContainer } from "./styles";
import { packsData } from "../../constants/packsData";
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'

import { EmblaCarouselType } from 'embla-carousel'
import { CaretDoubleLeft, CaretDoubleRight } from "@phosphor-icons/react";
import { useBreakpoint } from "../../hooks/useBreakpoint";
import { RefsContext } from "../../contexts/RefsProvider";


export function Packs() {
  // Embla Carousel
  const carouselRef = useRef(null)

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { 
      containScroll: false, 
      slidesToScroll: 1,
      breakpoints: {
        '(min-width: 1024px)': {slidesToScroll: 2}, // notebook
        '(min-width: 1280px)': {slidesToScroll: 3}, // desktop
        '(min-width: 1920px)': {slidesToScroll: 4}, // widescreen
      }
    },
    [Autoplay({
      stopOnInteraction: true,
      delay: 5000,
    })]
  )

  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(true);
  const [canScroll, setCanScroll] = useState(true);

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

  const breakpoint = useBreakpoint();

  useEffect(() => {
    const slidesVisibleQtd = () => {
      if (breakpoint === 'mobile' || breakpoint === 'tablet') return 1
      else if (breakpoint === 'notebook') return 2
      else if (breakpoint === 'desktop') return 3
      else if (breakpoint === 'widescreen') return 4
      else return 0
    }

    if (emblaApi) {
      const slidesQtd = emblaApi.slideNodes().length

      if (slidesVisibleQtd() >= slidesQtd) {
        setCanScroll(false)
      } else {
        setCanScroll(true)
      }
    } 
  }, [breakpoint, emblaApi])
  
  

  useEffect(() => {    
    if (emblaApi) {
      emblaApi.on('select', onSelect)  
    } 
  }, [emblaApi, onSelect, breakpoint])

  const { packsRef } = useContext(RefsContext);

  return (
    <PacksContainer id="section-packs" ref={packsRef}>
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
          canScroll && canScrollPrev && (
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
          canScroll && canScrollNext && (
            <div className="carousel-btn right-btn">
              <CaretDoubleRight 
                size={36} 
                weight="bold" 
                onClick={scrollNext} 
              />
            </div>
          )
        }
      </div>
    </PacksContainer>
  )
}