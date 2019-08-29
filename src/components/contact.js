import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./component.css";

function Contact(props) {

    const textStyle = {
       color: "rgb(202, 204, 209)",
       margin: "30px 0"
      };

      const mFooter = {
          marginBottom: "100px"
      }



  return (
    <>
    {props.title && (
        <h1 style={textStyle } className="display-3 font-weight-bolder text-center">{props.title}</h1>
      )}

    <Form action="https://formspree.io/tsabrandon@gmail.com" method="POST" style ={mFooter}>
      <Form.Group controlId="exampleForm.ControlTextarea1">
        <Form.Control
          as="textarea"
          name="Message: "
          placeholder="Please Enter your message here"
          rows="3"
          required
        />
      </Form.Group>

      <Form.Group>
        <Form.Control name="Full Name: " placeholder="Full name" required />
      </Form.Group>

      <Form.Group controlId="formBasicEmail">
        <Form.Control name="Email: " type="email" placeholder="Enter email" required />
        <Form.Text className="text-muted">
          I will never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </>
  );
}

export default Contact;
