import { Button, Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';

function StoreCard() {
  return (
    <Container fluid className="store-card" >
    <Card className="bg-dark text-white">
      <Card.Img src="/gold.jpeg" alt="Card image" />
      <Card.ImgOverlay>
        <Card style={{ width: '18rem' }}>
        <Card.Body>
            <Card.Title>Our Store</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">St.Paul Street - St.Catharines, Ontario, Canada</Card.Subtitle>
            <Card.Text>
                Tues-Sat 10AM-5PM
                
            
            </Card.Text>
            <Button>Directions</Button>
        </Card.Body>
        </Card>
      </Card.ImgOverlay>
    </Card>
    </Container>
  );
}

export default StoreCard;