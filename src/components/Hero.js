import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";
import './component.css'

function Hero(props) {
  return (
    <Container>
      <Jumbotron className="bg-transparent">
        <Row>
          <Col id="herotext">
            <Image
              src="https://avatars1.githubusercontent.com/u/22259636?s=460&v=4"
              className="mx-auto d-block"
              width="150px"
              roundedCircle
            />
            {props.title && (
              <h3 className="display-3 font-weight-bolder">{props.title}</h3>
            )}
            {props.title && (
              <h5 className="display-5 font-weight-bolder">{props.subTitle}</h5>
            )}
            <Row id="secondrow">
            <Link to="reactPortfolio/portfolio">
              <Button id="first" size="lg">Portfolio</Button>
            </Link>
            <Link to="reactPortfolio/contact">
              <Button size="lg" id="second">Contact</Button>
            </Link>
            </Row>
          </Col>

        </Row>
      </Jumbotron>
    </Container>
  );
}

export default Hero;
