import React from "react";
import Footer from "../../components/Footer/Footer";
import InstitutionTable from "../../components/InstitutionsTable/InstitutionTable";
import LandingNav from "../../components/Navbar";
import { Body, Head } from "./InstitutionsStyled";

const Institutions = () => {
  return (
    <>
      <LandingNav />
      <Body>
        <Head>
          <h1>INSTITUTIONS</h1>
        </Head>
        <InstitutionTable />
      </Body>
      <Footer />
    </>
  );
};

export default Institutions;
