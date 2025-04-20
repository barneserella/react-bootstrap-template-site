import Card from 'react-bootstrap/Card';

function PictureCard() {
  return (
    <Card className="bg-dark text-white card-style">
      <Card.Img src="./gold.jpeg" alt="Card image" />
      <Card.ImgOverlay>
        <Card.Title>Card title</Card.Title>
        
      </Card.ImgOverlay>
    </Card>
  );
}

export default PictureCard;