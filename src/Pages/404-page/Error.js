import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Breadcrumb from "./Breadcrumb-section";
import { Link } from "react-router-dom";
import Cta from "../Home/Cta-section";
import AOS from "aos";
import "aos/dist/aos.css"; //

function error() {
  AOS.init({
    duration: 1000, // Animation duration
    once: true, // Whether animation should happen only once
  });
  return (
    <>
      <Breadcrumb />
      <section className="error-page">
        <Container>
          <Row>
            <Col lg={12}>
              <div className="error-item" data-aos="fade-down">
                <span>404</span>
                <h2>Page Not Found</h2>
                <p>
                  Oops! The Page You Were Asking For Dose not Exist. Try Search
                  Our Site For What You Are Looking For.
                </p>
              </div>
              <div className="home-btn" data-aos="fade-down">
                <Link to="/">Back To Home</Link>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <Cta />
    </>
  );
}

export default error;
