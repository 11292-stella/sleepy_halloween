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

  const handleClick = (symbolId: string) => {
    setClicked(true)
    setTimeout(() => setClicked(false), 600)

    const sound = document.getElementById("horror-sound") as HTMLAudioElement
    if (sound) sound.play()

    triggerBats()

    const card = cards.find((c) => c.id === symbolId)
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

                {activeCard && (
                  <div className="spirit-card-overlay">
                    <Card
                      className="text-light bg-dark card-custom "
                      style={{
                        width: "20rem",
                        position: "relative",
                        zIndex: 4,
                      }}
                    >
                      {/* Immagine della carta */}
                      <Card.Img
                        variant="top"
                        src={activeCard.image}
                        alt={activeCard.title}
                        className="card-img"
                      />

                      {/* Corpo della carta */}
                      <Card.Body>
                        <Card.Title className="flicker-text">
                          {activeCard.title}
                        </Card.Title>
                        <Card.Text className="whisper-text">
                          {activeCard.description}
                        </Card.Text>
                        <div className="d-flex justify-content-end">
                          <Button
                            variant="outline-light"
                            onClick={() => setActiveCard(null)}
                          >
                            Chiudi
                          </Button>
                        </div>
                      </Card.Body>

                      {/* Effetti decorativi - spostati sotto per essere sopra tutto */}
                      <div className="fog-border"></div>
                      <div className="web web-top-left"></div>
                      <div className="web web-bottom-right"></div>
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
                      onClick={() => handleClick("symbol1")}
                    />
                  </div>

                  <div className="img2">
                    <img
                      src="/simpoli/2.png"
                      alt="Simbolo 2"
                      className={`symbol-img2 ${clicked ? "clicked" : ""}`}
                      onClick={() => handleClick("symbol2")}
                    />
                  </div>
                  <div className="img3">
                    <img
                      src="/simpoli/3.png"
                      alt="Simbolo 3"
                      className={`symbol-img3 ${clicked ? "clicked" : ""}`}
                      onClick={() => handleClick("symbol3")}
                    />
                  </div>
                  <div className="img4">
                    <img
                      src="/simpoli/4.png"
                      alt="Simbolo 4"
                      className={`symbol-img4 ${clicked ? "clicked" : ""}`}
                      onClick={() => handleClick("symbol4")}
                    />
                  </div>
                  <div className="img5">
                    <img
                      src="/simpoli/5.png"
                      alt="Simbolo 5"
                      className={`symbol-img5 ${clicked ? "clicked" : ""}`}
                      onClick={() => handleClick("symbol5")}
                    />
                  </div>
                  <div className="img6">
                    <img
                      src="/simpoli/6.png"
                      alt="Simbolo 6"
                      className={`symbol-img6 ${clicked ? "clicked" : ""}`}
                      onClick={() => handleClick("symbol6")}
                    />
                  </div>
                  <div className="img7">
                    <img
                      src="/simpoli/7.png"
                      alt="Simbolo 7"
                      className={`symbol-img7 ${clicked ? "clicked" : ""}`}
                      onClick={() => handleClick("symbol7")}
                    />
                  </div>
                  <div className="img8">
                    <img
                      src="/simpoli/8.png"
                      alt="Simbolo 8"
                      className={`symbol-img8 ${clicked ? "clicked" : ""}`}
                      onClick={() => handleClick("symbol8")}
                    />
                  </div>

                  <div className="img9">
                    <img
                      src="/simpoli/9.png"
                      alt="Simbolo 9"
                      className={`symbol-img9 ${clicked ? "clicked" : ""}`}
                      onClick={() => handleClick("symbol9")}
                    />
                  </div>
                  <div className="img10">
                    <img
                      src="/simpoli/10.png"
                      alt="Simbolo 10"
                      className={`symbol-img10 ${clicked ? "clicked" : ""}`}
                      onClick={() => handleClick("symbol10")}
                    />
                  </div>
                  <div className="img11">
                    <img
                      src="/simpoli/11.png"
                      alt="Simbolo 11"
                      className={`symbol-img11 ${clicked ? "clicked" : ""}`}
                      onClick={() => handleClick("symbol11")}
                    />
                  </div>

                  <div className="img12">
                    <img
                      src="/simpoli/12.png"
                      alt="Simbolo 12"
                      className={`symbol-img12 ${clicked ? "clicked" : ""}`}
                      onClick={() => handleClick("symbol12")}
                    />
                  </div>

                  <div className="img13">
                    <img
                      src="/simpoli/13.png"
                      alt="Simbolo 13"
                      className={`symbol-img13 ${clicked ? "clicked" : ""}`}
                      onClick={() => handleClick("symbol13")}
                    />
                  </div>

                  <div className="img14">
                    <img
                      src="/simpoli/14.png"
                      alt="Simbolo 14"
                      className={`symbol-img14 ${clicked ? "clicked" : ""}`}
                      onClick={() => handleClick("symbol14")}
                    />
                  </div>

                  <div className="img15">
                    <img
                      src="/simpoli/15.png"
                      alt="Simbolo 15"
                      className={`symbol-img15 ${clicked ? "clicked" : ""}`}
                      onClick={() => handleClick("symbol15")}
                    />
                  </div>
                  <div className="img16">
                    <img
                      src="/simpoli/16.png"
                      alt="Simbolo 16"
                      className={`symbol-img16 ${clicked ? "clicked" : ""}`}
                      onClick={() => handleClick("symbol16")}
                    />
                  </div>

                  <div className="img17">
                    <img
                      src="/simpoli/17.png"
                      alt="Simbolo 17"
                      className={`symbol-img17 ${clicked ? "clicked" : ""}`}
                      onClick={() => handleClick("symbol17")}
                    />
                  </div>
                  <div className="img18">
                    <img
                      src="/simpoli/18.png"
                      alt="Simbolo 18"
                      className={`symbol-img18 ${clicked ? "clicked" : ""}`}
                      onClick={() => handleClick("symbol18")}
                    />
                  </div>
                  <div className="img19">
                    <img
                      src="/simpoli/19.png"
                      alt="Simbolo 19"
                      className={`symbol-img19 ${clicked ? "clicked" : ""}`}
                      onClick={() => handleClick("symbol19")}
                    />
                  </div>
                  <div className="img20">
                    <img
                      src="/simpoli/20.png"
                      alt="Simbolo 20"
                      className={`symbol-img20 ${clicked ? "clicked" : ""}`}
                      onClick={() => handleClick("symbol20")}
                    />
                  </div>

                  <div className="img21">
                    <img
                      src="/simpoli/21.png"
                      alt="Simbolo 21"
                      className={`symbol-img21 ${clicked ? "clicked" : ""}`}
                      onClick={() => handleClick("symbol21")}
                    />
                  </div>
                  <div className="img22">
                    <img
                      src="/simpoli/22.png"
                      alt="Simbolo 22"
                      className={`symbol-img22 ${clicked ? "clicked" : ""}`}
                      onClick={() => handleClick("symbol22")}
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
