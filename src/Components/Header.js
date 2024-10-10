import React, { useEffect, useState } from "react";
import { Container, Nav, Navbar, Offcanvas } from "react-bootstrap";
import "../../src/Styles/HeaderStyle.css";
import { Link } from "react-router-dom";
import { FaBars, FaChevronDown, FaPhoneAlt } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";

const Header = () => {
  const [showOffcanvas, setShowOffcanvas] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleCloseOffcanvas = () => setShowOffcanvas(false);
  const handleShowOffcanvas = () => setShowOffcanvas(true);

  useEffect(() => {
    const handleScroll = () => {
      const stickyClass = "is-sticky-menu";
      const scrollTop = window.scrollY;
      const stickyElement = document.querySelector(".is-sticky-on");

      if (scrollTop >= 250) {
        stickyElement.classList.add(stickyClass);
      } else {
        stickyElement.classList.remove(stickyClass);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Handle dropdown hover
  const handleMouseEnter = () => {
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    setIsDropdownOpen(false);
  };

  return (
    <header className="header-section">
      <div className="menu-bar is-sticky-on">
        <Container>
          <Navbar expand="lg">
            <Navbar.Brand>
              <Link to="/">IT Tech</Link>
            </Navbar.Brand>
            <Navbar.Toggle
              aria-controls="offcanvasNavbar"
              onClick={handleShowOffcanvas}
              className="ms-auto"
            >
              <FaBars />
            </Navbar.Toggle>
            <Link to="/" className="call-btn">
              <FaPhoneAlt />
            </Link>
            <Navbar.Offcanvas
              id="offcanvasNavbar"
              aria-labelledby="offcanvasNavbarLabel"
              placement="start"
              show={showOffcanvas}
              onHide={handleCloseOffcanvas}
            >
              <Offcanvas.Header closeButton></Offcanvas.Header>
              <Offcanvas.Body className="offcanvas-menu">
                <Nav className="m-auto p-0">
                  <Nav.Item>
                    <Nav.Link as={Link} to="/" className="active">
                      Home
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link as={Link} to="/About">
                      About
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link as={Link} to="/Service">
                      Services
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link as={Link} to="/Projects">
                      Portfolio
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item
                    className={`dropdown ${isDropdownOpen ? "show" : ""}`}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    <Nav.Link href="#">
                      Pages <FaChevronDown />
                    </Nav.Link>
                    <div
                      className={`dropdown-menu ${
                        isDropdownOpen ? "show" : ""
                      }`}
                    >
                      <Nav.Link as={Link} to="/Team" className="dropdown-item">
                        Our Team
                      </Nav.Link>
                      <Nav.Link as={Link} to="/Faqs" className="dropdown-item">
                        FAQs
                      </Nav.Link>
                      <Nav.Link
                        as={Link}
                        to="/Testimonial"
                        className="dropdown-item"
                      >
                        Testimonial
                      </Nav.Link>
                      <Nav.Link
                        as={Link}
                        to="/404Error"
                        className="dropdown-item"
                      >
                        404 Page
                      </Nav.Link>
                    </div>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link as={Link} to="/ContactUs">
                      Contact
                    </Nav.Link>
                  </Nav.Item>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
            <button className="contact-btn">Contact Us</button>
          </Navbar>
        </Container>
      </div>
    </header>
  );
};

export default Header;
