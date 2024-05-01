import React, { useEffect, useState } from "react";
import { useLocation } from 'react-router-dom';
import { Link } from "react-router-dom";
import { useSpring, animated } from "react-spring";
import { useInView } from "react-intersection-observer";
import logo from "./../../assets/images/logo.png";
import menu from "./../../assets/images/menu.png";
import { HeaderLink } from "./HeaderLink";
import { headerItems } from "../../utils/dataArrays";
import { IoMdClose } from "react-icons/io";

export const Header = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  const fadeNavigation = useSpring({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? "translateY(0)" : "translateY(-100%)",
    config: {
      duration: 800,
      delay: 100,
    },
  });

  useEffect(() => {
    const loaderDelay = 50;

    setTimeout(() => {
      if (inView) {
        setIsVisible(true);
      }
    }, loaderDelay);
  }, [inView]);

  const [visibleMObile, setVisibleMObile] = useState(false);

  const handleFadeIn = () => {
    setVisibleMObile((pre) => !pre);
    document.body.style.overflow = visibleMObile ? "visible" : "hidden";
  };

  useEffect(() => {
    return () => {
      document.body.style.overflow = "visible";
    };
  }, []);

  const location = useLocation();
  const currentPath = location.pathname;
  const headerColor = currentPath === '/' ? 'bg-transparent' : 'bg-black';

  return (
    <animated.section
      ref={ref}
      style={fadeNavigation}
      className={`fixed w-full ${headerColor} inset-0 top-0 left-0 bottom-0 z-50  h-[92px]  font-press-start flex items-center justify-between p-[15px] xl:py-[10px] xl:px-[40px]`}
    >
      <Link to="/">
        <img src={logo} className="w-[120px] md:w-[100px]" alt="" />
      </Link>
      <div className="hidden xl:flex w-[60%]  justify-around">
        {headerItems.map((item, itemindex) => {
          return (
            <HeaderLink url={item.url} title={item.title} key={itemindex} />
          );
        })}
      </div>
      {/* <Link
        to="/schedule"
        className="md:hidden inline-flex px-4 py-2 bg-red-600 justify-center items-center  text-white text-md font-bold hover:bg-gradient-to-r hover:from-[#23216E] hover:via-[#830862] hover:to-red-400 "
      >
        Schedule a call
      </Link> */}
      <span className="xl:hidden" onClick={handleFadeIn}>
        {/* <GiHamburgerMenu className=' text-[30px] border-4 border-blue rounded-md ' /> */}
        <img
          src={menu}
          className=" w-[37px] border-4 border-[#F5F5F5] bg-[#F5F5F5] rounded-md bg-[F5F5F5]"
          alt=""
        />
      </span>
      {/* <Link
        to="/schedule"
        className="hidden xl:inline-flex px-7 py-4 bg-red-600 justify-center items-center gap-2.5  text-white text-lg font-bold hover:bg-gradient-to-r hover:from-[#23216E] hover:via-[#830862] hover:to-red-400 "
      >
        Schedule a call
      </Link> */}
      <div
        className={`fixed w-full inset-0 top-0 left-0 bottom-0 bg-white h-[100vh] p-[20px] transition transform duration-500 ease-in-out fade-up-enter-active ${
          visibleMObile ? "fade-up-enter-to" : "fade-up-enter-from "
        } `}
      >
        <div className="flex items-center justify-between w-full">
          <Link className="">
            <img src={logo} className=" w-[150px]" alt="" />
          </Link>

          <span onClick={handleFadeIn}>
            <IoMdClose className="text-[20px]" />
          </span>
        </div>
        {/* mobile header  */}
        <div className="w-full flex mt-[80px] flex-col gap-3">
          {headerItems.map((item, itemindex) => {
            return (
              <div className="p-[16px] pb-[15px] font-press-start font-bold  text-[20px] leading-[24px] text-[#000000] hover:text-[#74768F] border-b-2 border-[#74768f59]">
                <Link to={item.url}>{item.title}</Link>
              </div>
            );
          })}
        </div>
      </div>
    </animated.section>
  );
};
