import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import CountUp from "react-countup";
import { IoIosPeople } from "react-icons/io";
import { FaDiagramProject } from "react-icons/fa6";
import { GiSkills } from "react-icons/gi";
import { MdPermMedia } from "react-icons/md";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS CSS

function Funfact() {
  AOS.init({
    duration: 1000, // Animation duration
    once: true, // Whether animation should happen only once
  });
  return (
    <section className="funfact-section">
      <Container>
        <Row>
          <Col lg={3} md={3} sm={6} className="m-0 p-0" data-aos="fade-right">
            <div className="funfact-item">
              <div className="d-flex">
                <div class="flex-shrink-0">
                  <IoIosPeople />
                </div>
                <div className="flex-grow-1 ms-3">
                  <h2 className="mt-0">
                    <CountUp end={50} duration={3} />+
                  </h2>
                  <p>Happy Clients</p>
                </div>
              </div>
            </div>
          </Col>

          <Col lg={3} md={3} sm={6} className="m-0 p-0" data-aos="fade-right">
            <div className="funfact-item">
              <div className="d-flex">
                <div class="flex-shrink-0">
                  <GiSkills />
                </div>
                <div className="flex-grow-1 ms-3">
                  <h2 className="mt-0">
                    <CountUp end={36} duration={3} />+
                  </h2>
                  <p>Finished projects</p>
                </div>
              </div>
            </div>
          </Col>

          <Col lg={3} md={3} sm={6} className="m-0 p-0" data-aos="fade-right">
            <div className="funfact-item">
              <div className="d-flex">
                <div class="flex-shrink-0">
                  <FaDiagramProject />
                </div>
                <div className="flex-grow-1 ms-3">
                  <h2 className="mt-0">
                    <CountUp end={21} duration={3} />+
                  </h2>
                  <p>Skilled Experts</p>
                </div>
              </div>
            </div>
          </Col>

          <Col lg={3} md={3} sm={6} className="m-0 p-0" data-aos="fade-right">
            <div className="funfact-item">
              <div className="d-flex">
                <div class="flex-shrink-0">
                  <MdPermMedia />
                </div>
                <div className="flex-grow-1 ms-3">
                  <h2 className="mt-0">
                    <CountUp end={201} duration={3} />+
                  </h2>
                  <p>Media Posts</p>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Funfact;
