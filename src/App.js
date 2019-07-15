import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

import "./App.css";
import Footer from "./components/footer";
import Homepage from "./pages/Homepage";
import Aboutpage from "./pages/Aboutpage";
import Portfoliopage from "./pages/Portfoliopage";
import Contactpage from "./pages/Contactpage";

class App extends React.Component {
  constructor(props) {
    
    super(props);
    this.state = {
      navExpanded: false,
      title: "Brandon",
      headerLinks: [
        { title: "Home", path: "/" },
        { title: "About", path: "/about" },
        { title: "Portfolio", path: "/portfolio" },
        { title: "Home", path: "/contact" }
      ],
      home: {
        title: "Hi, I'm Brandon",
        subTitle: "I am a Frontend Developer and currently learning Backend Development specifically Ruby on Rails",
        text: " Im also currently learning backend development "
      },
      about: {
        title: "About me"
      },
      portfolio: {
        title: "This is a porfolio page"
      },
      contact: {
        title: "Connect with me"
      },

    };
    
  }
  componentDidMount() {
    document.body.style.background = "rgb(46, 52, 64)";
  }


  render() {
    return (
      <Router>
        <Container className="p-0" fluid={true}>
          <Navbar collapseOnSelect fixed="top" expand="lg" className="navbg navbar-dark">
            <Navbar.Brand className="navbar-dark"> <Link to="/"><img width="60px" src="https://tsabrandon.github.io/portfolioNew/img/logo.png"/> </Link> </Navbar.Brand>
            <Navbar.Toggle
              aria-controls="navbar-toggle"
              className="ml-auto border-0"
            />
            <Navbar.Collapse id="navbar-toggle">
              <Nav className="ml-auto">
                <Nav.Link href="#features">
                <Link className="nav-link" to="/">
                 
                  Home
                </Link></Nav.Link>
                 <Nav.Link href="#features">
                <Link className="nav-link" to="/about">
                  About
                </Link>
                </Nav.Link>
                <Nav.Link href="#features">
                <Link className="nav-link" to="/portfolio">
                  portfolio
                </Link>
                </Nav.Link>
                <Nav.Link href="#features">
                <Link className="nav-link" to="/contact">
                  Contact
                </Link>
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </Container>
        <Container>
        <Route path="/" exact render={() => <Homepage title= {this.state.home.title} subTitle ={this.state.home.subTitle}/>} />
        <Route path="/about"  render={() => <Aboutpage title= {this.state.about.title} />} />
        <Route path="/portfolio"  render={() => <Portfoliopage title= {this.state.portfolio.title} />} />
        <Route path="/contact"  render={() => <Contactpage title= {this.state.contact.title} />} />
        <Footer />

        </Container>
        
      </Router>
    );
  }
}

export default App;
