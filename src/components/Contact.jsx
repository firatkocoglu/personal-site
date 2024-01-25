import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Container, Form, Row, Col, Button } from 'react-bootstrap';
import { FaLinkedinIn } from 'react-icons/fa';
import { FiGithub } from 'react-icons/fi';
import { FaInstagram } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_7u3pwkg',
        'template_zkqtwxq',
        form.current,
        'g5JhgdH496vk2PcNM'
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section className='contact m-5'>
      <Container style={{ width: '75%' }}>
        <Row>
          <Col>
            <h1>Contact</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <p style={{ fontSize: '1.2rem' }}>
              If you'd like to chat about anything, please do not hesitate to
              contact me. I aim to get back within a few hours. You can fill the
              form below or reach me on social media accounts.
            </p>
          </Col>
        </Row>
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

        <Row>
          <Col xs={12} lg={4}></Col>
        </Row>
        <Form ref={form} onSubmit={sendEmail} className='mt-5'>
          <Col>
            <h1>Send Me An E-mail</h1>
            <Form.Group className='mb-3' controlId='formPassword'>
              <Form.Label>E-mail</Form.Label>
              <Form.Control
                type='email'
                placeholder='Your e-mail'
                name='user_email'
              ></Form.Control>
            </Form.Group>
            <Form.Group className='mb-3' controlId='formName'>
              <Form.Label>Name</Form.Label>
              <Form.Control
                type='text'
                placeholder='Your name'
                name='user_name'
              />
            </Form.Group>
            <Form.Group className='mb-3' controlId='formMessage'>
              <Form.Label>Message</Form.Label>
              <Form.Control
                as='textarea'
                placeholder='Your message'
                rows={10}
                name='message'
              />
            </Form.Group>
            <Form.Group className='d-grid gap-2'>
              <Button type='submit' variant='light' size='lg'>
                Send
              </Button>
            </Form.Group>
          </Col>
        </Form>
      </Container>
    </section>
  );
};

export default Contact;
