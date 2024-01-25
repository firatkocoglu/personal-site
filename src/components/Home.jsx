import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaLinkedinIn } from 'react-icons/fa';
import { FiGithub } from 'react-icons/fi';

const Home = () => {
  return (
    <section className='greetings' style={{ height: '80vh' }}>
      <Container fluid style={{ height: '100%' }}>
        <Row
          className='d-flex align-items-center mt-5'
          style={{ width: '100%', height: '100%' }}
        >
          <Col lg={6} style={{ textAlign: 'center' }}>
            <Row>
              <h1>Hi! I'm Fırat. A Full-Stack Web Developer.</h1>
            </Row>
            <Row className='justify-content-center mt-3'>
              <Col xs={2} lg={2}>
                <Link
                  to='https://www.linkedin.com/in/firatkocoglu/'
                  target='_blank'
                >
                  <FaLinkedinIn size={48} style={{ color: 'white' }} />
                </Link>
              </Col>
              <Col xs={2} lg={2}>
                <Link to='https://github.com/firatkocoglu' target='_blank'>
                  <FiGithub size={48} style={{ color: 'white' }}></FiGithub>
                </Link>
              </Col>
            </Row>
          </Col>
          <Col lg={6} style={{ textAlign: 'center' }}>
            <Row>
              <p style={{ fontSize: '1.2rem' }}>
                I'm a full-stack web developer located in Istanbul.
              </p>
            </Row>
            <Row>
              <p style={{ fontSize: '1.2rem' }}>
                Building software feels like magic and I love that feeling.
              </p>
            </Row>
            <Row>
              <p style={{ fontSize: '1.2rem' }}>
                My go-to tools are React and Django. I also have experience with
                Node.js.
              </p>
            </Row>
            <Row className='justify-content-center'>
              <Col xs={4} lg={6}>
                <Link to='/about'>
                  <Button variant='outline-light' size='lg'>
                    Learn More
                  </Button>
                </Link>
              </Col>
              <Col xs={4} lg={6}>
                <Link>
                  <Button variant='outline-light' size='lg'>
                    Download Resume
                  </Button>
                </Link>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Home;
