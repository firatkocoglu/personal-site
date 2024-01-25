import { Container, Nav, Navbar, Row, Col } from 'react-bootstrap';

import { Link } from 'react-router-dom';
const Navigation = () => {
  return (
    <Navbar expand='lg' className='pt-3 pe-5 border-bottom'>
      <Container fluid>
        <Col className='ms-5'>
          <Row>
            <Nav>
              <Nav.Link as={Link} to='/'>
                <span
                  style={{
                    fontFamily: 'Dancing',
                    fontSize: '2em',
                    fontWeight: 'bolder',
                    letterSpacing: '3px',
                  }}
                >
                  Fırat Koçoğlu
                </span>
              </Nav.Link>
            </Nav>
          </Row>
        </Col>
        <Col>
          <Row>
            <Navbar.Toggle
              aria-controls='#navbar-nav'
              style={{ backgroundColor: 'white' }}
            />
            <Navbar.Collapse id='name-nav'>
              <Nav className='ms-auto gap-5'>
                <Nav.Link as={Link} to='/'>
                  <span style={{ fontSize: '1.2em' }}>Home</span>
                </Nav.Link>
                <Nav.Link as={Link} to='/projects'>
                  <span style={{ fontSize: '1.2em' }}>Projects</span>
                </Nav.Link>
                <Nav.Link as={Link} to='/about'>
                  <span style={{ fontSize: '1.2em' }}>About</span>
                </Nav.Link>
                <Nav.Link as={Link} to='/contact'>
                  <span style={{ fontSize: '1.2em' }}>Contact</span>
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Row>
        </Col>
      </Container>
    </Navbar>
  );
};

export default Navigation;
