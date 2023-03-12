import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { useNavigate } from "react-router-dom";

function OffcanvasNavbar() {

  const navigate = useNavigate ();
  // console.log(window.location)
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
              <Nav className="justify-content-center flex-grow-1 pe-3 gap-3">
                <Nav.Link onClick={() => navigate("/")}>Our Service</Nav.Link>
                <Nav.Link onClick={() => navigate("/")}>
                  Why Us
                </Nav.Link>
                <Nav.Link onClick={() => navigate("/")}>
                  Testimonial
                </Nav.Link>
                <Nav.Link onClick={() => navigate("/")}>FAQ</Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}

export default OffcanvasNavbar;
