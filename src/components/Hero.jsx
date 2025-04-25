
import { Container, Button } from 'react-bootstrap';


function Hero(props){
    

    return (

        <>
            <section className='hero-section'>
                <div className="hero-overlay"></div>
                <Container className='hero-content'>
                    <h1>{props.title}</h1>
                    <Button className="rounded-pill" variant="outline-light">{props.button1}</Button>
                    <Button className="rounded-pill" variant="outline-light">{props.button2}</Button>
                </Container>
            </section>
        </>
)}

export default Hero;