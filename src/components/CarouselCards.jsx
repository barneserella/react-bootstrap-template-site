import { Button } from "react-bootstrap";
import { Carousel } from "react-bootstrap";

function CarouselCards({image, buttonText}) {
  
  return (
    
      <div className="carousel-card">
        <img 
          className="rounded d-block w-100"
          src={image}
          alt="slide1"
        />
        <Carousel.Caption>
          <Button>{buttonText}</Button>
        </Carousel.Caption>
      </div>
      
  );
}


export default CarouselCards