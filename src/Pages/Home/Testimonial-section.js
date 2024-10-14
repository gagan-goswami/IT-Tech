import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Author1 from "../../assets/images/testi-1.jpg";
import Author2 from "../../assets/images/testi-2.jpg";
import Author3 from "../../assets/images/testi-3.jpg";
import { BiSolidQuoteLeft } from "react-icons/bi";
import { FaStar } from "react-icons/fa";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

function Testimonial() {
  return (
    <section className="testimonial-section">
      <Container>
        <div className="section-title">
          <span>Success Stories </span>
          <h2>What Our Clients Say</h2>
        </div>
        <Row>
          <Col lg={12}>
            <div className="testimonial-item">
              <OwlCarousel
                className="owl-theme"
                autoplay={true}
                loop={true}
                slideBy={1}
                animateIn="fadeIn"
                animateOut="fadeOut"
                autoplayHoverPause={true}
                autoplayTimeout={2000}
                smartSpeed={1000}
                dots={false}
                nav={false}
                responsive={{
                  0: { items: 1 },
                  768: { items: 2 },
                  992: { items: 3 },
                }}
              >
                <div className="slide-item">
                  <div className="testimonial-item" data-aos="fade-up">
                    <BiSolidQuoteLeft />
                    <p>
                      "Green Hira’s team provided exceptional service and
                      quality products. Their attention to detail made our
                      project a success. Highly recommend them for any future
                      needs!"
                    </p>
                    <div className="author">
                      <div className="flex-shrink-0">
                        <img src={Author1} alt="author" className="img-fluid" />
                      </div>
                      <div className="flex-grow-1 ms-3">
                        <h2>Luna John</h2>
                        <p>UX Designer</p>
                        <ul className="star-rating">
                          <li>
                            <FaStar />
                          </li>
                          <li>
                            <FaStar />
                          </li>
                          <li>
                            <FaStar />
                          </li>
                          <li>
                            <FaStar />
                          </li>
                          <li>
                            <FaStar />
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="slide-item">
                  <div className="testimonial-item" data-aos="fade-up">
                    <BiSolidQuoteLeft />
                    <p>
                      "Working with Prabha Enterprise has been a game changer.
                      Their expertise in textiles has greatly improved our
                      production quality. A true partner in our success!"
                    </p>
                    <div className="author">
                      <div className="flex-shrink-0">
                        <img src={Author2} alt="author" className="img-fluid" />
                      </div>
                      <div className="flex-grow-1 ms-3">
                        <h2>Michael Wilson</h2>
                        <p>SEO Expert</p>
                        <ul className="star-rating">
                          <li>
                            <FaStar />
                          </li>
                          <li>
                            <FaStar />
                          </li>
                          <li>
                            <FaStar />
                          </li>
                          <li>
                            <FaStar />
                          </li>
                          <li>
                            <FaStar />
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="slide-item">
                  <div className="testimonial-item" data-aos="fade-up">
                    <BiSolidQuoteLeft />
                    <p>
                      "The design solutions from SUYA DESIGNS exceeded our
                      expectations. Their creativity and attention to detail
                      transformed our vision into reality. We are extremely
                      satisfied!"
                    </p>
                    <div className="author">
                      <div className="flex-shrink-0">
                        <img src={Author3} alt="author" className="img-fluid" />
                      </div>
                      <div className="flex-grow-1 ms-3">
                        <h2>Nia Nalson</h2>
                        <p>Business Developer</p>
                        <ul className="star-rating">
                          <li>
                            <FaStar />
                          </li>
                          <li>
                            <FaStar />
                          </li>
                          <li>
                            <FaStar />
                          </li>
                          <li>
                            <FaStar />
                          </li>
                          <li>
                            <FaStar />
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </OwlCarousel>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Testimonial;
