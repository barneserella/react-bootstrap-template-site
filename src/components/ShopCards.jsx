import Card from "react-bootstrap/Card";
import { Button } from "react-bootstrap";

function ShopCards( { image, buttonText}){
    return (
            <Card className="bg-dark text-white shop-card ">
                
                <Card.Img src={image} alt="Card image" />
                <Card.ImgOverlay className="shop-card-btn">
      
                <Button>{buttonText}</Button>
      
      
                </Card.ImgOverlay>
                
            </Card>
              
            
)};

export default ShopCards