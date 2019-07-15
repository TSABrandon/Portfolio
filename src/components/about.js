import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";
import './component.css'

function About(props) {
  return (
    <Container>
      <Jumbotron className="bg-transparent">
        <Row>
          <Col id="herotext">
          {props.title && (
              <h1 className="display-3 font-weight-bolder text-center">{props.title}</h1>
            )}
            <br/>
            <br/>
            <p className="display-5"> Hello, my name is Brandon, Im a Frontend Developer with experience in HTML, CSS, Javascript, HAML, React, Node JS, Ruby on Rails, wordpress and other CMS .</p>
            <p className="display-5"> I'm constantly learning new things. currently those things include gaining more experience with, Javascript, React, Node JS and Backend Development specifically Ruby on Rails.</p>
            <p className="display-5"> My Goal is to be a full stack developer and Im currently learning more deeper about backend development and hopefully switch to Fullstack role someday</p>
           </Col>
        </Row>
      </Jumbotron>
    </Container>
  );
}

export default About;
