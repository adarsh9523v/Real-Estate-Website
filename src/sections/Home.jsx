import React from "react";
import Header from "../components/Header";
import Hero from "./Hero";
import About from "./About";
import PopularAreas from "./PopularAreas";
import Properties from "./Properties";
import Services from "./Services";
import Clients from "./Clients";
import Contact from "./Contact";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <PopularAreas />
      <Properties />
      <Services />
      <Clients />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
