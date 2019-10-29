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
            <p className="display-5"> Hello, my name is Brandon, Im Developer with experience in HTML, CSS, Javascript, HAML, React, Angular, Ionic, cordova, Node JS, Ruby on Rails, wordpress and other CMS .</p>
            <p className="display-5"> I'm constantly learning new things, currently those things include gaining more experience with Javascript, React, Angular, Node JS, App development and Backend Development specifically Ruby on Rails.</p>
           </Col>
        </Row>
      </Jumbotron>
    </Container>
  );
}

export default About;
