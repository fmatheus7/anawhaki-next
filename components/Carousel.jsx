import React, { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { GrNext, GrPrevious } from "react-icons/gr";
import cerimonias from "../public/cerimonias.jpeg";
import medicinas from "../public/medicinas.jpeg";
import retiros from "../public/retiros.jpeg";
import services from "../public/services.jpeg";
import Link from "next/link";
const Carousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel();

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className='embla max-w-7xl mx-auto'>
      <div className='embla__viewport' ref={emblaRef}>
        <div className='embla__container'>
          <div className='embla__slide flex'>
            <div className='mx-auto'>
              <Link href='/cerimonies'>
                <Image
                  width='1000'
                  height='450'
                  alt='/'
                  src={cerimonias}
                  className='rounded-md cursor-pointer'
                />
              </Link>

              <div className='flex flex-col  items-center justify-center space-y-3'>
                <h3 className='font-bold text-2xl tracking-widest'>
                  Cerimônias
                </h3>
                <p className='tracking-tighter'>
                  Confira as fotos das nossas ultimas cerimônias
                </p>
              </div>
            </div>
          </div>
          <div className='embla__slide flex'>
            <div className='mx-auto'>
              <Link href='/retreats'>
                <Image
                  width='1000'
                  height='450'
                  alt='/'
                  src={retiros}
                  className='rounded-md cursor-pointer'
                />
              </Link>

              <div className='flex flex-col  items-center justify-center space-y-3'>
                <h3 className='font-bold text-2xl tracking-widest'>Retiros</h3>
                <p className='tracking-tighter'>Confira os nossos Retiros</p>
              </div>
            </div>
          </div>
          <div className='embla__slide flex'>
            <div className='mx-auto'>
              <Link href='/medicines'>
                <Image
                  width='1000'
                  height='450'
                  alt='/'
                  src={medicinas}
                  className='rounded-md cursor-pointer'
                />
              </Link>
              <div className='flex flex-col  items-center justify-center space-y-3'>
                <h3 className='font-bold text-2xl tracking-widest'>
                  Medicinas ancestrais
                </h3>
                <p className='tracking-tighter'>
                  Confira algumas de nossas medicinas.
                </p>
              </div>
            </div>
          </div>
          <div className='embla__slide flex'>
            <div className='mx-auto'>
              <Link href='/services'>
                <Image
                  width='1000'
                  height='450'
                  alt='/'
                  src={services}
                  className='rounded-md cursor-pointer'
                />
              </Link>
              <div className='flex flex-col  items-center justify-center space-y-3'>
                <h3 className='font-bold text-2xl tracking-widest'>Serviços</h3>
                <p className='tracking-tighter'>Conheça nossos serviços</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='flex mx-auto items-center justify-evenly opacity-70 '>
        <button className='embla__prev' onClick={scrollPrev}>
          <GrPrevious size={35} />
        </button>
        <button className='embla__next' onClick={scrollNext}>
          <GrNext size={35} />
        </button>
      </div>
    </div>
  );
};

export default Carousel;
