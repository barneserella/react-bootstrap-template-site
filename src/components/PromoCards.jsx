import { Container, Row, Col, Card, Button } from "react-bootstrap";
import goldImage from '/gold.jpeg'

function PromoCards() {

    return (
        <Container fluid className="px-0 promo-container">
            <Row className="gx-0">
                <Col xs={12} md={7}>
                    <Card 
                        className="promo-card promo-card-1 cash-gold"
                        style= {{
                             backgroundImage: `url(${goldImage})`,
                        
                         }}>
                        <Card.Body className="promo-content">
                            <Card.Text className="promo-subtext" >
                                Bring us your stuff...
                            </Card.Text>
                            <Card.Title className="promo-title">CASH 4 GOLD</Card.Title>
                            <Button variant="dark">SELL NOW</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={12} md={5}>
                    <Card 
                        className="promo-card promo-card-2 approved-by-us"
                        style= {{
                            backgroundImage: `url(${goldImage})`,
                            
                        }}
                    >
                        <Card.Body className="promo-content">
                            <Card.Text className="promo-subtext" >
                                Everything we sell has been approved...
                            </Card.Text>
                            <Card.Title className="promo-title">APPROVED BY US</Card.Title>
                            <Button variant="dark">LEARN MORE</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default PromoCards;