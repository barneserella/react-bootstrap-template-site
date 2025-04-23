import { Col, Row, Button, Container } from "react-bootstrap";
import Card from "react-bootstrap/Card";

function ShopCards() {

    return (
    <Container fluid className="px-0 shop-container">
        <Row className="gx-0">
            <Col md={3}>
            
                <Card className="bg-dark text-white shop-card ">
                
                <Card.Img src="/gold.jpeg" alt="Card image" />
                <Card.ImgOverlay className="shop-card-btn">
      
                <Button>Directions</Button>
      
      
                </Card.ImgOverlay>
                
                </Card>
              
            </Col>
            <Col md={3}>
                <Card className="bg-dark text-white shop-card ">
                <Card.Img src="/gold.jpeg" alt="Card image" />
                <Card.ImgOverlay className="shop-card-btn">
      
                <Button>Directions</Button>
      
      
                </Card.ImgOverlay>
                </Card>
            </Col>
            <Col md={3}>
                <Card className="bg-dark text-white shop-card">
                    
                <Card.Img src="/gold.jpeg" alt="Card image" />
                <Card.ImgOverlay className="shop-card-btn">
                
      
                <Button>Directions</Button>
      
      
                </Card.ImgOverlay>
                
                </Card>
            </Col>
            <Col md={3}>
                <Card className="bg-dark text-white shop-card">
                <Card.Img src="/gold.jpeg" alt="Card image" />
                <Card.ImgOverlay className="shop-card-btn">
      
                <Button>Directions</Button>
      
      
                </Card.ImgOverlay>
                </Card>
            </Col>
        </Row>
    </Container>
)};

export default ShopCards;