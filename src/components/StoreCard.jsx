import { Button, Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';

function StoreCard() {
  return (
    <Container fluid className="store-card" >
    <Card className="bg-dark text-white">
      <Card.Img src="/st.paul.jpg" alt="Card image" />
      <Card.ImgOverlay className="store-card-overlay">
        <Card>
        <Card.Body>
            <Card.Title>Our Stores</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">St.Paul Street - St.Catharines, Ontario, Canada</Card.Subtitle>
            <Card.Text>
                Tues-Sat 10AM-5PM
                
            
            </Card.Text>
            <Button className='mb-4 btn-sm'>Directions</Button>
            
            <Card.Subtitle className="mb-2 text-muted">Dundas Street - Waterdown, Ontario, Canada</Card.Subtitle>
            <Card.Text>
                Tues-Sun 10AM-5PM
                
            
            </Card.Text>
            <Button className='btn-sm'>Directions</Button>

        </Card.Body>
        </Card>
      </Card.ImgOverlay>
    </Card>
    </Container>
  );
}

export default StoreCard;