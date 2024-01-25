import { Container, Row, Col } from 'react-bootstrap';
import { skills, languages, certificates } from '../data.js';
import { Link } from 'react-router-dom';
import Footer from './Footer.jsx';

const About = () => {
  return (
    <>
      <section className='about m-5'>
        <Container>
          <Row>
            <Col>
              <h1>About Me</h1>
            </Col>
          </Row>
          <Row>
            <Col>
              <p>
                My full name is Fırat Koçoğlu. I'm a self-taught full-stack web
                developer located in Istanbul. I have bachelors degree in
                industrial engineering and masters degree in economics. However,
                since I'm always keen on learning software development and
                interested in tech industry, I decided to switch careers to
                software engineering. Therefore in mid 2021 I started with
                learning the basics of web development. Then, I took various
                courses specialized in different aspects of web development.
                Thanks to all those learnings, now I can build full-stack web
                applications. Currently I'm looking for my first full time
                developer role. In the meantime I keep improving my developer
                skills.
              </p>
            </Col>
          </Row>
          <Row className='mt-5'>
            <Col>
              <h1>Skills</h1>
            </Col>
          </Row>
          <Row>
            <Col>
              <p>
                These are the tools that I use when I build a full-stack web
                application. I used to prefer Node.js while designing APIs. But
                after I complete Meta Back-End Developer course offered by Meta
                on Coursera, I really liked how fast APIs can be built with
                using Django and Django Rest Framework together. However, since
                I'm confident with JavaScript and Node.js, Node.js is still one
                of my favorite tools.
              </p>
            </Col>
          </Row>
          <Row className='mb-4'>
            {skills.map((skill) => {
              return (
                <Col xs={6} lg={2} className='mb-4'>
                  <span className='skill'>{skill}</span>
                </Col>
              );
            })}
          </Row>
          <Row>
            <Col className='mb-2'>
              I am also confident with speaking these languages:
            </Col>
          </Row>
          <Row className='languages'>
            <Col>
              <ul>
                {languages.map((language) => {
                  return (
                    <li key={language.id}>
                      <span>{language.lang} - </span>
                      <span>{language.level}</span>
                    </li>
                  );
                })}
              </ul>
            </Col>
          </Row>
          <Row className='mt-5'>
            <Col>
              <h1>Certificates</h1>
            </Col>
          </Row>
          <Row>
            <Col>
              <p>
                Here, you can see the list of the courses that I completed. The
                certificates can be verified by clicking on them.
              </p>
            </Col>
          </Row>
          <Row>
            <Col>
              {certificates.map((certificate) => {
                return (
                  <Row className='mb-4' style={{ width: 'fit-content' }}>
                    <Link to={certificate.url} target='_blank'>
                      <span className='certificate'>{certificate.title}</span>
                    </Link>
                  </Row>
                );
              })}
            </Col>
          </Row>
        </Container>
      </section>
      <Footer />
    </>
  );
};

export default About;
