import React from 'react';
import { Row, Col, Container } from 'react-bootstrap'

function Footer() {
  return (
    <>
      <Container fluid bgColor='light' className='text-center text-lg-left p-4'>
        <Row>
          <Col lg={3} md={6} className='mb-4 mb-md-0'>
            <h5 className='text-uppercase'>Links</h5>

            <ul className='list-unstyled mb-0'>
              <li>
                <a href='#!' className='text-dark'>
                  Link 1
                </a>
              </li>
              <li>
                <a href='#!' className='text-dark'>
                  Link 2
                </a>
              </li>
              <li>
                <a href='#!' className='text-dark'>
                  Link 3
                </a>
              </li>
              <li>
                <a href='#!' className='text-dark'>
                  Link 4
                </a>
              </li>
            </ul>
          </Col>

          <Col lg={3} md={6} className='mb-4 mb-md-0'>
            <h5 className='text-uppercase mb-0'>Links</h5>

            <ul className='list-unstyled'>
              <li>
                <a href='#!' className='text-dark'>
                  Link 1
                </a>
              </li>
              <li>
                <a href='#!' className='text-dark'>
                  Link 2
                </a>
              </li>
              <li>
                <a href='#!' className='text-dark'>
                  Link 3
                </a>
              </li>
              <li>
                <a href='#!' className='text-dark'>
                  Link 4
                </a>
              </li>
            </ul>
          </Col>

          <Col lg={3} md={6} className='mb-4 mb-md-0'>
            <h5 className='text-uppercase'>Links</h5>

            <ul className='list-unstyled mb-0'>
              <li>
                <a href='#!' className='text-dark'>
                  Link 1
                </a>
              </li>
              <li>
                <a href='#!' className='text-dark'>
                  Link 2
                </a>
              </li>
              <li>
                <a href='#!' className='text-dark'>
                  Link 3
                </a>
              </li>
              <li>
                <a href='#!' className='text-dark'>
                  Link 4
                </a>
              </li>
            </ul>
          </Col>

          <Col lg={3} md={6} className='mb-4 mb-md-0'>
            <h5 className='text-uppercase mb-0'>Links</h5>

            <ul className='list-unstyled'>
              <li>
                <a href='#!' className='text-dark'>
                  Link 1
                </a>
              </li>
              <li>
                <a href='#!' className='text-dark'>
                  Link 2
                </a>
              </li>
              <li>
                <a href='#!' className='text-dark'>
                  Link 3
                </a>
              </li>
              <li>
                <a href='#!' className='text-dark'>
                  Link 4
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        &copy; {new Date().getFullYear()} Copyright:{' '}
        <a className='text-dark' href='https://gotgoldgetcash.com/'>
          Got Gold, Get Cash
        </a>
      </div>
    </>
  );
}

export default Footer;