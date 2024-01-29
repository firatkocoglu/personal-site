import { Container, Row, Col } from 'react-bootstrap';
import { FaLinkedinIn } from 'react-icons/fa';
import { FiGithub } from 'react-icons/fi';
import { FaInstagram } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <section className='footer border-top p-3'>
      <Container>
        <Row>
          <Col lg={6}>
            <h3>Fırat Koçoğlu</h3>
            <p>A Full-Stack Web Developer from Istanbul.</p>
          </Col>
          <Col lg={6}>
            <Row className='align-items-center' style={{ height: '100%' }}>
              <Col lg={4} style={{ textAlign: 'center' }}>
                <Link
                  to='https://www.linkedin.com/in/firatkocoglu/'
                  target='_blank'
                >
                  <FaLinkedinIn size={32} />
                </Link>
              </Col>
              <Col lg={4} style={{ textAlign: 'center' }}>
                <Link to='https://github.com/firatkocoglu' target='_blank'>
                  <FiGithub size={32} />
                </Link>
              </Col>
              <Col lg={4} style={{ textAlign: 'center' }}>
                <Link to='https://instagram.com/firatkocogl' target='_blank'>
                  <FaInstagram size={32} />
                </Link>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Footer;
