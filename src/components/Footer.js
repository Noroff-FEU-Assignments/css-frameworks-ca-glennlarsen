import React from 'react'
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Footer() {
    return (
        <footer>
            <Container>
                <Row className="d-flex footer--content">
                    <Col>
                        <i class="fab fa-vimeo-v"></i>
                        <i class="fab fa-youtube"></i>
                    </Col>
                    </Row>
                    <Row className="d-flex footer--content-bottom">
                    <Col><a>hello@yay.com</a></Col>
                    <Col>Copyright 2020</Col>
                    </Row>
            </Container>
        </footer>
    )
}

export default Footer
