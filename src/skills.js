
import { IoCode } from 'react-icons/io5';
import { FaHatWizard } from 'react-icons/fa';
import ListGroup from 'react-bootstrap/ListGroup'
import styles from './index.css';
import React, { useState, useEffect} from 'react'
import Card from 'react-bootstrap/Card';
import Accordion from 'react-bootstrap/Accordion'
import Badge from 'react-bootstrap/Badge'
import ProgressBar from 'react-bootstrap/ProgressBar'
import axios from 'axios'
import './index.css';



const Skills = () => {
  const [koulutus, setKoulutus] = useState([])
  const [lang, setLang] = useState([])
  
  useEffect(() => {
    axios
    .get('db.json')
    .then(response => { 
      setKoulutus(response.data.skills)
      setLang(response.data.lang)
    });
    }, [])



  const cardStyle = {
    backgroundColor: ' #434343',
    body: {
      backgroundColor: ' #2f2f2f'
    },
    textAlign: "center"
  }


  return (
    <div style={{ width:"75%", marginLeft:"13%", backgroundColor:"#434343",marginTop:"2%" }}>

      <h2 style={{ textAlign: "center", opacity:"70%" }}><FaHatWizard /> Koulutus</h2>


      {koulutus.map(x => (
        <div key={x.id}>
          <Accordion variant="dark">
            <Card style={cardStyle}>
              <Accordion.Toggle as={Card.Header} eventKey="0" className="koulutusKortti">
                <Badge pill variant="warning">{x.date}</Badge> {x.title}
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="0">
                <Card.Body style={cardStyle.body} >
                  {x.content}
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        </div>))}
      <hr />
      <h2 style={{ textAlign: "center", opacity:"70%" }}>Muut tiedot ja taidot</h2>
      <hr />
      <h3 style={{ textAlign: "center", opacity:"70%" }}>Kielitaito</h3>
      <div>
        <ProgressBar striped variant="success" now={100} label={"suomi"} style={{ backgroundColor: ' #434343', fontSize:"20px", height:"100%" }} />
        <ProgressBar striped variant="info" now={80} label={"englanti"} style={{ backgroundColor: ' #434343', fontSize:"20px", height:"100%" }} />
        <ProgressBar striped variant="warning" now={40} label={"ruotsi"} style={{ backgroundColor: ' #434343', fontSize:"20px",height:"100%"  }} />

      </div>
      <h3 style={{ textAlign: "center", opacity:"70%" }}><IoCode /> Osaamisalueet</h3>
      <div style={{ textAlign: "center" }}>
        {lang.map(x => {

          return <Badge pill variant="warning" key={x.id} style={{ padding: "15px", marginRight: "15px" }} >
            {x.content}
          </Badge>

        })}

      </div>
      <hr />
      <h3 style={{ textAlign: "center", opacity:"70%" }}>Harrastukset ja muut kiinnostuksen kohteet</h3>

      <ListGroup variant="flush" style={{ textAlign: "center" }} >
        <ListGroup.Item style={styles.lista} bsPrefix="lista"  >Taidemaalaus</ListGroup.Item>
        <ListGroup.Item style={styles.lista} bsPrefix="lista" >Autojen korjaus ja ohjelmointi</ListGroup.Item>
        <ListGroup.Item style={styles.lista} bsPrefix="lista" > Lukeminen </ListGroup.Item>
        <ListGroup.Item style={styles.lista} bsPrefix="lista" > Elektroniikka (mikrokontrollerit, robotit, IoT, tietokoneet)</ListGroup.Item>
      </ListGroup>
      <hr />

    </div>

  )











}








export default Skills;