import React from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";
import SocialMediaConnect from "./SocialMediaConnect";

export default function Footer() {
  return (
    <>
      <MDBFooter
        style={{ backgroundColor: "#000" }}
        className="text-center text-lg-start text-muted pt-2"
      >
        <section className="">
          <MDBContainer className="text-center text-md-start mt-8">
            <MDBRow className="mt-3">
              <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
                <h3 className="text-uppercase text-white fw-bold mb-4">
                  <MDBIcon icon="gem" className="me-3" />
                  Our Company
                </h3>
                <p className="text-white ">
                  We would like to thank you for shopping with us. You can write
                  us for any new thoughts at “cs@kitablovers.com” helping us to
                  improvise for the reader satisfaction. We offer huge
                  collection of New & Preloved-books in diverse category of
                  Fiction, Non-fiction, Biographies, History, Teen fiction, Self
                  -Help, Children...
                </p>
              </MDBCol>

              <MDBCol md="2" lg="2" xl="2" className="mx-auto mb-4">
                <h3 className="text-uppercase fw-bold mb-4">Contact Us</h3>
                <p>
                  <MDBIcon icon="map-marked-alt" className="me-2" />
                  <a href="#!" className="text-reset">
                    Kh no 20/29, Nangli poona village, Delhi - 110036
                  </a>
                </p>
                <p>
                  <MDBIcon icon="headset" className="me-3" />
                  <a href="#!" className="text-reset">
                    +91-8860-525-525
                  </a>
                </p>
                <p>
                  <MDBIcon icon="at" className="me-3" />
                  <a href="#!" className="text-reset">
                    cs@kitablovers.com
                  </a>
                </p>
              </MDBCol>

              <MDBCol md="3" lg="2" xl="2" className="mx-auto mb-4">
                <h3 className="text-uppercase fw-bold mb-4">Service</h3>
                <p>
                  <MDBIcon icon="user" className="me-2" />
                  <a href="#!" className="text-reset">
                    My Account
                  </a>
                </p>
                <p>
                  <MDBIcon icon="shopping-cart" className="me-2" />
                  <a href="#!" className="text-reset">
                    Checkout
                  </a>
                </p>
                <p>
                  <MDBIcon icon="shopping-bag" className="me-2" />
                  <a href="#!" className="text-reset">
                    Shop Now
                  </a>
                </p>
                <p>
                  <MDBIcon icon="history" className="me-2" />
                  <a href="#!" className="text-reset">
                    Order History
                  </a>
                </p>
                <p>
                  <MDBIcon icon="question" className="me-2" />
                  <a href="#!" className="text-reset">
                    FAQs
                  </a>
                </p>
              </MDBCol>

              <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
                <h3 className="text-uppercase fw-bold mb-4">policy</h3>
                <p>
                  <a href="#!" className="text-reset">
                    About us
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Privacy Policy
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Return Policy
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Contact Us
                  </a>
                </p>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </section>
      </MDBFooter>
      <SocialMediaConnect />
      <div
        className="text-center p-1 text-dark"
        style={{ backgroundColor: "#ffc919" }}
      >
        © 2023 Copyright:
        <a className="text-reset fw-bold" href="https://kitablovers.com/">
          kitablovers.com
        </a>
      </div>
    </>
  );
}
