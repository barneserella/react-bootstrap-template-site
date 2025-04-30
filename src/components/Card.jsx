import { Card, Button } from "react-bootstrap";

function Cards(){
    return (
        <Card >
            <div className="card-style">
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>Some quick example text to build on the card title and make up the
                bulk of the card's content.</Card.Text>
                <Button variant="primary" className="card-button">Click Here</Button>
            </Card.Body>
            </div>
        </Card>
    )
}

export default Cards;
