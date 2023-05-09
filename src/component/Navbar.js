import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { useNavigate } from "react-router-dom";
import { Link } from "react-scroll";
import { Token } from "../config/token";

function OffcanvasNavbar() {

  const navigate = useNavigate ();
  // console.log(window.location)
  //const scroll = ScrollLink
  return (
    <>
      <Navbar expand="sm" className="mb-3">
        <Container fluid className="justify-content-end">
          <Navbar.Toggle aria-controls="offcanvasNavbar-expand-sm" />
          <Navbar.Offcanvas
            id="offcanvasNavbar-expand-sm"
            aria-labelledby="offcanvasNavbarLabel-expand-sm"
            placement="end"
            className="w-50"
          >
            <Offcanvas.Header closeButton className="pe-5">
              <Offcanvas.Title id="offcanvasNavbarLabel-expand-sm">
                BCR
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-center flex-grow-1 pe-3 gap-3 align-items-center">
                <Nav.Link>
                  <Link
                    activeClass="active"
                    to="our_services"
                    smooth={true}
                    spy={true}
                  >
                    Our Service
                  </Link>
                </Nav.Link>
                <Nav.Link>
                  <Link
                    activeClass="active"
                    to="why_us"
                    smooth={true}
                    spy={true}
                  >
                    Why Us
                  </Link>
                </Nav.Link>
                <Nav.Link>
                  <Link
                    activeClass="active"
                    to="testimoni"
                    smooth={true}
                    spy={true}
                  >
                    Testimonial
                  </Link>
                </Nav.Link>
                <Nav.Link>
                  <Link activeClass="active" to="FAQ" smooth={true} spy={true}>
                    FAQ
                  </Link>
                </Nav.Link>
                <Nav.Link>
                  {!Token ? (
                    <Button
                      variant="success"
                      className="px-4 py-1"
                      onClick={() => navigate("/login")}
                    >
                      Register
                    </Button>
                  ) : (
                    <Button
                      variant="success"
                      className="px-4 py-1"
                      onClick={() => {
                        navigate("/")
                        localStorage.removeItem("ACCESS_TOKEN")
                        window.location.reload()
                        
                    }}
                    >
                      Logout
                    </Button>
                  )}
                </Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}

export default OffcanvasNavbar;
