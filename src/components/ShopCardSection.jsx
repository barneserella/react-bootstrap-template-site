import CarouselCards from "./CarouselCards";
import ShopCards from "./ShopCards";
import { useIsMobile } from "../hooks/useIsMobile";
import { useState } from "react";
import { Carousel, Container, Row, Col } from "react-bootstrap";



function ShopCardSection({ cards }) {
      const [index, setIndex] = useState(0);
    
      const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
      };
    const isMobile = useIsMobile();

    if(isMobile) {
        return (
            <Carousel activeIndex={index} onSelect={handleSelect}>
                {cards.map((card, index) => (
                    <Carousel.Item key={index}>
                        <CarouselCards {...card} />
                    </Carousel.Item>
                ))}
            </Carousel>
            
        )
    }

    return (
        <Container fluid className="px-0 shop-container">
            <Row className="gx-0">
                
                {cards.map ((card, index) => (
                    <Col key={index} md={3}>
                        <ShopCards {...card} />
                    </Col>
                ))}
                
            </Row>
        </Container>
)};

export default ShopCardSection;