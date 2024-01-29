import { Container, Row, Col } from 'react-bootstrap';
import { skills, languages, certificates } from '../data.js';
import Skills from './Skills.jsx';
import Certificates from './Certificates.jsx';
import Footer from './Footer.jsx';

const About = () => {
  return (
    <>
      <section className='about m-5'>
        <Container>
          <Row
            className='mb-5 align-items-center pb-3 project'
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
                About Me
              </span>
            </div>

            <Row>
              <Col>
                <p>
                  My full name is Fırat Koçoğlu. I'm a self-taught full-stack
                  web developer located in Istanbul. I have bachelors degree in
                  industrial engineering and masters degree in economics.
                  However, since I'm always keen on learning software
                  development and interested in tech industry, I decided to
                  switch careers to software engineering. Therefore in mid 2021
                  I started with learning the basics of web development. Then, I
                  took various courses specialized in different aspects of web
                  development. Thanks to all those learnings, now I can build
                  full-stack web applications. Currently I'm looking for my
                  first full time developer role. In the meantime I keep
                  improving my developer skills.
                </p>
              </Col>
            </Row>
          </Row>
          <Skills skills={skills} languages={languages} />
          <Certificates certificates={certificates} />
        </Container>
      </section>
      <Footer />
    </>
  );
};

export default About;
