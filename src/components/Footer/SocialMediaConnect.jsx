import { MDBBtn, MDBContainer, MDBIcon } from "mdb-react-ui-kit";
import React from "react";

const SocialMediaConnect = () => {
  return (
    <MDBContainer className=" text-center">
      <section>
        <MDBBtn
          rippleColor="dark"
          color="link"
          floating
          size="lg"
          className="text-dark m-1"
          href="https://www.facebook.com/kitablovers"
          target="_blank"
          role="button"
        >
          <MDBIcon fab className="fab fa-facebook-f fa-2x" />
        </MDBBtn>

        <MDBBtn
          rippleColor="dark"
          color="link"
          floating
          size="lg"
          className="text-dark m-1"
          href="https://twitter.com/LoversKitab"
          target="_blank"
          role="button"
        >
          <MDBIcon fab className="fa-twitter fa-2x" />
        </MDBBtn>

        <MDBBtn
          rippleColor="dark"
          color="link"
          floating
          size="lg"
          target="_blank"
          className="text-dark m-1"
          href="https://www.instagram.com/kitablovers.official/"
          role="button"
        >
          <MDBIcon fab className="fa-instagram fa-2x" />
        </MDBBtn>
        <MDBBtn
          rippleColor="dark"
          color="link"
          floating
          size="lg"
          className="text-dark m-1"
          role="button"
        >
          <MDBIcon fab className="fa-paypal  fa-2x" />
        </MDBBtn>
        <MDBBtn
          rippleColor="dark"
          color="link"
          floating
          size="lg"
          className="text-dark m-1"
          role="button"
        >
          <MDBIcon fab className="fa-cc-visa  fa-2x" />
        </MDBBtn>
        <MDBBtn
          rippleColor="dark"
          color="link"
          floating
          size="lg"
          className="text-dark m-1"
          role="button"
        >
          <MDBIcon fab className="fa-cc-mastercard fa-2x" />
        </MDBBtn>
        <MDBBtn
          rippleColor="dark"
          color="link"
          floating
          size="lg"
          className="text-dark m-1"
          role="button"
        >
          <MDBIcon fab className="fa-cc-discover fa-2x" />
        </MDBBtn>
      </section>
    </MDBContainer>
  );
};

export default SocialMediaConnect;
