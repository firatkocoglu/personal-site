import ProjectCard from './ProjectCard.jsx';
import { Container, Row, Col } from 'react-bootstrap';
import { projects } from '../data.js';

const Projects = () => {
  return (
    <section className='home-projects m-5'>
      <Container>
        <Row className='mb-3'>
          <Col>
            <h1>Projects</h1>
          </Col>
        </Row>

        {projects.map((project) => {
          return <ProjectCard key={project.id} project={project} />;
        })}
      </Container>
    </section>
  );
};
export default Projects;
