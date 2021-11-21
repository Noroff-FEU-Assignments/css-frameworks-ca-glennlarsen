import React from 'react'
import Carousel from "react-bootstrap/Carousel";
import slide1 from "../../images/carousel/carousel-1.jpg";
import slide2 from "../../images/carousel/carousel-2.jpg";
import slide3 from "../../images/carousel/carousel-3.jpg";

function ImageCarousel() {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={slide1}
                    alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={slide2}
                    alt="Second slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={slide3}
                    alt="Third slide"
                />
            </Carousel.Item>
        </Carousel>
    )
}

export default ImageCarousel;
