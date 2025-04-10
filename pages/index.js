import React from "react";
import Head from "next/head";

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
import Banner2 from "./components/Banner2";

const Home = () => {
  return (
    <div className="bg-[#F8FAFC]">
      <Head>
        <title>Claimant Mitra-Investment Consultants</title>
        <meta name="description" content="We help you get your insurance claims settled quickly and efficiently. Our expert team handles all types of insurance cases." />
        <meta name="keywords" content="insurance claims, claim settlement, insurance help, Claimant Mitra" />
        <meta name="author" content="Claimant Mitra Team" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <Landing />
      <Banner2 />
      <Loader />
      <About />
      <Second />
      <Banner />
      <Services />
      <Why />
      <Choose />
      <Contactbanner />
      <Faqs />
      <Footer />
    </div>
  );
};

export default Home;
