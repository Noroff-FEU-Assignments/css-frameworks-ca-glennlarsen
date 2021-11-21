import React from 'react'
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import News1 from "../../images/news/news-1.jpg";
import News2 from "../../images/news/news-2.jpg";
import News3 from "../../images/news/news-3.jpg";
import News4 from "../../images/news/news-4.jpg";
import News5 from "../../images/news/news-5.jpg";
import News6 from "../../images/news/news-6.jpg";
import News7 from "../../images/news/news-7.jpg";
import News8 from "../../images/news/news-8.jpg";

function CardGrid() {
    return (
        <Row className="row--gap">
            <Col xl="3" md="6"><Card>
                <Card.Img variant="top" src={News1} />
                <Card.Body>
                    <Card.Title>Nunc porttitor vel</Card.Title>
                    <Card.Text>
                    Nunc malesuada eget est fringilla dapibus.
                    </Card.Text>
                    <Button variant="primary">More</Button>
                </Card.Body>
            </Card></Col>
            <Col xl="3" md="6"><Card>
                <Card.Img variant="top" src={News2} />
                <Card.Body>
                    <Card.Title>Nunc porttitor vel</Card.Title>
                    <Card.Text>
                    Nunc malesuada eget est fringilla dapibus.
                    </Card.Text>
                    <Button variant="primary">More</Button>
                </Card.Body>
            </Card></Col>
            <Col xl="3" md="6"><Card>
                <Card.Img variant="top" src={News3} />
                <Card.Body>
                    <Card.Title>Nunc porttitor vel</Card.Title>
                    <Card.Text>
                    Nunc malesuada eget est fringilla dapibus.
                    </Card.Text>
                    <Button variant="primary">More</Button>
                </Card.Body>
            </Card></Col>
            <Col xl="3" md="6"><Card>
                <Card.Img variant="top" src={News4} />
                <Card.Body>
                    <Card.Title>Nunc porttitor vel</Card.Title>
                    <Card.Text>
                    Nunc malesuada eget est fringilla dapibus.
                    </Card.Text>
                    <Button variant="primary">More</Button>
                </Card.Body>
            </Card></Col>
            <Col xl="3" md="6"><Card>
                <Card.Img variant="top" src={News5} />
                <Card.Body>
                    <Card.Title>Nunc porttitor vel</Card.Title>
                    <Card.Text>
                    Nunc malesuada eget est fringilla dapibus.
                    </Card.Text>
                    <Button variant="primary">More</Button>
                </Card.Body>
            </Card></Col>
            <Col xl="3" md="6"><Card>
                <Card.Img variant="top" src={News6} />
                <Card.Body>
                    <Card.Title>Nunc porttitor vel</Card.Title>
                    <Card.Text>
                    Nunc malesuada eget est fringilla dapibus.
                    </Card.Text>
                    <Button variant="primary">More</Button>
                </Card.Body>
            </Card></Col>
            <Col xl="3" md="6"><Card>
                <Card.Img variant="top" src={News7} />
                <Card.Body>
                    <Card.Title>Nunc porttitor vel</Card.Title>
                    <Card.Text>
                    Nunc malesuada eget est fringilla dapibus.
                    </Card.Text>
                    <Button variant="primary">More</Button>
                </Card.Body>
            </Card></Col>
            <Col xl="3" md="6"><Card>
                <Card.Img variant="top" src={News8} />
                <Card.Body>
                    <Card.Title>Nunc porttitor vel</Card.Title>
                    <Card.Text>
                    Nunc malesuada eget est fringilla dapibus.
                    </Card.Text>
                    <Button variant="primary">More</Button>
                </Card.Body>
            </Card></Col>
        </Row>
    )
}

export default CardGrid
