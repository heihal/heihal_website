import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';



import Sidebar from './sidebar.js';
import Main from './main';
import { Col, Container, Row } from 'react-bootstrap';

import Skills from './skills';
import {
  BrowserRouter as Router,
  Switch, Route, Link
} from "react-router-dom"




const App = () => {

  return (
    <>
     <Router>
        <Container fluid>
          <Row>
            <Col xs={2} id="sidebar-wrapper" >
              <Sidebar />
            </Col>
            <Col xs={10} id="main-content-wrapper">
              <Switch>
                <Route exact path="/" component={Main} />
                <Route path="/main" component={Main} />
                <Route exact path="/skills" component={Skills} />
                
              </Switch>
            </Col>
          </Row>
        </Container>
      </Router>

    </>
  );
}
ReactDOM.render(<App />, document.getElementById('root'));

