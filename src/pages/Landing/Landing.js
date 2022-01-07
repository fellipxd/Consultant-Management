import React from "react";
import Footer from "../../components/Footer/Footer";
import HelpForm from "../../components/HelpForm/HelpForm";
import Hero from "../../components/Hero/Hero";
import LandingNav from "../../components/Navbar";
import Services from "../../components/Services/Services";

const Landing = () => {
  return (
    <>
      <LandingNav />
      <Hero />
      <Services />
      <HelpForm />
      <Footer />
    </>
  );
};

export default Landing;
