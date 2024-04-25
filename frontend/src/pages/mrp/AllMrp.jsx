import React, { useEffect, useState } from "react";
import MrpCard from "./MrpCard";

export default function AllMrp() {
  const [mrpData, setMrpData] = useState([]);

  useEffect(() => {
    const fetchMrp = async () => {
      try {
        const response = await fetch(
          `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2015-6-3&api_key=XsIc7cYfjDxsHguj7E693VDCsxqAbfxnzt1LfAtQ`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch APOD data");
        }
        const data = await response.json();
        setMrpData(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchMrp();
  }, []);

  return (
    <div className="md:py-[1%] md:px-[7%] px-[5%] font-press-start">
      {mrpData.photos ? (
        <div className="mt-5 flex flex-wrap justify-between">
          {mrpData.photos.map((photo) => (
            <div key={photo.id} className="w-1/3 mb-4 p-4">
              <MrpCard data={photo} />
            </div>
          ))}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
