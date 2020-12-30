import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';



import Sidebar from './sidebar.js';
import Main from './main';
import { Col, Container, Row } from 'react-bootstrap';

import Skills from './skills';
import {
  BrowserRouter as Router,
  Switch, Route
} from "react-router-dom"
import ReactGA from 'react-ga';




const App = () => {
  ReactGA.initialize('UA-127314664-1');
  ReactGA.pageview(window.location.pathname + window.location.search)

  return (
    <>
     <Router>
        <Container fluid>
          <Row >
            <Col xs="auto" lg={2} id="sidebar-wrapper" >
              <Sidebar  />
            </Col>
            <Col xs="auto" lg={10}  id="main-content-wrapper">
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

