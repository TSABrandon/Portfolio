import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import CardGroup from "react-bootstrap/CardGroup";
import CardDeck from "react-bootstrap/CardDeck";
import Card from "react-bootstrap/Card";

import "./component.css";

function Portfolio(props) {

  const portfolioStyle = {
    marginBottom: "100px"
  }

  return (
    <>
      <Row className="justify-content-md-center mt-5">
        <Col lg={3} >
          <Card mt={5}>
            <Card.Img width="10px" variant="top" src="https://tsabrandon.github.io/portfolioNew/img/consultancyBanner.png" />
            <Card.Body className="text-center">
              <Card.Title>Responsive Design</Card.Title>
              <Card.Text>
                A responsive website using pure css hosted using github
    </Card.Text>
              <Button className="text-center" href="https://tsabrandon.github.io/consultancy/" target="_blank">View</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={3} >
          <Card className="m-1" mx-style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://tsabrandon.github.io/portfolioNew/img/p5.png" />
            <Card.Body className="text-center">
              <Card.Title>Tech Digital Solution</Card.Title>
              <Card.Text>
                Responsive Design using bootstrap hosted in github
    </Card.Text>
              <Button className="text-center" href="https://tsabrandon.github.io/carousel" target="_blank">View</Button>
            </Card.Body>
          </Card>

        </Col>
        <Col lg={3} >
          <Card className="m-1" mx-style={{ width: '18rem' }}>
            <Card.Img variant="top" height="110px" src="https://raw.githubusercontent.com/Tsabrandon/portfolioNew/master/img/crudappbanner.png" />
            <Card.Body className="text-center">
              <Card.Title>CRUD React</Card.Title>
              <Card.Text>
                Simple CRUD App using Reactjs and bootstrap
    </Card.Text>
              <Button className="text-center" href="https://tsabrandon.github.io/SitepointJrTestGHPages/" target="_blank">View</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={3} >
          <Card className="m-1" mx-style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://tsabrandon.github.io/portfolioNew/img/flappyBanner.png" />
            <Card.Body className="text-center">
              <Card.Title>Flappy Man</Card.Title>
              <Card.Text>
                Flappy Bird Game Clone using Phaserjs
    </Card.Text>
              <Button className="text-center" href="https://tsabrandon.github.io/flappyman/" target="_blank">View</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="mt-5" style={portfolioStyle}>
        <Col lg={3} >
          <Card className="m-1" mx-style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://tsabrandon.github.io/portfolioNew/img/todojsBanner.png" />
            <Card.Body className="text-center">
              <Card.Title>Todolist</Card.Title>
              <Card.Text>
                Todolist using javascript and materialize
    </Card.Text>
              <Button className="text-center" href="https://tsabrandon.github.io/todojs/" target="_blank">View</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={3} >
          <Card className="m-1" mx-style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://tsabrandon.github.io/portfolioNew/img/netNinja.png" />
            <Card.Body className="text-center">
              <Card.Title>The Net Ninja Clone</Card.Title>
              <Card.Text>
                Net Ninja Website clone using HTML and CSS
              </Card.Text>
              <Button className="text-center" formtarget="_blank" href="https://tsabrandon.github.io/TheNetNinjaClone/" target="_blank">View</Button>
            </Card.Body>
          </Card>

        </Col>
        <Col lg={3} >
          <Card className="m-1" mx-style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://tsabrandon.github.io/portfolioNew/img/toyCompany.png" />
            <Card.Body className="text-center">
              <Card.Title>Toy Company</Card.Title>
              <Card.Text>
                Homepage using HTML and CSS hosted in github
              </Card.Text>
              <Button className="text-center" href="https://tsabrandon.github.io/ToyCoLndngPg/" target="_blank">View</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
}

export default Portfolio;
