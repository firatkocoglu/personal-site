import { Link } from 'react-router-dom';
import { Row, Col, Image, Modal, Button } from 'react-bootstrap';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ProjectCard = ({ project }) => {
  const [showImage, setShowImage] = useState(false);
  const [modalImage, setModalImage] = useState('');

  const navigate = useNavigate();

  const showImageHandler = (e) => {
    setModalImage(e.target.src);
    setShowImage(true);
  };

  const hideImageHandler = () => {
    setShowImage(false);
  };

  return (
    <>
      <Row
        className='mb-5 align-items-center p-3 project'
        key={project.id}
        onClick={() => navigate(`/projects/${project.id}`)}
      >
        <Col xl={6} key={project.id}>
          <h3>{project.title}</h3>
          <p>{project.desc}</p>
          <Button variant='secondary' className='me-3'>
            <Link to={`/projects/${project.id}`} style={{ color: 'white' }}>
              See Details
            </Link>
          </Button>
          <Button variant='light'>
            <Link style={{ color: 'black' }} to={project.url} target='__blank'>
              Visit Project
            </Link>
          </Button>
        </Col>
        <Col xl={6} className='d-flex justify-content-end'>
          <Image
            src={project.cover_image}
            alt={project.title}
            className='project-image'
            fluid
            thumbnail
            style={{ width: '500px', height: '250px' }}
            onClick={showImageHandler}
          />
        </Col>
      </Row>
      <Modal show={showImage} onHide={hideImageHandler} size='xl' centered>
        <Modal.Header closeButton>
          <span style={{ color: 'black' }}>{project.title}</span>
        </Modal.Header>
        <Modal.Body>
          <Image
            src={modalImage}
            alt=''
            style={{ width: '100%', height: 'auto' }}
          />
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ProjectCard;
