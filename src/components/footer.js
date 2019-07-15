import React from 'react'
import './component.css'
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import NavbarBrand from 'react-bootstrap/NavbarBrand'



function Footer () {

    const footer = {
        color: "rgb(202, 204, 209)",
        backgroundColor: "rgb(46, 52, 64)", 
    }
    return(
        <div className="fixed-bottom">  
            <Navbar>
                <Container>
                    <h5 style={footer}> Copyrights @2019 </h5>
                </Container>
            </Navbar>
        </div>
    )
    
}


export default Footer;