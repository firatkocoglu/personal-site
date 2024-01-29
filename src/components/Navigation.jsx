import { Container, Nav, Navbar, Row, Col, Image } from 'react-bootstrap';
import { CiLock } from 'react-icons/ci';

import { Link } from 'react-router-dom';
const Navigation = () => {
  return (
    <Navbar expand='lg' className='pt-3 pe-5 navbar'>
      <Container fluid style={{ width: '100%' }}>
        <Row className='align-items-center' style={{ width: '100%' }}>
          <Col lg={2} className='ms-3 d-flex'>
            <Row>
              <Nav>
                <Nav.Link as={Link} to='/'>
                  <div className='button-container d-flex gap-2'>
                    <div
                      style={{
                        border: '1px solid #FF605C',
                        borderRadius: '50%',
                        width: '15px',
                        height: '15px',
                        backgroundColor: '#FF605C',
                      }}
                    ></div>
                    <div
                      style={{
                        border: '1px solid #FFBD44',
                        borderRadius: '50%',
                        width: '15px',
                        height: '15px',
                        backgroundColor: '#FFBD44',
                      }}
                    ></div>
                    <div
                      style={{
                        border: '1px solid #00CA4E',
                        borderRadius: '50%',
                        width: '15px',
                        height: '15px',
                        backgroundColor: '#00CA4E',
                      }}
                    ></div>
                  </div>
                </Nav.Link>
              </Nav>
            </Row>
          </Col>
          <Col lg={4} className='d-flex align-items-center gap-3'>
            <Link to='/' style={{ color: 'black' }}>
              <div
                className='address-bar'
                style={{
                  backgroundColor: 'white',
                  borderRadius: '30px',
                  width: '100%',
                  padding: '15px 55px',
                  display: 'flex',
                  justifyContent: 'start',
                  alignItems: 'center',
                  gap: '10px',
                }}
              >
                <div
                  style={{
                    borderRadius: '50%',
                    border: '1px solid rgb(228, 222, 222)',
                    padding: '5px 5px',
                    display: 'flex',
                    justifyContent: ' center',
                    alignmentItems: 'center',
                  }}
                >
                  <CiLock color='rgb(228, 222, 222)' />
                </div>
                <span>https://www.firatkocoglu.com</span>
              </div>
            </Link>
            <Image
              src='/assets/images/react-logo.png'
              width={40}
              height={40}
              onClick={() => {
                alert('This page is using the production build of React.');
              }}
            />
          </Col>
          <Col className='ms-auto' lg={4}>
            <Row>
              <Navbar.Toggle
                aria-controls='#navbar-nav'
                style={{ backgroundColor: 'white' }}
              />
              <Navbar.Collapse id='name-nav'>
                <Nav className='ms-auto gap-3'>
                  <Nav.Link as={Link} to='/'>
                    <span
                      style={{
                        fontSize: '1.2em',
                      }}
                    >
                      Home
                    </span>
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
        </Row>
      </Container>
    </Navbar>
  );
};

export default Navigation;
