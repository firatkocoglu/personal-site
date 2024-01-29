import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Container, Form, Row, Col, Button } from 'react-bootstrap';

const Email = () => {
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
        className='  button-container d-flex align-items-center gap-2 p-3 mb-3'
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
          Send Me An Email
        </span>
      </div>
      <Form ref={form} onSubmit={sendEmail} className='p-3'>
        <Col>
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
    </Row>
  );
};

export default Email;
