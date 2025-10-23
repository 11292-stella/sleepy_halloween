import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"

import "../styles/navbar.css"
const MyNav = function () {
  return (
    <>
      <Navbar expand="lg" className="navbar text-danger" fixed="top">
        <Container className="d-flex justify-content-between align-items-center">
          {/* Logo + Brand */}
          <Navbar.Brand
            className="d-flex align-items-center"
            style={{ cursor: "pointer" }}
          >
            <img
              src="/logo.png"
              width="80"
              height="80"
              className="d-inline-block align-middle"
              alt="Sleepy Halloween logo"
            />
            <span className="ms-3 fs-3">Sleepy Halloween</span>
          </Navbar.Brand>

          {/* Center decoration: pipistrelli (solo su desktop) */}
          <div className="navbar-center-decoration d-none d-lg-block mx-auto">
            <img
              src="/pipistrelli.png"
              width="350"
              height="200"
              alt="Pipistrelli decorativi"
            />
          </div>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="d-flex align-items-center"
          >
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
            </Nav>

            <div className="navbar-right-decoration d-none d-lg-block">
              <img
                src="/zucche.png"
                width="120"
                height="90"
                className="mx-2"
                alt="Zucche decorative"
              />
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default MyNav
