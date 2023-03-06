import React from "react";
import Footer from "../../../components/Footer/Footer";
import { MDBContainer } from "mdb-react-ui-kit";
import Header from "../../../components/Header/Header";

const LandingPage = () => {
  return (
    <>
    <Header/>
      <MDBContainer>
        <div style={{background:"#cfe8fc",height: "100vh"}}></div>
      </MDBContainer>
      <Footer />
    </>
  );
};

export default LandingPage;
