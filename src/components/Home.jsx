import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaLinkedinIn } from 'react-icons/fa';
import { FiGithub } from 'react-icons/fi';

const Home = () => {
  return (
    <section
      className='greetings section'
      style={{
        height: '80vh',
      }}
    >
      <Container style={{ height: '100%' }}>
        <Row
          className='d-flex align-items-center justify-content-around mt-5'
          style={{ width: '100%', height: '100%' }}
        >
          <Col
            lg={4}
            style={{
              textAlign: 'center',
              border: '10px solid rgba(228, 222, 222)',
              borderRadius: '10px',
              marginLeft: '10px',
              boxShadow: '10px 5px',
              backgroundColor: 'white',
            }}
          >
            <Row>
              <div
                className='button-container d-flex align-items-center gap-2 p-3'
                style={{
                  backgroundColor: 'rgba(228, 222, 222)',
                }}
              >
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
                <span
                  className='ms-3'
                  style={{ fontSize: '1.4em', fontWeight: 'bold' }}
                >
                  Greetings
                </span>
              </div>
            </Row>
            <Row className='p-3'>
              <h1>
                &lt;&gt;Hi! I'm Fırat. A Full-Stack Web Developer.&lt;/&gt;
              </h1>
            </Row>
            <Row className='justify-content-center p-3 mt-3'>
              <Col xs={2} lg={4}>
                <Link
                  to='https://www.linkedin.com/in/firatkocoglu/'
                  target='_blank'
                >
                  <FaLinkedinIn size={48} />
                </Link>
              </Col>
              <Col xs={2} lg={4}>
                <Link to='https://github.com/firatkocoglu' target='_blank'>
                  <FiGithub size={48}></FiGithub>
                </Link>
              </Col>
            </Row>
          </Col>
          <Col
            lg={6}
            style={{
              textAlign: 'center',
              border: '10px solid rgba(228, 222, 222)',
              borderRadius: '10px',
              marginLeft: '10px',
              boxShadow: '10px 5px',
              backgroundColor: 'white',
            }}
          >
            <Row>
              <div
                className='button-container d-flex align-items-center gap-2 p-3'
                style={{
                  backgroundColor: 'rgba(228, 222, 222)',
                }}
              >
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
            </Row>
            <div className='p-3'>
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
                  My go-to tools are React and Django. I also have experience
                  with Node.js.
                </p>
              </Row>
            </div>
            <Row className='justify-content-center mb-3'>
              <Col xs={4} lg={6}>
                <Link to='/about'>
                  <Button variant='outline-dark' size='lg'>
                    Learn More
                  </Button>
                </Link>
              </Col>
              <Col xs={4} lg={6}>
                <Link to='/assets/files/resume.pdf' target='_blank' download>
                  <Button variant='outline-dark' size='lg'>
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
