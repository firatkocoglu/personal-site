import { Container, Form, Row, Col, Button } from 'react-bootstrap';
import { FaLinkedinIn } from 'react-icons/fa';
import { FiGithub } from 'react-icons/fi';
import { FaInstagram } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Email from './Email';

const Contact = () => {
  return (
    <section className='contact m-5'>
      <Container style={{ width: '75%' }}>
        <Row
          className='d-flex align-items-center justify-content-around mt-5'
          style={{
            border: '10px solid rgba(228, 222, 222)',
            borderRadius: '10px',
            boxShadow: '10px 5px',
            backgroundColor: 'white',
          }}
        >
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
              Contact
            </span>
          </div>
          <Col className='p-3'>
            <p style={{ fontSize: '1.2rem' }}>
              If you'd like to chat about anything, please do not hesitate to
              contact me. I aim to get back within a few hours. You can fill the
              form below or reach me on social media accounts.
            </p>
          </Col>
          <Row className='m-4' style={{ textAlign: 'center' }}>
            <Col xs={12} lg={4}>
              <Link
                to='https://www.linkedin.com/in/firatkocoglu/'
                target='_blank'
              >
                <FaLinkedinIn size={48} />
              </Link>
            </Col>
            <Col xs={12} lg={4}>
              <Link to='https://github.com/firatkocoglu' target='_blank'>
                <FiGithub size={48} />
              </Link>
            </Col>
            <Col xs={12} lg={4}>
              <Link to='https://instagram.com/firatkocogl' target='_blank'>
                <FaInstagram size={48} />
              </Link>
            </Col>
          </Row>
        </Row>
        <Email />
      </Container>
    </section>
  );
};

export default Contact;
