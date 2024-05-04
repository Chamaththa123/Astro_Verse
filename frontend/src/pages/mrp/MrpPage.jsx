import React from "react";
import AllMrp from "./AllMrp";
import MrpHero from "./MrpHero";
import Footer from "../../components/layouts/Footer";

export default function MrpPage() {
  return (
    <>
      <MrpHero />
      <AllMrp />
      <Footer />
    </>
  );
}
