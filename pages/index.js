import React from "react";
import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import Second from "./components/Second";
import Banner from "./components/Banner";
import About from "./components/About";
import Services from "./components/Services";
import Faqs from "./components/Faqs";
import Footer from "./components/Footer";
import Choose from "./components/Choose";
import Why from "./components/Why";
import Loader from "./components/Loader";
import Contactbanner from "./components/Contactbanner";

const index = () => {
  return (
    <div className="bg-[#F8FAFC]">
      <Navbar />
      <Landing />
      <Loader />
      <Banner />
      <About />
      <Second />
      <Services />
      <Why />
      <Choose />
      <Contactbanner/>
      <Faqs />
      <Footer />
    </div>
  );
};

export default index;
