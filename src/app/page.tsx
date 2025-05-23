import React from "react";
import Navbar from "./_components/Navbar";
import SecondSection from "./_components/secondsection";
import ThirdSection from "./_components/thirdsection";
import Objectives from "./_components/objectives";
import Gallery from "./_components/Gallery";
import Talanews from "./_components/Talanews";
import Footer from "./_components/Footer";

const page = () => {
  return (
    <div>
      <Navbar />
      <SecondSection/>
      <ThirdSection />
      <Objectives />
      <Gallery />
      <Talanews />
       <Footer />
    </div>
  );
};

export default page;
