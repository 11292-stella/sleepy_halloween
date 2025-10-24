import { Container, Row, Col, Image } from "react-bootstrap"

import "../styles/spiritboard.css"
const SpiritBoard = function () {
  return (
    <>
      <section id="spirit-board" className="py-5">
        <div className="page-background d-flex flex-column min-vh-100">
          <Container className="flex-grow-1 py-5">
            <Row className="justify-content-center">
              <Col
                md={8}
                lg={6}
                className="d-flex flex-column align-items-center text-light"
              >
                <div className="spiritboard-wrapper">
                  <div className="spiritboard-container">
                    <img
                      src="/tavola.png"
                      alt="Spirit Board"
                      className="spiritboard-img"
                    />
                    <div className="overlay">{/* simboli cliccabili */}</div>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </section>
    </>
  )
}
export default SpiritBoard
