import Cards from "./Card";
import {  Row, Col, Container } from "react-bootstrap";
import PictureCard from "./PictureCard";

function ProductScroll() {
    
    return (
        <Container fluid className='scroll-container'>
            
                <div className="card-wrapper">
                    
                    <Col><PictureCard /></Col>
                    <Col><Cards /></Col>
                    <Col><Cards /></Col>
                    <Col><Cards /></Col>
                    <Col><Cards /></Col>
                    <Col><Cards /></Col>
                    <Col><Cards /></Col>
                    <Col><Cards /></Col>
                    
                </div>
            
        </Container>
    )
};

export default ProductScroll;