import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import HeroImage from "../../assets/images/hero-image.webp";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS CSS

function Hero() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: true, // Whether animation should happen only once
    });
  }, []);
  return (
    <section className="Hero-section">
      <Container>
        <Row>
          <Col lg={6}>
            <div className="hero-main">
              <div
                className="hero-caption"
                data-aos="fade-left"
                data-aos-duration="1500"
              >
                <span>EMPOWER YOUR BUSINESS</span>
                <h2>Excellent IT Services For Your Success</h2>
                <p>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                </p>
                <div
                  className="contact-btns"
                  data-aos="fade-left"
                  data-aos-duration="1500"
                >
                  <Link
                    to="/read-more"
                    className="readbtn"
                    aria-label="Read more about our services"
                    data-aos="fade-down"
                    data-aos-duration="1500"
                  >
                    Read More
                  </Link>
                  <Link
                    to="/contact"
                    className="contactbtn"
                    aria-label="Contact us for more information"
                    data-aos="fade-down"
                    data-aos-duration="1500"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </Col>

          <Col lg={6} data-aos="fade-left" data-aos-duration="1500">
            <div className="hero-image">
              <img src={HeroImage} alt="hero-image" className="img-fluid" />;
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Hero;
