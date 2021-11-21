import React from 'react'
import tab1 from "../../images/tab/tab-1.jpg";
import tab2 from "../../images/tab/tab-2.jpg";
import tab3 from "../../images/tab/tab-3.jpg";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function ContentTabs() {
    return (
        <div className="d-none d-md-block tabs--section">
            <Tabs defaultActiveKey="one" id="uncontrolled-tab-example">
                <Tab eventKey="one" title="First">
                    <Row>
                        <Col md="auto">
                            <Image src={tab1} />
                        </Col>
                        <Col className="tab--content--text">
                            <p>Morbi eget efficitur turpis. Vivamus pellentesque tortor massa, venenatis pharetra leo
                                laoreet a. Nullam non eleifend justo, a ullamcorper turpis. Cras vehicula pharetra lectus
                                non maximus. Sed condimentum mattis rhoncus.</p>
                            <div className="share--icons">
                                <span>SHARE</span>
                                <i class="fab fa-facebook-f"></i>
                                <i class="fab fa-twitter"></i>
                            </div>
                        </Col>
                    </Row>
                </Tab>
                <Tab eventKey="two" title="Second">
                    <Row>
                        <Col md="auto">
                            <Image src={tab2} />
                        </Col>
                        <Col className="tab--content--text">
                            <p>Morbi eget efficitur turpis. Vivamus pellentesque tortor massa, venenatis pharetra leo
                                laoreet a. Nullam non eleifend justo, a ullamcorper turpis. Cras vehicula pharetra lectus
                                non maximus. Sed condimentum mattis rhoncus.</p>
                            <div className="share--icons">
                                <span>SHARE</span>
                                <i class="fab fa-facebook-f"></i>
                                <i class="fab fa-twitter"></i>
                            </div>
                        </Col>
                    </Row>
                </Tab>
                <Tab eventKey="three" title="Third">
                    <Row>
                        <Col md="auto">
                            <Image src={tab3} />
                        </Col>
                        <Col className="tab--content--text">
                            <p>Morbi eget efficitur turpis. Vivamus pellentesque tortor massa, venenatis pharetra leo
                                laoreet a. Nullam non eleifend justo, a ullamcorper turpis. Cras vehicula pharetra lectus
                                non maximus. Sed condimentum mattis rhoncus.</p>
                            <div className="share--icons">
                                <span>SHARE</span>
                                <i class="fab fa-facebook-f"></i>
                                <i class="fab fa-twitter"></i>
                            </div>
                        </Col>
                    </Row>
                </Tab>
            </Tabs>
        </div>
    )
}

export default ContentTabs
