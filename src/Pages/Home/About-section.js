import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import AboutImage from "../../assets/images/about.webp";
import { FaGlobe, FaHeadphonesAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS CSS

function About() {
  AOS.init({
    duration: 1000, // Animation duration
    once: true, // Whether animation should happen only once
  });
  return (
    <section className="about-section">
      <Container>
        <Row>
          <Col lg={6} data-aos="fade-right">
            <div className="about-item">
              <div className="about-image">
                <img
                  src={AboutImage}
                  alt="About-image"
                  className="img-fluid"
                ></img>
              </div>
            </div>
          </Col>
          <Col lg={6}>
            <div className="about-item">
              <div className="about-content" data-aos="fade-left">
                <span>ABOUT US </span>
                <h2>Best IT Solution For Your Business Theme</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>

              <div className="service-main">
                <div class="service" data-aos="fade-left">
                  <div class="flex-shrink-0">
                    <FaGlobe />
                  </div>
                  <div class="flex-grow-1 ms-3">
                    <h2 class="mt-0">Worldwide Services</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit
                    </p>
                  </div>
                </div>

                <div class="service" data-aos="fade-left">
                  <div class="flex-shrink-0">
                    <FaHeadphonesAlt />
                  </div>
                  <div class="flex-grow-1 ms-3">
                    <h2 class="mt-0">24/7 Support</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit
                    </p>
                  </div>
                </div>
              </div>
              <Link
                to="/read-more"
                className="read-more"
                aria-label="Read more about our services"
              >
                Read More
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default About;
