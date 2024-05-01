import React, { useState, useEffect } from "react";

export default function TodayApod() {
  const [apodData, setApodData] = useState(null);
  const [imageLoading, setImageLoading] = useState(true);

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

  useEffect(() => {
    if (apodData && apodData.media_type === "image") {
      const image = new Image();
      image.onload = () => {
        setImageLoading(false);
      };
      image.src = apodData.hdurl;
    }
  }, [apodData]);

  return (
    <section className="md:py-[1%] md:px-[7%] px-[5%] font-press-start">
      <div>
        {apodData && (
          <div>
            <div className="md:flex ">
              <div className="md:w-[50%] w-full">
                <h2 className="text-[25px] font-semibold mt-4 md:w-[85%]">
                  {apodData.title}
                </h2>
                <div className="text-gray-500 font-medium">{formattedDate}</div>
                <div className="border-2 my-[1%]"></div>
                <p className="mt-6 leading-8 font-medium">
                  {apodData.explanation}
                </p>
                <div className="mt-3">
                  &copy;<i>{apodData.copyright}</i>
                </div>
              </div>
              <div className="md:w-[50%] w-full">
                {apodData.media_type === "image" ? (
                  <div className="float-right md:w-[85%] w-full mt-4 ">
                    {imageLoading ? (
                      <div>Loading...</div>
                    ) : (
                      <img
                        src={apodData.hdurl}
                        alt={apodData.title}
                        className="w-full md:h-[540px] h-[350px] object-cover rounded-lg"
                      />
                    )}
                  </div>
                ) : apodData.media_type === "video" ? (
                  <iframe
                    src={apodData.hdurl}
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
            </div>
          </div>
        )}
      </div>
      <div></div>
    </section>
  );
}
