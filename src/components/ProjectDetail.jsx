import { useParams } from 'react-router-dom';
import { projects } from '../data.js';
import { Container, Row, Col, Carousel, Image, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ProjectDetail = () => {
  const { projectID } = useParams();

  const project = projects.filter(
    (project) => project.id === parseInt(projectID)
  )[0];

  console.log(Object.entries(project.tech.stack));

  return (
    <section className='project-detail m-5'>
      <Container>
        <Row className='mb-3'>
          <Col lg={10}>
            <h1>{project.title}</h1>
            <span>{project.desc}</span>
          </Col>
          <Col lg={2} className='d-flex align-items-center '>
            <Button variant='light' size='lg'>
              <Link
                style={{ color: 'black' }}
                to={project.url}
                target='__blank'
              >
                Visit Project
              </Link>
            </Button>
          </Col>
        </Row>
        <Row className='mb-3'>
          <Col lg={8}>
            <Carousel data-bs-theme='dark'>
              {project.images.map((image) => {
                return (
                  <Carousel.Item key={project.images.indexOf(image)}>
                    <Image src={image} fluid thumbnail />
                  </Carousel.Item>
                );
              })}
            </Carousel>
          </Col>
          <Col lg={4}>
            <h2>Tech Stack</h2>
            <ul style={{ margin: 0, padding: 0 }}>
              {project.tech.cms ? (
                <li style={{ listStyle: 'none' }} className='mb-3'>
                  <span style={{ fontSize: '1.3em' }}>CMS: </span>
                  <span style={{ fontSize: '1.3em' }}>Wordpress</span>
                </li>
              ) : (
                Object.entries(project.tech.stack).map((item) => {
                  return (
                    <li
                      key={Object.entries(project.tech.stack).indexOf(item)}
                      style={{ listStyle: 'none' }}
                      className='mb-3'
                    >
                      <span style={{ fontSize: '1.3em' }}>
                        {item[0].charAt(0).toUpperCase() + item[0].slice(1)}:{' '}
                      </span>
                      <span style={{ fontSize: '1.3em' }}>{item[1]}</span>
                    </li>
                  );
                })
              )}
            </ul>
          </Col>
        </Row>
        <Row>
          <Col lg={12}>
            <h2>Project Details</h2>
            <p>{project.detail}</p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ProjectDetail;
