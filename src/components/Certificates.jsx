import { Container, Row, Col } from 'react-bootstrap';
import { certificates } from '../data';
import { Link } from 'react-router-dom';

const Certificates = () => {
  return (
    <section className='certificates mb-5'>
      <Container>
        <Row className='mb-3'>
          <Col>
            <h1>Certificates</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <p>
              Here you can see the list of the courses that I completed. The
              certificates can be verified by clicking on them.
            </p>
          </Col>
        </Row>
        {certificates.map((certificate) => {
          return (
            <Row key={certificate.id} className='mb-2'>
              <Col>
                <Link
                  to={certificate.url}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='mb-2'
                >
                  {certificate.title}
                </Link>
              </Col>
            </Row>
          );
        })}
      </Container>
    </section>
  );
};

export default Certificates;
