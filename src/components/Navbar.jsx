import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';

function GoldNavbar() {
  return (
    <>
      <div className="announcement-bar text-center">

      </div>
      
        <Navbar collapseOnSelect expand='false' bg='light' className="bg-body-tertiary mb-3">
          <Container fluid className="d-flex justify-content-between align-items-center">
            {/* Hamburger Menu */}
            
            <Navbar.Toggle aria-controls='offcanvasNavbar' className='border-0' />
            
            {/* Brand */}
            
            <Navbar.Brand href="#" className='fw-bold text-uppercase'>Got Gold, Get Cash</Navbar.Brand>
            
            {/* Empty div for alignment */}
            <div className="navbar-alignment-div" style={{ width: "60px" }} ></div>
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-false`}
              aria-labelledby='offcanvasNavbar'
              placement="start"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title >
                  Menu
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="#action1">Home</Nav.Link>
                  <Nav.Link href="#action2">About</Nav.Link>
                  <Nav.Link href="#action3">Locations</Nav.Link>
                  <Nav.Link href="#action4">How It Works</Nav.Link>
                </Nav>                
                <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="outline-success">Search</Button>
                </Form>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      
    </>
  );
}

export default GoldNavbar;