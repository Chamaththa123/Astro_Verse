import React from "react";

export default function MrpCard({ data }) {
  return (
    <>
      <div className="mt-8">
        <div className="w-full">
          <img
            src={data.img_src}
            alt={data.img_src}
            className="items-center justify-center w-full h-[250px]"
          />
        </div>
        <div className="md:w-[100%] w-full md:py-1 py-5">
          <div className="flex justify-between">
          <div className="text-[15px]">Rover :{data.rover.name}</div>
          <div className="text-[15px]">Sol :{data.sol}</div>
          </div>
          <div>See more</div>
        </div>
      </div>
    </>
  );
}
