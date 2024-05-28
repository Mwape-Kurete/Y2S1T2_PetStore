import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";

import "../styles/CarouselHome.css";
import Col from "react-bootstrap/esm/Col";

import slide1 from "../media/biglab.jpg";
import slide2 from "../media/romi.jpg";
import slide3 from "../media/twogolden.jpg";

function CarouselHome() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <>
      <Col>
        <div className="banner"></div>
        <Carousel
          activeIndex={index}
          onSelect={handleSelect}
          className="mainCaraCont"
        >
          <Carousel.Item>
            <img src={slide1} alt="image place holder" className="caraImage" />
            <Carousel.Caption className="cara-caption">
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img src={slide2} alt="image place holder" className="caraImage" />
            <Carousel.Caption className="cara-caption">
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img src={slide3} alt="image place holder" className="caraImage" />
            <Carousel.Caption className="cara-caption">
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Col>
    </>
  );
}

export default CarouselHome;
