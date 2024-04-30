import React, { useEffect, useState } from 'react';
import { useSpring, animated,easings, useInView } from 'react-spring';
import hero from './../../assets/images/apod-hero/apod-hero-1.jpg';
import { Link } from 'react-router-dom';

export default function ApodHero() {

    const [isVisible, setIsVisible] = useState(true); // Set initial state to true
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  const fadeOver = useSpring({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? "translateY(0%)" : "translateY(100%)",
    config: {
      duration: 1000,
      delay: 500,
    },
  });

  const fadeScreen = useSpring({
    opacity: isVisible ? 0 : 1,
  
    config: {
      duration: 800,
      delay: 500 
    },
  });

 


  useEffect(() => {
    const loaderDelay = 200;

    // Simulate loading delay with setTimeout
    setTimeout(() => {
      if (inView) {
        setIsVisible(false); // Set isVisible to false after the loading delay
      }
    }, loaderDelay);
  }, [inView]);

  return (
    <section
      ref={ref}
      className='overflow-hidden w-full xl:h-screen md:h-[60vh] h-[80vh] md:mt-[-40px] relative flex items-center justify-center font-press-start'
    >
      <div className='absolute top-0 left-0 w-full z-50 bg-[#0c2051]'></div>
      <img src={hero} className=' w-full xl:h-screen h-[80vh] object-cover' alt="" />

      <div className='absolute w-full xl:h-screen h-[80vh] flex  flex-col justify-center gap-[130px]'>
        <div className="text-left text-[#F2F9FF] xl:text-[55px] md:px-[5%] font-bold xl:leading-[100px] text-[45px] leading-[50px] md:mt-0 mt-4">Astronomy Picture of the Day</div>
        <div className="md:w-[60%] text-left text-white xl:text-[18px] font-medium md:px-[5%] xl:leading-[25px] text-lg leading-[30px]">Dive into the cosmos with our Astronomy Picture of the Day (APOD) hero section! Explore the breathtaking wonders of the universe through stunning imagery captured by NASA's powerful telescopes and spacecraft. Each day unveils a new celestial marvel, from distant galaxies to mesmerizing nebulae and beyond. Let the awe-inspiring beauty of the cosmos ignite your curiosity and inspire your imagination as you embark on a journey through the vastness of space right from your screen.</div>
      </div>
    </section>
  )
}
