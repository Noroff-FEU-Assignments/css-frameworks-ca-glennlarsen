import React from 'react'
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from "react-bootstrap/Col";
import ContactForm from './ContactForm';

function Contact() {
    return (
        <>
            <div className="wrapper">
                <Container>
                    <Row>
                        <Col md="6" md={{ order: 'last' }}>
                            <div className="info--group">
                                <a><i class="fas fa-envelope"></i><span>hello@yay.com</span></a>
                                <a><i class="fas fa-phone"></i><span>123 456 7890</span></a>
                                <a className="info--group-address"><i class="fas fa-map-marker-alt"></i><span>123 Some Street</span><br></br>
                                    <span>Somewhere</span><br></br>
                                    <span>Some City</span><br></br>
                                    <span>10000</span>
                                </a>
                            </div>
                        </Col>
                        <Col md="6">
                            <h1>Submit your details</h1>
                            <ContactForm />
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default Contact;
