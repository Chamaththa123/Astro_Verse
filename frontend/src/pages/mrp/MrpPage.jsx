import React, { useEffect, useState } from "react";
import AllMrp from "./AllMrp";
import MrpHero from "./MrpHero";
import Footer from "../../components/layouts/Footer";
import { useStateContext } from "../../contexts/NavigationContext";
import { Loader } from "../../components/layouts/Loader";
import { Header } from "../../components/layouts/Header";

export default function MrpPage() {
  const [loading, setLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State to track if the user is logged in

  useEffect(() => {
    const fetchData = async () => {
      // Simulating a 2-second delay
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setLoading(false);
    };

    // Check if the user is logged in
    if (user) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }

    fetchData();
  }, []);

  const { user, setUser } = useStateContext();

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Header />
          <MrpHero />
          {isLoggedIn ? (
            <AllMrp />
          ) : (
            <div>Error: Please log in to view this content.</div>
          )}
          <Footer />
        </>
      )}
    </>
  );
}
