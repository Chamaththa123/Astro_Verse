import React, { useEffect, useState } from "react";
import { Input } from "@material-tailwind/react";
import ApodCard from "./ApodCard";

export default function AllApod() {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [apodData, setApodData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  useEffect(() => {
    const currentDate = new Date();
    const fourDaysAgo = new Date(
      currentDate.getTime() - 4 * 24 * 60 * 60 * 1000
    );
    const formattedStartDate = fourDaysAgo.toISOString().split("T")[0];
    const formattedEndDate = currentDate.toISOString().split("T")[0];
    setStartDate(formattedStartDate);
    setEndDate(formattedEndDate);
  }, []);

  useEffect(() => {
    const fetchApod = async () => {
      try {
        if (!startDate || !endDate) return;
        const response = await fetch(
          `https://api.nasa.gov/planetary/apod?api_key=XsIc7cYfjDxsHguj7E693VDCsxqAbfxnzt1LfAtQ&start_date=${startDate}&end_date=${endDate}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch APOD data");
        }
        const data = await response.json();
        setApodData(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchApod();
  }, [startDate, endDate]);

  const handleStartDateChange = (event) => {
    const formattedDate = event.target.value;
    setStartDate(formattedDate);
  };

  const handleEndDateChange = (event) => {
    const formattedDate = event.target.value;
    setEndDate(formattedDate);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = apodData.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <section className="md:py-[1%] md:px-[7%] px-[5%] font-press-start">
      <h1 className="text-4xl font-bold text-gray-900 mt-10">
        Astronomy Picture of Previous Days
      </h1>

      <div className="md:flex my-20">
        <div className="md:w-[20%] w-full">
          <label htmlFor="start" >Start Date:</label>
          <Input
            type="date"
            id="start"
            name="start"
            value={startDate}
            onChange={handleStartDateChange}
          />
        </div>
        <div className="md:w-[20%] w-full md:pl-[2%] md:mt-0 mt-5">
          <label htmlFor="end">End Date:</label>
          <Input
            type="date"
            id="end"
            name="end"
            value={endDate}
            onChange={handleEndDateChange}
          />
        </div>
      </div>

      <div>
        {currentItems.map((item, index) => (
          <div key={index}>
            <ApodCard item={item} maxChars={250} />
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-10">
        <ul className="flex justify-center mt-4">
          {Array.from(
            { length: Math.ceil(apodData.length / itemsPerPage) },
            (_, i) => (
              <li key={i} className="mx-1">
                <button
                  onClick={() => paginate(i + 1)}
                  className={`py-2 px-4 bg-gray-300 text-black rounded-[50%] ${
                    currentPage === i + 1 ? "bg-gray-800 text-white" : ""
                  }`}
                >
                  {i + 1}
                </button>
              </li>
            )
          )}
        </ul>
      </div>
    </section>
  );
}
