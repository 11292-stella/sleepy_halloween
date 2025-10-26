import { Container, Row, Col } from "react-bootstrap"
import { useState } from "react"
import "../styles/spiritboard.css"

const SpiritBoard = function () {
  const [clicked, setClicked] = useState(false)

  const handleClick = () => {
    setClicked(true)
    setTimeout(() => setClicked(false), 600)

    const sound = document.getElementById("horror-sound") as HTMLAudioElement
    if (sound) sound.play()

    triggerBats()
  }

  const triggerBats = () => {
    const bats = document.querySelectorAll(".bat")
    bats.forEach((bat) => {
      bat.classList.remove("fly")
      void (bat as HTMLElement).offsetWidth // forza il reflow
      bat.classList.add("fly")
    })
  }

  return (
    <>
      <section id="spirit-board" className="py-5">
        {/* Audio creepy */}
        <audio id="horror-sound" src="/sounds/creepy.mp3" preload="auto" />

        <div className="page-background d-flex flex-column min-vh-100">
          <Container className="flex-grow-1 py-5">
            {/* Pipistrelli */}
            <div className="bats">
              <img src="/simpoli/bat.png" className="bat bat1" />
              <img src="/simpoli/bat1.png" className="bat bat2" />
            </div>

            <Row className="justify-content-center">
              <Col
                xs={12}
                md={10}
                lg={10}
                className="d-flex flex-column align-items-center text-light"
              >
                <div className="spiritboard">
                  <img
                    src="/tavola.png"
                    alt="Spirit Board"
                    className="spiritboard-img"
                  />

                  {/* Simbolo 1 */}
                  <div className="img1">
                    <img
                      src="/simpoli/1.png"
                      alt="Simbolo 1"
                      className={`symbol-img1 ${clicked ? "clicked" : ""}`}
                      onClick={handleClick}
                    />
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
