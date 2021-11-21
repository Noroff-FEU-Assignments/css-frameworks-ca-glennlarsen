import React from 'react'
import Accordion from "react-bootstrap/Accordion";
import tab1 from "../../images/tab/tab-1.jpg";
import tab2 from "../../images/tab/tab-2.jpg";
import tab3 from "../../images/tab/tab-3.jpg";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function ContentAccordion() {
    return (
        <Accordion defaultActiveKey="0" className="d-md-none">
            <Accordion.Item eventKey="0">
                <Accordion.Header>First</Accordion.Header>
                <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                    commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                    velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                    cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                    est laborum.
                    <Image src={tab1} />
                    <Row>
                        <Col className="share--icons">
                            <span>SHARE</span>
                            <i class="fab fa-facebook-f"></i>
                            <i class="fab fa-twitter"></i>
                        </Col>
                    </Row>
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
                <Accordion.Header>Second</Accordion.Header>
                <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                    commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                    velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                    cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                    est laborum.
                    <Image src={tab2} />
                    <Row>
                        <Col className="share--icons">
                            <span>SHARE</span>
                            <i class="fab fa-facebook-f"></i>
                            <i class="fab fa-twitter"></i>
                        </Col>
                    </Row>
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
                <Accordion.Header>Third</Accordion.Header>
                <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                    commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                    velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                    cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                    est laborum.
                    <Image src={tab3} />
                    <Row>
                        <Col className="share--icons">
                            <span>SHARE</span>
                            <i class="fab fa-facebook-f"></i>
                            <i class="fab fa-twitter"></i>
                        </Col>
                    </Row>
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    )
}

export default ContentAccordion;
