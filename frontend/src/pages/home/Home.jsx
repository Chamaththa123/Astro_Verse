import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import hero from './../../assets/images/hero.mp4';

export const Home = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  useEffect(() => {
    const loaderDelay = 200;

    setTimeout(() => {
      if (inView) {
        setIsVisible(false);
      }
    }, loaderDelay);
  }, [inView]);

  return (
    <section
      ref={ref}
      className='overflow-hidden w-full xl:h-screen md:h-[60vh] h-[80vh] relative flex items-center justify-center font-press-start'
    >
      <div className='absolute top-0 left-0 w-full z-50 bg-[#0c2051]'></div>
      <video autoPlay loop muted className='w-full xl:h-screen h-[80vh] object-cover'>
        <source src={hero} type="video/mp4" />
      </video>

      <div className='absolute w-full xl:h-screen h-[80vh] flex items-center flex-col justify-center gap-[30px]'>
        <div className="text-center text-[#F2F9FF] xl:text-[90px] font-bold xl:leading-[100px] text-[45px] leading-[50px] md:mt-0 mt-4">AstroVerse</div>
        <div className="text-center text-white xl:text-2xl font-medium  xl:leading-10 text-lg leading-[30px]">Exploring the Universe, One Click at a Time </div>
      </div>
    </section>
  )
}
