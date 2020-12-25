import React, { useState,useRef } from 'react'
import { Row, Container, Tooltip ,Image,Nav,Overlay,Button  } from "react-bootstrap";
import naama from './naama.jpg'
import { AiFillGithub, AiFillLinkedin, AiFillGitlab,AiFillMail } from 'react-icons/ai';
import { Link } from "react-router-dom"

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]




const Sidebar = (anectdotes) => {
  const [selected, setSelected] = useState(0)
  const [show, setShow] = useState(false);
  const target = useRef(null);

  const annaA = () => {
    let joku = anecdotes[Math.floor(Math.random() * anecdotes.length)]
    setShow(!show)
    if(!show){setSelected(joku)}  
  }


  return (

    <Container>
      <Overlay target={target.current} show={show} placement="right">
        {(props) => (
          <Tooltip id="overlay-example" {...props}>
            {selected}
          </Tooltip>
        )}
      </Overlay>

      <Row>
        <Image src={naama} roundedCircle fluid ref={target} onClick={() => annaA()} />
       
      </Row>
      
      <Row style={{justifyContent:"center"}} >
      <div style={{textAlign:"center", opacity:"70%"}}>
          <h1 >HEINI</h1>
        <h1 >HALMETOJA</h1>
          </div>
          <div style={{textAlign:"center", opacity:"20%"}}>
          <h3 >Full Stack & Embedded Dev</h3>
        
          </div>
      
      </Row>
      <hr/>
      <Row style={{justifyContent:"center"}}>

        <Nav defaultActiveKey="/main" className="flex-column" >
     
          <Nav.Link href="/main" style={{ color: ' azure'}}>Profiili</Nav.Link>
          <Nav.Link href="/skills" style={{ color: ' azure'}}>Taidot</Nav.Link>
          <Nav.Link href="/skills" >Yhteystiedot</Nav.Link>
          
        </Nav>
        
        
      </Row>
      <hr/>
      <Row style={{justifyContent:"center"}}>

        <Nav defaultActiveKey="/home" as="ul">
          <Nav.Item as="li">
            <Nav.Link href="https://github.com/heihal" style={{ color: ' azure' }}><AiFillGithub /></Nav.Link>
          </Nav.Item>
          <Nav.Item as="li">
            <Nav.Link href="https://gitlab.utu.fi/hemhal" eventKey="link-1"style={{ color: ' azure' }}><AiFillGitlab /></Nav.Link>
          </Nav.Item>
          <Nav.Item as="li">
            <Nav.Link href="https://linkedin.com/in/heini-halmetoja" eventKey="link-2"style={{ color: ' azure' }}><AiFillLinkedin /></Nav.Link>
          </Nav.Item>
          <Nav.Item as="li">
            <Nav.Link href="mailto:heini.halmetoja@wippies.fi" eventKey="link-2"style={{ color: ' azure' }}><AiFillMail /></Nav.Link>
          </Nav.Item>
        </Nav>
      </Row>
      <hr/>
      <Row style={{justifyContent:"center"}}>
      <Link to= "/2020-12-26_Halmetoja_Heini_CV.pdf" target="_blank" download><Button variant="warning">Lataa CV</Button></Link>
      </Row>
    </Container>
  );

}








export default Sidebar;