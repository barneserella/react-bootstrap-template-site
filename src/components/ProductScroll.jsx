import Cards from "./Card";
import {  Row, Col, Container } from "react-bootstrap";
import PictureCard from "./PictureCard";

function ProductScroll() {
    
    return (
        <Container fluid className='scroll-container'>
            
                <div className="card-wrapper">
                    
                    <Col xs={12} md={6}><PictureCard /></Col>
                    <Col xs={6} md={3}><Cards /></Col>
                    <Col xs={6} md={3}><Cards /></Col>
                    <Col xs={6} md={3}><Cards /></Col>
                    <Col xs={6} md={3}><Cards /></Col>
                    <Col xs={6} md={3}><Cards /></Col>
                    <Col xs={6} md={3}><Cards /></Col>
                    <Col xs={6} md={3}><Cards /></Col>
                    
                </div>
            
        </Container>
    )
};

export default ProductScroll;