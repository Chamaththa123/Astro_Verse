import React from "react";
import logo from "./../../assets/images/logo.png";
import { FaInstagramSquare, FaFacebook, FaTwitter } from "react-icons/fa";
import { headerItems } from "../../utils/dataArrays";
import { Link } from "react-router-dom";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <section className="flex flex-col w-full h-auto font-press-start relative">
      <div className="flex flex-col md:flex-row items-start justify-between  gap-10 xl:px-[5%] p-[40px] bg-[#10275E] ">
        <div className=" flex flex-col md:w-[30%]">
          <img className="w-52 h-[109px]" src={logo} />
          <div className=" flex flex-col gap-7">
            <div className=" text-white text-base font-normal leading-normal font-inter">
              Discover Worlds Beyond: Journey Through the Planets!
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-10 md:w-[25%] justify-end w-full">
          <div className=" flex flex-col gap-7 ">
            <div className="text-left text-orange-400 text-xl font-semibold leading-[50px]">
              Links
            </div>

            <div className=" flex flex-col items-start gap-7 font-inter">
              {headerItems.map((item, itemIndex) => {
                return (
                  <Link
                    to={item.url}
                    className="text-white text-base font-normal cursor-pointer read-more"
                    key={itemIndex}
                  >
                    {item.title}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-7 items-start md:w-[25%] font-inter">
          <div className="text-left text-orange-400 text-xl font-semibold leading-[50px] ">
            Follow AstroVerse
          </div>

          <div className="flex tracking-[0.2px] text-[14px] text-white">
            <span className="mr-[15px]">
              <FaInstagramSquare className=" text-[30px] text-[#EF802F]" />
            </span>
            <span className="mt-1 font-normal text-base">Instagram/AstroVerse</span>
          </div>

          <div className="flex tracking-[0.2px] text-[14px] text-white">
            <span className="mr-[15px]">
              <FaFacebook className=" text-[30px] text-[#EF802F]" />
            </span>
            <span className="mt-1 font-normal text-base">Facebbok/AstroVerse</span>
          </div>

          <div className="flex tracking-[0.1px] text-[14px] text-white">
            <span className="mr-[15px]">
              <FaTwitter className=" text-[30px] text-[#EF802F]" />
            </span>
            <span className="mt-1 font-normal text-base">
              Twitter/AstroVerse
              <br />
            </span>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row w-full p-3 font-inter bg-white md:text-[10px] md:leading-[16px] justify-between items-center">
        <div className="text-black font-semibold">
          © {currentYear} AstroVerse All Rights Reserved.
        </div>
        <div className="text-[#3D548D] font-semibold text-c">
          Terms of Services | Privacy Policy
        </div>
      </div>
    </section>
  );
}
