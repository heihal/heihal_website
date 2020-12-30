

import React from 'react'
import { Card, Carousel, CardDeck, Row, Container, Tooltip, Image, Nav, Overlay, Button, Navbar, Col } from 'react-bootstrap';
import { Textfit } from 'react-textfit';



const teksti = [
  {
    id: 1,
    content: [
      "Olen luonteeltani utelias, pidän ongelmien - teknisten ja luovien - ratkomisesta, siksi  haenkin uusia tapoja kehittää itseäni. Olen aina ollut kiinnostunut ",
      "siitä miten maailma toimii ja pienestä asti luonnontieteet ovat olleet lähellä sydäntäni.",
      " Olen sote-alan ammattilainen ja tällä hetkellä",
      "opiskelen yliopistossa tietotekniikkaa. Pyrin yhdistämään nämä kaksi alaa",
      "- kiinnostuksen kohdetta, ja tavoitteenani on kehittyä terveysteknologian ammattilaiseksi."]
    ,
    id: 2,
    content: [
      "sgOlen luonteeltani utelias, pidän ongelmien - teknisten ja luovien - ratkomisesta, siksi  haenkin uusia tapoja kehittää itseäni. Olen aina ollut kiinnostunut ",
      "siitä miten maailma toimii ja pienestä asti luonnontieteet ovat olleet lähellä sydäntäni.",
      " Olen sote-alan ammattilainen ja tällä hetkellä",
      "opiskelen yliopistossa tietotekniikkaa. Pyrin yhdistämään nämä kaksi alaa",
      "- kiinnostuksen kohdetta, ja tavoitteenani on kehittyä terveysteknologian ammattilaiseksi."]
  }
]





const Main = () => {

  return (


    <>

      <Container fluid>

        <Col   >
          <Row >
            <Card bg="warning" text="dark" style={{ width: '70rem', marginTop: "5vh" }} className="mb-2"   >
              <Card.Body>
                <h3>Profiili</h3>
                <Textfit>Olen luonteeltani utelias, pidän ongelmien - teknisten ja luovien - ratkomisesta, siksi
                haenkin uusia tapoja kehittää itseäni. Olen aina ollut kiinnostunut
                siitä miten maailma toimii ja pienestä asti luonnontieteet ovat olleet lähellä sydäntäni.
                Olen sote-alan ammattilainen ja tällä hetkellä
                opiskelen yliopistossa tietotekniikkaa. Pyrin yhdistämään nämä kaksi alaa
           - kiinnostuksen kohdetta, ja tavoitteenani on kehittyä terveysteknologian ammattilaiseksi.</Textfit>


              </Card.Body>
            </Card>
          </Row>
          <Row >
            <Card bg="warning" text="dark" style={{ width: '70rem', marginTop: "5vh" }} className="mb-2"  >
              <Card.Body>
                <h3>First slide label</h3>
            "dfhOlen luonteeltani utelias, pidän ongelmien - teknisten ja luovien - ratkomisesta, siksi  haenkin uusia tapoja kehittää itseäni. Olen aina ollut kiinnostunut ",
           "siitä miten maailma toimii ja pienestä asti luonnontieteet ovat olleet lähellä sydäntäni.",
           " Olen sote-alan ammattilainen ja tällä hetkellä",
           "opiskelen yliopistossa tietotekniikkaa. Pyrin yhdistämään nämä kaksi alaa",
           "- kiinnostuksen kohdetta, ja tavoitteenani on kehittyä terveysteknologian ammattilaiseksi."
            </Card.Body>
            </Card>
          </Row>
        </Col>

      </Container>
    </>



  );

}








export default Main;