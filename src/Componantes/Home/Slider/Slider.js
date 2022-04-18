import React from 'react';
import { Carousel } from 'react-bootstrap';
import imgage1 from '../../../Images/banner.jpg'

const Slider = () => {
    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={imgage1}
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={imgage1}
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={imgage1}
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Slider;