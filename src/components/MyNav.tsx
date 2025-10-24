import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
import { useNavigate, useLocation } from "react-router-dom"
import { useState, useEffect } from "react"
import "../styles/navbar.css"

const MyNav = function () {
  const [scrolled, setScrolled] = useState(false)
  const [expanded, setExpanded] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()

  // Cambia colore navbar allo scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Scroll manuale alla sezione
  const handleScrollToSection = (sectionId: string) => {
    if (location.pathname !== "/home") {
      navigate("/home")
      setExpanded(false)
      setTimeout(() => {
        const section = document.getElementById(sectionId)
        if (section) {
          section.scrollIntoView({ behavior: "smooth" })
        }
      }, 500)
    } else {
      const section = document.getElementById(sectionId)
      if (section) {
        section.scrollIntoView({ behavior: "smooth" })
      }
      setExpanded(false)
    }
  }

  return (
    <Navbar
      expand="lg"
      fixed="top"
      variant="dark"
      expanded={expanded}
      onToggle={() => setExpanded(!expanded)}
      className={`py-3 transition-nav ${
        scrolled || expanded ? "navColor" : "bg-transparent"
      }`}
      aria-label="Navigazione principale"
    >
      <Container className="d-flex justify-content-between align-items-center">
        {/* Logo + Brand */}
        <Navbar.Brand
          onClick={() => handleScrollToSection("home")}
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
          <span className="ms-3 fs-3 ">Sleepy Halloween</span>
        </Navbar.Brand>

        {/* Decorazione centrale: pipistrelli */}
        <div className="navbar-center-decoration d-none d-lg-block mx-auto">
          <img
            src="/pipistrelli.png"
            width="350"
            height="200"
            alt="Pipistrelli decorativi"
          />
        </div>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link
              className="text1"
              onClick={() => handleScrollToSection("spirit-board")}
            >
              Spirit Board
            </Nav.Link>
            <Nav.Link
              className="text1"
              onClick={() => handleScrollToSection("quotes")}
            >
              Quotes
            </Nav.Link>
            <Nav.Link className="text1" onClick={() => navigate("/contatti")}>
              Contatti
            </Nav.Link>
          </Nav>

          {/* Decorazione destra: zucche */}
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
  )
}

export default MyNav
