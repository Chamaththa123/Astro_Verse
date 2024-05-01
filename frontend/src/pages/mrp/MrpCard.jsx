import React, { useState } from "react";
import "../../assets/css/ImageLoader.css";

export default function MrpCard({ data }) {
  const [imageLoading, setImageLoading] = useState(true);

  return (
    <>
      <div className="mt-8">
        <div className="w-full">
          {imageLoading && (
            <div className="dot-spinner mt-[45%] ml-[45%]">
              <div className="dot-spinner__dot"></div>
              <div className="dot-spinner__dot"></div>
              <div className="dot-spinner__dot"></div>
              <div className="dot-spinner__dot"></div>
              <div className="dot-spinner__dot"></div>
              <div className="dot-spinner__dot"></div>
              <div className="dot-spinner__dot"></div>
              <div className="dot-spinner__dot"></div>
            </div>
          )}
          <img
            src={data.img_src}
            alt={data.img_src}
            className="items-center justify-center w-full h-[250px] rounded-md"
            onLoad={() => setImageLoading(false)}
          />
        </div>
        <div className="md:w-[100%] w-full md:py-1 py-5">
          <div className="flex justify-between">
            <div className="text-[15px]">Rover: {data.rover.name}</div>
            <div className="text-[15px]">Sol: {data.sol}</div>
          </div>
          <div>See more</div>
        </div>
      </div>
    </>
  );
}
