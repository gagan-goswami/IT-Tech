import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaLongArrowAltRight, FaLaptopCode, FaBullhorn } from "react-icons/fa";
import {
  MdOutlineSecurity,
  MdOutlineDataThresholding,
  MdOutlineDesignServices,
} from "react-icons/md";
import { FaRankingStar } from "react-icons/fa6";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS CSS

function service() {
  AOS.init({
    duration: 1000, // Animation duration
    once: true, // Whether animation should happen only once
  });
  return (
    <section className="service-section">
      <Container>
        <div className="section-title">
          <span>OUR SERVICES </span>
          <h2>Our IT Solutions & Services for Your Business</h2>
        </div>
        <Row>
          <Col lg={4} md={6} sm={6} data-aos="fade-down">
            <div className="service-item">
              <div className="service-icon">
                <FaLaptopCode />
              </div>
              <div className="service-content">
                <h2>Web Development</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
                  repellendus minima reiciendis nobis dolore obcaecati.
                </p>
                <Link to="">
                  Read More <FaLongArrowAltRight />
                </Link>
              </div>
            </div>
          </Col>
          <Col lg={4} md={6} sm={6} data-aos="fade-down">
            <div className="service-item">
              <div className="service-icon">
                <MdOutlineSecurity />
              </div>
              <div className="service-content">
                <h2>Cyber Security</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
                  repellendus minima reiciendis nobis dolore obcaecati.
                </p>
                <Link to="">
                  Read More <FaLongArrowAltRight />
                </Link>
              </div>
            </div>
          </Col>
          <Col lg={4} md={6} sm={6} data-aos="fade-down">
            <div className="service-item">
              <div className="service-icon">
                <MdOutlineDataThresholding />
              </div>
              <div className="service-content">
                <h2>Data Analysis</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
                  repellendus minima reiciendis nobis dolore obcaecati.
                </p>
                <Link to="">
                  Read More <FaLongArrowAltRight />
                </Link>
              </div>
            </div>
          </Col>
          <Col lg={4} md={6} sm={6} data-aos="fade-up">
            <div className="service-item">
              <div className="service-icon">
                <MdOutlineDesignServices />
              </div>
              <div className="service-content">
                <h2>UI/UX Designing</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
                  repellendus minima reiciendis nobis dolore obcaecati.
                </p>
                <Link to="">
                  Read More <FaLongArrowAltRight />
                </Link>
              </div>
            </div>
          </Col>
          <Col lg={4} md={6} sm={6} data-aos="fade-up">
            <div className="service-item">
              <div className="service-icon">
                <FaRankingStar />
              </div>
              <div className="service-content">
                <h2>SEO Optimization</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
                  repellendus minima reiciendis nobis dolore obcaecati.
                </p>
                <Link to="">
                  Read More <FaLongArrowAltRight />
                </Link>
              </div>
            </div>
          </Col>
          <Col lg={4} md={6} sm={6} data-aos="fade-up">
            <div className="service-item">
              <div className="service-icon">
                <FaBullhorn />
              </div>
              <div className="service-content">
                <h2>Digital Marketing</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
                  repellendus minima reiciendis nobis dolore obcaecati.
                </p>
                <Link to="">
                  Read More <FaLongArrowAltRight />
                </Link>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default service;
