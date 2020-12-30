import React, { useState, useRef } from 'react'
import { Row, Container, Tooltip, Image, Nav, Overlay, Button, Navbar } from "react-bootstrap";
import naama from './naama.jpg'
import { AiFillGithub, AiFillLinkedin, AiFillGitlab, AiFillMail } from 'react-icons/ai';
import { Link } from "react-router-dom"
import { Textfit } from 'react-textfit';
import './index.css';

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]




const Sidebar = (anectdotes, anec) => {
  const [selected, setSelected] = useState(0)
  const [show, setShow] = useState(false);
  const target = useRef(null);

  const annaA = () => {
    let joku = anecdotes[Math.floor(Math.random() * anecdotes.length)]
    setShow(!show)
    if (!show) { setSelected(joku) }
  }



  return (

    <Container fluid ="xs" >
      <Overlay target={target.current} show={show} placement="right">
        {(props) => (
          <Tooltip id="tt" {...props}>
            {selected}
          </Tooltip>
        )}
      </Overlay>

      <Row className="rowText" >
        <Image className="naama" src={naama} roundedCircle fluid ref={target} onClick={() => annaA()} />
      </Row>

      <Row className="rowText">
        
          <Textfit style={{ opacity: "70%"}} mode="multi">
           <h4>HEINI HALMETOJA</h4> 
            </Textfit>
          
        
          <Row className="row">
        
       
        <Textfit style={{opacity: "20%" }} mode="multi">Full Stack & Embedded Dev</Textfit>
      
    

    </Row>

      </Row>
      <hr />
      <Row className="rowText">
         
        <Nav fill defaultActiveKey="/main" className="flex-column">

          <Nav.Link href="/main" > <h4 className="linkit" >Profiili</h4> </Nav.Link>
          <Nav.Link href="/skills"> <h4 className="linkit">Taidot</h4></Nav.Link>
          <Nav.Link href="/skills" > <h4 className="linkit" xs="auto" > Yhteystiedot</h4> </Nav.Link>
            

        </Nav>
       

      </Row>
      <hr />
      <Row className="row">
        <Nav defaultActiveKey="/home" as="ul" style={{justifyContent:"center", width:"100%"}}>
          <Nav.Item as="li">
            <Nav.Link href="https://github.com/heihal" >
            <h3 className="linkit" ><AiFillGithub /></h3>
              </Nav.Link>
          </Nav.Item>
          <Nav.Item as="li">
            <Nav.Link href="https://gitlab.utu.fi/hemhal" eventKey="link-1" >
            <h3 className="linkit" ><AiFillGitlab /></h3></Nav.Link>
          </Nav.Item>
          <Nav.Item as="li">
            <Nav.Link href="https://linkedin.com/in/heini-halmetoja" eventKey="link-2" >
              
              <h3 className="linkit" ><AiFillLinkedin /></h3>
              </Nav.Link>
          </Nav.Item>
          <Nav.Item as="li">
            <Nav.Link href="mailto:heini.halmetoja@wippies.fi" eventKey="link-3">
              
              <h3 className="linkit" ><AiFillMail /></h3>
              </Nav.Link>
          </Nav.Item>
        </Nav>
      </Row>
      <hr />
      <Row className="rowText">
        <Link to="/2020-12-26_Halmetoja_Heini_CV.pdf" target="_blank" download><Button variant="warning">Lataa CV</Button></Link>
      </Row>
    </Container>
  );

}








export default Sidebar;