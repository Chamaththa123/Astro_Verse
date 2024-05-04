import React, { useEffect, useState } from "react";
import AllMrp from "./AllMrp";
import MrpHero from "./MrpHero";
import Footer from "../../components/layouts/Footer";
import { Loader } from "../../components/layouts/Loader";
import { Header } from "../../components/layouts/Header";

export default function MrpPage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      // Simulating a 2-second delay
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setLoading(false);
    };

    fetchData();
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Header />
          <MrpHero />
          <AllMrp />
          <Footer />
        </>
      )}
    </>
  );
}
