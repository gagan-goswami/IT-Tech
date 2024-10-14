import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaAngleRight,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaRegEnvelope,
  FaArrowUp,
} from "react-icons/fa";
import "../../src/Styles/FooterStyle.css";

function Footer() {
  const [progress, setProgress] = useState(0);

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    const windowHeight =
      document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / windowHeight) * 100;
    setProgress(scrollPercent);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <footer className="footer">
        <Container>
          <Row>
            <Col lg={3} md={6}>
              <div className="footer-item" data-aos="fade-right">
                <div className="footer-logo">
                  <Link to="/" className="navbar-brand">
                    <h2>IT Tech</h2>
                  </Link>
                </div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Soluta facere delectus qui placeat consectetur repellendus
                  optio debitis.
                </p>
                <ul className="footer-social">
                  <li>
                    <Link to="/">
                      <FaFacebookF />
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <FaTwitter />
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <FaInstagram />
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <FaLinkedinIn />
                    </Link>
                  </li>
                </ul>
              </div>
            </Col>
            <Col lg={3} md={6}>
              <div className="footer-item" data-aos="fade-right">
                <h2>Company</h2>
                <ul className="page-link">
                  <li>
                    <Link to="/">
                      <FaAngleRight /> Company Profile
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <FaAngleRight /> Help Center
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <FaAngleRight /> Services
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <FaAngleRight /> Team Members
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <FaAngleRight /> Contact Us
                    </Link>
                  </li>
                </ul>
              </div>
            </Col>
            <Col lg={3} md={6}>
              <div className="footer-item" data-aos="fade-right">
                <h2>Our Services</h2>
                <ul className="Quick-links">
                  <li>
                    <Link to="/">
                      <FaAngleRight /> Career
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <FaAngleRight /> Leadership
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <FaAngleRight /> Press & Media
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <FaAngleRight /> Projects
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <FaAngleRight /> Challenge Of Project
                    </Link>
                  </li>
                </ul>
              </div>
            </Col>
            <Col lg={3} md={6}>
              <div className="footer-item" data-aos="fade-right">
                <h2>Get In Touch</h2>
                <ul className="service-links">
                  <li>
                    <Link to="/">
                      <FaMapMarkerAlt /> 123 Street, New York, USA
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <FaPhoneAlt /> +123 456 7890
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <FaRegEnvelope /> info@exmple.com
                    </Link>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
        <div className="copy-right">
          <p>Copyright ©2024 All rights reserved</p>
        </div>

        {/* Scroll-to-top button and progress indicator */}
        <div
          className={`progress-wrap ${progress > 0 ? "active-progress" : ""}`}
          onClick={scrollToTop}
        >
          <svg
            className="progress-circle svg-content"
            width="100%"
            height="100%"
            viewBox="-1 -1 102 102"
          >
            <path
              d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"
              style={{
                strokeDasharray: "308",
                strokeDashoffset: `${308 - (progress * 308) / 100}`,
              }}
            />
          </svg>
          <FaArrowUp className="chevron-icon" /> {/* Arrow-up icon here */}
        </div>
      </footer>
    </>
  );
}

export default Footer;
