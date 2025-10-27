import { Container, Row, Col, Card, Button } from "react-bootstrap"
import { useState } from "react"
import "../styles/spiritboard.css"
import cards from "../cards.json"

const SpiritBoard = function () {
  const [clicked, setClicked] = useState(false)
  type Card = {
    id: string
    title: string
    description: string
    image: string
  }

  const [activeCard, setActiveCard] = useState<Card | null>(null)

  const handleClick = () => {
    setClicked(true)
    setTimeout(() => setClicked(false), 600)

    const sound = document.getElementById("horror-sound") as HTMLAudioElement
    if (sound) sound.play()

    triggerBats()
    const card = cards.find((c) => c.id === "symbol1")
    if (card) setActiveCard(card)
  }

  const triggerBats = () => {
    const bats = document.querySelectorAll(".bat")
    bats.forEach((bat) => {
      bat.classList.remove("fly")
      void (bat as HTMLElement).offsetWidth
      bat.classList.add("fly")
    })
  }

  return (
    <>
      <section id="spirit-board" className="py-2">
        {/* Audio creepy */}
        <audio id="horror-sound" src="/sounds/creepy.mp3" preload="auto" />

        <div className="page-background d-flex flex-column min-vh-100">
          <Container className="flex-grow-1 py-5">
            {/* Pipistrelli */}
            <div className="bats">
              <img src="/simpoli/bat.png" className="bat bat3" />
              <img src="/simpoli/bat1.png" className="bat bat1" />
              <img src="/simpoli/bat2.png" className="bat bat2" />
            </div>

            <Row className="justify-content-center">
              <Col
                xs={12}
                md={10}
                lg={10}
                className="d-flex flex-column align-items-center text-light position-relative"
              >
                {/* Titolo e presentazione */}

                <h1 className="spooky-title mt-4">
                  Sleepy Halloween presenta: Spiritflix
                </h1>
                <p className=" text-center spooky-subtitle">
                  Benvenuti su <strong>Sleepy Halloween</strong>, <br /> la
                  tavola spiritica che non evoca anime… ma film horror. <br />{" "}
                  Clicca uno dei simboli incisi sulla tavola: ogni tocco è un
                  richiamo ultraterreno, <br /> ogni simbolo nasconde un titolo
                  maledetto, un’immagine evocativa e una citazione che ti farà
                  venire i brividi!
                </p>

                {/* Card dinamica sopra la tavola */}
                {activeCard && (
                  <div className="spirit-card-overlay">
                    <Card
                      className="text-light bg-dark  shadow mt-3"
                      style={{ width: "20rem" }}
                    >
                      <Card.Img
                        variant="top"
                        src={activeCard.image}
                        alt={activeCard.title}
                      />
                      <Card.Body>
                        <Card.Title>{activeCard.title}</Card.Title>
                        <Card.Text>{activeCard.description}</Card.Text>
                        <div className="d-flex justify-content-end">
                          <Button
                            variant="outline-light"
                            onClick={() => setActiveCard(null)}
                          >
                            Chiudi
                          </Button>
                        </div>
                      </Card.Body>
                    </Card>
                  </div>
                )}

                {/* Tavola e simboli */}
                <div className="spiritboard ">
                  <img
                    src="/tavola.png"
                    alt="Spirit Board"
                    className="spiritboard-img"
                  />

                  <div className="img1">
                    <img
                      src="/simpoli/1.png"
                      alt="Simbolo 1"
                      className={`symbol-img1 ${clicked ? "clicked" : ""}`}
                      onClick={handleClick}
                    />
                  </div>

                  <div className="img2">
                    <img
                      src="/simpoli/2.png"
                      alt="Simbolo 1"
                      className={`symbol-img2 ${clicked ? "clicked" : ""}`}
                      onClick={handleClick}
                    />
                  </div>
                  <div className="img3">
                    <img
                      src="/simpoli/3.png"
                      alt="Simbolo 1"
                      className={`symbol-img3 ${clicked ? "clicked" : ""}`}
                      onClick={handleClick}
                    />
                  </div>
                  <div className="img4">
                    <img
                      src="/simpoli/4.png"
                      alt="Simbolo 1"
                      className={`symbol-img4 ${clicked ? "clicked" : ""}`}
                      onClick={handleClick}
                    />
                  </div>
                  <div className="img5">
                    <img
                      src="/simpoli/5.png"
                      alt="Simbolo 1"
                      className={`symbol-img5 ${clicked ? "clicked" : ""}`}
                      onClick={handleClick}
                    />
                  </div>
                  <div className="img6">
                    <img
                      src="/simpoli/6.png"
                      alt="Simbolo 1"
                      className={`symbol-img6 ${clicked ? "clicked" : ""}`}
                      onClick={handleClick}
                    />
                  </div>
                  <div className="img7">
                    <img
                      src="/simpoli/7.png"
                      alt="Simbolo 1"
                      className={`symbol-img7 ${clicked ? "clicked" : ""}`}
                      onClick={handleClick}
                    />
                  </div>
                  <div className="img8">
                    <img
                      src="/simpoli/8.png"
                      alt="Simbolo 1"
                      className={`symbol-img8 ${clicked ? "clicked" : ""}`}
                      onClick={handleClick}
                    />
                  </div>

                  <div className="img9">
                    <img
                      src="/simpoli/9.png"
                      alt="Simbolo 1"
                      className={`symbol-img9 ${clicked ? "clicked" : ""}`}
                      onClick={handleClick}
                    />
                  </div>
                  <div className="img10">
                    <img
                      src="/simpoli/10.png"
                      alt="Simbolo 1"
                      className={`symbol-img10 ${clicked ? "clicked" : ""}`}
                      onClick={handleClick}
                    />
                  </div>
                  <div className="img11">
                    <img
                      src="/simpoli/11.png"
                      alt="Simbolo 1"
                      className={`symbol-img11 ${clicked ? "clicked" : ""}`}
                      onClick={handleClick}
                    />
                  </div>

                  <div className="img12">
                    <img
                      src="/simpoli/12.png"
                      alt="Simbolo 1"
                      className={`symbol-img12 ${clicked ? "clicked" : ""}`}
                      onClick={handleClick}
                    />
                  </div>

                  <div className="img13">
                    <img
                      src="/simpoli/13.png"
                      alt="Simbolo 1"
                      className={`symbol-img13 ${clicked ? "clicked" : ""}`}
                      onClick={handleClick}
                    />
                  </div>

                  <div className="img14">
                    <img
                      src="/simpoli/14.png"
                      alt="Simbolo 1"
                      className={`symbol-img14 ${clicked ? "clicked" : ""}`}
                      onClick={handleClick}
                    />
                  </div>

                  <div className="img14">
                    <img
                      src="/simpoli/14.png"
                      alt="Simbolo 1"
                      className={`symbol-img14 ${clicked ? "clicked" : ""}`}
                      onClick={handleClick}
                    />
                  </div>
                  <div className="img15">
                    <img
                      src="/simpoli/15.png"
                      alt="Simbolo 1"
                      className={`symbol-img15 ${clicked ? "clicked" : ""}`}
                      onClick={handleClick}
                    />
                  </div>
                  <div className="img16">
                    <img
                      src="/simpoli/16.png"
                      alt="Simbolo 1"
                      className={`symbol-img16 ${clicked ? "clicked" : ""}`}
                      onClick={handleClick}
                    />
                  </div>

                  <div className="img17">
                    <img
                      src="/simpoli/17.png"
                      alt="Simbolo 1"
                      className={`symbol-img17 ${clicked ? "clicked" : ""}`}
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
