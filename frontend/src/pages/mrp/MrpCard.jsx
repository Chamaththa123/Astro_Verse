import React from "react";

export default function MrpCard({ data }) {
  return (
    <>
      <div className="mt-8">
        <div className="w-full">
          <img
            src={data.img_src}
            alt={data.img_src}
            className="items-center justify-center w-full h-[200px]"
          />
        </div>
        <div className="md:w-[80%] w-full md:py-1 py-5">
          <div className="text-[15px] font-semibold">{data.earth_date}</div>
          <div className="text-[15px] ">{data.sol}</div>
          <div className="text-[15px]">{data.rover.name}</div>
          {/* <div>{truncateText(data.explanation, maxChars)}</div> */}
        </div>
      </div>
    </>
  );
}
