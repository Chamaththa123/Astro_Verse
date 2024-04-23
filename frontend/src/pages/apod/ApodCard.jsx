import React from "react";

export default function ApodCard({ item, maxChars }) {
  const truncateText = (text, maxLength) => {
    if (text.length <= maxLength) {
      return text;
    }
    return text.slice(0, maxLength) + "...";
  };

  return (
    <>
      <div className="flex mt-8">
        <div className="w-[30%]">
          {item.media_type === "image" ? (
            <img
              src={item.hdurl}
              alt={item.title}
              className="items-center justify-center w-full h-[200px]"
            />
          ) : item.media_type === "video" ? (
            <iframe
              src={item.url}
              title={item.title}
              className="mt-4 items-center justify-center w-full"
              height="200px"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          ) : (
            <p className="mt-4">Unsupported media type</p>
          )}
        </div>
        <div className="w-[80%] pl-8 py-1">
          <div className="text-[20px] font-bold">{item.title}</div>
          <div className="text-[15px] py-3">{item.date}</div>
          <div>{truncateText(item.explanation, maxChars)}</div>
        </div>
      </div>
    </>
  );
}
