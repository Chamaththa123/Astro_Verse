import React, { useState, useEffect } from "react";

export default function TodayApod() {
  const [apodData, setApodData] = useState(null);

  const currentDate = new Date();
  const formattedDate = `${currentDate.getFullYear()}-${(
    currentDate.getMonth() + 1
  )
    .toString()
    .padStart(2, "0")}-${currentDate.getDate().toString().padStart(2, "0")}`;

  useEffect(() => {
    const fetchApod = async () => {
      try {
        const response = await fetch(
          `https://api.nasa.gov/planetary/apod?api_key=XsIc7cYfjDxsHguj7E693VDCsxqAbfxnzt1LfAtQ&date=${formattedDate}`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch APOD data");
        }

        const data = await response.json();
        setApodData(data);
      } catch (error) {
        console.error("Error fetching APOD:", error);
      }
    };

    fetchApod();
  }, [formattedDate]);
  return (
    <section className="md:py-[9%] md:px-[5%] font-press-start">
      <div>
        <h1 className="text-5xl font-bold text-gray-900 mt-10 font-raleway">
          Astronomy Picture of the Day
        </h1>

        {apodData && (
          <div>
            <div className="flex md:py-[4%]">
              <div className="w-[50%]">
                {apodData.media_type === "image" ? (
                  <img
                    src={apodData.url}
                    alt={apodData.title}
                    className="mt-4 items-center justify-center w-[80%]"
                  />
                ) : apodData.media_type === "video" ? (
                  <iframe
                    src={apodData.url}
                    title={apodData.title}
                    className="mt-4 items-center justify-center"
                    width="560"
                    height="415"
                    frameBorder="0"
                    allowFullScreen
                  ></iframe>
                ) : (
                  <p className="mt-4">Unsupported media type</p>
                )}
              </div>
              <div className="w-[50%]">
                <h2 className="text-[25px] font-semibold mt-4">
                  {apodData.title}
                </h2>
                <div className="text-gray-500 font-medium">{formattedDate}</div>
                <p className="mt-6 leading-8 font-raleway">
                  {apodData.explanation}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
      <div></div>
    </section>
  );
}
